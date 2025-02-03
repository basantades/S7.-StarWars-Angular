import { Routes } from '@angular/router';
import { ListStarshipsComponent } from './components/list-starships/list-starships.component';
import { ShowStarshipComponent } from './components/show-starship/show-starship.component';

export const routes: Routes = [

    { path: '', component: ListStarshipsComponent },
    { path: 'starship/:id', component: ShowStarshipComponent },
    { path: '**', redirectTo: '' } // Ruta de "no encontrado"
];
