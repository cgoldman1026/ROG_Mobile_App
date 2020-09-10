import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddYourFansFivePage } from './add-your-fans-five.page';

describe('AddYourFansFivePage', () => {
  let component: AddYourFansFivePage;
  let fixture: ComponentFixture<AddYourFansFivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddYourFansFivePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddYourFansFivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
