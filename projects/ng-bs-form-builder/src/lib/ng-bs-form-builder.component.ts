import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ng-bs-form-builder',
  template: `
    <lib-form-builder [formConfig]="formConfig"></lib-form-builder>
  `,
  styles: [
  ]
})
export class NgBsFormBuilderComponent implements OnInit {

  @Input() formConfig: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
