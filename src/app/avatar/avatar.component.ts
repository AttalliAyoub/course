import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input() url: string;
  @Input() radius: number = 25;

  constructor() { }

  ngOnInit(): void {
  }

}
