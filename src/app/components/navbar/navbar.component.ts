import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu(): void{
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  constructor(
    private route: ActivatedRoute,
    private location:Location
  ){}}
