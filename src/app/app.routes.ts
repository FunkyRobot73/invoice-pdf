import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuoteComponent } from './quote/quote/quote.component';
import { AppComponent } from './app.component';
import { CformComponent } from './cform/cform/cform.component';
import { AddCustomerComponent } from './cust/add-customer/add-customer.component';


export const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: QuoteComponent },
    { path: 'quote', component: QuoteComponent },
    { path: 'pb', component: CformComponent },
    { path: 'addcustomer', component: AddCustomerComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }