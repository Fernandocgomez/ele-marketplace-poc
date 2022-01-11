import { Component, OnInit } from '@angular/core';


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
