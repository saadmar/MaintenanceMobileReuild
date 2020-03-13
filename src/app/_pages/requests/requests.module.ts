import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { RequestsPageRoutingModule } from "./requests-routing.module";

import { RequestsPage } from "./requests.page";
import { StatusPipe } from "src/app/_pipes/status.pipe";
import { RequestsListComponent } from "src/app/_components/requests-list/requests-list.component";
import { RequestsListItemComponent } from "src/app/_components/requests-list-item/requests-list-item.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RequestsPageRoutingModule],
  declarations: [
    RequestsPage,
    StatusPipe,
    RequestsListComponent,
    RequestsListItemComponent
  ],
  providers: [StatusPipe]
})
export class RequestsPageModule {}
