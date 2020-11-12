import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'lib-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  @Input() formConfig: any[] = [];
  public formTitle: String = '';
  public fields: any[] = [];
  public form: FormGroup;
  public saveButton: String = '';
  public resetButton: String = '';
  @Output() sendFormData = new EventEmitter<object>();
  @ViewChild('formDirective') public formDirective: NgForm;

  constructor() { }

  ngOnInit(): void {
    this.formTitle = this.formConfig['title'];
    this.fields = this.formConfig['fields'];
    if (this.formConfig && this.formConfig['controls'] && this.formConfig['controls']['saveButton']) {
      this.saveButton = this.formConfig['controls']['saveButton'];
    }
    if (this.formConfig && this.formConfig['controls'] && this.formConfig['controls']['resetButton']) {
      this.resetButton = this.formConfig['controls']['resetButton'];
    }
    let fieldsCtrls = {};
    for (let field of this.fields) {
      if (field?.required) {
        let validators = [Validators.required];
        if (field?.type === 'email') {
          validators.push(Validators.email);
        }
        if (field?.minLength) {
          validators.push(Validators.minLength(field.minLength));
        }
        if (field?.maxLength) {
          validators.push(Validators.maxLength(field.maxLength));
        }
        if (field?.pattern) {
          validators.push(Validators.pattern(field.pattern));
        }
        fieldsCtrls[field.name] = new FormControl(field.value || '', validators);
      } else {
        fieldsCtrls[field.name] = new FormControl(field.value || '');
      }
    }
    this.form = new FormGroup(fieldsCtrls);
  }

  submit() {
    if (this.getFormValidationErrors(this.form).length) {
      this.form.markAllAsTouched();
    } else {
      this.sendFormData.emit(this.form.value);
    }
  }

  reset() {
    try {
      document.getElementById('clearFile').click();
    } catch (error) { }
    this.formDirective.resetForm();
    this.form.reset();
  }

  getFormValidationErrors(form: FormGroup) {
    const result = [];
    Object.keys(form.controls).forEach(key => {
      const controlErrors: ValidationErrors = form.get(key).errors;
      if (controlErrors) {
        Object.keys(controlErrors).forEach(keyError => {
          result.push({
            'control': key,
            'error': keyError,
            'value': controlErrors[keyError]
          });
        });
      }
    });
    return result;
  }

}
