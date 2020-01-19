import { AuthentService } from './services/authent.service';
import { OffRecuComponent } from './off-recu/off-recu.component';
import { MesCondidatureComponent } from './mes-condidature/mes-condidature.component';
import { FormationsComponent } from './formations/formations.component';
import { OffEmploiComponent } from './off-emploi/off-emploi.component';
import { ContenuComponent } from './contenu/contenu.component';
import { AuthComponent } from './login/auth/auth.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListSocieteComponent } from 'src/app/list-societe/list-societe.component';
import { NavBarComponent } from 'src/app/nav-bar/nav-bar.component';
import { ProfileComponent } from 'src/app/profile/profile.component';
import { AcceuilComponent } from 'src/app/acceuil/acceuil.component';


const routes: Routes =[
  {path:"",redirectTo :"home", pathMatch:'full'},
  {path:"login",component:AuthComponent},
  {path:"**",component:ContenuComponent,canActivate:[AuthentService]},

  {path:"home",component:ContenuComponent,canActivate:[AuthentService]},
  
    {path:"offreEmploi",component:OffEmploiComponent,outlet:"outlet2"},
    {path:"formation",component:FormationsComponent},
    {path:"condidatures",component:MesCondidatureComponent},
    { path:"entretien" , component:OffRecuComponent, outlet:"outlet2",canActivate:[AuthentService]},
    {path:"listeSociete",component:ListSocieteComponent},
    { path:"profile" , component:ProfileComponent },
    { path:"acceuil" , component:AcceuilComponent }
  
  
    
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
