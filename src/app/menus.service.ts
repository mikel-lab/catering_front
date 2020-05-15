import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor(private http:HttpClient) { }

  getMenusCarne(){
    return this.http.get('http://localhost:5000/api/menus');
  }
}
