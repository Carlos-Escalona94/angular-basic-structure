import { InjectionToken } from "@angular/core";

export const FILTER_SERVICE = new InjectionToken<IFilterService>('filter.service');

export interface IFilterService{
  filter: (element : string) => boolean;
  onFilterUpdated(f: (element: string) => boolean);
}
