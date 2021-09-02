import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() field: any = {};
  @Input() form: FormGroup;
  public isEmpty = true;
  public validationMessage: string = '';

  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }
  get isTouched() { return this.form.controls[this.field.name].touched; }
  get isErrors() { return this.form.controls[this.field.name].errors; }

  constructor() { }

  ngOnInit(): void {
    this.checkIsEmpty();
  }

  checkChecked(key: any, value: any) {
    if (value[key]) {
      return true;
    } else {
      return false;
    }
  }

  onCheckChange(event: any) {
    if (this.field.value[event.target.value]) {
      this.field.value[event.target.value] = false;
    } else {
      this.field.value[event.target.value] = true;
    }
    this.checkIsEmpty();
    if (this.field && this.field.onChange) {
      this.field.onChange(this.form.controls[this.field.name].value);
    }
    if (this.isEmpty && this.field.required) {
      this.validationMessage = this.field.requiredMessage;
    } else {
      this.validationMessage = ''
    }
  }

  checkIsEmpty() {
    for (let val in this.field.value) {
      if (this.field.value[val]) {
        this.isEmpty = false;
        break;
      } else {
        this.isEmpty = true;
      }
    }
  }

}
