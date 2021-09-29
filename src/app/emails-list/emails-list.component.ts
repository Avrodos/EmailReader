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
  filterText: string;

  constructor(private mailService: EmailServiceService) {
    this.emailList = [];
    this.filterText = "";
  }

  ngOnInit(): void {
    this.emailList = this.mailService.getAllMails();
  }

  deleteMail(emailID : number) {
    this.mailService.deleteMail(emailID);
    this.refreshMails();
  }

  refreshMails() {
    this.emailList = this.mailService.getAllMails();
  }

  applyFilter(filterValue: string) {
    let filterValueLower = filterValue.toLowerCase();
    this.emailList = this.emailList.filter((email) => email.from.toLowerCase().includes(filterValueLower) || email.to.toLowerCase().includes(filterValueLower) || email.subject.toLowerCase().includes(filterValueLower) || email.body.toLowerCase().includes(filterValueLower));
  }

  valuechange(newValue: string) {
    this.filterText = newValue;
    this.refreshMails();
    this.applyFilter(this.filterText);
  }
}
