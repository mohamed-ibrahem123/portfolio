import { Component, HostListener, OnInit, OnDestroy, ChangeDetectionStrategy, signal, ChangeDetectorRef } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, NavigationEnd, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent implements OnInit, OnDestroy {
  isMenuOpen = signal(false);
  isScrolled = signal(false);
  isDarkMode = signal(true);

  constructor(private router: Router, private cdr: ChangeDetectorRef) {
    // Ensure menu closes on route change (robust fallback)
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => this.closeMenu());
  }

  ngOnDestroy() {
    // Safety reset
    document.body.style.overflow = '';
  }

  ngOnInit() {
    // Restore saved theme preference
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
      this.isDarkMode.set(false);
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      this.isDarkMode.set(true);
      document.documentElement.removeAttribute('data-theme');
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
    document.body.style.overflow = this.isMenuOpen() ? 'hidden' : '';
  }

  closeMenu() {
    this.isMenuOpen.set(false);
    document.body.style.overflow = '';
  }

  toggleTheme() {
    this.isDarkMode.update(v => !v);
    if (this.isDarkMode()) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }

  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/resume.pdf';
    link.download = 'My_Resume.pdf';
    link.click();
  }
}
