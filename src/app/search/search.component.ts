import { Component, OnInit, Input, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  buscar: string;
  @Input() data: string[];

  constructor() { }

  ngOnInit() {
  }


  busqueda(event): boolean {
    let buscar = this.buscar;
    var found = this.data.find(function(element){
      return element === buscar;
    });
    console.log(found);
    return true;
  }

}
