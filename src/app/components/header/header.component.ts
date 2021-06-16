import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from 'src/app/models/store.model';
import { ProductService } from 'src/app/services/product.service';
import { StoreService } from 'src/app/services/store.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('navbarContainer') navbarContainer: ElementRef;
  @ViewChild('searchContainer') searchContainer: ElementRef;
  @ViewChild('resultsContainer') resultsContainer: ElementRef;
  @ViewChild('searchInput') searchInput: ElementRef;
  @ViewChild('searchCancel') searchCancel: ElementRef;

  isStore: boolean = false;
  storeName: string;
  storeThumb: string;

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    if (typeof this.route.snapshot.params['id'] !== 'undefined') {
      this.storeService.get(this.route.snapshot.params['id']).subscribe(
        res => {
          this.storeName = res.id;
          this.storeThumb = environment.baseImages + '/' + res.thumb;
          this.isStore = true;
        }
      );
    }
  }

  searchClear() {
    this.searchInput.nativeElement.value = '';
    this.searchInput.nativeElement.focus();
  }

  searchActivate() {
    this.navbarContainer.nativeElement.style.display = 'none';
    this.resultsContainer.nativeElement.classList.add('show');
    this.searchCancel.nativeElement.classList.add('show');
  }

  searchDeactivate() {
    this.navbarContainer.nativeElement.style.display = 'block';
    this.resultsContainer.nativeElement.classList.remove('show');
    this.searchCancel.nativeElement.classList.remove('show');
  }

}
