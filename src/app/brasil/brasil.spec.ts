import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Brasil } from './brasil';

describe('Brasil', () => {
  let component: Brasil;
  let fixture: ComponentFixture<Brasil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Brasil]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Brasil);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
