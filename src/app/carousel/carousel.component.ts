import { Component, OnInit } from '@angular/core';
import { RespService } from '../services/resp/resp.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor(public resp: RespService) { }

  ngOnInit(): void {
  }

}
