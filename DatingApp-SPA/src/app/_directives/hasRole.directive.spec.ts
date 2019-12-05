/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { HasRoleDirective } from './hasRole.directive';
import { ViewContainerRef, TemplateRef } from '@angular/core';
import { AuthService } from '../_services/auth.service';

describe('Directive: HasRole', () => {
  it('should create an instance', () => {
    // let viewContainerRef: ViewContainerRef;
    // let templateRef: TemplateRef<any>;
    // let authService: AuthService;
    const directive = new HasRoleDirective(/*viewContainerRef, templateRef, authService*/);
    expect(directive).toBeTruthy();
  });
});
