import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AfiliadoService} from '../../services/afiliado.service';
import { FormsModule } from '@angular/forms';
import { Afiliado } from '../../models/afiliado';
import { VentaService } from 'src/app/services/venta.service';

@Component({
  selector: 'app-contenido-cajero',
  templateUrl: './contenido-cajero.component.html',
  styleUrls: ['./contenido-cajero.component.css']
})
export class ContenidoCajeroComponent implements OnInit {

  constructor(public afiliadoService: AfiliadoService, public ventaService: VentaService) { }

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

  getAfiliado(idAfiliado: String) {
    this.afiliadoService.getAfiliado(Number(idAfiliado)).subscribe((res:Afiliado)=>{
      this.afiliadoService.selectedAfiliado = res
      window.alert(JSON.stringify(this.afiliadoService.selectedAfiliado))
    })
  }

  venderTicket(ticketForm: NgForm)  {
    console.log(ticketForm.value)
    this.ventaService.createVenta(ticketForm.value).subscribe(
      res => {
          ticketForm.reset()
          window.alert('Venta realizada exitosamente')
      },
      err => {
        ticketForm.reset
        alert(`Algo pusiste mal y explotó`)
      }
    )
  }
}
