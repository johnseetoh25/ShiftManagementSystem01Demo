import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { ShiftHandoverPageComponent } from './shift-handover-page/shift-handover-page.component';
import { AddShiftHandoverPageComponent } from './add-shift-handover-page/add-shift-handover-page.component';
import { EditShiftHandoverPageComponent } from './edit-shift-handover-page/edit-shift-handover-page.component';
import { OutgoingApprovalListPageComponent } from './outgoing-approval-list-page/outgoing-approval-list-page.component';
import { OutgoingApprovalFormPageComponent } from './outgoing-approval-form-page/outgoing-approval-form-page.component';
import { IncomingApprovalListPageComponent } from './incoming-approval-list-page/incoming-approval-list-page.component';
import { IncomingApprovalFormPageComponent } from './incoming-approval-form-page/incoming-approval-form-page.component';

const routes: Routes = [
  { path: '', component:HomepageComponent },
  { path: 'shift-handover-page', component: ShiftHandoverPageComponent },
  { path: 'add-shift-handover-page', component: AddShiftHandoverPageComponent },
  { path: 'edit-shift-handover-page/:id', component: EditShiftHandoverPageComponent },
  { path: 'outgoing-approval-list-page', component: OutgoingApprovalListPageComponent },
  { path: 'outgoing-approval-form-page/:id', component: OutgoingApprovalFormPageComponent },
  { path: 'incoming-approval-list-page', component: IncomingApprovalListPageComponent },
  { path: 'incoming-approval-form-page/:id', component: IncomingApprovalFormPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
