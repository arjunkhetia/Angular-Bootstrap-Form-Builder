import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent implements OnInit {

  @Input() field: any = {};
  @Input() form: FormGroup;
  validationMessage: string = '';

  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }
  get isTouched() { return this.form.controls[this.field.name].touched; }
  get isErrors() { return this.form.controls[this.field.name].errors; }

  constructor() { }

  ngOnInit(): void {
    if (this.field && this.field.required) {
      this.validationMessage = this.field.requiredMessage;
    }
  }

  checkField(event: any) {
    if (this.isErrors && this.isErrors.pattern) {
      this.validationMessage = this.field.patternMessage;
    } else if (this.isErrors && this.isErrors.minlength) {
      this.validationMessage = this.field.minLengthMessage;
    } else if (this.isErrors) {
      this.validationMessage = this.field.requiredMessage;
    }
    if (this.field && this.field.onChange) {
      this.field.onChange(event);
    }
  }

}
