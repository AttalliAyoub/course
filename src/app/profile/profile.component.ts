import { Component, OnInit, Input } from '@angular/core';
import { User } from '../services/interfaces';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  form: FormGroup;
  @Input() user: User;

  constructor(public fb: FormBuilder, private _auth: AuthService) {

  }

  ngOnInit(): void {
    console.log({ verifid: this.user.emailVerified, user: this.user });
    this.form = this.fb.group({
      name: [this?.user?.displayName ?? '', [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(2),
      ]],
      email: [this?.user?.email ?? '', [
        Validators.required,
        Validators.email,
      ]],
    },
    );
    this.form.disable();
  }

  edit(): void {
    console.log(this.form.disabled);
    if (this.form.disabled) {
      this.form.enable();
    } else {
      this.form.disable();
    }
  }

  signOut(): void {
    this._auth.signOut();
  }

  updateUser(): void {
    if (this.form.valid) {
      this._auth.updateUser({
        displayName: this.form.value['name'],
        email: this.form.value['email']
      });
      this.edit();
    }
  }

}
