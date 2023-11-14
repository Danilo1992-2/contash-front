import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAgendaComponent } from './cadastro-agenda.component';

describe('CadastroAgendaComponent', () => {
  let component: CadastroAgendaComponent;
  let fixture: ComponentFixture<CadastroAgendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroAgendaComponent]
    });
    fixture = TestBed.createComponent(CadastroAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
