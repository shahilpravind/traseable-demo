import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';

const THEME_KEY = "selected-app-theme";

@Injectable({
  providedIn: 'root'
})

export class ThemeService {
  darkMode = true;

  constructor(private plt: Platform, private storage: Storage) {
    this.plt.ready().then(() => {
      this.storage.get(THEME_KEY).then(theme => {
        this.setAppTheme(theme);
      });
      
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
      prefersDark.addListener(e => {
        this.setAppTheme(e.matches);
      });
    });
  }

  toggleAppTheme() {
    this.darkMode = !this.darkMode;
    this.setAppTheme(this.darkMode);
  }

  setAppTheme(dark) {
    this.darkMode = dark;

    if (this.darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    this.storage.set(THEME_KEY, this.darkMode);
  }
}
