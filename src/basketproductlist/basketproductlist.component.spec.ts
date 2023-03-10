import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketProductListComponent } from './basketproductlist.component';

describe('BasketProductComponent', () => {
  let component: BasketProductListComponent;
  let fixture: ComponentFixture<BasketProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketProductListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasketProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
