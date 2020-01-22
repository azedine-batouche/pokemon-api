import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot }
	from '@angular/router';
import { AuthService } from './auth.service';
import { BehaviorSubject, of } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

	navbar = new BehaviorSubject(false);

	constructor(private authService: AuthService, private router: Router) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		let url: string = state.url; 
		return this.checkLogin(url);
	}

	checkLogin(url: string): boolean {
		if (this.authService.isLoggedIn) { this.navbar.next(true); return true;} 
		this.authService.redirectUrl = url;
		this.router.navigate(['/login']);
		this.navbar.next(false);
		return false;
	}
	
	displayNavbar(){
		return of(this.navbar.getValue());
	}
}