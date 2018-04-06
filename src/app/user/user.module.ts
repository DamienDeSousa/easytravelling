import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [   
    FormsModule,
    CommonModule
  ],
  declarations: [SignupComponent, SigninComponent]
})
export class UserModule { }
