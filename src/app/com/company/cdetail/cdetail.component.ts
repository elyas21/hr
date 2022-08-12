import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { Department } from "src/app/model/department";
import { CompanyService } from "src/app/ser/company.service";
import { DepartmentService } from "src/app/ser/department.service";

@Component({
  selector: "app-cdetail",
  templateUrl: "./cdetail.component.html",
  styleUrls: ["./cdetail.component.css"],
})
export class CdetailComponent implements OnInit {
  company;
  $Departments: Observable<Department[]>;
  sub;
  constructor(
    private depSer: DepartmentService,
    private comSer: CompanyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.comSer.getOneById(params.get("id"))
        )
      )
      .subscribe((res) => {
        this.company = res;
        console.log(this.company);
        this.$Departments = this.depSer.getByCompany(this.company.id);
      });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
