import { Component, OnInit } from '@angular/core';
import { PaybudService } from '../../services/paybud.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-confirm-payment',
  templateUrl: './confirm-payment.component.html',
  styleUrls: ['./confirm-payment.component.css']
})
export class ConfirmPaymentComponent implements OnInit {

  constructor(private services: PaybudService, private router:Router) {
    this.services.record('es_Es')
    .subscribe( e => {
      if (e === 'confirmar'){
        this.router.navigate(['successfulPay']);
        console.log('chao', e)
      }  else if(e == 'anterior' || e == 'atras' || e == 'atrás'){
         this.router.navigate(['payments']);
      }
       else {console.log(`${e} sino`);}
    })
   }

  ngOnInit() {
  }

}
