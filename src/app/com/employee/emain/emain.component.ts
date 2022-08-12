import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, Validators, UntypedFormGroup } from "@angular/forms";

@Component({
  selector: "app-emain",
  templateUrl: "./emain.component.html",
  styleUrls: ["./emain.component.css"],
})
export class EmainComponent implements OnInit {
  searchGroup: UntypedFormGroup;
  constructor(private fb: UntypedFormBuilder) {
    this.searchGroup = this.fb.group({
      search: ["", Validators.required],
    });
    console.log("ok");
  }
  ngOnInit(): void {}
  onSubmit() {
    console.log("sub");
    console.log(this.searchGroup.value);
  }
}
