import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { CarnesComponent } from './carnes/carnes.component';
import { PescadosComponent } from './pescados/pescados.component';
import { ReservasComponent } from './reservas/reservas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MenusService } from './menus.service';
import { IngredientesService } from './ingredientes.service';
import { TiposMenusService } from './tipos-menus.service';
import { ReservasService } from './reservas.service';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CarnesComponent,
    PescadosComponent,
    ReservasComponent,
    ContactoComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MenusService,
    IngredientesService,
    TiposMenusService,
    ReservasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
