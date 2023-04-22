import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactdetailshowComponent } from './contactdetailshow.component';

describe('ContactdetailshowComponent', () => {
  let component: ContactdetailshowComponent;
  let fixture: ComponentFixture<ContactdetailshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactdetailshowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactdetailshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
