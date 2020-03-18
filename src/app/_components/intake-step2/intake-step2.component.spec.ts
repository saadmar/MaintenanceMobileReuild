import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntakeStep2Component } from './intake-step2.component';

describe('IntakeStep2Component', () => {
  let component: IntakeStep2Component;
  let fixture: ComponentFixture<IntakeStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntakeStep2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntakeStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
