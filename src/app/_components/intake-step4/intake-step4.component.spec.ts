import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntakeStep4Component } from './intake-step4.component';

describe('IntakeStep4Component', () => {
  let component: IntakeStep4Component;
  let fixture: ComponentFixture<IntakeStep4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntakeStep4Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntakeStep4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
