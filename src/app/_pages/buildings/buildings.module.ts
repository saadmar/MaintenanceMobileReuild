import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { BuildingsPageRoutingModule } from "./buildings-routing.module";

import { BuildingsPage } from "./buildings.page";
import { BuildingListItemComponent } from "src/app/_components/building-list-item/building-list-item.component";
import { BuildingListComponent } from "src/app/_components/building-list/building-list.component";
import { FavouritsPipe } from "src/app/_pipes/favourites.pipe";
import { FilterPipe } from "src/app/_pipes/filter.pipe";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, BuildingsPageRoutingModule],
  declarations: [
    BuildingsPage,
    BuildingListItemComponent,
    BuildingListComponent,
    FavouritsPipe,
    FilterPipe
  ],
  providers: [FavouritsPipe, FilterPipe]
})
export class BuildingsPageModule {}
