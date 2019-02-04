import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidNowFormComponent } from './bid-now-form.component';

describe('BidNowFormComponent', () => {
  let component: BidNowFormComponent;
  let fixture: ComponentFixture<BidNowFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidNowFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidNowFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
