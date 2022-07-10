import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuDelegadoComponent } from './usu-delegado.component';

describe('UsuDelegadoComponent', () => {
  let component: UsuDelegadoComponent;
  let fixture: ComponentFixture<UsuDelegadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuDelegadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuDelegadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
