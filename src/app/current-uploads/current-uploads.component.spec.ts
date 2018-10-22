import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentUploadsComponent } from './current-uploads.component';

describe('CurrentUploadsComponent', () => {
  let component: CurrentUploadsComponent;
  let fixture: ComponentFixture<CurrentUploadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentUploadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentUploadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
