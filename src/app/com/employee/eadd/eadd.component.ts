import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { EmployeeService } from "src/app/ser/employee.service";

@Component({
  selector: "app-eadd",
  templateUrl: "./eadd.component.html",
  styleUrls: ["./eadd.component.css"],
})
export class EaddComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(
    private _snackBar: MatSnackBar,
    private empSer: EmployeeService,
    private fb: FormBuilder
  ) {
    this.employeeForm = this.fb.group({
      id: [Math.round(Math.random() * 100000), [Validators.required]],
      firstName: ["", [Validators.required]],
      middleName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      position: ["", [Validators.required]],
      sex: ["", [Validators.required]],
      imgUrl: [""],
      salary: [""],
      company: ["", [Validators.required]],
    });
  }
  openSnackBar(message: string) {
    this._snackBar.open(message + "added to Employee", 'Success', {
      duration: 2000,
    });
  }
  onSubmit() {
    console.log(this.employeeForm.value);

    this.empSer.create(this.employeeForm.value).subscribe((res) => {
      console.log(res);
      this.openSnackBar(this.employeeForm.value.firstName);
    });
  }
  ngOnInit() {}
}
