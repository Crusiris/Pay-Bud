import { Component, OnInit } from '@angular/core';
import { PaybudService } from '../../services/paybud.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

constructor(private services: PaybudService, private router:Router) { 
  this.services.record('es_Es')
  .subscribe( e => {
    if (e === 'Cuentas'){
      this.router.navigate(['payments']);
    } else {console.log(`${e}`);}
  })

}

  ngOnInit() {}
  
}



