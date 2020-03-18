import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntakeStep3Component } from './intake-step3.component';

describe('IntakeStep3Component', () => {
  let component: IntakeStep3Component;
  let fixture: ComponentFixture<IntakeStep3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntakeStep3Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntakeStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
