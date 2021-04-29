import { InjectionToken } from "@angular/core";

export const ACTIONS_SERVICE = new InjectionToken<IActionsService>('actions.service');

export interface IActionsService{
  onAdd: () => void;
  onDelete: () => void;
}
