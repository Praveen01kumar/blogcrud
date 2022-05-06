import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDasboardComponent } from './post-dasboard.component';

describe('PostDasboardComponent', () => {
  let component: PostDasboardComponent;
  let fixture: ComponentFixture<PostDasboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDasboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
