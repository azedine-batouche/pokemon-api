
import { NgModule }       from '@angular/core';
import { RouterModule }   from '@angular/router';
import { AuthService }    from './auth.service';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'login', component: LoginComponent }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthService
  ]
})
export class LoginRoutingModule {}