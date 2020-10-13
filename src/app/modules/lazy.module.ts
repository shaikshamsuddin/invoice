import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from '../components/employee.component';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from '../services/employee.service';
import { AddEmployeeService } from '../services/addemployee.service';
import { UpdateEmployeeService } from '../services/updateemployee.service';
import { DeleteEmployeeService } from '../services/deleteemployee.service';
import { RouterModule } from '@angular/router';
import { NgHttpLoaderModule } from "ng-http-loader";
@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    RouterModule.forChild([{ path: "", component: EmployeeComponent }]),
  ],
  providers: [
    EmployeeService,
    AddEmployeeService,
    UpdateEmployeeService,
    DeleteEmployeeService,
  ],
  exports: [EmployeeComponent],
})
export class LazyModule {}
