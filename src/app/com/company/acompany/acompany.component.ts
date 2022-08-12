import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { DialogData } from "../../employee/table/are-you-sure-dialog/are-you-sure-dialog.component";

@Component({
  selector: "app-acompany",
  templateUrl: "./acompany.component.html",
  styleUrls: ["./acompany.component.css"],
})
export class AcompanyComponent {
  constructor(
    public dialogRef: MatDialogRef<AcompanyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(b): void {
    if (b == 1) {
      this.dialogRef.close(true);
    } else {
      this.dialogRef.close(false);
    }
  }
}
