import { DataSource } from "@angular/cdk/collections";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { map } from "rxjs/operators";
import { Observable, of as observableOf, merge } from "rxjs";

// TODO: Replace this with your own data model type
export interface EmployeeListItem {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  age: number;
  sex: sex;
  position: string;
  photoUrl: string;
  note: string;
  company: number;
  salary: number;
}
export enum sex {
  male,
  female,
}

/**
 * Data source for the EmployeeList view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class EmployeeListDataSource extends DataSource<EmployeeListItem> {
  data: EmployeeListItem[];
  paginator: MatPaginator;
  sort: MatSort;

  constructor(employees: Array<EmployeeListItem>) {
    super();
    this.data = employees;
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<EmployeeListItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange,
    ];

    return merge(...dataMutations).pipe(
      map(() => {
        return this.getPagedData(this.getSortedData([...this.data]));
      })
    );
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: EmployeeListItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: EmployeeListItem[]) {
    if (!this.sort.active || this.sort.direction === "") {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === "asc";
      switch (this.sort.active) {
        case "firstName":
          return compare(a.firstName, b.firstName, isAsc);
        case "lastName":
          return compare(a.lastName, b.lastName, isAsc);
        case "sex":
          return compare(a.sex, b.sex, isAsc);
        case "position":
          return compare(a.position, b.position, isAsc);
        case "company":
          return compare(a.company, b.company, isAsc);
        case "salary":
          return compare(+a.salary, +b.salary, isAsc);
        case "id":
          return compare(+a.id, +b.id, isAsc);

        default:
          return 0;
      }
    });
  }

}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
