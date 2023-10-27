import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanhaCreatorComponent } from './campanha-creator.component';

describe('CampanhaCreatorComponent', () => {
  let component: CampanhaCreatorComponent;
  let fixture: ComponentFixture<CampanhaCreatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampanhaCreatorComponent]
    });
    fixture = TestBed.createComponent(CampanhaCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
