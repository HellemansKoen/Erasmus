import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagebinsPage } from './managebins.page';

describe('ManagebinsPage', () => {
  let component: ManagebinsPage;
  let fixture: ComponentFixture<ManagebinsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ManagebinsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
