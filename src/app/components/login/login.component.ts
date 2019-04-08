import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 
  username: string;
  sala:string;
  select:string
  constructor( private router:Router , public authService:AutenticacionService){

  }

  ngOnInit() {
  }

  submit(){
      console.log(this.username,this.sala);
      //console.log(this.select);
      // console.log(
      //   //document.getElementById('select').value
      // );
      
    this.router.navigate(['/chat',this.sala,this.username]);
    
    
  }

  ingresar(){

    this.authService.login();
  }

  
}
