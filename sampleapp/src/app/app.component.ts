import { Component } from '@angular/core';

@Component({
  selector: 'my-root',
  template: `
    <h1>{{title}}</h1>
    <pre>Note: This sample app has been with Angular 6 but it could have been done with anything.
    Even with non-web technologies as we will not use the DOM to run or evaluate tests.
    Pinocchio will test and evaluate expectations using computer vision and AI understanding
      the screen as real human users would do.   
    </pre> 
    <div class="header-bar"></div>
    <nav>
      <a id="menu_link_dashboard" routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a id="menu_link_heroes" routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sample Web Application to Test Pinocchio';
}
