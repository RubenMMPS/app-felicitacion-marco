import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FelicitacionMarcoComponent } from './felicitacion-marco.component';

describe('FelicitacionMarcoComponent', () => {
  let component: FelicitacionMarcoComponent;
  let fixture: ComponentFixture<FelicitacionMarcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FelicitacionMarcoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FelicitacionMarcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
