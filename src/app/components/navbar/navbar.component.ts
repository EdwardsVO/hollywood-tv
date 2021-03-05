import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import firebase from 'firebase';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user: firebase.User = null;

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
    this._authService.getCurrentUser().subscribe(
      user => {
        this.user = user;
    }
    )}

  logOut():void {
    this._authService.logOut().then(()=>{
      this._router.navigate(['']);
    });
  }

}

