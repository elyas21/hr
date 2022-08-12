import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { of, Observable, throwError } from "rxjs";
import { AppError } from "../core/common/app-error";
import { BadInput } from "../core/common/bad-input";
import { NotFoundError } from "../core/common/not-found-error";

export class DataService {
  constructor(protected url?: string, protected http?: HttpClient) {}
  // getOneBySchool(id) {
  //   return this.http.get(this.url + 'get-one-by-school/' + this.currentUser.school + '/' + id).pipe(
  //     map(response => response),
  //     catchError(err => this.handleError(err))
  //   );
  // }

  // getOneBySchoolClassYear(id) {
  //   return this.http
  //     .get(
  //       this.url +
  //         'get-one-by-school-classYear/' +
  //         this.currentUser.school +
  //         '/' +
  //         this.currentUser.School.currentClassYear +
  //         '/' +
  //         id
  //     )
  //     .pipe(
  //       map(response => response),
  //       catchError(err => this.handleError(err))
  //     );
  // }

  // getAllBySchool(): Observable<any> {
  //   return this.http.get<any>(this.url + 'get-all-by-school/' + this.currentUser.school).pipe(
  //     map(response => response),
  //     catchError(err => this.handleError(err))
  //   );
  // }
  // getAllBySchoolSection(section): Observable<any> {
  //   return this.http
  //     .get<any>(this.url + 'get-all-by-school-section/' + this.currentUser.school + '/' + section)
  //     .pipe(
  //       map(res => res),
  //       catchError(err => this.handleError(err))
  //     );
  // }
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.url).pipe(
      map((response) => response),
      catchError((err) => this.handleError(err))
    );
  }

  get(id) {
    return this.http.get(this.url + "get-one/" + id).pipe(
      map((response) => response),
      catchError((err) => this.handleError(err))
    );
  }
  getOneById(id): Observable<any> {
    return this.http.get<any>(this.url + "/" + id).pipe(
      map((response) => response),
      catchError((err) => this.handleError(err))
    );
  }

  public create(resource: any): Observable<any> {
    return this.http.post(this.url, resource ).pipe(
      map((response) => response),
      catchError((err) => this.handleError(err))
    );
  }
  public remove(id: any): Observable<any> {
    return this.http.delete(`${this.url}/${id}`).pipe(
      map((response) => response),
      catchError((err) => this.handleError(err))
    );
  }

  update(resource): Observable<any> {
    return this.http.put<any>(`${this.url}/${resource.id}`, resource).pipe(
      map((response) => response),
      catchError((err) => of(null))
    );
  }

  protected handleError(error: Response) {
    if (error.status === 400) {
      return throwError(new BadInput(error.json()));
    }

    if (error.status === 404) {
      return throwError(new NotFoundError());
    }

    return throwError(new AppError(error));
  }
}
