//import Component class
//Component class used to create the "Component"
import { Component,ViewChild } from '@angular/core';

//import Services
import { EmployeeService } from '../services/employee.service';
import { AddEmployeeService } from '../services/addemployee.service';
import { UpdateEmployeeService } from '../services/updateemployee.service';
import { DeleteEmployeeService } from '../services/deleteemployee.service';

//import errHandling function
import errHandling from '../config/error/errHandling';
// import MatTableDataSource
// MatTableDataSource class used to make the data suitable to material table

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";
import {ConfirmationModelComponent} from '../popups/confirmation_popup/confirmation.model';


@Component({
  selector: 'ems',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
    public records: any;
    public obj1: any;


    @ViewChild(MatPaginator,{static:true})
    public _pagi:MatPaginator;

    public dataSource: MatTableDataSource<any>;

    public displayedColumns: string[] = [
      'Check',
      'empId',
      'Name',
      'Age',
      'salary',
      'dept',
      'DOB',
      'gender',
      'languages',
      'Actions',
    ];

    constructor(
      public employeeService: EmployeeService,
      public addEmployeeService: AddEmployeeService,
      public updateEmployeeService: UpdateEmployeeService,
      public deleteEmployeeService: DeleteEmployeeService,
      public dialog:MatDialog
    ) {}

    ngOnInit() {
      this.obj1 = this.employeeService.getEmployees().subscribe((posRes) => {
        this.records = posRes;
        this.dataSource = new MatTableDataSource(this.records);
        this.dataSource.paginator = this._pagi;
      }, errHandling);
    }

    
    deleteEmp(empId){
      this.dialog.open(ConfirmationModelComponent);
      // this.deleteEmployeeService.deleteEmployee({"empId":empId})
      //     .subscribe((posRes)=>{
      //         if(posRes.delete == "success"){
      //             let matched_index = this.records.findIndex((element,index)=>{
      //                 return element.empId == empId;
      //             });
      //             this.records.splice(matched_index,1);
      //             this.dataSource = new MatTableDataSource(this.records);
      //         }
      //   },errHandling)
    };
  

    editEmp(){
      console.log("edit....soon");
    };

    ngOnDestroy() {
      this.obj1.unsubscribe();
    };
  
}
