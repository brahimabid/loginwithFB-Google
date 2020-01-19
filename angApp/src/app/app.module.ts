import { AuthentService } from './services/authent.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA} from '@angular/core';
import{HttpModule} from '@angular/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './login/auth/auth.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ContenuComponent } from './contenu/contenu.component';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { OffEmploiComponent } from './off-emploi/off-emploi.component';
import { OffRecuComponent } from './off-recu/off-recu.component';
import { MesCondidatureComponent } from './mes-condidature/mes-condidature.component';
import { FormationsComponent } from './formations/formations.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NoopAnimationsModule} from '@angular/platform-browser/animations'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms'
import { MatRadioModule } from '@angular/material/radio';
import { ProfileComponent } from './profile/profile.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ListSocieteComponent } from './list-societe/list-societe.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TestComponent } from './test/test.component';


 
let config = new AuthServiceConfig([
  {   
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("787516636477-smkt9amdftedg3eijvfmd0vobjs0p0us.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("2499408067051067")
  }
])
export function provideConfig() {
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavBarComponent,
    SideBarComponent,
    ContenuComponent,
    OffEmploiComponent,
    OffRecuComponent,
    MesCondidatureComponent,
    FormationsComponent,
    ProfileComponent,
    AcceuilComponent,
    ListSocieteComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,SocialLoginModule,HttpModule,BrowserAnimationsModule,MatCheckboxModule,FormsModule
    ,MatRadioModule,MatToolbarModule

  ],
  schemas:[NO_ERRORS_SCHEMA],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },AuthentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
