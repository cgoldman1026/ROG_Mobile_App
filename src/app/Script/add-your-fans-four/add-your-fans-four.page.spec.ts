import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddYourFansFourPage } from './add-your-fans-four.page';

describe('AddYourFansFourPage', () => {
  let component: AddYourFansFourPage;
  let fixture: ComponentFixture<AddYourFansFourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddYourFansFourPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddYourFansFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
