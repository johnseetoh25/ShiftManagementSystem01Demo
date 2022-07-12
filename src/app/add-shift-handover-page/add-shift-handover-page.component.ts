import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ShiftHandoverModels } from '../models/shift-handover-models';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-shift-handover-page',
  templateUrl: './add-shift-handover-page.component.html',
  styleUrls: ['./add-shift-handover-page.component.css']
})

export class AddShiftHandoverPageComponent implements OnInit {

  shifthandoverForm !: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
  ) {}

  ngOnInit(){
    this.shifthandoverForm = this.formBuilder.group({
      shiftdate01: ['', Validators.required],
      shift: ['', Validators.required],
      team: ['', Validators.required],
      subrole: ['', Validators.required],
      outgoingapprovedby: [''],
      shiftdate02: [''],
      outgoingwithcomment: [''],
      incomingapprovelby:[''],
      shiftdate03: [''],
      incomingwithcomment:[''],

      //Health Safety Security Enviroment
      safety_logs: this.formBuilder.array([this.formBuilder.group({
          safetydescription: [''],
          safetylogdate04: [''],
          safetylogtime01: [''],
          safetystatus: [''],
        })
      ]),

      override_logs: this.formBuilder.array([this.formBuilder.group({
          overridedescription: [''],
          overridelogdate05: [''],
          overridelogtime02: [''],
          overridestatus: [''],
          overridetagid: [''],
        })
      ]),

      permit_to_works: this.formBuilder.array([this.formBuilder.group({
          permitdescription: [''],
          permittype: [''],
          permitid: [''],
          permitstatus: [''],
          permitpriority: [''],
        })
      ]),

      //Instructions
      dailyoperationdescription: [''],
      dailyoperationstartdate06: [''],
      dailyoperationstarttime03: [''],
      dailyoperationenddate07: [''],
      dailyoperationendtime04: [''],
      dailyoperationstatus: [''],
      dailyoperationpriority: [''],

      standing_instruction: this.formBuilder.array([this.formBuilder.group({
          standingdescription: [''],
          standingstartdate08: [''],
          standingstarttime05: [''],
          standingenddate09: [''],
          standingendtime06: [''],
          standingstatus: [''],
          standingpriority: [''],
        })
      ]),

      operationcaredescription: [''],
      operationcarestartdate: [''],
      operationcarestarttime: [''],
      operationcareenddate: [''],
      operationcareendtime: [''],
      operationcarestatus: [''],
      operationcarepriority: [''],

      operation_care_checklist: this.formBuilder.array([this.formBuilder.group({
          checklistdescriptions:[''],
          checklistresult: [''],
          checklistremark: [''],
          checklistcheckedby: [''],
          checklistcheckeddate: [''],
          checklistcheckedtime: [''],
        })
      ]),

      // Highlights (Operational Logs)
      highlight_operational_logs: this.formBuilder.array([this.formBuilder.group({
          unitarea: [''],
          unitdescription: [''],
          unittype: [''],
          unitlogdate: [''],
          unitlogtime: [''],
          unitstatus: [''],
        })
      ]),

      // Maintenance Items
      maintenance_items: this.formBuilder.array([this.formBuilder.group({
          maintenancedescription: [''],
          maintenancetagid: [''],
          maintenancenotificationno: [''],
          maintenancenotificationstatus: [''],
          maintenanceworkoderno: [''],
          maintenanceworkorderstatus: [''],
          maintenanceplanedstartdate: [''],
          maintenanceplannedstarttime: [''],
          maintenanceplannedenddate: [''],
          maintenanceplannedendtime: [''],
          maintenancepermitnumber: [''],
          maintenancepermitstatus: [''],
          maintenancestatus: [''],
          maintenancepriority: [''],
        })
      ]),

      // Shift Manning
      shift_mannings: this.formBuilder.array([this.formBuilder.group({
          shiftmanningname: [''],
          shiftmanningsubrole: [''],
          shiftmanningremarks: [''],
        })
      ]),

    })

    // disable the form field for the special elements
    this.shifthandoverForm.get("outgoingapprovedby")?.disable();
    this.shifthandoverForm.get("shiftdate02")?.disable();
    this.shifthandoverForm.get("outgoingwithcomment")?.disable();
    this.shifthandoverForm.get("incomingapprovelby")?.disable();
    this.shifthandoverForm.get("shiftdate03")?.disable();
    this.shifthandoverForm.get("incomingwithcomment")?.disable();
  }

  addShiftHandover(){
    if (this.shifthandoverForm.valid) {
      this.api.postShiftHandover(this.shifthandoverForm.value)
      .subscribe((data: ShiftHandoverModels)=>{
        alert("Shift Handover Data added successfully");
      },()=>{
        alert("Error while adding the Shift Handover data");
      })
    }
  }

  // object array for the sub-data
  get safetyLogs(){
    return this.shifthandoverForm.get('safety_logs') as FormArray;
  }

  get overrideLogs(){
    return this.shifthandoverForm.get('override_logs') as FormArray;
  }

  get permitToWorks(){
    return this.shifthandoverForm.get('permit_to_works') as FormArray;
  }

  get standingInstructions(){
    return this.shifthandoverForm.get('standing_instruction') as FormArray;
  }

  get operationCareChecklists(){
    return this.shifthandoverForm.get('operation_care_checklist') as FormArray;
  }

  get highlightsOperationalLogs(){
    return this.shifthandoverForm.get('highlight_operational_logs') as FormArray;
  }

  get maintenanceItems(){
    return this.shifthandoverForm.get('maintenance_items') as FormArray;
  }

  get shiftMannings(){
    return this.shifthandoverForm.get('shift_mannings') as FormArray;
  }

