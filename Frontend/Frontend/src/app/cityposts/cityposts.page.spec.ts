import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CitypostsPage } from './cityposts.page';

describe('CitypostsPage', () => {
  let component: CitypostsPage;
  let fixture: ComponentFixture<CitypostsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CitypostsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
