import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RewardProgressPage } from './reward-progress.page';

describe('RewardProgressPage', () => {
  let component: RewardProgressPage;
  let fixture: ComponentFixture<RewardProgressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewardProgressPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RewardProgressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
