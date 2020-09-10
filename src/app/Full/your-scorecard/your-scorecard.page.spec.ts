import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YourScorecardPage } from './your-scorecard.page';

describe('YourScorecardPage', () => {
  let component: YourScorecardPage;
  let fixture: ComponentFixture<YourScorecardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourScorecardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YourScorecardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
