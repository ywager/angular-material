import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output()
  sidenavToggle = new EventEmitter();

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onToggleSidenav(): void {
    this.sidenavToggle.emit();
  }

  logout(): void {
    this.router.navigate(['/login']);
  }
}
