import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: "app-are-you-sure-dialog",
  templateUrl: "./are-you-sure-dialog.component.html",
  styleUrls: ["./are-you-sure-dialog.component.css"],
})
export class AreYouSureDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AreYouSureDialogComponent>,
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
