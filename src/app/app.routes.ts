import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppsComponent } from './apps/apps.component';

export const routes: Routes = [{
    path: 'login',
    // component: LoginComponent
    redirectTo: 'apps',
    pathMatch: 'full'
}, {
    path: '',
    redirectTo: 'apps',
    pathMatch: 'full'
},{
    path: 'apps',
    component: AppsComponent,
}];
