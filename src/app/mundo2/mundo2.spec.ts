import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mundo2 } from './mundo2';

describe('Mundo2', () => {
  let component: Mundo2;
  let fixture: ComponentFixture<Mundo2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mundo2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mundo2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
