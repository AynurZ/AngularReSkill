import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadertotalComponent } from './headertotal.component';

describe('HeadertotalComponent', () => {
  let component: HeadertotalComponent;
  let fixture: ComponentFixture<HeadertotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadertotalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadertotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
