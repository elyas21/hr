import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EaddComponent } from "./com/employee/eadd/eadd.component";
import { EhomeComponent } from "./com/employee/ehome/ehome.component";
import { EmainComponent } from "./com/employee/emain/emain.component";
import { HomeComponent } from "./core/home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "addE",
    component: EaddComponent,
  },
  {
    path: "employee",
    component: EmainComponent,
    children: [
      { path: "", component: EhomeComponent },
      { path: "add", component: EaddComponent },
    ],
  },
  {
    path: "company",
    loadChildren: () =>
      import("./com/company/company.module").then((m) => m.CompanyModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
