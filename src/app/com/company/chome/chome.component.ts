import { Component, OnInit } from "@angular/core";
import { MatDialog, MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Company } from "src/app/model/company";
import { CompanyService } from "src/app/ser/company.service";
import { DepartmentService } from "src/app/ser/department.service";
import { AcompanyComponent } from "../acompany/acompany.component";
import { CeditComponent } from "../cedit/cedit.component";

@Component({
  selector: "app-chome",
  templateUrl: "./chome.component.html",
  styleUrls: ["./chome.component.css"],
})
export class ChomeComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private route: Router,
    private _snackBar: MatSnackBar,

    private comSer: CompanyService,
    private dptSer: DepartmentService
  ) {}
  $companyies: Observable<Company[]>;
  ngOnInit() {
    this.$companyies = this.comSer.getAll();
  }
  editD( id): void {
  
   this.route.navigate(['company','edit',id])
  }
    
  deleteC(id){
    this.comSer.remove(id).subscribe(
      res =>{
        this._snackBar.open("company delete s", 'Success', {
          duration: 2000,
        });
      }
    )
  }
}
