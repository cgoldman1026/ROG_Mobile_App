import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditFanPage } from './edit-fan.page';

describe('EditFanPage', () => {
  let component: EditFanPage;
  let fixture: ComponentFixture<EditFanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditFanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
