import { Component, OnInit } from '@angular/core';
import { MenusService } from '../menus.service';
import { IMenu } from '../modelos/menu';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  menus: IMenu[];


  constructor(private _menusService: MenusService) { }

  ngOnInit(): void {
    this._menusService.GetMenus()
      .subscribe(data => {
        console.log(data);
        this.menus = data;
      });
  }

}
