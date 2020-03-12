import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
    /* Mis cuentas, "titulo de cuenta", confirmar pago, comprobante */
    @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
