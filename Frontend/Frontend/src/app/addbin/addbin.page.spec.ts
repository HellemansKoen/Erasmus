import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddbinPage } from './addbin.page';

describe('AddbinPage', () => {
  let component: AddbinPage;
  let fixture: ComponentFixture<AddbinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddbinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
