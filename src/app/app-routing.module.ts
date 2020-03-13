import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        redirectTo: "tabs",
        pathMatch: "full"
      },
      {
        path: "tabs",
        // redirectTo: "/tabs",
        // pathMatch: "full",
        loadChildren: () =>
          import("./tabs/tabs.module").then(m => m.TabsPageModule)
      }
    ]
  },

  {
    path: "login",
    loadChildren: () =>
      import("./_pages/login/login.module").then(m => m.LoginPageModule)
  },
  {
    path: "pin",
    loadChildren: () =>
      import("./_pages/pin/pin.module").then(m => m.PinPageModule)
  },
  {
    path: "pin-create",
    loadChildren: () =>
      import("./_pages/pin-create/pin-create.module").then(
        m => m.PinCreatePageModule
      )
  },
  {
    path: "intake",
    loadChildren: () =>
      import("./_pages/new-intake/new-intake.module").then(
        m => m.NewIntakePageModule
      )
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
