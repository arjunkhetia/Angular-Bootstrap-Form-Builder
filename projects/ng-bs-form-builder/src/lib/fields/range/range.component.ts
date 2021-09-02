import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent implements OnInit {

  @Input() field: any = {};
  @Input() form: FormGroup;
  public step: any = '';
  public validationMessage: string = '';

  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }
  get isTouched() { return this.form.controls[this.field.name].touched; }
  get isErrors() { return this.form.controls[this.field.name].errors; }

  constructor() { }

  ngOnInit(): void {
    if (this.field && this.field.required) {
      this.validationMessage = this.field.requiredMessage;
    }
    this.step = this.field.value;
    this.form.valueChanges.subscribe((change) => {
      this.step = this.field.min;
    });
  }

  stepChange(event: any) {
    this.step = event.target.value;
    if (this.field && this.field.onChange) {
      this.field.onChange(event);
    }
    if (this.isErrors) {
      this.validationMessage = this.field.requiredMessage;
    }
  }

}
