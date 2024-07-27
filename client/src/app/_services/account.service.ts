import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '../_models/user';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseURL = 'https://localhost:5001/api/';
  http = inject(HttpClient);
  currentUser = signal<User | null>(null);

  login(model: any) {

    return this.http.post<User>(this.baseURL + 'account/login', model).pipe(
      map((user) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUser.set(user);
        }
        console.log(user);
      })
    );
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUser.set(null);
  }

  register(model: any) {

    return this.http.post<User>(this.baseURL + 'account/register', model).pipe(
      map((user) => {
        
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUser.set(user);
          // console.log(user);
        }
        return user;
      })
    );
  }

}
