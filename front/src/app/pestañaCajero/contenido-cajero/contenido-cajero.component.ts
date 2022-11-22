import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AfiliadoService} from '../../services/afiliado.service';
import { FormsModule } from '@angular/forms';
import { Afiliado } from '../../models/afiliado';

@Component({
  selector: 'app-contenido-cajero',
  templateUrl: './contenido-cajero.component.html',
  styleUrls: ['./contenido-cajero.component.css']
})
export class ContenidoCajeroComponent implements OnInit {

  constructor(public afiliadoService: AfiliadoService) { }

  ngOnInit(): void {
    this.getAfiliados
  }

  getAfiliados() {
    this.afiliadoService.getAfiliados().subscribe(
      res => {
        this.afiliadoService.afiliados = res
      },
      err => console.log(err) 
    );
  }

  /*getAfiliado_ID(id: string) {
    var idNum = parseInt(id)
    this.afiliadoService.getAfiliado(idNum).subscribe(
            res => {
              this.afiliadoService.selectedAfiliado = res
            },
            err => console.log(err)
            );
  }
*/
}
