import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { NewIntakePageRoutingModule } from "./new-intake-routing.module";

import { NewIntakePage } from "./new-intake.page";
import { IntakeStep1Component } from "src/app/_components/intake-step1/intake-step1.component";
import { IntakeStep2Component } from "src/app/_components/intake-step2/intake-step2.component";
import { IntakeStep3Component } from "src/app/_components/intake-step3/intake-step3.component";
import { IntakeStep4Component } from "src/app/_components/intake-step4/intake-step4.component";
import { IntakeStep5Component } from "src/app/_components/intake-step5/intake-step5.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewIntakePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    NewIntakePage,
    IntakeStep1Component,
    IntakeStep2Component,
    IntakeStep3Component,
    IntakeStep4Component,
    IntakeStep5Component
  ]
})
export class NewIntakePageModule {}
