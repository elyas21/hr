import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DepartmentRoutingModule } from "./department-routing.module";
import { DdetailComponent } from "./ddetail/ddetail.component";
import { MatCardMdImage, MatCardModule } from "@angular/material";

@NgModule({
  declarations: [],
  imports: [CommonModule, DepartmentRoutingModule, MatCardModule],
  exports: [],
})
export class DepartmentModule {}
