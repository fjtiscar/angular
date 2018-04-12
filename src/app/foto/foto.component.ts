import { Component, OnInit } from '@angular/core';
import {FotoService} from './foto.service';
import {Photo} from '../shared/Photo';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {

  lista: Photo[];
  numAlbum: number;


  constructor(private photoService: FotoService) { }

  ngOnInit() {
    this.photoService.getPhotos().subscribe(resp => {
        console.log(resp);
        this.lista = resp;
    });
  }

  buscarFotos(){
    this.photoService.getPhotosAlbum(this.numAlbum).subscribe(resp => {
      this.lista = resp;
    })
  }

}
