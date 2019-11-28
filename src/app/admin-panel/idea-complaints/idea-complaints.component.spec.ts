import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaComplaintsComponent } from './idea-complaints.component';

describe('IdeaComplaintsComponent', () => {
  let component: IdeaComplaintsComponent;
  let fixture: ComponentFixture<IdeaComplaintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaComplaintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
