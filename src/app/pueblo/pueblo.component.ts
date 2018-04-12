import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pueblo',
  templateUrl: './pueblo.component.html',
  styleUrls: ['./pueblo.component.css']
})
export class PuebloComponent implements OnInit {

  @Input() ciudad: string;
  @Input('pais') nacionReal: string;

  @Output() PasameElPueblo = new EventEmitter();

  public nombre: string;

  constructor() {
      this.nombre = 'Pueblo de la Toscana';
   }

  ngOnInit() {
  }

  lanzar(event){
    this.PasameElPueblo.emit({nombre: this.nombre});
  }

}
