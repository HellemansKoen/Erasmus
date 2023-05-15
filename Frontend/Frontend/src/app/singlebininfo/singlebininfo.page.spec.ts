import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SinglebininfoPage } from './singlebininfo.page';

describe('SinglebininfoPage', () => {
  let component: SinglebininfoPage;
  let fixture: ComponentFixture<SinglebininfoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SinglebininfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
