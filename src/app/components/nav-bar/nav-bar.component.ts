import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
    /* Mis cuentas, "titulo de cuenta", confirmar pago, comprobante */
title = '';
  constructor() { }

  ngOnInit(): void {
  }

}
