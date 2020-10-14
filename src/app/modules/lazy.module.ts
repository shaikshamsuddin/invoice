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
import { ConfirmationModelComponent } from '../popups/confirmation_popup/confirmation.model';
@NgModule({
  declarations: [EmployeeComponent,ConfirmationModelComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    RouterModule.forChild([{ path: "", component: EmployeeComponent },
                           {path:"/xyz",component:ConfirmationModelComponent}]),
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
