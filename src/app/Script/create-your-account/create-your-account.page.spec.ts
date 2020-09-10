import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateYourAccountPage } from './create-your-account.page';

describe('CreateYourAccountPage', () => {
  let component: CreateYourAccountPage;
  let fixture: ComponentFixture<CreateYourAccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateYourAccountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateYourAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
