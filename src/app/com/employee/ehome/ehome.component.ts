import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { EmployeeService } from "src/app/ser/employee.service";
import { EmployeeListItem } from "../table/employee-list/employee-list-datasource";

@Component({
  selector: "app-ehome",
  templateUrl: "./ehome.component.html",
  styleUrls: ["./ehome.component.css"],
})
export class EhomeComponent implements OnInit {
  $employee: Observable<EmployeeListItem[]>;
  constructor(private empSer: EmployeeService) {}

  ngOnInit() {
    this.$employee = this.empSer.getAll();
  }
  doFilter() {
    return null;
  }
}
