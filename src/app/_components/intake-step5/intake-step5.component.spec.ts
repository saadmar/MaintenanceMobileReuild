import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntakeStep5Component } from './intake-step5.component';

describe('IntakeStep5Component', () => {
  let component: IntakeStep5Component;
  let fixture: ComponentFixture<IntakeStep5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntakeStep5Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntakeStep5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
