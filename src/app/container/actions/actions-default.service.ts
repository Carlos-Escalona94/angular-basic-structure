import { Injectable } from '@angular/core';
import { IActionsService } from './actions-service.interface';

@Injectable()
export class ActionsDefaultService implements IActionsService {

  constructor() { }

  onAdd = () => {};
  onDelete = () => {};
}
