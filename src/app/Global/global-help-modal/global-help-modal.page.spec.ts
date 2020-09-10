import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GlobalHelpModalPage } from './global-help-modal.page';

describe('GlobalHelpModalPage', () => {
  let component: GlobalHelpModalPage;
  let fixture: ComponentFixture<GlobalHelpModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalHelpModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GlobalHelpModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
