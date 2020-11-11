import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Bootstrap Form Builder';
  public formConfig: any = {
    title: "Sample Form",
    result: "formData",
    controls: {
      saveButton: 'Save',
      resetButton: 'Reset'
    },
    fields: [
      {
        type: 'text',
        name: 'fullName',
        label: 'Full Name',
        value: '',
        required: true,
        validationMessage: 'Full Name is required.',
        multiline: false,
        placeholder: 'Full Name'
      },
      {
        type: 'email',
        name: 'email',
        label: 'Email Address',
        value: '',
        required: true,
        validationMessage: 'Email Address is required.',
        placeholder: 'Email Address'
      },
      {
        type: 'text',
        name: 'description',
        label: 'Description',
        value: '',
        required: false,
        multiline: true,
        lines: 5,
        placeholder: 'Description'
      },
      {
        type: 'radio',
        name: 'gender',
        label: 'Gender',
        required: true,
        style: 'row',
        value: '',
        options: [
          { key: 'male', label: 'Male' },
          { key: 'female', label: 'Female' },
          { key: 'other', label: 'Other' }
        ],
        validationMessage: 'Select Gender.'
      },
      {
        type: 'date',
        name: 'birthdate',
        label: 'Birth Date',
        // value: '2018-07-22',
        // min: '2018-01-01',
        // max: '2018-12-31',
        required: true,
        validationMessage: 'Please Select Birth Date.',
      },
      {
        type: 'time',
        name: 'birthtime',
        label: 'Birth Time',
        // value: '06:35',
        required: true,
        validationMessage: 'Please Select Birth Time.',
      },
      {
        type: 'dropdown',
        name: 'country',
        label: 'Country',
        value: '',
        required: true,
        options: [
          { key: 'india', label: 'India' },
          { key: 'usa', label: 'USA' },
          { key: 'canada', label: 'Canada' }
        ],
        placeholder: 'Select Country',
        validationMessage: 'Please Select Country.',
      },
      {
        type: 'range',
        name: 'salary',
        label: 'Salary',
        sliderLabel: '$',
        min: 0,
        max: 100,
        step: 5,
        value: "0",
        required: true,
        validationMessage: 'Please Select Salary.',
      },
      {
        type: 'datetime',
        name: 'projectdatetime',
        label: 'Project Date & Time',
        // value: '1990-03-28T06:35',
        required: true,
        validationMessage: 'Project Date & Time is required.',
      },
      {
        type: 'file',
        name: 'projectimage',
        label: 'Project Image',
        multiple: false,
        value: null,
        required: true,
        onUpload: this.onUpload.bind(this),
        validationMessage: 'Please Select Project Image Files.',
      },
      {
        type: 'checkbox',
        name: 'laguages',
        label: 'Languages',
        required: true,
        style: 'row',
        value: {
          // cooking: false, dancing: true
        },
        options: [
          { key: 'english', label: 'English' },
          { key: 'gujarati', label: 'Gujarati' },
          { key: 'hindi', label: 'Hindi' },
          { key: 'french', label: 'French' },
          { key: 'spanish', label: 'Spanish' }
        ],
        validationMessage: 'Please Select Languages.'
      },
      {
        type: 'switch',
        name: 'socialaccount',
        label: 'Social Account',
        required: false,
        style: 'row',
        value: {
          // maths: true
        },
        options: [
          { key: 'facebook', label: 'Facebook' },
          { key: 'linkedin', label: 'LinkedIn' },
          { key: 'whatsapp', label: 'WhatsApp' }
        ],
        validationMessage: 'Please Select Social Account.'
      }
    ]
  };

  onUpload(event: any) {
    let files = event.target.files;
    console.log(files[0]);
  }
}
