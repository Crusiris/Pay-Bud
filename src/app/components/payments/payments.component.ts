import { Component, OnInit } from '@angular/core';
import { PaybudService } from '../../services/paybud.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  constructor(private services: PaybudService, private router:Router) { 
    this.services.record('es_Es')
    .subscribe( e => {
      if (e === 'Pagar luz'){
        this.router.navigate(['ticket']);
        console.log('chao', e)
      } else {console.log(`${e} sino`);}
    })
  }

  ngOnInit() {
  }

}
