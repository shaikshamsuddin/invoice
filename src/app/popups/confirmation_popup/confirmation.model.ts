import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog,MatDialogRef,MAT_DIALOG_DATA } from "@angular/material/dialog";
@Component({
  selector: 'confirmation',
  templateUrl: './confirmation.model.html',
  styles: []
})
export class ConfirmationModelComponent implements OnInit {
  public title:string;
  public msg: string;
  constructor(public dialogRef:MatDialogRef<ConfirmationModelComponent>,
              @Inject(MAT_DIALOG_DATA) public dialog:MatDialog) { 
                // this.title="Delete ??";
                // this.msg="Do you want to delete employee record";
  }

  ngOnInit(): void {
  }

  cancel_data():void{
    this.dialogRef.close();
  }

  delEmployee():void{
      console.log("hello");
  }

}