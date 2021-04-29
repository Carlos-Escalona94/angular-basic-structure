import { Component, Inject, OnInit } from '@angular/core';
import { IListagemService, LISTA_SERVICE } from './listagem-service.interface';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  constructor(@Inject(LISTA_SERVICE) private service: IListagemService) { }

  ngOnInit(): void {
  }

}
