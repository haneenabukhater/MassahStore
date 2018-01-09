import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-buttons',
  template: `  
  <div class="container nav-buttons">
    <button *ngIf="backButton" (click)="handleBack()" class="btn btn-primary">Previous</button>
    <button *ngIf="nextButton" (click)="handleNext()" class="btn btn-warning">Next Page</button>
</div>`,
  styleUrls: ['./product-buttons.component.css']
})
export class ProductButtonsComponent implements OnInit {
  @Input() backButton;
  @Input() nextButton;
  @Output() buttonController = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  handleNext() { this.buttonController.emit('next'); }
  handleBack() { this.buttonController.emit('back'); }

}
