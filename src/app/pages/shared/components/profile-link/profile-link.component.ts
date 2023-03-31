import { Component, Input, OnInit } from '@angular/core';
import { Store } from 'src/app/models/store.model';

@Component({
  selector: 'app-profile-link',
  templateUrl: './profile-link.component.html',
  styleUrls: ['./profile-link.component.scss']
})
export class ProfileLinkComponent implements OnInit {

  @Input() store: Store;
  @Input() replaceTitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
