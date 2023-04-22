import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MittsureComponent } from './mittsure.component';

describe('MittsureComponent', () => {
  let component: MittsureComponent;
  let fixture: ComponentFixture<MittsureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MittsureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MittsureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
