import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroSaidasComponent } from './cadastro-saidas.component';

describe('CadastroSaidasComponent', () => {
  let component: CadastroSaidasComponent;
  let fixture: ComponentFixture<CadastroSaidasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroSaidasComponent]
    });
    fixture = TestBed.createComponent(CadastroSaidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
