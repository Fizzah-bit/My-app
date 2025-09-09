import { Routes } from '@angular/router';
import { Admin } from './Component/admin/admin';
import { User } from './Component/user/user';
import { About } from './Component/about/about';


export const routes: Routes = [
 {path:'',component:User},
 {path:'about',component:About},

 {path:'admin',loadComponent:()=>import('./Component/admin/admin').then((c)=>c.Admin)}
];

