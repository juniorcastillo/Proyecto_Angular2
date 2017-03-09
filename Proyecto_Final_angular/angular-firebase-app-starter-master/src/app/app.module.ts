import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { firebaseConfig } from '../environments/firebase.config';
import { AngularFireModule } from 'angularfire2/index';
import { MaestrosService } from './shared/model/maestros.service';
import { HomeComponent } from './home/home.component';
import { MaestrosListComponent } from './maestros-list/maestros-list.component';
import {RouterModule} from "@angular/router";
import {routerConfig} from "./router.config";
import { TopMenuComponent } from './top-menu/top-menu.component';
import { DetallesComponent } from './detalles/detalles.component';
import { DetallesService } from './shared/model/detalles.service';
import { DetalleMaestroComponent } from './detalle-maestro/detalle-maestro.component';
import {ReactiveFormsModule} from "@angular/forms";
import { NuevoDetalleComponent } from './nuevo-detalle/nuevo-detalle.component';
import { FormularioNuevoComponent } from './formulario-nuevo/formulario-nuevo.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MaestrosListComponent,
    TopMenuComponent,
    DetallesComponent,
    DetalleMaestroComponent,
    NuevoDetalleComponent,
    FormularioNuevoComponent

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routerConfig),
    ReactiveFormsModule
  ],
  providers: [MaestrosService,DetallesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
