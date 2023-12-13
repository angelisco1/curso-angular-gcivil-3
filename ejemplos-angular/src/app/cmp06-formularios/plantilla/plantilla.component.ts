import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent {
  datos = {
    username: 'aaa',
    email: 'bbb',
    password: 'ccc'
  }

  patternEmail = '[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+'


  registro(form: NgForm) {
    console.log(form)
  }

  // ngOnInit, ngOnChanges, ngOnDestroy, ngAfterViewInit

}
