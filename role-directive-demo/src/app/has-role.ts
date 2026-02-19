import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHasRole]',
  standalone: true
})
export class HasRoleDirective {

  private requiredRole!: string;
  private currentRole!: string;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input()
  set appHasRole(role: string) {
    this.requiredRole = role;
    this.updateView();
  }

  @Input()
  set appHasRoleUser(role: string) {
    this.currentRole = role;
    this.updateView();
  }

  private updateView(): void {
    this.viewContainer.clear();

    if (this.requiredRole === this.currentRole) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
