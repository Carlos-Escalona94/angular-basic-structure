import { Component, Inject, OnInit } from '@angular/core';
import { ContainerService } from './container.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  providers: []
})
export class ContainerComponent implements OnInit {

  constructor(private service: ContainerService) { }

  ngOnInit(): void {
  }

}
