import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {VentaService} from '../../services/venta.service';
import {AfiliadoService} from '../../services/afiliado.service';
import { FormsModule } from '@angular/forms';
import { Venta } from '../../models/venta';
import { Afiliado } from '../../models/afiliado';

@Component({
  selector: 'app-contenido-administrador',
  templateUrl: './contenido-administrador.component.html',
  styleUrls: ['./contenido-administrador.component.css']
})
export class ContenidoAdministradorComponent implements OnInit {

  constructor(public ventaService: VentaService, public afiliadoService: AfiliadoService) { }

  ngOnInit(): void {
  }

  addAfiliado(form: NgForm) {

      this.afiliadoService.createAfiliado(form.value).subscribe(
        res => {
            form.reset()
        },
        err => {
          alert(`El afiliado ya existe`)
        }
      )
  }
}
