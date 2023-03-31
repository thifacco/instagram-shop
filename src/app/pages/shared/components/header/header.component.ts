import { Component, OnInit, Input } from '@angular/core';
import { iHeader } from 'src/app/interfaces/header.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() headerData: iHeader;

  constructor() { }

  ngOnInit() { }
}
