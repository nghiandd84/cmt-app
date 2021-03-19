/// <reference types="cypress" />
import { initEnv, mount } from 'cypress-angular-unit-test';
import * as fromContainers from '../../containers';
import * as fromServices from '../../services';
import { ShellComponent } from './shell.component';
import { CoreModule } from '@core/core.module';

describe('ShellComponent', () => {
  beforeEach(() => {
    initEnv(ShellComponent, {
      imports: [CoreModule],
      providers: [...fromServices.services],
      declarations: [...fromContainers.containers],
    });
  });
  it('Test welcome message', () => {
    const welcomeMessage = 'Cmt app nghia';
    // component + any inputs object
    const shellComponent = mount(ShellComponent, { title: welcomeMessage });
    console.log(shellComponent);
    
    // use any Cypress command afterwards
    cy.contains(`${welcomeMessage} is running`);
  });
});
