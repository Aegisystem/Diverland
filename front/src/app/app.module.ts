import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route} from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderCajeroComponent } from './pestañaCajero/header-cajero/header-cajero.component';
import { ContenidoCajeroComponent } from './pestañaCajero/contenido-cajero/contenido-cajero.component';
import { HeaderAdministradorComponent } from './pestañaAdministrador/header-administrador/header-administrador.component';
import { ContenidoAdministradorComponent } from './pestañaAdministrador/contenido-administrador/contenido-administrador.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cajero',
    component: ContenidoCajeroComponent
  },
  {
    path: 'administrador',
    component: ContenidoAdministradorComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutusComponent,
    LoginComponent,
    FooterComponent,
    HeaderCajeroComponent,
    ContenidoCajeroComponent,
    HeaderAdministradorComponent,
    ContenidoAdministradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
