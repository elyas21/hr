import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { EmployeeListItem } from "../com/employee/table/employee-list/employee-list-datasource";
import { DataService } from "./data.service";

@Injectable({
  providedIn: "root",
})
export class EmployeeService extends DataService {
  constructor(http: HttpClient) {
    super(`${environment.url}employees`, http);
  }

  // http://localhost:3000/departments?company=1
  getByDepartment(id): Observable<EmployeeListItem[]> {
    return this.http
      .get<EmployeeListItem[]>(this.url + "?department=" + id)
      .pipe(
        map((response) => response),
        catchError((err) => this.handleError(err))
      );
  }
}
