import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  public logoImg : string = ''
  constructor() { }

  ngOnInit(): void {
    this.logoImg = './assets/logo.png'
  }

}
