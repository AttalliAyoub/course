import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class RespService {
  breakpoint: Observable<BreakpointState>;
  isDark: BehaviorSubject<boolean>;
  locale: BehaviorSubject<string>;
  localLoad: Observable<Object>;
  private _oldIsDark;

  constructor(
    public breakpointObserver: BreakpointObserver,
    public http: HttpClient,
  ) {
    this.initLocale();
    this.initDarkMode();
    this.breakpoint = breakpointObserver.observe('(max-width: 855px)');

  }

  initDarkMode(): void {
    const oldState = localStorage.getItem('isDark');
    this.isDark = new BehaviorSubject<boolean>(oldState == 'true' ? true : false);
    this._oldIsDark = this.isDark.value;
    this.isDark.subscribe(value => {
      if (value != this._oldIsDark) {
        localStorage.setItem('isDark', String(value));
      }
      this._oldIsDark = value;
    });
  }

  initLocale(): void {
    const oldLoc = localStorage.getItem('locale');
    if (oldLoc == 'ar' || oldLoc == 'fr' || oldLoc == 'en') {
      this.locale = new BehaviorSubject<string>(oldLoc);
    } else {
      const browserLoc = navigator.language;
      console.log(browserLoc);
      if (browserLoc.toLowerCase().includes('ar')) {
        this.locale = new BehaviorSubject<string>('ar');
      } else if (browserLoc.toLowerCase().includes('fr')) {
        this.locale = new BehaviorSubject<string>('fr');
      } else if (browserLoc.toLowerCase().includes('en')) {
        this.locale = new BehaviorSubject<string>('en');
      } else {
        this.locale = new BehaviorSubject<string>('ar');
      }
    }
    this.locale.subscribe(value => {
      localStorage.setItem('locale', value);
    });
    this.localLoad = this.locale.pipe(
      switchMap(loc => this.http.get(`assets/locals/${loc}.json`)),
    );
  }
}
