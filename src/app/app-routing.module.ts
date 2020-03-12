import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { PaymentsComponent } from '../app/components/payments/payments.component';
import { SuccessfulPayComponent } from '../app/components/successfulpay/successfulpay.component';
import { TicketComponent } from '../app/components/ticket/ticket.component';


const routes: Routes = [
  { path: 'home', component:HomeComponent},
  { path: 'payments', component:PaymentsComponent },
  { path: 'successfulPay', component:SuccessfulPayComponent},
  { path: 'ticket', component:TicketComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
