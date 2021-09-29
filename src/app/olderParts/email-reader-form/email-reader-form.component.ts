import {Component, OnInit, ViewChild} from '@angular/core';
import {Email} from "../../interfaces/email";

@Component({
  selector: 'app-email-reader-form',
  templateUrl: './email-reader-form.component.html',
  styleUrls: ['./email-reader-form.component.css']
})
export class EmailReaderFormComponent implements OnInit {

  email: Email;
  emailList: Email[] = [];
  tableHeaders = ["From", "To", "Subject", "Body"];
  @ViewChild('emailForm') emailForm: any;


  constructor() {
    this.email = {id: 0, from: "", to: "", subject: "", body: ""};
  }

  ngOnInit(): void {
  }

  clear() {
    this.emailForm.reset();
  }

  sendForm(data: any) {
    let newEmail = {id: 0,from: data.fromEmail, to: data.destinationEmail, subject: data.subject, body: data.body};
    this.emailList.push(newEmail);
    alert("Entered Data: From: " + newEmail.from + " To: " + newEmail.to + " Subject: " + newEmail.subject + " Body: " + newEmail.body);
    this.clear();
  }
}
