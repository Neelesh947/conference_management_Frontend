import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateconferenceComponent } from './createconference.component';

describe('CreateconferenceComponent', () => {
  let component: CreateconferenceComponent;
  let fixture: ComponentFixture<CreateconferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateconferenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateconferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
