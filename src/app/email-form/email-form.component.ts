import {Component, OnInit, ViewChild} from '@angular/core';
import {Email} from "../interfaces/email";
import {EmailServiceService} from "../services/email-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {
  email: Email;
  @ViewChild('emailForm') emailForm: any;

  constructor(private mailService: EmailServiceService, private router:Router) {
    this.email = {id: 0, from: "", to: "", subject: "", body: ""};
  }

  ngOnInit(): void {
  }

  clear() {
    this.emailForm.reset();
  }

  sendForm(data: any) {
    const newID = this.mailService.getAllMails().length + 1;
    let newEmail = {id: newID,from: data.fromEmail, to: data.destinationEmail, subject: data.subject, body: data.body};
    this.mailService.addMail(newEmail);
    this.router.navigateByUrl('/list');
  }

}
