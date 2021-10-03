import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { MyModalComponent } from './my-modal/my-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



const materialModules = [
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule
];

@NgModule({
  imports: [
    CommonModule,
    ...materialModules,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations:[
    MyModalComponent
  ],

  exports: [
    ...materialModules
  ],
})

export class MaterialModule { }