import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccComponent } from './acc/acc.component';
import { AuthGuard } from './auth.guards';
import { FinanceComptabiliteGuard } from './FinanceComptabilite.gurad';
import { LoginAComponent } from './login-a/login-a.component';
import { LoginComponent } from './login/login.component';
import { LogincComponent } from './loginc/loginc.component';
import { RegisterComponent } from './register/register.component';
import { ResponsableAchatGuard } from './ResponsableAchat.guards';
import { ResponsableVenteGuard } from './Responsable.Vente.guards';
const routes: Routes = [
  {path:'',component:AccComponent},
  {path:'rvente',loadChildren:()=>import('./rvente/rvente.module').then(m=>m.RventeModule),canActivate: [ResponsableVenteGuard]},
  {path:'rcomf',loadChildren:()=>import('./rcomf/rcomf.module').then(m=>m.RcomfModule),canActivate: [FinanceComptabiliteGuard]},
  {path:'register/:roleName',component:RegisterComponent},
  {path:'user/:roleName/login',component:LoginComponent},
  // {path:'LoginA',component:LoginAComponent},
  // {path:'LoginC',component:LogincComponent},
  {path:'rachat',loadChildren:()=>import('./rachat/rachat.module').then(m=>m.RachatModule),canActivate: [ResponsableAchatGuard]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
