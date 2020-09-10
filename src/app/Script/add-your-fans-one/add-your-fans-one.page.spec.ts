import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddYourFansOnePage } from './add-your-fans-one.page';

describe('AddYourFansOnePage', () => {
  let component: AddYourFansOnePage;
  let fixture: ComponentFixture<AddYourFansOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddYourFansOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddYourFansOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
