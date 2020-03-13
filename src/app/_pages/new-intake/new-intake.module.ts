import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewIntakePageRoutingModule } from './new-intake-routing.module';

import { NewIntakePage } from './new-intake.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewIntakePageRoutingModule
  ],
  declarations: [NewIntakePage]
})
export class NewIntakePageModule {}
