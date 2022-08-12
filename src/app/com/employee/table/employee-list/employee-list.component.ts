import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTable } from "@angular/material/table";
import { EmployeeService } from "src/app/ser/employee.service";
import { AreYouSureDialogComponent } from "../are-you-sure-dialog/are-you-sure-dialog.component";
import { UpdateEmployeComponent } from "../update-employe/update-employe.component";
import {
  EmployeeListDataSource,
  EmployeeListItem,
} from "./employee-list-datasource";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"],
})
export class EmployeeListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<EmployeeListItem>;
  dataSource: EmployeeListDataSource;
  @Input() EmployeeData: EmployeeListItem[];
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    "id",
    "firstName",
    "lastName",
    "sex",
    "position",
    "salary",
    "company",
    "updateDelete",
  ];

  ngOnInit() {
    this.dataSource = new EmployeeListDataSource(this.EmployeeData);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  // applyFilter(value: string) {
  //   this.table.dataSource..filter = value.trim().toLocaleLowerCase();
  // }

  animal: string;
  name: string;

  constructor(public dialog: MatDialog, private empSer: EmployeeService) {}

  openDialog(name, id): void {
    const dialogRef = this.dialog.open(AreYouSureDialogComponent, {
      width: "250px",
      data: { name },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result) {
        this.empSer.remove(id).subscribe((res) => {
          console.log(res);
        });
      }
    });
  }
  openEditDialog(data): void {
    const dialogRef = this.dialog.open(UpdateEmployeComponent, {
      width: "90vw",
      data: data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result) {
        // this.empSer.remove(row.idid).subscribe((res) => {
        //   console.log(res);
        // });
      }
    });
  }
}
function input() {
  throw new Error("Function not implemented.");
}
