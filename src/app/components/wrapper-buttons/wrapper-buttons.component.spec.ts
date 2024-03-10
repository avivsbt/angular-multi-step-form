import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperButtonsComponent } from './wrapper-buttons.component';

describe('WrapperButtonsComponent', () => {
  let component: WrapperButtonsComponent;
  let fixture: ComponentFixture<WrapperButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WrapperButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WrapperButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
