import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "intake-step1",
  templateUrl: "./intake-step1.component.html",
  styleUrls: ["./intake-step1.component.scss"]
})
export class IntakeStep1Component implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
}
