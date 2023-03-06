import { Component } from '@angular/core';
import { CommonsService } from 'commons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public commonsService: CommonsService) {}

  increment(): void {
    this.commonsService.increment();
  }
}
