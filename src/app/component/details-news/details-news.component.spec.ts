import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsNewsComponent } from './details-news.component';

describe('DetailsNewsComponent', () => {
  let component: DetailsNewsComponent;
  let fixture: ComponentFixture<DetailsNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
