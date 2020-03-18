import { Component, OnInit, OnDestroy, Input, ElementRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { RespService } from '../services/resp/resp.service';


const print = console.log;

@Component({
  selector: 'app-show-element',
  templateUrl: './show-element.component.html',
  styleUrls: ['./show-element.component.scss']
})
export class ShowElementComponent implements OnInit, OnDestroy {
  @Input() imageURI: string;
  @Input() slogo: string;
  @Input() subslogo: string;
  @Input() Dir: boolean;
  @Input() TopMarggin: number = 20;
  @Input() ButtomMarggin: number = 20;

  @ViewChild('background') background: ElementRef<HTMLDivElement>;
  @ViewChild('background0') background0: ElementRef<HTMLDivElement>;

  breakpointSub: Subscription;
  matches: boolean = this.resp.breakpointObserver.isMatched('(max-width: 855px)');

  over(event: MouseEvent) {
    const element = this.background.nativeElement;
    const element0 = this.background0.nativeElement;
    if (!this.matches) {
      element.style.transform = this.Dir ? 'skewX(-20deg)' : 'skewX(20deg)';
      element0.style.transform = this.Dir ? 'skewX(-20deg)' : 'skewX(20deg)';
    }
    element.style.opacity = '0';
    element0.style.opacity = '1';
  }

  leave(event: MouseEvent) {
    const element = this.background.nativeElement;
    const element0 = this.background0.nativeElement;
    if (!this.matches) {
      element.style.transform = this.Dir ? 'skewX(20deg)' : 'skewX(-20deg)';
      element0.style.transform = this.Dir ? 'skewX(20deg)' : 'skewX(-20deg)';
    }
    element.style.opacity = '1';
    element0.style.opacity = '0';
  }

  constructor(public resp: RespService) {
    this.breakpointSub = resp.breakpoint.subscribe(breakpointState => {
      this.matches = breakpointState.matches;
    });
  }

  ngOnDestroy(): void {
    this.breakpointSub.unsubscribe();
    print('distroy');
  }

  ngOnInit(): void {

  }


}
