import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Company } from "../model/company";
import { DataService } from "./data.service";

@Injectable({
  providedIn: "root",
})
export class CompanyService extends DataService {
  constructor(http: HttpClient) {
    super(`${environment.url}companies`, http);
  }

  getAll(): Observable<Company[]> {
    return this.http.get<Company[]>(this.url).pipe(
      map((response) => response),
      catchError((err) => this.handleError(err))
    );
  }
}
