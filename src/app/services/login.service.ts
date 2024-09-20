import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users: User[] = [
    new User('seba', '12345'),
    
  ]

  constructor() { }

  validateLogin(username: string, password: string): boolean {
    console.log("Ejecutando validacion SERVICE!")
    const found = this.users.find(user => user.username === username)
    if (found !== undefined) {
      console.log("Usuario existe!")
      return found.password === password;
    }
    console.log("Usuario no existe!")
    return false;
  }
}
