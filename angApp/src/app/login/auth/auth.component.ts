import { AuthentService } from '../../services/authent.service';
import { Component, OnInit } from '@angular/core';
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { Router } from '@angular/router';
import { AuthService } from "angularx-social-login";
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  checked = true;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  
  
  
  private user: SocialUser;

  private loggedIn: boolean;
  constructor(private authService: AuthService,private router:Router,
    private serv:AuthentService) { }
  signInWithGoogle(){
    const res=this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
     
    console.log(res);   
    
    
      this.authService.authState.subscribe((user) => {

        console.log(user)
        let password=user.id;
        
        let body={name:user.name,firstName:user.firstName,
                  password:password,lastName:user.lastName,
                 photoUrl:user.photoUrl,email:user.email,provider:user.provider}
                this.serv.login(body).subscribe(res=>{
                  console.log(res);
                  this.serv.isloged();
                  if(res.status)  this.router.navigate(['home']);
                })
          
          
       
    })
   
  }
  
 
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      console.log(user)
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.loggedIn)
      if(this.loggedIn==true){this.router.navigate(['home']);}
  })
 
  } 
 
  

  ngOnInit() {
  }

}
