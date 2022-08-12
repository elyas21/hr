import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CompanyRoutingModule } from "./company-routing.module";
import { ChomeComponent } from "./chome/chome.component";
import {
  MatButtonModule,
  MatCardMdImage,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatTableModule,
  MatTabsModule,
} from "@angular/material";
import { TrimPipe } from "src/app/pipe/trim.pipe";
import { CdetailComponent } from "./cdetail/cdetail.component";
import { DepartmentModule } from "../department/department.module";
import { DdetailComponent } from "../department/ddetail/ddetail.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AcompanyComponent } from "./acompany/acompany.component";
import { CaddComponent } from './cadd/cadd.component';
import { ReactiveFormsModule } from "@angular/forms";
import { CeditComponent } from './cedit/cedit.component';

@NgModule({
    declarations: [
        ChomeComponent,
        DdetailComponent,
        TrimPipe,
        CdetailComponent,
        AcompanyComponent,
        CaddComponent,
        CeditComponent,
    ],
    imports: [
        // feature modle
        // DepartmentModule,
        CommonModule,
        MatIconModule,
        CompanyRoutingModule,
        MatButtonModule,
        MatCardModule,
        MatTableModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports: [CeditComponent]
})
export class CompanyModule {}
