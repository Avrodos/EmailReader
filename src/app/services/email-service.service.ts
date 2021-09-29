import { Injectable } from '@angular/core';
import {Email} from "../interfaces/email";

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  private emailList: Array<Email>;

  constructor() {
    this.emailList = [];
    let tempEmail1 = {id: 1, from: "sajjad.ahmad@alumnos.upm.es", to: "peter.parker@gmail.com", subject: "New Spiderman Movie?", body: "Hey Peter, whats up? How are you doing? I loved your Spiderman movies, when will you release the next one?"};
    let tempEmail2 = {id: 2, from: "sajjad.ahmad@alumnos.upm.es", to: "giorno.giovanni@maf.ita", subject: "Amazing Final", body: "Dear Giovanni, have you heard from our friend Jonathan? Rumors say he is visiting his daughter that is locked up in Alcatraz."};
    let tempEmail3 = {id: 3, from: "noreply@amazon.com", to: "sajjad.ahmad@alumnos.upm.es", subject: "Your order will arrive today", body: "Your order containing 'learning material' will be arriving soon. Be ready to receive it. "};
    this.emailList.push(tempEmail1, tempEmail2, tempEmail3);
  }


  getAllMails() {
    return this.emailList;
  }

  deleteMail(id: number) {
    const index = this.emailList.findIndex(x => x.id === id);
    if (index > -1) {
      this.emailList.splice(index, 1);
    }
  }

  getMail(id: number): Email {
    let mail = this.emailList.find(x => x.id === id);
    if (mail == undefined) {
      mail = {id: -1, from: "", to: "", subject:"", body:""};
    }
    return mail;
  }

}
