import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CarnesComponent } from './carnes/carnes.component';
import { PescadosComponent } from './pescados/pescados.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ReservasComponent } from './reservas/reservas.component';


const routes: Routes = [

  {
    //Enlace de inicio por defecto
    path:'',component: InicioComponent},

   { path:'carnes', component: CarnesComponent},
   { path:'pescados', component: PescadosComponent},
   { path:'contacto', component: ContactoComponent},
   { path:'reservas', component: ReservasComponent},
   { path:'inicio', component: InicioComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
