import { Component, OnInit } from '@angular/core';
import {Email} from "../interfaces/email";
import {EmailServiceService} from "../services/email-service.service";

@Component({
  selector: 'app-emails-list',
  templateUrl: './emails-list.component.html',
  styleUrls: ['./emails-list.component.css']
})
export class EmailsListComponent implements OnInit {

  emailList: Array<Email>;

  constructor(private mailService: EmailServiceService) {
    this.emailList = [];
  }

  ngOnInit(): void {
    this.emailList = this.mailService.getAllMails();
  }

  deleteMail(email : Email) {
    this.mailService.deleteMail(email);
    this.refreshMails();
  }

  refreshMails() {
    this.emailList = this.mailService.getAllMails();
  }

}
