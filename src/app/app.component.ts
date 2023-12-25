import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  constructor(
    private themeService: ThemeService
  ) {}

  get isDarkMode(): boolean {
    return this.themeService.isDark;
  }
}
