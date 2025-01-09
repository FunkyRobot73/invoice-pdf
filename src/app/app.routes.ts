import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuoteComponent } from './quote/quote/quote.component';
import { AppComponent } from './app.component';
import { InvoiceComponent } from './invoice/invoice/invoice.component';
import { CformComponent } from './cform/cform/cform.component';


export const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: QuoteComponent },
    { path: 'quote', component: QuoteComponent },
    { path: 'invoice', component: InvoiceComponent },
    { path: 'form', component: CformComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }