import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaskettotalComponent } from './baskettotal.component';

describe('BaskettotalComponent', () => {
  let component: BaskettotalComponent;
  let fixture: ComponentFixture<BaskettotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaskettotalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaskettotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
