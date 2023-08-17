import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileProyectsComponent } from './mobile-proyects.component';

describe('ProyectsComponent', () => {
  let component: MobileProyectsComponent;
  let fixture: ComponentFixture<MobileProyectsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MobileProyectsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileProyectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
