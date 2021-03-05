import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  @Output() sendFormEvent = new EventEmitter;
  authForm: FormGroup 

  constructor(private _fb: FormBuilder, private authService: AuthService) {
    this.authForm = this.authForm = this._fb.group({
      displayName: '',
      email: '',
      password: ''
    })
   }
  ngOnInit(): void {
  this.createAuthForm();
  }
  
  createAuthForm(): void {
    this.authForm = this._fb.group({
      displayName: '',
      email: '',
      password: ''
    })
  }

  // onSubmit(): void {
  //     if(this.authForm){
  //       const formData = {
  //       email: this.authForm.get('email').value,
  //       password: this.authForm.get('password').value,
  //       displayName: this.authForm.get('displayName').value
  //       }
  //     }
  //   this.sendFormEvent.emit(formData);
  // } 
  
  handleGoogleLogin():void {
    this.authService.loginWithGoogle();
  }
}
