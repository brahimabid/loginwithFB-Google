import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
//@Input () user;
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
