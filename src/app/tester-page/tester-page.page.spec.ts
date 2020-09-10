import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TesterPagePage } from './tester-page.page';

describe('TesterPagePage', () => {
  let component: TesterPagePage;
  let fixture: ComponentFixture<TesterPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesterPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TesterPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
