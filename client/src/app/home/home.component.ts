import { Component } from '@angular/core';
import { RegisterComponent } from "../register/register.component";
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RegisterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  registerMode = false;
  baseURL = environment.apiUrl

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegistermode(event: boolean) {
    this.registerMode = event;
  }

}
