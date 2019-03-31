import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
// here we will import all our angular-material dependencies
import {
  MatSnackBarModule,
  MatFormFieldModule,
  MatSelectModule,
  MatCheckboxModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatDialogModule
} from "@angular/material";

@NgModule({
  imports: [
    MatSnackBarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [
    MatSnackBarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class MaterialModule {}
