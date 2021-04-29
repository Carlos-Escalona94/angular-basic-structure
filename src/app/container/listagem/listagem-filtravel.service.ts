import { Injectable } from '@angular/core';
import { IListagemService } from './listagem-service.interface';

@Injectable()
export class ListagemFiltravelService implements IListagemService {

  public listagem: string[] = [];
  public listagemSemFiltrar: string[] = [];

  constructor() {
    this.listagem = this.getListagem();
    this.listagemSemFiltrar = this.listagem;
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

  onFiltrar(f: (paramter: string) => boolean){
    this.listagem = this.listagemSemFiltrar.filter(l => f(l));
  }

  getListagem(){
    return ['item 1', 'item 2', 'item 3']
  }
}
