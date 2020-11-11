import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ng-bs-form-builder',
  template: `
    <lib-form-builder [formConfig]="formConfig" (sendFormData)="sendFormDataBack($event)"></lib-form-builder>
  `,
  styles: [
  ]
})
export class NgBsFormBuilderComponent implements OnInit {

  @Input() formConfig: any[] = [];
  @Output() formData = new EventEmitter<object>();

  constructor() { }

  ngOnInit(): void {
  }

  sendFormDataBack(formData: any) {
    this.formData.emit(formData);
  }

}
