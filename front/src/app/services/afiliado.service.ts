import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Afiliado } from '../models/afiliado';

@Injectable({
  providedIn: 'root'
})
export class AfiliadoService {

  URL_API = 'http://localhost:3001/api/afiliados'

  selectedAfiliado: Afiliado = {
    _id: "",
    id_afiliado: 0,
    cedula: 0,
    apellidos: "",
    nombres: "",
    categoria: ""
  };
  afiliados: Afiliado[] = []

  constructor(private http: HttpClient) {}

  getAfiliados() {
    return this.http.get<Afiliado[]>(this.URL_API)
  }

  getAfiliado(idAfiliado: Number) {
    return this.http.get<Afiliado>(`${this.URL_API}/${idAfiliado}`)
  }

  createAfiliado(afiliado: Afiliado)  {
    return this.http.post(this.URL_API, afiliado)
  }

  updateAfiliado(afiliado: Afiliado)  {
    return this.http.put(`${this.URL_API}/${afiliado._id}`, afiliado)
  }

  deleteAfiliado(_id: string)  {
    return this.http.delete(`${this.URL_API}/${_id}`)
  }
}
