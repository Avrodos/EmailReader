import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmailReaderBasicComponent } from './olderParts/email-reader-basic/email-reader-basic.component';
import {RouterModule} from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from "@angular/forms";
import { HighlightDirective } from './olderParts/email-reader-basic/directives/highlight.directive';
import { EmailReaderFormComponent } from './olderParts/email-reader-form/email-reader-form.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { EmailsListComponent } from './emails-list/emails-list.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { EmailViewerComponent } from './email-viewer/email-viewer.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    EmailReaderBasicComponent,
    HighlightDirective,
    EmailReaderFormComponent,
    EmailsListComponent,
    EmailFormComponent,
    EmailViewerComponent
  ],
    imports: [
        BrowserModule,
        NgbModule,
        RouterModule,
        BrowserAnimationsModule,
        MatIconModule,
        FormsModule,
        Ng2SearchPipeModule,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
