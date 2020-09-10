import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddYourFansThreePage } from './add-your-fans-three.page';

describe('AddYourFansThreePage', () => {
  let component: AddYourFansThreePage;
  let fixture: ComponentFixture<AddYourFansThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddYourFansThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddYourFansThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
