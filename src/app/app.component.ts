import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <style>
  h1{
    border: black 2px solid;
    text-align:center;
  }
  </style>
  <h1>{{powitanie}} {{roznica}}</h1>
  <img src="assets/images/Homelander.png" height="200px" width="200px">
  <img src={{photoUrl_1}} height="200px" width="200px">
  <img [src]="photoUrl_2" height="200px" width="200px">
  <p [style.background-color]="kolor" [style.text-align]="jak"> Nazywam się {{ imie }} {{ nazwisko }}</p>
  <img src="assets/images/Homelander.png" [class.zdjecie]="aktywna" height="200px" width="200px">
  <button (click)="zmienKolor()" type="button" [class.przycisk]="aktywna">Zmień kolor tła</button>
  `,
   styles: [`.zdjecie {border: 2px solid #000; display: block; margin: auto;}
   .przycisk {border: none; color: green; background-color: inherit; padding: 10px; font-size: 12px; cursor: pointer; dissplay:block; margin: 10px auto;}
   .przycisk:hover {background: #eee;}`]
//  templateUrl: './moj_plik.html',
//  styleUrls: ['./styl.css']
})
export class AppComponent {
  title = 'kubab';
  imie:string = "Home";
  nazwisko:string = "Lander";
  powitanie:string = "Witaj".toUpperCase();
  roznica:number = 14-4;
  photoUrl_1:string = "assets/images/Homelander.png"
  photoUrl_2:string = "assets/images/Homelander.png"
  kolor:string = "gray";
  jak:string="center";
  aktywna: boolean = true;

  zmienKolor() {
    this.kolor = this.kolor === "yellow" ? "green" : "yellow";
  }
}
