import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-new-intake",
  templateUrl: "./new-intake.page.html",
  styleUrls: ["./new-intake.page.scss"]
})
export class NewIntakePage implements OnInit {
  currentStep: number = 1;

  constructor() {}

  ngOnInit() {}

  toggleStep(stepNumber: number) {
    this.currentStep = stepNumber;
  }
}
