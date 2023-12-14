import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp07RoutingComponent } from './cmp07-routing.component';

describe('Cmp07RoutingComponent', () => {
  let component: Cmp07RoutingComponent;
  let fixture: ComponentFixture<Cmp07RoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp07RoutingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cmp07RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
