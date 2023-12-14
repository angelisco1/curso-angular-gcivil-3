import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.css']
})
export class InfoUsuarioComponent {
  id: string = ''

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // this.id = this.route.snapshot.paramMap.get('id')!

    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id')
      if (id) {
        this.id = id
      }
    })
  }

}
