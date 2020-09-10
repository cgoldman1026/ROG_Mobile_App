import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScriptPage } from './script.page';

describe('ScriptPage', () => {
  let component: ScriptPage;
  let fixture: ComponentFixture<ScriptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScriptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScriptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
