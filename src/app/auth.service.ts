import { Injectable } from '@angular/core';
// RxJS 6
import { Observable, of, Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import { tap, delay } from 'rxjs/operators';

@Injectable()
export class AuthService {
	isLoggedIn: boolean = false;
	redirectUrl: string;
	displayNavbar = new BehaviorSubject(false);
	

	login(name: string, password: string): Observable<boolean> {
		let isLoggedIn = (name === 'admin' && password === 'admin');
		return of(true).pipe(
			delay(1000),
			tap(val => {this.isLoggedIn = isLoggedIn })
		);
	}

	logout(): void {
		this.isLoggedIn = false;
	}
	 displayNav() {
		this.displayNavbar.next(this.isLoggedIn);
		return this.displayNavbar.getValue();	
	}

}