import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMenu } from './modelos/menu';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor(private http:HttpClient) { }
  

  GetMenus(): Observable<IMenu[]>{
    return this.http.get<IMenu[]>('http://localhost:5000/api/menus');
  }

  getMenusCarne(): Observable<IMenu[]>{
    return this.http.get<IMenu[]>('http://localhost:5000/api/menus/tipos_menus/1');
  }


  GetMenusPescado(): Observable<IMenu[]>{
    return this.http.get<IMenu[]>('http://localhost:5000/api/menus/tipos_menus/2');
  }


}
