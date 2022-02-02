import { Component, Input, OnInit } from '@angular/core';
import { Store } from 'src/app/models/store.model';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {

  @Input() store: Store;

  constructor() { }

  ngOnInit(): void {
  }

}
