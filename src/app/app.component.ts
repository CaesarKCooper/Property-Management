import { Component } from '@angular/core';
import { OutletContext, RouterOutlet } from '@angular/router';
import { AuthService } from './auth.service';
import { fader } from './route-animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ // <-- add your animations here
    fader,
    
  ]
})

export class AppComponent {
  title = 'property-management-app-frontend';

  constructor(private authService: AuthService){
    authService.handleAuthentication();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  onActivate(event: any) {
    window.scroll(0,0);
    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)
}

  }


