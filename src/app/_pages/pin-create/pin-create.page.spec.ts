import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PinCreatePage } from './pin-create.page';

describe('PinCreatePage', () => {
  let component: PinCreatePage;
  let fixture: ComponentFixture<PinCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PinCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
