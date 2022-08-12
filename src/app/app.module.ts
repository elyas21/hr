import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavComponent } from "./nav/nav.component";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { HomeComponent } from "./core/home/home.component";
import { EmployeeModule } from "./com/employee/employee.module";
import {
  MatCardMdImage,
  MatCardModule,
  MatFormFieldModule,
} from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { EmployeeService } from "./ser/employee.service";

@NgModule({
  declarations: [NavComponent, HomeComponent],
  imports: [
    // feature modle
    EmployeeModule,

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    HttpClientModule,
  ],
  providers: [EmployeeService],
  bootstrap: [NavComponent],
})
export class AppModule {}
