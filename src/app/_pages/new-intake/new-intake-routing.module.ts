import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewIntakePage } from './new-intake.page';

const routes: Routes = [
  {
    path: '',
    component: NewIntakePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewIntakePageRoutingModule {}
