import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DdetailComponent } from "../department/ddetail/ddetail.component";
import { DepartmentModule } from "../department/department.module";
import { CaddComponent } from "./cadd/cadd.component";
import { CdetailComponent } from "./cdetail/cdetail.component";
import { CeditComponent } from "./cedit/cedit.component";
import { ChomeComponent } from "./chome/chome.component";

const routes: Routes = [
  {
    path: "",
    component: ChomeComponent,
  },
  {
    path: "detail/:id",
    component: CdetailComponent,
  },
  {
    path: "department/detail/:id",
    component: DdetailComponent,
  },
  {
    path: "add",
    component: CaddComponent,
  },
  {
    path: "edit/:id",
    component: CeditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, DepartmentModule],
})
export class CompanyRoutingModule {}
