import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomethingModalComponent } from './something-modal.component';

describe('SomethingModalComponent', () => {
  let component: SomethingModalComponent;
  let fixture: ComponentFixture<SomethingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomethingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomethingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
