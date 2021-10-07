import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConversorComponent } from './modal-conversor.component';

describe('ModalConversorComponent', () => {
  let component: ModalConversorComponent;
  let fixture: ComponentFixture<ModalConversorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConversorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
