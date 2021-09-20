import { Component, OnInit } from '@angular/core';
import {Email} from "./interfaces/email";

@Component({
  selector: 'app-email-reader-basic',
  templateUrl: './email-reader-basic.component.html',
  styleUrls: ['./email-reader-basic.component.css']
})
export class EmailReaderBasicComponent implements OnInit {

  email: Email;

  constructor() {
    this.email = {from: "sajjad.ahmad@alumnos.upm.es", to: "", subject: "", body: ""};

  }

  ngOnInit(): void {
    this.email = {from: "sajjad.ahmad@alumnos.upm.es", to: "", subject: "", body: ""};
  }

}
