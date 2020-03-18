import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';


@Injectable({
  providedIn: 'root'
})
export class RespService {
  breakpoint: Observable<BreakpointState>;
  isDark: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(Boolean(localStorage.getItem('isDark')));
  constructor(public breakpointObserver: BreakpointObserver) {
    this.breakpoint = breakpointObserver.observe('(max-width: 855px)');

    this.isDark.next(localStorage.getItem('isDark') == 'true' ? true : false);
    this.isDark.subscribe(value => {
      localStorage.setItem('isDark', String(value));
    });
  }
}
