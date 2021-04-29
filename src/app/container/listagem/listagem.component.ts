import { Component, Inject, OnInit } from '@angular/core';
import { IListagemService, LISTA_SERVICE } from './listagem-service.interface';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  public listagem = this.service.listagem$;

  constructor(@Inject(LISTA_SERVICE) private service: IListagemService) { }

  ngOnInit(): void {
    this.service.getListagem().subscribe();
  }

  onDelete(index: number){
    this.service.onDeleteElemento(index);
  }

}
