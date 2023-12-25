import { Component, EventEmitter, Output } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Output() onChangePage = new EventEmitter<string>();

  currentPage = 'home';

  constructor(
    private themeService: ThemeService
  ) {}

  toggleThemeMode() {
    this.themeService.toggle();
  }

  changePage(page: string) {
    this.currentPage = page;
    this.onChangePage.emit(page);
  }
}
