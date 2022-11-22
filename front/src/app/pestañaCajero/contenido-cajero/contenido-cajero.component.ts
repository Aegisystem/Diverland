import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
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

  getAfiliado(idAfiliado: String) {
    this.afiliadoService.getAfiliado(Number(idAfiliado)).subscribe((res:Afiliado)=>{
      this.afiliadoService.selectedAfiliado = res
      console.log(this.afiliadoService.selectedAfiliado)
    })
  }

  venderTicket()  {
    console.log("Acabas de vender un ticket")
  }
}
