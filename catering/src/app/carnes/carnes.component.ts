import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenusService } from '../menus.service';

@Component({
  selector: 'app-carnes',
  templateUrl: './carnes.component.html',
  styleUrls: ['./carnes.component.css']
})
export class CarnesComponent implements OnInit {

    menus: any [];
  constructor(private _menusService: MenusService ) { 
   
  }

  ngOnInit(): void {
    
  }

 getMenus(){
   this._menusService.getMenusCarne()
   .subscribe(data => this.menus = data);
 }

  

}
