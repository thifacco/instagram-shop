import { Component, Input, OnInit } from '@angular/core';
import { IEmpty } from 'src/app/interfaces/empty.interface';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss']
})
export class EmptyComponent implements OnInit {

  @Input() emptyData: IEmpty;

  constructor() { }

  ngOnInit(): void {
  }

}
