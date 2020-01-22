import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
	selector: 'login',
	template: `
	<div class="wrapper-main"> 
    <div class="wrapper">
    <div class="card  ctn-log">
		<div class="border-bottom  log-info mb-3 ">
			<div class="row px-3">
				<div class="col-md-6 col-sm-12">
					<p class=" text-success pr-3 pt-3">Name: admin</p>
				</div>
				<div class="col-md-6 col-sm-12">
					<p class=" text-success pt-3">Password: admin</p>
				</div>
			</div>
		</div>

      <div class="card-content text-center">
        <span class="card-title m-auto">Login</span>
        <p><em *ngIf="successConnection" class="msg-success">{{message}}</em></p>
        <p><em *ngIf="!successConnection" class="msg-danger">{{message}}</em></p>
      </div>
			<form #loginForm="ngForm" (keyup.enter)='login()'>
	      <div class="group-input px-5">
					<label for="name">Name</label>
	        <input type="text" id="name"  class="form-control " [(ngModel)]="name" name="name" required>
	      </div>
	      <div class="group-input px-5">
	        <label for="password">Password</label>
	        <input type="password" id="password"  class="form-control" [(ngModel)]="password" name="password" required>
	      </div>
	    </form>
      <div class="d-block p-3 m-auto">
        <a (click)="login()"  class="btn btn-success mb-3 px-4 px-2"  *ngIf="!authService.isLoggedIn">Se connecter</a>
        <a (click)="logout()" *ngIf="authService.isLoggedIn">Se déconnecter</a>
      </div>
    </div>
    </div>
	</div>
  `
})
export class LoginComponent {
	message: string = 'Vous êtes déconnecté !';
	successConnection = false;
	private name: string;
	private password: string;

	constructor(private authService: AuthService, private router: Router) {}

	// Informe l'utilisateur sur son authentfication.
	setMessage() {
		if (this.authService.isLoggedIn) {
			this.message = 'Vous êtes connecté.';
			this.successConnection = true;
		}
		this.message = 'Identifiant ou mot de passe incorrect.';
		this.successConnection = false;
	}

	login() {
		this.message = 'Tentative de connexion en cours ...';
		this.authService.login(this.name, this.password).subscribe(() => {
			this.setMessage();
			if (this.authService.isLoggedIn) {
				const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/pokemons/all';
				this.router.navigate([redirect]);
			} else {
				this.password = '';
			}
		});
	}

	logout() {
		this.authService.logout();
		this.setMessage();
		this.successConnection = false;
	}
}