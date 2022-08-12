import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Department } from "../model/department";
import { DataService } from "./data.service";

@Injectable({
  providedIn: "root",
})
export class DepartmentService extends DataService {
  constructor(http: HttpClient) {
    super(`${environment.url}departments`, http);
  }
  // http://localhost:3000/departments?company=1
  getByCompany(id): Observable<Department[]> {
    return this.http.get<Department[]>(this.url + "?company=" + id).pipe(
      map((response) => response),
      catchError((err) => this.handleError(err))
    );
  }
}
