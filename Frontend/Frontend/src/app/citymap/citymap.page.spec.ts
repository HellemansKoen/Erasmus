import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CitymapPage } from './citymap.page';

describe('CitymapPage', () => {
  let component: CitymapPage;
  let fixture: ComponentFixture<CitymapPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CitymapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
