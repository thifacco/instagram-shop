import { Component, Input, OnInit } from '@angular/core';
import { Search } from 'src/app/models/search.model';

@Component({
  selector: 'app-card-query',
  templateUrl: './card-query.component.html',
  styleUrls: ['./card-query.component.scss']
})
export class CardQueryComponent implements OnInit {

  @Input() query: Search;

  constructor() { }

  ngOnInit(): void {
  }

}
