import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { IListagemService } from './listagem-service.interface';

@Injectable()
export class ListagemFiltravelService implements IListagemService {

  private _listagem = new BehaviorSubject<string[]>([]);
  public listagem$ = this._listagem.asObservable();
  public listagemSemFiltrar: string[] = [];

  constructor() {

  }

  onAddElemento(element: string){
    const listagem = [...this._listagem.value];
    listagem.push(element);
    this.listagemSemFiltrar.push(element);
    this._listagem.next(listagem);
  }

  onDeleteElemento(index: number){
    const listagem = [...this._listagem.value];
    listagem.splice(index, 1);
    this.listagemSemFiltrar.splice(index, 1);
    this._listagem.next(listagem);
  }

  onEditarElemento(elemento: string, index: number){
    const listagem = [...this._listagem.value];
    listagem[index] = elemento;
    this.listagemSemFiltrar[index] = elemento;
    this._listagem.next(listagem);
  }

  onFiltrar(f: (paramter: string) => boolean){
    this._listagem.next([...this.listagemSemFiltrar].filter(l => f(l)))
  }

  getLenght(){
    return this._listagem.value.length;
  }

  getListagem(){
    return of(['elemento 1', 'elemento 2', 'elemento 3']).pipe(
      take(1),
      tap(l => {
        this._listagem.next(l),
        this.listagemSemFiltrar = l;
      })
      );
  }
}

