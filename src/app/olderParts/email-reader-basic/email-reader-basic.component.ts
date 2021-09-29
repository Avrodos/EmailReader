import { Component, OnInit } from '@angular/core';
import {Email} from "../../interfaces/email";

@Component({
  selector: 'app-email-reader-basic',
  templateUrl: './email-reader-basic.component.html',
  styleUrls: ['./email-reader-basic.component.css']
})
export class EmailReaderBasicComponent implements OnInit {

  email: Email;
  showMyMessage : boolean = false;

  constructor() {
    this.email = {id: 0, from: "sajjad.ahmad@alumnos.upm.es", to: "", subject: "", body: ""};

  }

  ngOnInit(): void {
    this.email = {id: 0, from: "sajjad.ahmad@alumnos.upm.es", to: "", subject: "", body: ""};
  }

  showSendMessage() {
    this.showMyMessage = true;
    setTimeout(() => {
      this.showMyMessage = false
    }, 5000)
  }


  cleanFields() {
    this.email.to = "";
    this.email.subject = "";
    this.email.body = "";
  }
}
