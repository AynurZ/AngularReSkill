import { ComponentFixture, TestBed } from '@angular/core/testing';

import { basketProductComponent } from './basketproduct.component';

describe('basketProductComponent', () => {
  let component: basketProductComponent;
  let fixture: ComponentFixture<basketProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ basketProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(basketProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
