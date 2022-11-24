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
            window.alert('El afiliado se ha creado exitosamente')
        },
        err => {
          alert(`El afiliado ya existe`)
        }
      )
  }

  mostrarRecaudo()  {
    this.ventaService.getRecaudo().subscribe((res)=>{
      this.ventaService.recaudo = res
      let message = "El Parque de Diversiones DiverLand Informa\n\n"
      message += this.ventaService.recaudo.tickets + "\n"
      message += this.ventaService.recaudo.almuerzos + "\n"
      message += this.ventaService.recaudo.snacks + "\n"
      message += this.ventaService.recaudo.descansos + "\n"
      message += this.ventaService.recaudo.recaudoTotal + "\n"
      alert(message)
    })
  }
}
