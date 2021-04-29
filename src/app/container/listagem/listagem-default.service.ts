import { Injectable } from '@angular/core';
import { IListagemService } from './listagem-service.interface';

@Injectable()
export class ListagemDefaultService implements IListagemService {

  public listagem: string[] = [];

  constructor() {
    this.listagem = this.getListagem();
  }

  onAddElemento(element: string){
    this.listagem.push(element);
  }

  onDeleteElemento(index: number){
    this.listagem.splice(index, 1);
  }

  onEditarElemento(elemento: string, index: number){
    this.listagem[index] = elemento;
  }

  getListagem(){
    return ['item 1', 'item 2', 'item 3']
  }
}
