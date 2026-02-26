import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/Home' },
    { path: 'Home', component: HomeComponent },
    { path: 'my-work', loadComponent: () => import('./component/my-work/my-work.component').then(m => m.MyWorkComponent) },
    { path: 'Contact-me', loadComponent: () => import('./component/contact-me/contact-me.component').then(m => m.ContactMeComponent) },
    { path: '**', redirectTo: '/Home' }
];
