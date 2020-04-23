import { Injectable, NgZone } from '@angular/core';
import { User } from '../models/user';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: User;

  constructor(
    public angularFstore: AngularFirestore,
    public angularFAuth: AngularFireAuth,
    public ngZone: NgZone,
    public router: Router,
  ) {
    /* Setting user in localStorage when logged in and setting it null when logging out */
    this.angularFAuth.authState.subscribe(user => {
      if ( user ) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
   }

   GithubAuth() {
    const provider = new auth.GithubAuthProvider();
    provider.addScope('repo:status');
    provider.setCustomParameters({
      allow_signup: 'false'
    });
    return this.AuthLogin( provider );
   }

   AuthLogin( provider ) {
     return this.angularFAuth.signInWithPopup( provider )
     .then(( result ) => {
       this.ngZone.run(() => {
         this.router.navigate(['']);
       });
       this.SetUserData(result.user);
     }).catch( ( error ) => {
       window.alert(error);
     });
   }

   SetUserData(user: User) {
     const userRef: AngularFirestoreDocument<any> = this.angularFstore.doc(`users/${ user.uid }`);
     const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
     };
     return userRef.set( userData, {
       merge: true
     });
   }

   SignOut() {
     return this.angularFAuth.signOut().then(() => {
       localStorage.removeItem('user');
       // TODO: ADD NAVIGATION TO LANDING PAGE
     });
   }
}
