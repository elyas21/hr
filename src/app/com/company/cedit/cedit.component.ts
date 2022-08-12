import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Company } from 'src/app/model/company';
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { CompanyService } from 'src/app/ser/company.service';

@Component({
  selector: 'app-cedit',
  templateUrl: './cedit.component.html',
  styleUrls: ['./cedit.component.css']
})
export class CeditComponent implements OnInit {
  companyForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private comSer: CompanyService,
    private fb: FormBuilder
  ) { 
    
  }

  ngOnInit() {
    this.route.paramMap
    .pipe(
      switchMap((params: ParamMap) =>
        this.comSer.getOneById(params.get("id"))
      )
    ).subscribe(res=>{
      this.companyForm = this.fb.group({
        id: [ res.id, [Validators.required]],
        name: [res.name, [Validators.required]],
        logo: [res.logo, [Validators.required]],
        note: [res.note, [Validators.required]],
        // departments: this.fb.array([])
      });
    })
  }
  onSubmit() {
    console.log(this.companyForm.value);

    this.comSer.update(this.companyForm.value).subscribe((res) => {
      console.log(res);
    });
  }
}
