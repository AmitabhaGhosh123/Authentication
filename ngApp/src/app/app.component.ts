import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngApp';
  constructor(public _authService:AuthService,private _router:Router) {}

  logOutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }
}
