import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import { LeadService } from 'libs/lead/src/lib/services/lead.service';
import { first, tap } from 'rxjs';


interface Lead {
  id: string;

  [key: string]: any;
}

@Component({
  selector: 'ele-marketplace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'texas-plan-selection';
  form = new FormGroup({});
  model?: Lead;
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    },
    {
      key: 'firstName',
      type: 'input',
      templateOptions: {
        label: 'first name',
        placeholder: 'first name',
        required: true,
      },
    },
  ];

  constructor(private leadService: LeadService) {}

  ngOnInit(): void {
    this.leadService.lead$
    .pipe(first())
    .subscribe((lead) => {
      this.model = lead;
    });
  }

  onSubmit(model: any) {
    this.model = model;
    console.log(this.model);
  }
}
