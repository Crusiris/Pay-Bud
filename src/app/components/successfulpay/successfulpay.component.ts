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

  constructor(private services: PaybudService, private router:Router) {
    this.services.record('es_Es')
    .subscribe( e => {
      console.log(e);
      if (e === 'cuenta'){
        this.router.navigate(['payments']);
       } else {console.log(`Error no esta entrando al si`);}
    })
  }


  ngOnInit() {
  }

}

