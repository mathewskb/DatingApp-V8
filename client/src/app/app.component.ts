import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  baseURL = 'https://localhost:5001/api/';
  title = 'Dating App - V8';
  users: any;
  http = inject(HttpClient);

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.http.get(this.baseURL + 'users').subscribe({
      next: (response) => {
        console.log(response);
        this.users = response;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('request completed successfully');
      }
    })
  }
}
