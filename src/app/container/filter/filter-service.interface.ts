import { InjectionToken } from "@angular/core";

export const FILTER_SERVICE = new InjectionToken<IFilterService>('filter.service');

export interface IFilterService{
  onFilterUpdated(f: (element: string) => boolean);
}
