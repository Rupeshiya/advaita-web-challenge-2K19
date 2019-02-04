import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username: string;
password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }
  onLoginSubmit() {
    const user = {
      username: this.username,
      password : this.password
    };
    this.authService.getAuthenticated(user).subscribe(data => {
      console.log('data', data);
      if (data.success) {
          this.flashMessage.show('You are logged in !!' , { cssClass : 'alert-success', timeout: 3000});
          // wwe willstore the data like token and user now
          this.authService.storeUserData(data.token, data.user);
          console.log('user token-', data.token);
          console.log('user info-', data.user);
          this.router.navigate(['/dashboard']);
      } else {
        this.flashMessage.show(data.msg, {cssClass: 'alert-info', timeout: 3000});
        this.router.navigate(['/login']);
      }
    });
  }

}
