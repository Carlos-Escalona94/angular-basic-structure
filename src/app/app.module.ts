import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ListagemComponent } from './container/listagem/listagem.component';
import { FilterComponent } from './container/filter/filter.component';
import { ActionsComponent } from './container/actions/actions.component';
import { LISTA_SERVICE } from './container/listagem/listagem-service.interface';
import { FILTER_SERVICE } from './container/filter/filter-service.interface';
import { ACTIONS_SERVICE } from './container/actions/actions-service.interface';
import { ActionsDefaultService } from './container/actions/actions-default.service';
import { FilterDefaultService } from './container/filter/filter-default.service';
import { ContainerService } from './container/container.service';
import { ListagemFiltravelService } from './container/listagem/listagem-filtravel.service';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ListagemComponent,
    FilterComponent,
    ActionsComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: LISTA_SERVICE, useClass: ListagemFiltravelService},
    {provide: FILTER_SERVICE, useClass: FilterDefaultService},
    {provide: ACTIONS_SERVICE, useClass: ActionsDefaultService},
    ContainerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
