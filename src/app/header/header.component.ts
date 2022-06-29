import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  // userName:any;
  // aKC:any;
  // userId: any;

  // hideAddHotel = false;
  // hideAddItems = false;
  // hideAddCoupon = false;
  // hideAddUsers = false;

  ngOnInit(): void {
  //   this.userId = sessionStorage.getItem('userId');
  //   this.userName = sessionStorage.getItem('userName');
  //   this.GetAkcCoins(this.userId, this.userName);

  //   this.hideAddHotel = sessionStorage.getItem('referralCode') != "ApplaKatta"
  //   this.hideAddItems = sessionStorage.getItem('referralCode') != "ApplaKatta"
  //   this.hideAddCoupon = sessionStorage.getItem('referralCode') != "ApplaKatta"
  //   this.hideAddUsers = sessionStorage.getItem('referralCode') != "ApplaKatta"

  }

  // GetAkcCoins(userId: string, userName: string){
  //   debugger;
  //   this._service.getAkc(userId,userName).subscribe(res=>{
  //     if(res != null){
  //       this.aKC = res.akc;
  //     }
  //     else{
  //       sessionStorage.clear();
  //       this._router.navigate(['/login']);
  //     }
  //   })
  // }

  // open(name:string){
  //   this._router.navigate(['/'+name]);
  // }

  // onLogout(){
  //   sessionStorage.clear();
  //   this._router.navigate(['/login']);
  // }
}
