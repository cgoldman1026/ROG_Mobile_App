import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PickYourRewardPage } from './pick-your-reward.page';

describe('PickYourRewardPage', () => {
  let component: PickYourRewardPage;
  let fixture: ComponentFixture<PickYourRewardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickYourRewardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PickYourRewardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
