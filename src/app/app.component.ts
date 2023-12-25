import { Component, ElementRef, ViewChild } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('home') home!: ElementRef;
  @ViewChild('about') about!: ElementRef;
  title = 'portfolio';

  constructor(
    private themeService: ThemeService
  ) {}

  get isDarkMode(): boolean {
    return this.themeService.isDark;
  }

  onChangePage(page: string) {
    let element: any = document.getElementById(page)
    var headerOffset = 64;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
      
  }
}
