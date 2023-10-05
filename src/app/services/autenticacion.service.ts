import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ActoresService } from './actores.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {


  UserData: any;

  constructor(public auth: AngularFireAuth, public router: Router, public actorService: ActoresService) {
    this.auth.onAuthStateChanged((user: any) => {
      if (user) {
        this.UserData = user;
        localStorage.setItem('user', JSON.stringify(this.UserData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    })
  }

  async guardar(mail: string, password: string) {
    return (await this.auth.createUserWithEmailAndPassword(mail, password)).user?.uid;
  }

  //Login Method
  login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password)
      .then((result: any) => {
        this.UserData = result.user;
        this.actorService.updateLoginState(this.UserData.uid);
        this.router.navigateByUrl('');
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  logout() {
    return this.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigateByUrl('login');
    });
  }

  //Check wither User Is looged in or not
  isLoggedIn(): boolean {
    const token = localStorage.getItem('user')
    const user = JSON.parse(token as string);
    return user !== null ? true : false;
  }
}
