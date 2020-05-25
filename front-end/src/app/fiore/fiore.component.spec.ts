import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FioreComponent } from './fiore.component';

describe('FioreComponent', () => {
  let component: FioreComponent;
  let fixture: ComponentFixture<FioreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FioreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FioreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
