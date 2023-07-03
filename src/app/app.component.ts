import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'learning-angular';

  prop1 = {
    name: 'yellowstone',
  };

  btnClicked(): void {
    this.prop1.name = 'aslam';
  }
}
