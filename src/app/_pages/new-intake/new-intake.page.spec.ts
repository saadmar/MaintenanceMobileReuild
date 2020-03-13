import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewIntakePage } from './new-intake.page';

describe('NewIntakePage', () => {
  let component: NewIntakePage;
  let fixture: ComponentFixture<NewIntakePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewIntakePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewIntakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
