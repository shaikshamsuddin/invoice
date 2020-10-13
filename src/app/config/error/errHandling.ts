import { HttpErrorResponse } from "@angular/common/http";

const errHandling = (err:HttpErrorResponse)=>{
    if(err.error instanceof Error){
        console.log("client side errors");
    }else{
        console.log("server side errors");
    }
};

export default errHandling;

