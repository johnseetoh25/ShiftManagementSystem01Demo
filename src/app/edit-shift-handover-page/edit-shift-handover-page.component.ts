import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ShiftHandoverModels } from '../models/shift-handover-models';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-shift-handover-page',
  templateUrl: './edit-shift-handover-page.component.html',
  styleUrls: ['./edit-shift-handover-page.component.css']
})
export class EditShiftHandoverPageComponent implements OnInit {

  shifthandoverForm !: FormGroup;
  shifthandoverList !: any;
  id:any;
  shiftHandoverData!: ShiftHandoverModels;

  disabled: boolean = true;

  constructor(
    private formBuilder : FormBuilder,
    private api : ApiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getShiftHandoverByID(this.route.snapshot.params['id']);
    this.shifthandoverForm = this.formBuilder.group({
      shiftdate01: new FormControl(''),
      shift: new FormControl(''),
      team: new FormControl(''),
      subrole: new FormControl(''),
      outgoingapprovedby: new FormControl(''),
      shiftdate02:  new FormControl(''),
      outgoingwithcomment:  new FormControl(''),
      incomingapprovelby: new FormControl(''),
      shiftdate03:  new FormControl(''),
      incomingwithcomment: new FormControl(''),

      //Health Safety Security Enviroment
      safety_logs: this.formBuilder.array([]),
      override_logs: this.formBuilder.array([]),
      permit_to_works: this.formBuilder.array([]),

      //Instructions
      dailyoperationdescription:  new FormControl(''),
      dailyoperationstartdate06:  new FormControl(''),
      dailyoperationstarttime03:  new FormControl(''),
      dailyoperationenddate07:  new FormControl(''),
      dailyoperationendtime04:  new FormControl(''),
      dailyoperationstatus:  new FormControl(''),
      dailyoperationpriority:  new FormControl(''),

      standing_instruction: this.formBuilder.array([]),

      operationcaredescription:  new FormControl(''),
      operationcarestartdate:  new FormControl(''),
      operationcarestarttime:  new FormControl(''),
      operationcareenddate:  new FormControl(''),
      operationcareendtime:  new FormControl(''),
      operationcarestatus:  new FormControl(''),
      operationcarepriority:  new FormControl(''),
      operation_care_checklist: this.formBuilder.array([]),

      // Highlights (Operational Logs)
      highlight_operational_logs: this.formBuilder.array([]),

      // Maintenance Items
      maintenance_items: this.formBuilder.array([]),

      // Shift Manning
      shift_mannings: this.formBuilder.array([]),

    });

    // disable the form field for the special elements
    //this.shifthandoverForm.get("outgoingapprovedby")!.disable();
    //this.shifthandoverForm.get("shiftdate02")?.disable();
    //this.shifthandoverForm.get("outgoingwithcomment")?.disable();
    //this.shifthandoverForm.get("incomingapprovelby")?.disable();
    //this.shifthandoverForm.get("shiftdate03")?.disable();
    //this.shifthandoverForm.get("incomingwithcomment")?.disable();

  }

