import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { UserdeatilServiceService } from './shared/userdeatil-service.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { InputFormComponent } from './user-details/input-form/input-form.component';
import { UsersListComponent } from './user-details/users-list/users-list.component';
import { from } from 'rxjs/observable/from';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    InputFormComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot([])
  ],
  providers: [UserdeatilServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
