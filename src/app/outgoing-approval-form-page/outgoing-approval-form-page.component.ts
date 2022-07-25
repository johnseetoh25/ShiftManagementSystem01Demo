import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ShiftHandoverModels } from '../models/shift-handover-models';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-outgoing-approval-form-page',
  templateUrl: './outgoing-approval-form-page.component.html',
  styleUrls: ['./outgoing-approval-form-page.component.css']
})
export class OutgoingApprovalFormPageComponent implements OnInit {

  id!: number;
  shiftHandoverData!: ShiftHandoverModels;

  addOutgoingApprovalForm!: FormGroup;
  shifthandoverList!: any;

  doneApproved = false;

  today = new Date();
  tomorrow = new Date();
  minDate = new Date();
  public dateToday = new Date();


  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) { this.tomorrow.setDate(this.today.getDate() + 1); }

  ngOnInit(): void {
    // display the shift handover's details
    this.id = this.route.snapshot.params['id'];
    this.api.getApprovalDetailsbyID(this.id)
    .subscribe(data=>{
      console.log(data)
      this.id = data.id;
      this.shiftHandoverData = data;
    });

    // adding outgoing approval data
    this.addOutgoingApprovalByID(this.route.snapshot.params['id']);
    this.addOutgoingApprovalForm = this.formBuilder.group({
      // add outgoing approvel forms
      outgoingapprovedby:  new FormControl('', Validators.required),
      shiftdate02:  new FormControl(new Date(), Validators.required),
      outgoingwithcomment:  new FormControl('', Validators.required),

      // base form for shift handover
      shiftdate01: new FormControl(''),
      shift: new FormControl(''),
      team: new FormControl(''),
      subrole: new FormControl(''),
      incomingapprovelby: new FormControl(''),
      shiftdate03: new FormControl(''),
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
  }

  weekendFilter = (date: Date | null): boolean=>{
    const day = (date || new Date()).getDay();
    return day !== 0 && day!==6;
  };


  addOutgoingApprovalByID(id: any){
    this.api.getOneShiftHandoverbyID(id)
    .subscribe((data: any)=>{
      this.id = data.id;
      this.shifthandoverList = data;

      this.addOutgoingApprovalForm.patchValue({
        // add Outgoing approvel forms
        outgoingapprovedby: data.outgoingapprovedby,
        shiftdate02: data.shiftdate02,
        outgoingwithcomment: data.outgoingwithcomment,

        // look the base form for shift handover is haven or not
        shiftdate01: data.shiftdate01,
        shift: data.shift,
        team: data.team,
        subrole: data.subrole,
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

      // lock elements when which form done fill in
      if (data.outgoingapprovedby) {
        lockElement(this.addOutgoingApprovalForm);
      } else {
        unlockElement(this.addOutgoingApprovalForm);
      }
      this.addOutgoingApprovalForm.valueChanges.subscribe((data)=>{
        if (!data.outgoingapprovedby) {
          this.doneApproved = this.addOutgoingApprovalForm.valid;
        } else {
          this.doneApproved = this.addOutgoingApprovalForm.disabled;
        }
      });

      console.log(this.addOutgoingApprovalForm.value);
    });
  }

  submitOutgoingApprovelData(){
    if(this.addOutgoingApprovalForm.valid){
      this.api.editShiftHandover(this.addOutgoingApprovalForm.value, this.id)
      .subscribe((res)=>{
        const id = res.id;
        alert("Your Outgoing Approval Successfully");
      },()=>{
        alert("Error while adding the record");
      });
    }
  }

  // object array for the sub-data
  get safetyLogs(){
    return this.addOutgoingApprovalForm.get('safety_logs') as FormArray;
  }

  get overrideLogs(){
    return this.addOutgoingApprovalForm.get('override_logs') as FormArray;
  }

  get permitToWorks(){
    return this.addOutgoingApprovalForm.get('permit_to_works') as FormArray;
  }

  get standingInstructions(){
    return this.addOutgoingApprovalForm.get('standing_instruction') as FormArray;
  }

  get operationCareChecklists(){
    return this.addOutgoingApprovalForm.get('operation_care_checklist') as FormArray;
  }

  get highlightsOperationalLogs(){
    return this.addOutgoingApprovalForm.get('highlight_operational_logs') as FormArray;
  }

  get maintenanceItems(){
    return this.addOutgoingApprovalForm.get('maintenance_items') as FormArray;
  }

  get shiftMannings(){
    return this.addOutgoingApprovalForm.get('shift_mannings') as FormArray;
  }

}

function lockElement(element: FormControl | FormGroup ) {
  if (element.enabled) {
    element.disable({ emitEvent: false });

    if (element instanceof FormControl) {
      element.reset(null, { emitEvent: false });
    }
  }
}

function unlockElement(element: FormControl | FormGroup) {
  if (element.disabled) {
    element.enable({ emitEvent: false });

    if (element instanceof FormControl) {
      element.reset(null, { emitEvent: false });
    }
  }
}
