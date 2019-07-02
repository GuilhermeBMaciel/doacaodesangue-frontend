import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HemocentrosListaComponent } from './hemocentros-lista.component';

describe('HemocentrosListaComponent', () => {
  let component: HemocentrosListaComponent;
  let fixture: ComponentFixture<HemocentrosListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HemocentrosListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HemocentrosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
