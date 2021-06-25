import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-query',
  templateUrl: './card-query.component.html',
  styleUrls: ['./card-query.component.scss']
})
export class CardQueryComponent implements OnInit {

  @Input() query: string;

  constructor() { }

  ngOnInit(): void {
  }

}
