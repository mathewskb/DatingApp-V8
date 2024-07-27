import { Component, inject, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  model: any = {};
  cancelRegister = output<boolean>();
  private accoutservice = inject(AccountService);
  private toastr = inject(ToastrService)


  register() {
    // console.log(this.model);
    this.accoutservice.register(this.model).subscribe({
      next: (response) => {
        console.log(response);
        this.cancel();
      },
      error: (err) => {
        console.log(err);
        this.toastr.error('Something went wrong. ' + err.error)
      }
    })
  }
  cancel() {
    // console.log('cancelled');
    this.cancelRegister.emit(false);
  }
}
