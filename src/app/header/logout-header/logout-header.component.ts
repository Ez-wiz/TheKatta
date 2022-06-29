import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-header',
  templateUrl: './logout-header.component.html',
  styleUrls: ['./logout-header.component.css']
})
export class LogoutHeaderComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  open(name:string){
    this._router.navigate(['/'+name]);
  }

}
