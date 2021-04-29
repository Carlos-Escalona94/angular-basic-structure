import { InjectionToken } from "@angular/core";

export const LISTA_SERVICE = new InjectionToken<IListagemService>('lista.service');

export interface IListagemService{

  listagem: string[];

  onAddElemento(element: string);

  onDeleteElemento(index: number);

  onEditarElemento(elemento: string, index: number);

  getListagem();

}
