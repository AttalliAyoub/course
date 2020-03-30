import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User as FirebaseUser } from 'firebase/app';
import { User } from '../interfaces';
import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userObservable: Observable<User>;
  user: User;

  constructor(
    private _db: AngularFirestore,
    private _auth: AngularFireAuth,
    private router: Router) {
    this.userObservable = this._auth.authState.pipe(
      switchMap(u => {
        if (u) {
          return this._db.doc<User>(`users/${u.uid}`).valueChanges().pipe(
            map(uu => {
              if (uu && uu.uid && uu.uid) {
                if (
                  uu.displayName != u.displayName ||
                  uu.email != u.email ||
                  uu.emailVerified != u.emailVerified ||
                  uu.phoneNumber != u.phoneNumber ||
                  uu.photoURL != u.photoURL ||
                  uu.uid != u.uid
                ) {
                  this.updateUserDate(u);
                }
              } else {
                this.updateUserDate(u);
              }
              uu.user = u;
              this.user = uu;
              return uu;
            })
          );
        } else {
          return of<User>(null);
        }
      })
    );
  }

  updates = 0;

  async updateUserDate(user: FirebaseUser) {

    const docRef = this._db.doc<User>(`users/${user.uid}`);
    const data = {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      phoneNumber: user.phoneNumber,
      emailVerified: user.emailVerified,
    } as User;
    this.updates = this.updates + 1;
    console.log({ updates: this.updates, object: data });
    await docRef.set(data, { merge: true });
    data.user = user;
    this.user = data;
  }

  async updateUser(profile: {
    displayName?: string;
    email?: string;
  }) {
    await this.user.user.updateEmail(profile.email);
    return await this.user.user.updateProfile({ displayName: profile.displayName });
  }

  async signOut() {
    await this._auth.auth.signOut();
    return this.router.navigate(['/']);
  }

}
