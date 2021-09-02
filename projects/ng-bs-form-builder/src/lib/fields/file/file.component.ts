import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {

  @Input() field: any = {};
  @Input() form: FormGroup;
  public fileName: String = '';
  public validationMessage: string = '';

  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }
  get isTouched() { return this.form.controls[this.field.name].touched; }
  get isErrors() { return this.form.controls[this.field.name].errors; }

  constructor() { }

  ngOnInit(): void {
  }

  upload(event: any) {
    let files: any;
    if (event?.target?.files) {
      files = event.target.files;
    } else {
      files = event;
    }
    if (files[0]) {
      this.validationMessage = '';
      this.fileName = 'File Uploaded : ';
      for (let file in files) {
        if (files[file]['name'] && (files[file]['name'] !== 'item')) {
          this.fileName = this.fileName + files[file]['name'] + ', ';
        } else if (files[file]['name'] === 'item') {
          this.fileName = this.fileName.substring(0, this.fileName.length - 2);
        }
      }
    } else {
      this.fileName = '';
    }
  }

  clearUpload() {
    this.form.get(this.field.name).setValue(null);
    this.fileName = '';
    if (this.isErrors && this.field && this.field.required) {
      this.validationMessage = this.field.requiredMessage;
    }
  }

}
