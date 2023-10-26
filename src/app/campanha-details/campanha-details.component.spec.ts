import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanhaDetailsComponent } from './campanha-details.component';

describe('CampanhaDetailsComponent', () => {
  let component: CampanhaDetailsComponent;
  let fixture: ComponentFixture<CampanhaDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampanhaDetailsComponent]
    });
    fixture = TestBed.createComponent(CampanhaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
