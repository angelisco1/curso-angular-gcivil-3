import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp02InputYOutputComponent } from './cmp02-input-y-output.component';

describe('Cmp02InputYOutputComponent', () => {
  let component: Cmp02InputYOutputComponent;
  let fixture: ComponentFixture<Cmp02InputYOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp02InputYOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cmp02InputYOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
