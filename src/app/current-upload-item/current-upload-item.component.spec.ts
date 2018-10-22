import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentUploadItemComponent } from './current-upload-item.component';

describe('CurrentUploadItemComponent', () => {
  let component: CurrentUploadItemComponent;
  let fixture: ComponentFixture<CurrentUploadItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentUploadItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentUploadItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
