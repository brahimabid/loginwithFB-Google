import { Injectable } from '@angular/core';
import{Http}from "@angular/http"
import 'rxjs/add/operator/map';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthentService implements CanActivate {
lien="http://localhost:5550/login/auth"
loged:boolean=false;
  constructor(private http:Http,private router:Router) {
  
   }
   isloged(){
       this.loged=true;
   }
   login(body){
     return this.http.post(this.lien,body).map(res=>{
       return res.json() ;    })
   }
   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.loged==true){     
    return true;
    }else{
      this.router.navigate(['login']);
      return false
    } 
   }
   logout(){
     this.loged=false;
     this.router.navigate(['']);
   }
    

}
