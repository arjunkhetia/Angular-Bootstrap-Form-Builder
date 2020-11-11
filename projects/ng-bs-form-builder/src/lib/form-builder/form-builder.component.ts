import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

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
        fieldsCtrls[field.name] = new FormControl(field.value || '', [Validators.required]);
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
      if (this.formConfig['result']) {
        sessionStorage.setItem(this.formConfig['result'], JSON.stringify(this.form.value));
      }
    }
  }

  reset() {
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
