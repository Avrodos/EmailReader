import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {EmailsListComponent} from "./emails-list/emails-list.component";
import {EmailFormComponent} from "./email-form/email-form.component";
import {EmailViewerComponent} from "./email-viewer/email-viewer.component";

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: EmailsListComponent },
  { path: 'form', component: EmailFormComponent },
  { path: 'viewer', component: EmailViewerComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
