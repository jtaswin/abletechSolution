import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { MenuComponent } from './menu/menu.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SolutionComponent } from './solution/solution.component';

const appRoutes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'solution', canActivate: [AuthGuardService], component: SolutionComponent},
  { path: '', redirectTo: 'solution', pathMatch: 'full' },
  { path: '**', redirectTo: 'solution' }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SignupComponent,
    SigninComponent,
    SolutionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ AuthService, AuthGuardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