  getShiftHandoverByID(id: any){
    this.api.getOneShiftHandoverbyID(id)
    .subscribe((data: any)=>{
      this.id = data.id;
      this.shifthandoverList = data;

      this.shifthandoverForm.patchValue({
        shiftdate01: data.shiftdate01,
        shift: data.shift,
        team: data.team,
        subrole: data.subrole,
        outgoingapprovedby: data.outgoingapprovedby,
        shiftdate02: data.shiftdate02,
        outgoingwithcomment: data.outgoingwithcomment,
        incomingapprovelby: data.incomingapprovelby,
        shiftdate03: data.shiftdate03,
        incomingwithcomment: data.incomingwithcomment,

        dailyoperationdescription: data.dailyoperationdescription,
        dailyoperationstartdate06: data.dailyoperationstartdate06,
        dailyoperationstarttime03: data.dailyoperationstarttime03,
        dailyoperationenddate07: data.dailyoperationenddate07,
        dailyoperationendtime04: data.dailyoperationendtime04,
        dailyoperationstatus: data.dailyoperationstatus,
        dailyoperationpriority: data.dailyoperationpriority,

        operationcaredescription: data.operationcaredescription,
        operationcarestartdate: data.operationcarestartdate,
        operationcarestarttime: data.operationcarestarttime,
        operationcareenddate: data.operationcareenddate,
        operationcareendtime: data.operationcareendtime,
        operationcarestatus: data.operationcarestatus,
        operationcarepriority: data.operationcarepriority,
      });

      this.shifthandoverList.safety_logs.map((safetyLogData: any)=>{
        const safetylogsForm = this.formBuilder.group({
          safetydescription: safetyLogData.safetydescription,
          safetylogdate04: safetyLogData.safetylogdate04,
          safetylogtime01: safetyLogData.safetylogtime01,
          safetystatus: safetyLogData.safetystatus,
        });
        this.safetyLogs.push(safetylogsForm);
      });

      this.shifthandoverList.override_logs.map((overrideLogData: any)=>{
        const overridelogsForm = this.formBuilder.group({
          overridedescription: overrideLogData.overridedescription,
          overridelogdate05: overrideLogData.overridelogdate05,
          overridelogtime02: overrideLogData.overridelogtime02,
          overridestatus: overrideLogData.overridestatus,
          overridetagid: overrideLogData.overridetagid,
        });
        this.overrideLogs.push(overridelogsForm);
      });

      this.shifthandoverList.permit_to_works.map((permitToWorkData: any)=>{
        const permittoworksForm = this.formBuilder.group({
          permitdescription: permitToWorkData.permitdescription,
          permittype: permitToWorkData.permittype,
          permitid: permitToWorkData.permitid,
          permitstatus: permitToWorkData.permitstatus,
          permitpriority: permitToWorkData.permitpriority,
        });
        this.permitToWorks.push(permittoworksForm);
      });

      this.shifthandoverList.standing_instruction.map((standingInstructionData: any)=>{
        const standinginstructionForm = this.formBuilder.group({
          standingdescription: standingInstructionData.standingdescription,
          standingstartdate08: standingInstructionData.standingstartdate08,
          standingstarttime05: standingInstructionData.standingstarttime05,
          standingenddate09: standingInstructionData.standingenddate09,
          standingendtime06: standingInstructionData.standingendtime06,
          standingstatus: standingInstructionData.standingstatus,
          standingpriority: standingInstructionData.standingpriority,
        });
        this.standingInstructions.push(standinginstructionForm);
      });

      this.shifthandoverList.operation_care_checklist.map((operationCareChecklistData: any)=>{
        const operationcarechecklistForm = this.formBuilder.group({
          checklistdescriptions: operationCareChecklistData.checklistdescriptions,
          checklistresult: operationCareChecklistData.checklistresult,
          checklistremark: operationCareChecklistData.checklistremark,
          checklistcheckedby: operationCareChecklistData.checklistcheckedby,
          checklistcheckeddate: operationCareChecklistData.checklistcheckeddate,
          checklistcheckedtime: operationCareChecklistData.checklistcheckedtime,
        });
        this.operationCareChecklists.push(operationcarechecklistForm);
      });

      this.shifthandoverList.highlight_operational_logs.map((highlightsOperationalLogData: any)=>{
        const highlightoperationallogsForm = this.formBuilder.group({
          unitarea: highlightsOperationalLogData.unitarea,
          unitdescription: highlightsOperationalLogData.unitdescription,
          unittype: highlightsOperationalLogData.unittype,
          unitlogdate: highlightsOperationalLogData.unitlogdate,
          unitlogtime: highlightsOperationalLogData.unitlogtime,
          unitstatus: highlightsOperationalLogData.unitstatus,
        });
        this.highlightsOperationalLogs.push(highlightoperationallogsForm);
      });

      this.shifthandoverList.maintenance_items.map((maintenanceItemData: any)=>{
        const maintenanceitemsForm = this.formBuilder.group({
          maintenancedescription: maintenanceItemData.maintenancedescription,
          maintenancetagid: maintenanceItemData.maintenancetagid,
          maintenancenotificationno: maintenanceItemData.maintenancenotificationno,
          maintenancenotificationstatus: maintenanceItemData.maintenancenotificationstatus,
          maintenanceworkoderno: maintenanceItemData.maintenanceworkoderno,
          maintenanceworkorderstatus: maintenanceItemData.maintenanceworkorderstatus,
          maintenanceplanedstartdate: maintenanceItemData.maintenanceplanedstartdate,
          maintenanceplannedstarttime: maintenanceItemData.maintenanceplannedstarttime,
          maintenanceplannedenddate: maintenanceItemData.maintenanceplannedenddate,
          maintenanceplannedendtime: maintenanceItemData.maintenanceplannedendtime,
          maintenancepermitnumber: maintenanceItemData.maintenancepermitnumber,
          maintenancepermitstatus: maintenanceItemData.maintenancepermitstatus,
          maintenancestatus: maintenanceItemData.maintenancestatus,
          maintenancepriority: maintenanceItemData.maintenancepriority,
        });
        this.maintenanceItems.push(maintenanceitemsForm);
      });

      this.shifthandoverList.shift_mannings.map((shiftManningsData: any)=>{
        const shiftmanningsForm = this.formBuilder.group({
          shiftmanningname: shiftManningsData.shiftmanningname,
          shiftmanningsubrole: shiftManningsData.shiftmanningsubrole,
          shiftmanningremarks: shiftManningsData.shiftmanningremarks,
        });
        this.shiftMannings.push(shiftmanningsForm);
      });

      console.log(this.shifthandoverForm.value);

    });

  }

  submitEditedShiftHandoverData(){
    this.api.editShiftHandover(this.shifthandoverForm.value, this.id)
    .subscribe((res)=>{
      const id = res.id;
      alert("Crud updated Successfully");
    },()=>{
      alert("Error while updating the record");
    });
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
