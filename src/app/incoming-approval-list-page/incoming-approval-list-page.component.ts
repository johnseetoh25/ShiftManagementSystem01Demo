import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-incoming-approval-list-page',
  templateUrl: './incoming-approval-list-page.component.html',
  styleUrls: ['./incoming-approval-list-page.component.css']
})
export class IncomingApprovalListPageComponent implements OnInit {

  displayedColumns: string[] = ['id', 'date', 'shift', 'team', 'incoming status', 'action'];
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
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  openIncomingApprovalForm(row: any){
    this.router.navigate(['incoming-approval-form-page', row]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
