import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
 
@Component({
  selector: 'app-contenu',
  templateUrl: './contenu.component.html',
  styleUrls: ['./contenu.component.scss']
})
export class ContenuComponent implements OnInit {

  private user: SocialUser;
  private loggedIn: boolean;
  constructor(private authService: AuthService,private router:Router) { }
 
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      console.log(user)
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
  signOut(): void {
    this.authService.signOut();
    this.router.navigate(['']);
  }

}
