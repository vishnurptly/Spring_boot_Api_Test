import { Routes } from '@angular/router';
import path from 'path';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { TablesComponent } from './tables/tables.component';

export const routes: Routes = [
   {path:"customerList",component:CustomerlistComponent},
   {path:"AllCustomers",component:TablesComponent}
];
