import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-buttons',
  templateUrl: './product-buttons.component.html',
  styleUrls: ['./product-buttons.component.css']
})
export class ProductButtonsComponent implements OnInit {
  @Input() childIndexValue;
  @Output() indexChecker = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.indexChecker.emit(this.childIndexValue >= 10);
  }

}
