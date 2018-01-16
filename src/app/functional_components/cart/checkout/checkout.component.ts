import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./../cart.component.css"]
})
export class CheckoutComponent implements OnInit {
  @Input() subTotal;

  constructor() {}

  ngOnInit() {}
}
