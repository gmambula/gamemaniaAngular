import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';
import { LoginComponent } from '../views/login/login.component';
import { HistoriaComponent } from '../views/historia/historia.component';

const routes: Routes = [
   { path: "", component: HomeComponent},
   { path: "login", component: LoginComponent },
   { path: "historia", component: HistoriaComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
