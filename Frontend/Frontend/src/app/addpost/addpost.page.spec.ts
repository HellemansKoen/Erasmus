import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddpostPage } from './addpost.page';

describe('AddpostPage', () => {
  let component: AddpostPage;
  let fixture: ComponentFixture<AddpostPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddpostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
