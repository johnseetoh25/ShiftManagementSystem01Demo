import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-outgoing-approval-list-page',
  templateUrl: './outgoing-approval-list-page.component.html',
  styleUrls: ['./outgoing-approval-list-page.component.css']
})
export class OutgoingApprovalListPageComponent implements OnInit {

  displayedColumns: string[] = ['id', 'date', 'shift', 'team', 'outgoing status', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private api : ApiService,
    private router : Router,

  ) { }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData(){
    this.api.getShiftHandover()
    .subscribe(data=>{
      const sortState: Sort = {active: 'id', direction: 'desc'};
      this.dataSource = new MatTableDataSource(data);

      this.sort.active = sortState.active;
      this.sort.direction = sortState.direction;
      this.sort.sortChange.emit(sortState);
      
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  openOutgoingApprovelForm(row: any){
    this.router.navigate(['outgoing-approval-form-page', row]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
