import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp08ServiciosComponent } from './cmp08-servicios.component';

describe('Cmp08ServiciosComponent', () => {
  let component: Cmp08ServiciosComponent;
  let fixture: ComponentFixture<Cmp08ServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp08ServiciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cmp08ServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
