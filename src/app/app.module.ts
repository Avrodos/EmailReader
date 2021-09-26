import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmailReaderBasicComponent } from './email-reader-basic/email-reader-basic.component';
import {RouterModule} from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from "@angular/forms";
import { HighlightDirective } from './email-reader-basic/directives/highlight.directive';
import { EmailReaderFormComponent } from './email-reader-form/email-reader-form.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";

@NgModule({
  declarations: [
    AppComponent,
    EmailReaderBasicComponent,
    HighlightDirective,
    EmailReaderFormComponent
  ],
    imports: [
        BrowserModule,
        NgbModule,
        RouterModule,
        BrowserAnimationsModule,
        MatIconModule,
        FormsModule,
        Ng2SearchPipeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
