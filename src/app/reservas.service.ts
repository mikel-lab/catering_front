import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IReserva } from './modelos/reserva';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  constructor(private http:HttpClient) { }

  CrearReservas(oreserva:IReserva): Observable<any>{
    //Creamos sólo 1 registro, por lo que el tipo de parámetro no debe tener [] array por eso es oreserva y no reservas
    return this.http.post<IReserva[]>('http://localhost:5000/api/reservas', oreserva );
  }

  GetReservas(): Observable<IReserva[]>{
    return this.http.get<IReserva[]>('http://localhost:5000/api/reservas');
  }

  BorrarReservas(reservaId:number){
    return this.http.delete('http://localhost:5000/api/reservas/${reservaId}');
  }

  //ActualizarReservas(reservas:IReserva){
    //return this.http.patch('http://localhost:5000/api/reservas/${reservas.id}', stringify(reservas.Estado=));
  //}

  ActualizarReservas(oreserva:IReserva, reservas:IReserva): Observable<any>{

    return this.http.patch('http://localhost:5000/api/reservas/${reservas.id}', oreserva);

  }
}
