import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EmployeeRoutingModule } from "./employee-routing.module";
import { EhomeComponent } from "./ehome/ehome.component";
import { EmainComponent } from "./emain/emain.component";
import { RouterModule } from "@angular/router";
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule,
  MatToolbarModule,
} from "@angular/material";
import { ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { EmployeeListComponent } from "./table/employee-list/employee-list.component";
import { EaddComponent } from "./eadd/eadd.component";
import { AreYouSureDialogComponent } from "./table/are-you-sure-dialog/are-you-sure-dialog.component";
import { UpdateEmployeComponent } from "./table/update-employe/update-employe.component";

@NgModule({
    declarations: [
        EhomeComponent,
        EmainComponent,
        EmployeeListComponent,
        EaddComponent,
        AreYouSureDialogComponent,
        UpdateEmployeComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        MatSelectModule,
        MatDialogModule,
        MatSnackBarModule,
    ],
    exports: [
        EhomeComponent,
        EmainComponent,
        EmployeeListComponent,
        EaddComponent,
    ]
})
export class EmployeeModule {}
