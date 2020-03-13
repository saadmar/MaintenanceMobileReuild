import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "",
    component: TabsPage,
    children: [
      {
        path: "",
        redirectTo: "buildings",
        pathMatch: "full"
      },
      {
        path: "buildings",
        loadChildren: () =>
          import("../_pages/buildings/buildings.module").then(
            m => m.BuildingsPageModule
          )
      },
      {
        path: "requests",
        loadChildren: () =>
          import("../_pages/requests/requests.module").then(
            m => m.RequestsPageModule
          )
      },
      {
        path: "profile",
        loadChildren: () =>
          import("../_pages/profile/profile.module").then(
            m => m.ProfilePageModule
          )
      },
      {
        path: "",
        redirectTo: "/tabs/buildings",
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
