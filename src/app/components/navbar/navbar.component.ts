import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService , private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  // click event of logout
  onLogoutClickEvent() {
    this.authService.logout();
    console.log('Successfully logged out !!');
    this.flashMessage.show('Successfully logged out !!', {cssClass: 'alert-success', timeout: '3000'});
    return false;
  }

}
