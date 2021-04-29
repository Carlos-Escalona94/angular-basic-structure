import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FILTER_SERVICE, IFilterService } from './filter-service.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @ViewChild('teste') nameInput: ElementRef;

  constructor(@Inject(FILTER_SERVICE)private service: IFilterService) { }

  ngOnInit(): void {
  }

  onFiltrar(){
    const value = this.nameInput.nativeElement.value;
    this.service.onFilterUpdated((param) => param === value);
  }

  onLimparFiltro(){
    this.service.onFilterUpdated((param) => true);
  }

}
