import { Component, OnInit } from '@angular/core';
import { RespService } from '../services/resp/resp.service';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(public resp: RespService) {  }

  ngOnInit(): void {
  }

  switchTemem(): void {
    this.resp.isDark.next(!this.resp.isDark.value);
  }

}
