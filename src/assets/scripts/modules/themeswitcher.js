const THEME_STORAGE_KEY = 'theme';

class ThemeSwitcher {
  constructor() {
    this.hasLocalStorage = typeof Storage !== 'undefined';

    const systemPreference = this.getSystemPreference();
    const storedPreference = this.getStoredPreference();

    if (storedPreference) {
      this.setTheme(storedPreference);
    } else if (systemPreference) {
      this.setTheme(systemPreference);
    }

    this.switcherToDark = document.querySelector('.js-themeswitcher');
    this.switcherToDark.addEventListener('click', () => {
      if (document.documentElement.getAttribute('data-theme') == 'dark') {
        this.setTheme('light');
      } else {
        this.setTheme('dark');
      }
    });
  }

  getSystemPreference() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return false;
  }

  getStoredPreference() {
    if (this.hasLocalStorage) {
      return localStorage.getItem(THEME_STORAGE_KEY);
    }
    return false;
  }

  setTheme(name) {
    document.documentElement.setAttribute('data-theme', name);
    if (this.hasLocalStorage) {
      localStorage.setItem(THEME_STORAGE_KEY, name);
    }
  }
}

if (window.CSS && CSS.supports('color', 'var(--fake-var)')) {
  new ThemeSwitcher();
}
