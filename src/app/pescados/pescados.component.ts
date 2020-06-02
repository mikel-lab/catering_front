import { Component, OnInit } from '@angular/core';
import { MenusService } from '../menus.service';
import { IMenu } from '../modelos/menu';

@Component({
  selector: 'app-pescados',
  templateUrl: './pescados.component.html',
  styleUrls: ['./pescados.component.css']
})
export class PescadosComponent implements OnInit {

  pescados: IMenu[];
  constructor(private _menusService: MenusService) {

  }


  ngOnInit(): void {
    this._menusService.GetMenusPescado()
      .subscribe(data => {
        console.log(data);
        this.pescados = data;
      });
    
  }

}
