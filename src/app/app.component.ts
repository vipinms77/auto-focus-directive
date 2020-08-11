import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  show = false;

  loop = [1,2,3,4,5,6,7,8,9];

  toggle() {
    this.show = !this.show
  }
}
