import { Component } from '@angular/core';
import { RespService } from './services/resp/resp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public resp: RespService) {
  }
}
