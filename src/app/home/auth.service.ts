import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from 'firebase/auth';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: Observable<firebase.User> | any;
  authState: any = null;

  constructor(public afAuth: AngularFireAuth) {

    this.userData = afAuth.authState;
    this.afAuth.authState.subscribe(data => this.authState = data)
  }
  get authenticated(): boolean {
    return this.authState !== null;
  }
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : null;
  }

  SignUp(email: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password).then(res => {
      console.log('You are Successfully signed up!', res);
    })
      .catch(error => {
        console.log('Something is wrong:', error.message);
      });
  }

  SignIn(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password).then(res => {
      console.log('You are Successfully logged in!', res);
    })
      .catch(err => {
        console.log('Something is wrong:', err.message);
      });
  }
  LoginWithGmail() {
    this.afAuth.signInWithPopup(new firebase.GoogleAuthProvider());
  }
  Logout() {
    this.afAuth.signOut();
  }
}
