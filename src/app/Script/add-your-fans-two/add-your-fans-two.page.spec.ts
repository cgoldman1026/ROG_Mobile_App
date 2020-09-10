import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddYourFansTwoPage } from './add-your-fans-two.page';

describe('AddYourFansTwoPage', () => {
  let component: AddYourFansTwoPage;
  let fixture: ComponentFixture<AddYourFansTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddYourFansTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddYourFansTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
