import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CampaignPINNumberPage } from './campaign-pin-number.page';

describe('CampaignPINNumberPage', () => {
  let component: CampaignPINNumberPage;
  let fixture: ComponentFixture<CampaignPINNumberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignPINNumberPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CampaignPINNumberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
