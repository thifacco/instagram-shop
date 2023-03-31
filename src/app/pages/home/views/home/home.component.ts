import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { IHeader } from 'src/app/interfaces/header.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  stores$ = this.storeService.getAll();
  headerData: IHeader = { title: 'Loja' }

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {}

}
