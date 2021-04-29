import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";

export const LISTA_SERVICE = new InjectionToken<IListagemService>('lista.service');

export interface IListagemService{

  listagem$: Observable<string[]>;

  onAddElemento(element: string);

  onDeleteElemento(index: number);

  onEditarElemento(elemento: string, index: number);

  getListagem(): Observable<string[]>;

}
