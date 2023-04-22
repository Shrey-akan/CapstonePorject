import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedetailComponent } from './deletedetail.component';

describe('DeletedetailComponent', () => {
  let component: DeletedetailComponent;
  let fixture: ComponentFixture<DeletedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
