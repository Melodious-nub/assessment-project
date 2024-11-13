import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import ApexCharts from 'apexcharts';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-app-admin',
  templateUrl: './app-admin.component.html',
  styleUrl: './app-admin.component.css'
})
export class AppAdminComponent {
  constructor(private el: ElementRef, private renderer: Renderer2, private auth: AuthService) {}

  ngAfterViewInit() {
    // SIDEBAR DROPDOWN
    const allDropdown = this.el.nativeElement.querySelectorAll('#sidebar .side-dropdown');
    const sidebar = this.el.nativeElement.querySelector('#sidebar');

    allDropdown.forEach((item: HTMLElement) => {
      const a = item.parentElement?.querySelector('a:first-child') as HTMLElement;
      if (a) {
        this.renderer.listen(a, 'click', (e: Event) => {
          e.preventDefault();
          if (!a.classList.contains('active')) {
            allDropdown.forEach((i: HTMLElement) => {
              const aLink = i.parentElement?.querySelector('a:first-child') as HTMLElement;
              aLink.classList.remove('active');
              i.classList.remove('show');
            });
          }
          a.classList.toggle('active');
          item.classList.toggle('show');
        });
      }
    });

    // SIDEBAR COLLAPSE
    const toggleSidebar = this.el.nativeElement.querySelector('nav .toggle-sidebar');
    const allSideDivider = this.el.nativeElement.querySelectorAll('#sidebar .divider');
    
    const toggleSidebarCollapse = () => {
      sidebar.classList.toggle('hide');
      if (sidebar.classList.contains('hide')) {
        allSideDivider.forEach((item: HTMLElement) => item.textContent = '-');
        allDropdown.forEach((item: HTMLElement) => {
          const a = item.parentElement?.querySelector('a:first-child') as HTMLElement;
          a.classList.remove('active');
          item.classList.remove('show');
        });
      } else {
        allSideDivider.forEach((item: HTMLElement) => item.textContent = item.dataset['text'] || '');
      }
    };

    if (toggleSidebar) {
      this.renderer.listen(toggleSidebar, 'click', toggleSidebarCollapse);
    }

    this.renderer.listen(sidebar, 'mouseleave', () => {
      if (sidebar.classList.contains('hide')) {
        allDropdown.forEach((item: HTMLElement) => {
          const a = item.parentElement?.querySelector('a:first-child') as HTMLElement;
          a.classList.remove('active');
          item.classList.remove('show');
        });
        allSideDivider.forEach((item: HTMLElement) => item.textContent = '-');
      }
    });

    this.renderer.listen(sidebar, 'mouseenter', () => {
      if (sidebar.classList.contains('hide')) {
        allDropdown.forEach((item: HTMLElement) => {
          const a = item.parentElement?.querySelector('a:first-child') as HTMLElement;
          a.classList.remove('active');
          item.classList.remove('show');
        });
        allSideDivider.forEach((item: HTMLElement) => item.textContent = item.dataset['text'] || '');
      }
    });

    // PROFILE DROPDOWN
    const profile = this.el.nativeElement.querySelector('nav .profile');
    const imgProfile = profile?.querySelector('img') as HTMLElement;
    const dropdownProfile = profile?.querySelector('.profile-link') as HTMLElement;

    if (imgProfile) {
      this.renderer.listen(imgProfile, 'click', () => {
        dropdownProfile.classList.toggle('show');
      });
    }

    // MENU
    const allMenu = this.el.nativeElement.querySelectorAll('main .content-data .head .menu');
    allMenu.forEach((item: HTMLElement) => {
      const icon = item.querySelector('.icon') as HTMLElement;
      const menuLink = item.querySelector('.menu-link') as HTMLElement;
      if (icon) {
        this.renderer.listen(icon, 'click', () => {
          menuLink.classList.toggle('show');
        });
      }
    });

    // WINDOW CLICK TO CLOSE MENUS
    this.renderer.listen(window, 'click', (e: Event) => {
      if (e.target !== imgProfile && !dropdownProfile.contains(e.target as Node)) {
        dropdownProfile.classList.remove('show');
      }
      allMenu.forEach((item: HTMLElement) => {
        const icon = item.querySelector('.icon') as HTMLElement;
        const menuLink = item.querySelector('.menu-link') as HTMLElement;
        if (e.target !== icon && !menuLink.contains(e.target as Node)) {
          menuLink.classList.remove('show');
        }
      });
    });

    // PROGRESS BAR
    const allProgress = this.el.nativeElement.querySelectorAll('main .card .progress');
    allProgress.forEach((item: HTMLElement) => {
      item.style.setProperty('--value', item.dataset['value'] || '0');
    });

    // Check screen size and collapse the sidebar if on a smaller screen
    if (window.innerWidth <= 992) {
      toggleSidebarCollapse();
    }

    // Listen for window resize to adjust the sidebar state
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 992 && !sidebar.classList.contains('hide')) {
          toggleSidebarCollapse();
      } else if (window.innerWidth > 992 && sidebar.classList.contains('hide')) {
          toggleSidebarCollapse();
      }
    });
  }

  logOut() {
    this.auth.logout();
  } 
}
