import { Injectable } from '@angular/core';
import { IFilterService } from './filter-service.interface';

@Injectable()
export class FilterDefaultService implements IFilterService {

  filter: (element: string) => boolean = null;

  constructor() { }

  onFilterUpdated(f: (element: string) => boolean) {
    this.filter = f;
  }

}
