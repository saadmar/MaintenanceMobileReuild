import { Component, OnInit, ViewChild } from "@angular/core";
import { Building } from "src/app/_models";
import { IonSearchbar } from "@ionic/angular";
import { data } from "../../_models";

@Component({
  selector: "app-buildings",
  templateUrl: "./buildings.page.html",
  styleUrls: ["./buildings.page.scss"]
})
export class BuildingsPage implements OnInit {
  constructor() {}

  buildings: Building[] = [];
  //if tue show all else only favorit
  apply: boolean = true;

  //searching mode is activated or not
  searching: boolean = false;
  searchText: string;

  //used to access the search input
  @ViewChild("search", { static: false }) searchInput: IonSearchbar;

  ngOnInit() {
    this.buildings = data;
  }

  onBlur() {
    this.searching = false;
  }

  segmentChanged({ detail }) {
    this.apply = detail.value === "favorites" ? true : false;
  }

  startSearching() {
    this.searching = true;
    this.searchInput.setFocus();
  }
}
