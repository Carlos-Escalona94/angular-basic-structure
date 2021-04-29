import { Component, Inject, OnInit } from '@angular/core';
import { ACTIONS_SERVICE, IActionsService } from './actions-service.interface';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  constructor(@Inject(ACTIONS_SERVICE) private service: IActionsService) { }

  ngOnInit(): void {
  }

}
