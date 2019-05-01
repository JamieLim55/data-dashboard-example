import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieNoLikeComponent } from './pie-no-like.component';

describe('PieNoLikeComponent', () => {
  let component: PieNoLikeComponent;
  let fixture: ComponentFixture<PieNoLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieNoLikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieNoLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
