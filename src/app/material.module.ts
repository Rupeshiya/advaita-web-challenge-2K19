import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// here we will import all our angular-material dependencies
import {
    MatSnackBarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule
 } from '@angular/material';

@NgModule({
  imports:[
    MatSnackBarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule
  ],
  exports: [
    MatSnackBarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule
  ]
})
export class MaterialModule {}
