import { Injectable } from '@angular/core';
import { Venta } from '../models/venta';
import {HttpClient} from '@angular/common/http'
import { Recaudo } from '../models/recaudo';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  URL_API = 'http://localhost:3001/api/ventas'

  selectedVenta: Venta = {
    _id: "",
    almuerzo: 0,
    descanso: 0,
    snack: 0,
    metodo: ""
  };

  recaudo: Recaudo = {
    tickets: "",
    almuerzos: "",
    snacks: "",
    descansos: "",
    recaudoTotal: ""
  }

  ventas: Venta[] = []

  constructor(private http: HttpClient) {}

  getVentas() {
    return this.http.get<Venta[]>(this.URL_API)
  }

  getRecaudo() {
    return this.http.get<Recaudo>(`${this.URL_API}/recaudo`)
  }

  getVenta(_id: Number) {
    return this.http.get<Venta>(`${this.URL_API}/${_id}`)
  }

  createVenta(venta: Venta)  {
    return this.http.post(this.URL_API, venta)
  }

  updateVenta(venta: Venta)  {
    return this.http.put(`${this.URL_API}/${venta._id}`, venta)
  }

  deleteVenta(_id: string)  {
    return this.http.delete(`${this.URL_API}/${_id}`)
  }
}
