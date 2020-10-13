import {Injectable} from  "@angular/core";
import {HttpClient} from "@angular/common/http";
import BASE_URL from "../config/endPoints/urls";
import {Observable} from "rxjs";


@Injectable({
    providedIn:"root"
})

export class AddEmployeeService{
    constructor(public http:HttpClient){}
    public addEmployee(data:any):Observable<any>{
        return this.http.post(BASE_URL+"/insert",data);
    };
}