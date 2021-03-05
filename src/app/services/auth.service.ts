import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _afAuth: AngularFireAuth) { }

  async loginWithGoogle(): Promise<firebase.User | null> {
    try{  
      const provider = new firebase.auth.GoogleAuthProvider();
      const response = await this._afAuth.signInWithPopup(provider);

      if(response.user){
        localStorage.setItem('user', response.user.uid) 
        return response.user;
      }
      else{
        return null;
      }
    }
    catch(err){
      localStorage.removeItem('user')
      return null;
    }
  }

  async logOut(): Promise<void> {
    try{
      await this._afAuth.signOut();
      localStorage.removeItem('user');
    } catch(err){

    }
  }

}