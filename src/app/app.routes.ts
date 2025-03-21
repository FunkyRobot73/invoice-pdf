import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { AddCustomerComponent } from './cust/add-customer/add-customer.component';
import { SimpleQuoteComponent } from './cust/simple-quote/simple-quote.component';
import { PbQuoteComponent } from './cust/pb-quote/pb-quote.component';
import { HomeComponent } from './components/home/home.component';
import { BlogMakerComponent } from './cust/blog-maker/blog-maker.component';


export const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'blog', component:  BlogMakerComponent},
    { path: 'quote', component: SimpleQuoteComponent },
    { path: 'pb', component: PbQuoteComponent },
    { path: 'addcustomer', component: AddCustomerComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }