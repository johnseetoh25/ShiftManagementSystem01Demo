export interface ShiftHandoverModels {
  id: number;
  shiftdate01: any;
  shift: any;
  team: any;
  subrole: any;
  outgoingapprovedby: any;
  shiftdate02: any;
  outgoingwithcomment: any;
  incomingapprovelby:any;
  shiftdate03: any;
  incomingwithcomment:any;

  //Health Safety Security Enviroment
  safety_logs: SafetyLogs[];
  override_logs: OverrideLogs[];
  permit_to_works: PermitToWorks[];

  //Instructions
  dailyoperationdescription: any;
  dailyoperationstartdate06: any;
  dailyoperationstarttime03: any;
  dailyoperationenddate07: any;
  dailyoperationendtime04: any;
  dailyoperationstatus: any;
  dailyoperationpriority: any;

  standing_instruction: StandingInstruction[];

  operationcaredescription: any;
  operationcarestartdate: any;
  operationcarestarttime: any;
  operationcareenddate: any;
  operationcareendtime: any;
  operationcarestatus: any;
  operationcarepriority: any;

  operation_care_checklist: OperationCareChecklist[];

  // Highlights (Operational Logs)
  highlight_operational_logs: HighlightOperationalLogs[];

  // Maintenance Items
  maintenance_items: MaintenanceItems[];

  // Shift Manning
  shift_mannings: ShiftMannings[];
}

export interface SafetyLogs {
  safetydescription: any;
  safetylogdate04: any;
  safetylogtime01: any;
  safetystatus: any;
}

export interface OverrideLogs {
  overridedescription: any;
  overridelogdate05: any;
  overridelogtime02: any;
  overridestatus: any;
  overridetagid: any;
}

export interface PermitToWorks {
  permitdescription: any;
  permittype: any;
  permitid: any;
  permitstatus: any;
  permitpriority: any;
}

export interface StandingInstruction {
  standingdescription: any;
  standingstartdate08: any;
  standingstarttime05: any;
  standingenddate09: any;
  standingendtime06: any;
  standingstatus: any;
  standingpriority: any;
}

export interface OperationCareChecklist{
  checklistdescriptions:any;
  checklistresult: any;
  checklistremark: any;
  checklistcheckedby: any;
  checklistcheckeddate: any;
  checklistcheckedtime: any;
}

export interface HighlightOperationalLogs{
  unitarea: any;
  unitdescription: any;
  unittype: any;
  unitlogdate: any;
  unitlogtime: any;
  unitstatus: any;
}

export interface MaintenanceItems{
  maintenancedescription: any;
  maintenancetagid: any;
  maintenancenotificationno: any;
  maintenancenotificationstatus: any;
  maintenanceworkoderno: any;
  maintenanceworkorderstatus: any;
  maintenanceplanedstartdate: any;
  maintenanceplannedstarttime: any;
  maintenanceplannedenddate: any;
  maintenanceplannedendtime: any;
  maintenancepermitnumber: any;
  maintenancepermitstatus: any;
  maintenancestatus: any;
  maintenancepriority: any;
}

export interface ShiftMannings{
  shiftmanningname: any;
  shiftmanningsubrole: any;
  shiftmanningremarks: any;
}


