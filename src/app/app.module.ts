import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { SuccessfulPayComponent } from './components/successful-pay/successful-pay.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaymentsComponent,
    TicketComponent,
    SuccessfulPayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
