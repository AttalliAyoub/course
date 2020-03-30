import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { RespService } from '../services/resp/resp.service';
import { AuthProvider, Theme } from 'ngx-auth-firebaseui';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  providers = AuthProvider;
  themes = Theme;
  routerSub: Subscription;
  index: number = 1;

  constructor(
    public auth: AuthService,
    public route: ActivatedRoute,
    public resp: RespService) {
  }
  ngOnDestroy(): void {
    console.log('this is Distroyed');
    this.routerSub.unsubscribe();
  }

  ngOnInit(): void {
    this.routerSub = this.route.paramMap.subscribe(parms => {
      this.index = Number(parms.get('id'));
    });
  }

}
