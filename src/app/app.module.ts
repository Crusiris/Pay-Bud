import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* ARCHIVO DE RUTAS */
import { AppRoutingModule } from './app-routing.module';

/*COMPONENTES */
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { SuccessfulPayComponent } from './components/successfulpay/successfulpay.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from '../app/components/footer/footer.component';

// import { FooterComponent } from './globals/footer/footer.component';
import { ConfirmPaymentComponent } from './components/confirm-payment/confirm-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaymentsComponent,
    TicketComponent,
    SuccessfulPayComponent,
    NavBarComponent,
    ConfirmPaymentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
