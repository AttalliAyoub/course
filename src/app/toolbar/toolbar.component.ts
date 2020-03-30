import { Component, OnInit, OnDestroy } from '@angular/core';
import { RespService } from '../services/resp/resp.service';
import { AuthService } from '../services/auth/auth.service';
import { LinkMenuItem } from 'ngx-auth-firebaseui';
import { Router, RouterEvent, Scroll } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatSelectChange } from '@angular/material/select';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {

  constructor(public resp: RespService, public auth: AuthService, public router: Router) { }

  goProfile() {
    this.router.navigate(['/auth/0']);
  }

  signOut() {
    this.auth.signOut();
  }

  selectionChange(event: MatSelectChange): void {
    this.resp.locale.next(event.value);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    // console.log("Method not implemented.");
  }

  change(event: MatSlideToggleChange) {
    this.resp.isDark.next(event.checked);
  }

}
