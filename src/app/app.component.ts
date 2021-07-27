import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from './services/localstorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Instagram Shop';
  public cssClasses: string;

  constructor(private localstorageService: LocalstorageService) { }

  async ngOnInit() {
    await this.getConfigBackground();
  }

  getConfigBackground(): void {
    const classes: string[] = ['container'];
    const bgStyle: string[] = this.localstorageService.get('configBgColor');

    if (bgStyle.length > 0) {
      classes.push(bgStyle[0]);
    }
    else {
      classes.push('bg-light');
    }

    this.cssClasses = classes.join(' ');
  }
}
