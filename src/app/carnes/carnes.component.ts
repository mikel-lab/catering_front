import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenusService } from '../menus.service';
import { IMenu } from '../modelos/menu';

@Component({
  selector: 'app-carnes',
  templateUrl: './carnes.component.html',
  styleUrls: ['./carnes.component.css']
})
export class CarnesComponent implements OnInit {

    carnes: IMenu [];
  constructor(private _menusService: MenusService ) { 
   
  }

  
  ngOnInit(): void {
    this._menusService.getMenusCarne()
   .subscribe(data => this.carnes = data);
   //console.log(this.carnes);
  }

  

 //getMenusCarne(){
   //this._menusService.getMenusCarne()
   //.subscribe(data => this.carnes = data);
 //}

  

}
