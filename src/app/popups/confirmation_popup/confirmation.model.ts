import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog,MatDialogRef,MAT_DIALOG_DATA } from "@angular/material/dialog";
@Component({
  selector: 'confirmation',
  templateUrl: './confirmation.model.html',
  styles: []
})
export class ConfirmationModelComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<ConfirmationModelComponent>,
              @Inject(MAT_DIALOG_DATA) public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  cancel_data():void{
    this.dialogRef.close();
  }

  delEmployee():void{
    
  }

}