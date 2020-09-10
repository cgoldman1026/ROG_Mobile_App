import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddFansPage } from './add-fans.page';

describe('AddFansPage', () => {
  let component: AddFansPage;
  let fixture: ComponentFixture<AddFansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFansPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddFansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
