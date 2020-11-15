import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { UserService } from './user.service';
import { InputFormComponent } from './input-form/input-form.component';
import { UserDetailsComponent } from './user-details.component';
import { UsersListComponent } from './users-list/users-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [UserDetailsComponent, InputFormComponent, UsersListComponent],
  providers: [UserService],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [UserDetailsComponent],
})
export class UserModule {}
