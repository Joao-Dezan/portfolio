import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  themeKey: string = "theme";

  constructor() { }


  setDark() {
    localStorage.setItem(this.themeKey, 'dark');
  }

  setLight() {
    localStorage.setItem(this.themeKey, 'light');
  }

  get isDark(): boolean {
    const strTheme = localStorage.getItem(this.themeKey);
    return strTheme == 'dark';
  }

  toggle() {
    this.isDark ? this.setLight() : this.setDark();
  }
}
