import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BretourComponent } from './bretour.component';

describe('BretourComponent', () => {
  let component: BretourComponent;
  let fixture: ComponentFixture<BretourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BretourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BretourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
