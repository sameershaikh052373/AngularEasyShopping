import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from './my-profile.component';
import { PersonalComponent } from './personal/personal.component';
import { AddressComponent } from './address/address.component';

const routes: Routes = [

  
  {
    path: '',
    component: MyProfileComponent,
    children: [
      {
        path:'',
        redirectTo:'personal',
        pathMatch:'full'
      },
      {
        path: 'personal',
        component: PersonalComponent,
      },
      {
        path: 'address',
        component: AddressComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyProfileRoutingModule { }
