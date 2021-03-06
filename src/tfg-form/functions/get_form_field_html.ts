import * as Pluralize from 'pluralize';
//import { capitalize } from '@angular-devkit/core/src/utils/strings';


/////////////////////////////////////////////////////////////////////////////
//                        GET FORM FIELD HTML                              //
/////////////////////////////////////////////////////////////////////////////

export function getFormFieldHtml(opts:any){
    switch(opts.type){
      case 'select':
        return `
          <mat-select formControlName='${ opts['name'] }'>
            <mat-option *ngFor='let o of ${ Pluralize(opts['object_name']) }' [value]='o.id'>
              {{ o.${ opts['object_name'] }_name }}
            <mat-option>
          <mat-select>
          `
        case 'number':
        return `
            <mat-form-field>
              <input matInput formControlName='${ opts['name'] }' type='number' min='0' max='10' step='1'>
            <mat-form-field>
            `
        case 'text':
            return `
            <mat-form-field>
              <input matInput formControlName='${ opts['name'] }' type='text' placeholder=''>
            </mat-form-field>
        `
        case 'textarea':
          return `
          <mat-form-field>
            <mat-label>Leave a comment</mat-label>
            <textarea formControlName='${ opts['name'] }' matInput placeholder="Ex. It makes me feel..."></textarea>
          </mat-form-field>
        `
      default:
        return null;
    }
  }


////////////////////////////////////////////////////////////////////
//                        UNIT TESTS                              //
////////////////////////////////////////////////////////////////////
// let select_html = getFormFieldHtml('select', {
//     'object_name' : 'job'
// })
// console.log(select_html)

// let text_input_html = getFormFieldHtml('text', {
//     'object_name' : 'jobs'
// })
// console.log(text_input_html)

// let number_input_html = getFormFieldHtml('number', {
//     'object_name' : 'jobs'
// })
// console.log(number_input_html)