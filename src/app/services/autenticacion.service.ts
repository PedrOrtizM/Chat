import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  
  public usuario:any = {};
  constructor(public afAuth: AngularFireAuth) { 
    
    this.afAuth.authState.subscribe(user =>{

      console.log("estado del usuario",user);
      if(!user){return;}

      this.usuario.nombre = user.displayName;
      this.usuario.uid = user.uid;
    })

  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
