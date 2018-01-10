import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreShoppingButtonsComponent } from './more-shopping-buttons.component';

describe('MoreShoppingButtonsComponent', () => {
  let component: MoreShoppingButtonsComponent;
  let fixture: ComponentFixture<MoreShoppingButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreShoppingButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreShoppingButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
