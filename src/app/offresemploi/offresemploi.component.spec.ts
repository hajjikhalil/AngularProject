import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresemploiComponent } from './offresemploi.component';

describe('OffresemploiComponent', () => {
  let component: OffresemploiComponent;
  let fixture: ComponentFixture<OffresemploiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffresemploiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffresemploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
