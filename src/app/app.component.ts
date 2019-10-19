import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flowace-client';
  showMenu: boolean= false;
  constructor(router: Router) {
    router.events.subscribe(event => {
      if (router.url === 'login') {
        this.showMenu = true;
      }
    })
  }
}
