import { Component, inject, OnInit } from '@angular/core';
import { RegisterComponent } from "../register/register.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RegisterComponent,
    HttpClientModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
 
  registerMode = false;
  baseURL = 'https://localhost:5001/api/';
  http = inject(HttpClient);
  users: any;

  ngOnInit(): void {
    this.getUsers();
  }

  registerToggle(){
    this.registerMode = !this.registerMode;
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

  cancelRegistermode(event:boolean){
    this.registerMode = event;
  }

}
