import { Injectable } from '@angular/core';
import { IFilterService } from './filter-service.interface';

@Injectable()
export class FilterDefaultService implements IFilterService {

  constructor() { }

  onFilterUpdated: (f: (element: string) => boolean) => void = (param) => {console.log("soy yo")}

}
