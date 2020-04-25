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

   /* Returns the Github auth provider */
   GithubAuth() {
    const provider = new auth.GithubAuthProvider();
    provider.addScope('repo:status');
    provider.setCustomParameters({
      allow_signup: 'false'
    });
    return this.AuthLogin( provider );
   }

   /* Sign in with a pop-up (will work with any provider) */
   AuthLogin( provider ) {
     return this.angularFAuth.signInWithPopup( provider )
     .then(( result ) => {
       this.ngZone.run(() => {
         this.router.navigate(['']);
       });
       this.SetUserData(result.user, result.additionalUserInfo.username);
     }).catch( ( error ) => {
       window.alert(error);
     });
   }

   /* Posts user data to firebase database */
   SetUserData(user: User, username: string) {
     const userRef: AngularFirestoreDocument<any> = this.angularFstore.doc(`${ user.uid }/${username}`);
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

   /* Signs the user out and removes data from localstorage  */
   SignOut() {
     return this.angularFAuth.signOut().then(() => {
       localStorage.removeItem('user');
       // TODO: ADD NAVIGATION TO LANDING PAGE
     });
   }

   /* Returns true if the user is logged in and false otherwise */
    isLoggedIn(): boolean {
     const user: User = JSON.parse(localStorage.getItem('user'));
     return (user !== null ? true : false);
   }
}
