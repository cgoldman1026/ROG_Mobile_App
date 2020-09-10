import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FansModalPage } from './fans-modal.page';

describe('FansModalPage', () => {
  let component: FansModalPage;
  let fixture: ComponentFixture<FansModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FansModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FansModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
