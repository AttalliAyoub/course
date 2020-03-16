import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-element',
  templateUrl: './show-element.component.html',
  styleUrls: ['./show-element.component.scss']
})
export class ShowElementComponent implements OnInit {
  @Input() imageURI: string;
  @Input() slogo: string;

  constructor() { }

  ngOnInit(): void {
  }

}
