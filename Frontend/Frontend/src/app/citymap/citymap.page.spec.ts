import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CitymapPage } from './citymap.page';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

describe('CitymapPage', () => {
  let component: CitymapPage;
  let fixture: ComponentFixture<CitymapPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitymapPage, IonicModule, ExploreContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CitymapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
