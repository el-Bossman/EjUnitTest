import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //Debemos ser coherentes con el lenguaje si es español solo español si es ingles solo ingles.
  it('Debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debería invalidar el formulario si el email no es válido', () => {
    const emailControl = component.emailForm.get('email');
    
    // Nos aseguramos de que emailControl no este vacio y empezamos a probar
    // El objetivo es comprobar que se valide el formulario de forma correcta
    // Probamos con un ejemplo vacio uno invalido y uno invalido
    if (emailControl) {
      emailControl.setValue(''); // Valor vacío
      expect(emailControl.valid).toBeFalsy(); // Debe ser inválido
  
      emailControl.setValue('noesunemail'); // Valor no válido
      expect(emailControl.valid).toBeFalsy(); // Debe seguir siendo inválido
  
      emailControl.setValue('test@example.com'); // Valor válido
      expect(emailControl.valid).toBeTruthy(); // Debe ser válido

      // dejo este ejemplo para demostrar cuando fallamos al hacer un test
      //emailControl.setValue('ELCORREO@CORREITO.CL'); // Valor válido
      //expect(emailControl.valid).toBeFalsy(); // asumimos que es falso provocando un error
    } else {
      fail('emailControl es null');
    }
  });
  

});
