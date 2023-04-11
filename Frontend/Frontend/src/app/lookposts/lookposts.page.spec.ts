import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LookpostsPage } from './lookposts.page';

describe('LookpostsPage', () => {
  let component: LookpostsPage;
  let fixture: ComponentFixture<LookpostsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LookpostsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
