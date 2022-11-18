import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contenido-cajero',
  templateUrl: './contenido-cajero.component.html',
  styleUrls: ['./contenido-cajero.component.css']
})
export class ContenidoCajeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getAfiliado_ID(id: string) {
    console.log(id)
  }

}
