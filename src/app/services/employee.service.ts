//this service used to fetch the allEmployees from Server(Node Server)
//import Injectable
//Injectable used to create the service
import { Injectable } from "@angular/core";

//import HttpClient
//HttpClient used to make connect to server
import { HttpClient } from "@angular/common/http";

//import BASE_URL
import BASE_URL from "../config/endPoints/urls";

import { Observable } from 'rxjs';


@Injectable({
    providedIn : "root"
})
export class EmployeeService{
    constructor(public http:HttpClient){}

    public getEmployees():Observable<any>{
        return this.http.get(BASE_URL+"/fetch");
    }
};