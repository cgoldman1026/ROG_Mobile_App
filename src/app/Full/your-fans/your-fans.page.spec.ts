import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YourFansPage } from './your-fans.page';

describe('YourFansPage', () => {
  let component: YourFansPage;
  let fixture: ComponentFixture<YourFansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourFansPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YourFansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
