
import { NgModule }       from '@angular/core';
import { RouterModule }   from '@angular/router';
import { AuthService }    from './auth.service';
import { LoginComponent } from './login.component';
import { AuthGuard } from './auth-guard.service';

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
    AuthGuard,  
    AuthService
  ]
})
export class LoginRoutingModule {}