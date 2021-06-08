import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('navbarContainer') navbarContainer: ElementRef;
  @ViewChild('searchContainer') searchContainer: ElementRef;
  @ViewChild('resultsContainer') resultsContainer: ElementRef;
  @ViewChild('sectionsContainer') sectionsContainer: ElementRef;
  @ViewChild('searchInput') searchInput: ElementRef;
  @ViewChild('searchCancel') searchCancel: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  searchClear() {
    this.searchInput.nativeElement.value = '';
    this.searchInput.nativeElement.focus();
  }

  searchActivate() {
    this.navbarContainer.nativeElement.style.display = 'none';
    this.sectionsContainer.nativeElement.style.display = 'none';
    this.resultsContainer.nativeElement.classList.add('show');
    this.searchCancel.nativeElement.classList.add('show');
  }

  searchDeactivate() {
    this.navbarContainer.nativeElement.style.display = 'block';
    this.sectionsContainer.nativeElement.style.display = 'block';
    this.resultsContainer.nativeElement.classList.remove('show');
    this.searchCancel.nativeElement.classList.remove('show');
  }

}
