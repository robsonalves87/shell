import { Component } from '@angular/core';
import { SharedService } from 'nosbor-shared-testing';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public sharedService: SharedService) {}

  increment(): void {
    this.sharedService.increment();
  }
}
