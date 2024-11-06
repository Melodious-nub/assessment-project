import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-app-admin',
  templateUrl: './app-admin.component.html',
  styleUrl: './app-admin.component.css'
})
export class AppAdminComponent {
  @ViewChild('sidebar') sidebar!: ElementRef;
  @ViewChild('togglerBtn') togglerBtn!: ElementRef;

  ngAfterViewInit() {
    this.togglerBtn.nativeElement.addEventListener('click', this.toggleSidebar.bind(this));
  }

  toggleSidebar() {
    this.sidebar.nativeElement.classList.toggle('collapsed');
  }
}
