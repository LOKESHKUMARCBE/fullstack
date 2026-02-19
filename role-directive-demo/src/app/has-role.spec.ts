import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHasRole]'
})
export class HasRoleDirective {

  private userRole = 'admin'; // fetched from auth service (real apps)

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input()
  set appHasRole(role: string) {
    this.viewContainer.clear();
    if (role === this.userRole) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
