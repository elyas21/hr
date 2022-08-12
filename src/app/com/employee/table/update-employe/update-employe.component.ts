import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { EmployeeService } from "src/app/ser/employee.service";

@Component({
  selector: "app-update-employe",
  templateUrl: "./update-employe.component.html",
  styleUrls: ["./update-employe.component.css"],
})
export class UpdateEmployeComponent {
  constructor(
    public dialogRef: MatDialogRef<UpdateEmployeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private empSer: EmployeeService,
    private fb: FormBuilder
  ) {
    this.employeeForm = this.fb.group({
      id: [this.data.id, [Validators.required]],
      firstName: [this.data.firstName, [Validators.required]],
      middleName: [this.data.middleName, [Validators.required]],
      lastName: [this.data.lastName, [Validators.required]],
      position: [this.data.position, [Validators.required]],
      sex: [this.data.sex, [Validators.required]],
      imgUrl: [this.data.imgUrl],
      salary: [this.data.salary],
      company: [this.data.company, [Validators.required]],
    });
  }

  onNoClick(b): void {
    if (b == 1) {
      this.dialogRef.close(true);
    } else {
      this.dialogRef.close(false);
    }
  }

  employeeForm: FormGroup;

  onSubmit() {
    console.log(this.employeeForm.value);

    this.empSer.update(this.employeeForm.value).subscribe((res) => {
      console.log(res);
    });
  }
}
export interface DialogData {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  position: string;
  sex: string;
  imgUrl: string;
  salary: string;
  company: number;
}
