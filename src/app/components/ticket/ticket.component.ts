import { Component, OnInit } from '@angular/core';
import { PaybudService } from '../../services/paybud.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  title: 'Electricidad';

  constructor(private services: PaybudService, private router:Router) {
    this.services.record('es_Es')
    .subscribe( e => {
      if (e === 'pagar'){
        this.router.navigate(['confirmPayment']);
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
