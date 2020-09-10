import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShareCampaignPage } from './share-campaign.page';

describe('ShareCampaignPage', () => {
  let component: ShareCampaignPage;
  let fixture: ComponentFixture<ShareCampaignPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareCampaignPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShareCampaignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
