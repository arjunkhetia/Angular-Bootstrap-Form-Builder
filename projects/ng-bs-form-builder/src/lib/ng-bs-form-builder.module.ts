import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgBsFormBuilderComponent } from './ng-bs-form-builder.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FieldBuilderComponent } from './field-builder/field-builder.component';
import { TextboxComponent } from './fields/textbox/textbox.component';
import { DropdownComponent } from './fields/dropdown/dropdown.component';
import { RadioComponent } from './fields/radio/radio.component';
import { CheckboxComponent } from './fields/checkbox/checkbox.component';
import { FileComponent } from './fields/file/file.component';
import { SwitchComponent } from './fields/switch/switch.component';
import { RangeComponent } from './fields/range/range.component';
import { DateComponent } from './fields/date/date.component';
import { TimeComponent } from './fields/time/time.component';
import { DatetimeComponent } from './fields/datetime/datetime.component';

@NgModule({
  declarations: [
    NgBsFormBuilderComponent,
    FormBuilderComponent,
    FieldBuilderComponent,
    TextboxComponent,
    DropdownComponent,
    RadioComponent,
    CheckboxComponent,
    FileComponent,
    SwitchComponent,
    RangeComponent,
    DateComponent,
    TimeComponent,
    DatetimeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NgBsFormBuilderComponent
  ]
})
export class NgBsFormBuilderModule { }
