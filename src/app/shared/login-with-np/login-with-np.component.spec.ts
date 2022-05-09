import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWithNpComponent } from './login-with-np.component';

describe('LoginWithNpComponent', () => {
  let component: LoginWithNpComponent;
  let fixture: ComponentFixture<LoginWithNpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginWithNpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWithNpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
