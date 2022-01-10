import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
 selector: 'formly-field-input',
 template: `
  <div>
    <label 
      [for]="id" 
      class="form-label"
    >{{ displayLabel() }}
    </label>
    <input 
      type="text" 
      class="form-control is-invalid" 
      [id]="id" 
      [formControl]="formControl" 
      [formlyAttributes]="field"
      (change)="log()"
    >
    <div 
      class="invalid-feedback"
      *ngIf="formControl.status === 'INVALID'"
    >
      Looks good!
    </div>
  </div>
 `,
})
export class FormlyFieldInput extends FieldType {
  override formControl: any;

  displayLabel(): string {
    if(this.to.label) {
      if(this.to.required) {
        return `${this.to.label} *`;
      } else {
        return `${this.to.label}`;
      }
    }
    return '';
  }  
  
  log() {
    console.log(this.formControl);
  }
}