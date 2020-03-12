import { Component, OnInit } from '@angular/core';
import { PaybudService } from '../../services/paybud.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  constructor(private services: PaybudService, private router:Router) {
    this.services.record('es_Es')
    .subscribe( e => {
      if (e === 'pagar'){
        this.router.navigate(['successfulPay']);
        console.log('chao', e)
      } else {console.log(`${e} sino`);}
    })
   }

  ngOnInit() {
  }

}
