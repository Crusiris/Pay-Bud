import { Component, OnInit } from '@angular/core';
import { PaybudService } from '../../services/paybud.service';
import {Router} from '@angular/router';

@Component({
  selector: 'appsuccessful-pay',
  templateUrl: './successfulpay.component.html',
  styleUrls: ['./successfulpay.component.css']
})

export class SuccessfulPayComponent implements OnInit {
  comands:any[]=[]
//   accounts: any []=[
//   {
//     name:'Agua', 
//   },
//   {
//     name:'Luz',
//   },
//   {
//   name:'Internet'
//   },
//   {
//     name:'Gas'
//   }

// this.title = e];

  constructor(private services: PaybudService, private router:Router) {
    this.services.record('es_Es')
    .subscribe( e => {
      if (e === 'ir a cuentas'){
        this.router.navigate(['payments']);
        console.log('chao', e)
      } else {console.log(`${e} sino`);}
    })
   }

  ngOnInit() {
  }

}

