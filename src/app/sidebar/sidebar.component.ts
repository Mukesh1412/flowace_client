import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public samplePagesCollapsed = true;
  username: string;
  role: string;
  login: string;
  constructor() { }

  ngOnInit() {
    this.username = sessionStorage.getItem('user_name');
    this.role = sessionStorage.getItem('role');
    this.login = sessionStorage.getItem('login');
  }

}
