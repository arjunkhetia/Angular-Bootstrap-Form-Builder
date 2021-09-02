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
    // titleStyle: {
    //   'color': 'blue',
    //   'background': 'azure'
    // },
    controls: {
      saveButton: 'Save',
      resetButton: 'Reset'
    },
    fields: [
      {
        type: 'text',
        id: 'full-name-id',
        name: 'fullName',
        label: 'Full Name',
        value: '',
        required: true,
        requiredMessage: 'Full Name is required.',
        // minLength: 10,
        // minLengthMessage: 'Minimum length is required.',
        // maxLength: 20,
        // pattern: "^[a-zA-Z0-9]+$",
        // patternMessage: 'Invalid Full Name.',
        multiline: false,
        placeholder: 'Full Name',
        // readonly: true,
        onChange: (event: any) => {
          console.log(event.target.value);
        },
        // containerStyle: {
        //   'width': '50%',
        //   'float': 'left'
        // },
        // labelStyle: {
        //   'width': '50%',
        //   'color': 'orange'
        // },
        // inputContainerStyle: {
        //   'width': '50%'
        // },
        // inputStyle: {
        //   'color': 'green'
        // }
      },
      {
        type: 'email',
        name: 'email',
        label: 'Email Address',
        value: '',
        required: true,
        requiredMessage: 'Email Address is required.',
        placeholder: 'Email Address',
        // containerStyle: {
        //   'width': '50%'
        // }
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
        requiredMessage: 'Select Gender.',
        style: 'row',
        value: '',
        options: [
          { key: 'male', label: 'Male' },
          { key: 'female', label: 'Female' },
          { key: 'other', label: 'Other' }
        ],
        // readonly: true,
        onChange: (data: any) => {
          console.log(data);
        },
        // textStyle: {
        //   'color': 'green'
        // }
      },
      {
        type: 'date',
        name: 'birthdate',
        label: 'Birth Date',
        // value: '2018-07-22',
        // min: '2018-01-01',
        // max: '2018-12-31',
        required: true,
        requiredMessage: 'Please Select Birth Date.',
        onChange: (event: any) => {
          console.log(event.target.value);
        }
      },
      {
        type: 'time',
        name: 'birthtime',
        label: 'Birth Time',
        // value: '06:35',
        required: true,
        requiredMessage: 'Please Select Birth Time.',
        onChange: (event: any) => {
          console.log(event.target.value);
        }
      },
      {
        type: 'dropdown',
        name: 'country',
        label: 'Country',
        value: '',
        required: true,
        requiredMessage: 'Please Select Country.',
        options: [
          { key: 'india', label: 'India' },
          { key: 'usa', label: 'USA' },
          { key: 'canada', label: 'Canada' }
        ],
        placeholder: 'Select Country',
        onChange: (event: any) => {
          console.log(event.target.value);
        }
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
        requiredMessage: 'Please Select Salary.',
        onChange: (event: any) => {
          console.log(event.target.value);
        }
      },
      {
        type: 'datetime',
        name: 'projectdatetime',
        label: 'Project Date & Time',
        // value: '1990-03-28T06:35',
        required: true,
        requiredMessage: 'Project Date & Time is required.',
        onChange: (event: any) => {
          console.log(event.target.value);
        }
      },
      {
        type: 'file',
        name: 'projectimage',
        label: 'Project Image',
        multiple: false,
        value: null,
        required: true,
        onUpload: this.onUpload.bind(this),
        requiredMessage: 'Please Select Project Image Files.',
      },
      {
        type: 'checkbox',
        name: 'laguages',
        label: 'Languages',
        required: true,
        requiredMessage: 'Please Select Languages.',
        style: 'row',
        value: {
          // english: false, gujarati: true
        },
        options: [
          { key: 'english', label: 'English' },
          { key: 'gujarati', label: 'Gujarati' },
          { key: 'hindi', label: 'Hindi' },
          { key: 'french', label: 'French' },
          { key: 'spanish', label: 'Spanish' }
        ],
        onChange: (options: any) => {
          console.log(options);
        },
        // textStyle: {
        //   'color': 'green'
        // }
      },
      {
        type: 'switch',
        name: 'socialaccount',
        label: 'Social Account',
        required: true,
        requiredMessage: 'Please Select Social Account.',
        style: 'row',
        value: {
          // maths: true
        },
        options: [
          { key: 'facebook', label: 'Facebook' },
          { key: 'linkedin', label: 'LinkedIn' },
          { key: 'whatsapp', label: 'WhatsApp' }
        ],
        onChange: (options: any) => {
          console.log(options);
        }
      }
    ]
  };

  receiveData(data: any) {
    console.log(data);
  }

  onUpload(event: any) {
    let files: any;
    if (event?.target?.files) {
      files = event.target.files;
    } else {
      files = event
    }
    console.log(files);
  }
}
