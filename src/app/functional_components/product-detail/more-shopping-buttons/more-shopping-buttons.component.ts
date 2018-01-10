import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-more-shopping-buttons',
  templateUrl: './more-shopping-buttons.component.html',
  styleUrls: ['./more-shopping-buttons.component.scss']
})
export class MoreShoppingButtonsComponent implements OnInit {
  @Input() display;
  @Output() buttonClicked = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  handleContinue() { this.buttonClicked.emit('shopping'); }
  handleCart() { this.buttonClicked.emit('cart'); }

}
