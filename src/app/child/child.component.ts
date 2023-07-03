import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnChanges {
  @Input() prop1: any;
  ngOnChanges(changes: SimpleChanges) {
    console.log('onChanges:', changes);
  }
}
