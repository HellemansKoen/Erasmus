import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeneralpostsPage } from './generalposts.page';

describe('GeneralpostsPage', () => {
  let component: GeneralpostsPage;
  let fixture: ComponentFixture<GeneralpostsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GeneralpostsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
