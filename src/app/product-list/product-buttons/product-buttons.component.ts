import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-buttons',
  template: ''
})
export class ProductButtonsComponent implements OnInit {
  @Input() childIndexValue;
  @Output() indexChecker = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.indexChecker.emit(this.childIndexValue >= 10);
  }

}
