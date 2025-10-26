import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardsComponent } from './cards/cards.component';
import { CustomPipe } from './pipes/custom.pipe';
import { CustomPipesPipe } from './pipes/custom-pipes.pipe';
import { AddProductComponent } from './add-product/add-product.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';
import { PersonalComponent } from './my-profile/personal/personal.component';
import { AddressComponent } from './my-profile/address/address.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren:() => import('./cards/cards.module').then(m=>m.CardsModule)
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },

  // {
  //   path: 'product',
  //   component: ProductComponent,
  // },
  {
    path: 'product/:id',
    component: ProductComponent,
  },
  {
    path:'profile',
    loadChildren:() => import('./my-profile/my-profile.module').then(m=>m.MyProfileModule),
    canActivate:[authGuard]
  },
  {
    path: '**', //wild card
    redirectTo: 'not-found',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardsComponent,
    CustomPipe,
    CustomPipesPipe,
    AddProductComponent,
    AboutUsComponent,

    MyProfileComponent,
    NotFoundComponent,
    ProductComponent,
    PersonalComponent,
    AddressComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
