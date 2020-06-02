import { Component, OnInit } from '@angular/core';
import { IMenu } from '../modelos/menu';
import { MenusService } from '../menus.service';
import { IReserva } from '../modelos/reserva';
import { ReservasService } from '../reservas.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  menus: IMenu[];
  reservas: IReserva[];

  //Para cuando necesitamos actuar sobre 1 sóla reserva
  oreserva: IReserva;
 
  constructor(private _menusService: MenusService, private _reservasService: ReservasService) {

  }


  ngOnInit(): void {
    this._menusService.GetMenus()
      .subscribe(data => {
        console.log(data);
        this.menus = data;
      });
    
      this._reservasService.GetReservas()
      .subscribe(data => {
        console.log(data);
        this.reservas = data;
      });
  }

  onSubmit(){
   // this._reservasService.CrearReservas(this.oreserva).subscribe(Response:this.oreserva);
  }

  BorrarReservas(reservas:IReserva){

    this._reservasService.BorrarReservas(reservas.Id);
  }

  ActualizarReservas(oreserva: IReserva,reservas:IReserva){

    //Creamos objeto reserva para poder cambiar propiedades
    oreserva= new IReserva();
    oreserva.Estado== 'espera'? 'enviado': 'espera';

    this._reservasService.ActualizarReservas(oreserva,reservas);

  }
   

}
