import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from 'firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState:any = null;

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(data =>this.authState = data);
   }

   get authenticated():boolean{
     return this.authState ! == null;
   }
   get currentUserId():string{
     return this.authenticated ? this.authState.uid: null;
   }
   
  Login() {
    this.afAuth.signInWithPopup(new firebase.GoogleAuthProvider());
    console.log(this.afAuth.idToken);
  }
  Logout() {
    this.afAuth.signOut();
  }
}
