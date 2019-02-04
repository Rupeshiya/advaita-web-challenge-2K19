import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate-service.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: string;
  username: string;
  password: string;
  email: string;

  constructor(
    private validate: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }
  onRegisterSubmit() {
    const user = {
      // since we have done double binding so we can access this property from here
      name: this.name,
      username: this.username,
      password: this.password,
      email: this.email
    };
    if (!this.validate.validateRegister(user)) {
      this.flashMessage.show('Please fill all the info !!', {cssClass: 'alert-danger', timeout: 2000});
      console.log('Please fill all the info !!');
    }
    if (!this.validate.validateEmail(user.email)) {
      this.flashMessage.show('Please enter a valid email !!', {cssClass: 'alert-danger', timeout: 2000});
      console.log('Please enter the valid email !!');
    }
    this.authService.getRegister(user)
      .subscribe(res => {
        if (res) {
          console.log('response from register component using auth service ', res);
          this.flashMessage.show('Successfully registered ,Login to continue', {cssClass: 'alert-success', timeout: 5000});
          this.router.navigate(['/login']);
        } else {
          this.flashMessage.show('Unable to register !', {cssClass: 'alert-info', timeout: 5000});
          this.router.navigate(['/register']);
        }
      });
  }

}
