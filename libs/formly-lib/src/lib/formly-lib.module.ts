import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldInput } from '../formly-types/formly-field-input.type';

@NgModule({
  declarations: [
    FormlyFieldInput
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(
      {
        types: [
          { name: 'input', component: FormlyFieldInput },
        ],
      }
    ),
  ],
  exports: [
    ReactiveFormsModule,
    FormlyModule
  ]
})
export class FormlyLibModule {}
