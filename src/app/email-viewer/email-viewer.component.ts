import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Email} from "../interfaces/email";
import {EmailServiceService} from "../services/email-service.service";

@Component({
  selector: 'app-email-viewer',
  templateUrl: './email-viewer.component.html',
  styleUrls: ['./email-viewer.component.css']
})
export class EmailViewerComponent implements OnInit {
  mailID?: number | null;
  mail: Email;

  constructor(private route: ActivatedRoute, private mailService: EmailServiceService) {
    this.mail = {id: -1, from: "", to: "", subject:"", body:""};
  }

  ngOnInit(): void {
    const mailIDString = this.route.snapshot.queryParamMap.get('mailID');
    if (typeof mailIDString === "string") {
      this.mailID = parseInt(mailIDString);
      this.mail = this.mailService.getMail(this.mailID);
    }
  }


}
