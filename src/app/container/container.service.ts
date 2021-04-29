import { Inject, Injectable } from '@angular/core';
import { ACTIONS_SERVICE, IActionsService } from './actions/actions-service.interface';
import { IFilterService } from './filter/filter-service.interface';
import { ListagemFiltravelService } from './listagem/listagem-filtravel.service';
import { LISTA_SERVICE } from './listagem/listagem-service.interface';

@Injectable()
export class ContainerService {

  constructor(@Inject(LISTA_SERVICE)private listaService: ListagemFiltravelService, @Inject(ACTIONS_SERVICE)private actionsService: IActionsService, @Inject(ACTIONS_SERVICE)private filterService: IFilterService) {
    this.actionsService.onAdd = () => {this.listaService.onAddElemento('teste')};
    this.actionsService.onDelete = () => {this.listaService.onDeleteElemento(this.listaService.listagem.length - 1)};
  }


}
