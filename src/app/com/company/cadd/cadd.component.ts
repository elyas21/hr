import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { CompanyService } from 'src/app/ser/company.service';

@Component({
  selector: 'app-cadd',
  templateUrl: './cadd.component.html',
  styleUrls: ['./cadd.component.css']
})
export class CaddComponent implements OnInit {
  companyForm: FormGroup;
  sub;
  comId;
  constructor(  private route: ActivatedRoute,private fb: FormBuilder, private comSer: CompanyService, private _snackBar: MatSnackBar) {
    this.companyForm = this.fb.group({
      id: [Math.round(Math.random() * 100000), [Validators.required]],
      name: ["", [Validators.required]],
      logo: ["assets/img/logo/d-tech.jpg", [Validators.required]],
      note: ["note", [Validators.required]],
      // departments: this.fb.array([])
    });
       }
       get department() {
        return this.companyForm.controls["departments"] as FormArray;
      }
  
      addLesson() {
        const departmentsform = this.fb.group({
          name: ['', Validators.required],
          task: ['todo', Validators.required],  
          company: [ this.comId, Validators.required]
        });
        this.department.push(departmentsform);
      }
  
      deleteLesson(lessonIndex: number) {
        this.department.removeAt(lessonIndex);
      }
       openSnackBar(message: string) {
    this._snackBar.open(message + "added to Employee", 'Success', {
      duration: 2000,
    });
  }
  onSubmit() {
    console.log(this.companyForm.value);

    this.comSer.create(this.companyForm.value).subscribe((res) => {
      console.log(res);
      this.openSnackBar(this.companyForm.value.firstName);
    });
  }
  ngOnInit() {
    this.sub = this.route.paramMap
    .pipe(
      switchMap((params: ParamMap) =>
        this.comId = params.get("id")
      )
    )
    
  }
}