// Add and Delete Row in Table Forms
  addSafetyRow(){
    this.safetyLogs.push(
      this.formBuilder.group({
        safetydescription: [''],
        safetylogdate04: [''],
        safetylogtime01: [''],
        safetystatus: [''],
      }),
    );
  }

  deleteSafetyRow(x: number){
    var delBtn = confirm(' Do you want to delete this one for Safety Logs?');
    if (delBtn == true) {
      this.safetyLogs.removeAt(x);
    }
  }

  addOverrideRow(){
    this.overrideLogs.push(
      this.formBuilder.group({
        overridedescription: [''],
        overridelogdate05: [''],
        overridelogtime02: [''],
        overridestatus: [''],
        overridetagid: [''],
      }),
    );
  }

  deleteOverrideRow(x: number){
    var delBtn = confirm(' Do you want to delete this one for Override Logs?');
    if (delBtn == true) {
      this.overrideLogs.removeAt(x);
    }
  }

  addPermitRow(){
    this.permitToWorks.push(
      this.formBuilder.group({
        permitdescription: [''],
        permittype: [''],
        permitid: [''],
        permitstatus: [''],
        permitpriority: [''],
      }),
    );
  }

  deletePermitRow(x: number){
    var delBtn = confirm(' Do you want to delete this one for Permit to Work?');
    if (delBtn == true) {
      this.permitToWorks.removeAt(x);
    }
  }

  addStandingInstructionRow(){
    this.standingInstructions.push(
      this.formBuilder.group({
        standingdescription: [''],
        standingstartdate08: [''],
        standingstarttime05: [''],
        standingenddate09: [''],
        standingendtime06: [''],
        standingstatus: [''],
        standingpriority: [''],
      }),
    );
  }

  deleteStandingInstructionRow(x: number){
    var delBtn = confirm(' Do you want to delete this one for Standing Instructions?');
    if (delBtn == true) {
      this.standingInstructions.removeAt(x);
    }
  }

  addOperationCareChecklistRow(){
    this.operationCareChecklists.push(
      this.formBuilder.group({
        checklistdescriptions:[''],
        checklistresult: [''],
        checklistremark: [''],
        checklistcheckedby: [''],
        checklistcheckeddate: [''],
        checklistcheckedtime: [''],
      }),
    );
  }

  deleteOperationCareChecklistRow(x: number){
    var delBtn = confirm(' Do you want to delete this one for Care Checklists?');
    if (delBtn == true) {
      this.operationCareChecklists.removeAt(x);
    }
  }

  addHighlightsOperationalLogRow(){
    this.highlightsOperationalLogs.push(
      this.formBuilder.group({
        unitarea: [''],
        unitdescription: [''],
        unittype: [''],
        unitlogdate: [''],
        unitlogtime: [''],
        unitstatus: [''],
      }),
    );
  }

  deleteHighlightsOperationalLogRow(x: number){
    var delBtn = confirm(' Do you want to delete this one for Highlights Operational Logs?');
    if (delBtn == true) {
      this.highlightsOperationalLogs.removeAt(x);
    }
  }

  addMaintenanceItemRow(){
    this.maintenanceItems.push(
      this.formBuilder.group({
        maintenancedescription: [''],
        maintenancetagid: [''],
        maintenancenotificationno: [''],
        maintenancenotificationstatus: [''],
        maintenanceworkoderno: [''],
        maintenanceworkorderstatus: [''],
        maintenanceplanedstartdate: [''],
        maintenanceplannedstarttime: [''],
        maintenanceplannedenddate: [''],
        maintenanceplannedendtime: [''],
        maintenancepermitnumber: [''],
        maintenancepermitstatus: [''],
        maintenancestatus: [''],
        maintenancepriority: [''],
      }),
    );
  }

  deleteMaintenanceItemRow(x: number){
    var delBtn = confirm(' Do you want to delete this one for Maintenance Items?');
    if (delBtn == true) {
      this.maintenanceItems.removeAt(x);
    }
  }

  addShiftManningRow(){
    this.shiftMannings.push(
      this.formBuilder.group({
        shiftmanningname: [''],
        shiftmanningsubrole: [''],
        shiftmanningremarks: [''],
      }),
    );
  }

  deleteShiftManningRow(x:number){
    var delBtn = confirm(' Do you want to delete this one for Shift Mannings?');
    if (delBtn == true) {
      this.shiftMannings.removeAt(x);
    }
  }

}
