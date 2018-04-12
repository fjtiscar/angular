import { Component, OnInit } from '@angular/core';
//import {Todo} from '../shared/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  texto: string;

  selectedTodo: string;

  pais: string;
  ciudad: string;
  puebloRecibido: string;
  datos: string[];

  ngOnInit(): void {
    this.texto = 'Esto es un texto de ejemplo';
    this.selectedTodo = 'ejemplo de texto2';
    this.pais = 'España';
    this.ciudad = 'Sevilla';
    this.datos = [
      'Sevilla',
      'Cordoba',
      'Malaga'
    ]
  }

  showPueblo(pueblo){
    alert(pueblo.nombre);
    this.puebloRecibido = pueblo.nombre;
  }
}



