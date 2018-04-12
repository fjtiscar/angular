import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotoComponent } from './foto.component';
import { FotoService } from './foto.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [FotoComponent],
  
  providers: [FotoService, HttpClientModule],
  exports: [
    FotoComponent,
    CommonModule
  ]
})
export class FotoModule { }
