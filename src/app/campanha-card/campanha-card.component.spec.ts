import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanhaCardComponent } from './campanha-card.component';

describe('CampanhaCardComponent', () => {
  let component: CampanhaCardComponent;
  let fixture: ComponentFixture<CampanhaCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampanhaCardComponent]
    });
    fixture = TestBed.createComponent(CampanhaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
