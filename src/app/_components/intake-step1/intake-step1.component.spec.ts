import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntakeStep1Component } from './intake-step1.component';

describe('IntakeStep1Component', () => {
  let component: IntakeStep1Component;
  let fixture: ComponentFixture<IntakeStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntakeStep1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntakeStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
