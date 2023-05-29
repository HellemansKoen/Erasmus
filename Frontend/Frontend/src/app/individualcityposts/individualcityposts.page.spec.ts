import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndividualcitypostsPage } from './individualcityposts.page';

describe('IndividualcitypostsPage', () => {
  let component: IndividualcitypostsPage;
  let fixture: ComponentFixture<IndividualcitypostsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IndividualcitypostsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
