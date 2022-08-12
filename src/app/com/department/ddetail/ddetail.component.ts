import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { DepartmentService } from "src/app/ser/department.service";
import { EmployeeService } from "src/app/ser/employee.service";
import { EmployeeListItem } from "../../employee/table/employee-list/employee-list-datasource";

@Component({
  selector: "app-ddetail",
  templateUrl: "./ddetail.component.html",
  styleUrls: ["./ddetail.component.css"],
})
export class DdetailComponent implements OnInit {
  sub;
  department;
  $Employees: Observable<EmployeeListItem[]>;
  constructor(
    private depSer: DepartmentService,
    private empSer: EmployeeService,
    private route: ActivatedRoute
  ) {}
  displayedColumns = ["firstName", "lastName", "sex", "position", "salary"];
  dataSouce;
  ngOnInit() {
    this.sub = this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.depSer.getOneById(params.get("id"))
        )
      )
      .subscribe((res) => {
        this.department = res;
        console.log(this.department);
        this.$Employees = this.empSer.getByDepartment(this.department.id);
      });
  }
}
