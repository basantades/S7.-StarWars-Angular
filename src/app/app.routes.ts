import { Routes } from '@angular/router';
import { ListStarshipsComponent } from './components/list-starships/list-starships.component';
import { ShowStarshipComponent } from './components/show-starship/show-starship.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/users/login/login.component';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'starships', component: ListStarshipsComponent },
    { path: 'starship/:id', component: ShowStarshipComponent },
    { path: '**', redirectTo: '' } // Ruta de "no encontrado"
];
