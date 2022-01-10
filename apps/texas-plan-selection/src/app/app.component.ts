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

  constructor() {}

  ngOnInit(): void {}
}
