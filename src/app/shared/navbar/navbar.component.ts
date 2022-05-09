import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/home/auth.service';
import {MatDialog} from '@angular/material/dialog';
import { LoginWithNpComponent } from '../login-with-np/login-with-np.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( public auth:AuthService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialog.open(LoginWithNpComponent);
  }

  
}
