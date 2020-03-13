import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PinCreatePageRoutingModule } from './pin-create-routing.module';

import { PinCreatePage } from './pin-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PinCreatePageRoutingModule
  ],
  declarations: [PinCreatePage]
})
export class PinCreatePageModule {}
