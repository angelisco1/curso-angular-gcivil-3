import { Component } from '@angular/core';
import { Observable, Subscriber, Subscription, filter, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent {
  subscriptions: Subscription = new Subscription()


  ngOnInit() {
    const miObservable = new Observable((subscriber: Subscriber<string>) => {
      setTimeout(() => {
        subscriber.next('Primer mensaje')
      }, 1500)
      setTimeout(() => {
        subscriber.next('Segundo mensaje')
      }, 2500)

      setTimeout(() => {
        subscriber.complete()
        // subscriber.error('Ha ocurrido un error al mandar el siguiente mensaje')
      }, 4000)

      setTimeout(() => {
        subscriber.next('Tercer mensaje')
      }, 5000)
    })

    const subscription = miObservable.subscribe({
      next: (msg) => {
        console.log(msg)
      },
      error: (err) => {
        console.error(err)
      },
      complete: () => {
        console.log('FIN')
      }
    })

    const otraSubscription = interval(1000)
      .pipe(
        filter((num) => num % 2 === 0),
        map((num) => num + 1),
        take(5),
      )
      .subscribe((num) => {
        console.log(num)
      })

    this.subscriptions.add(subscription)
    this.subscriptions.add(otraSubscription)

  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe()
  }

}
