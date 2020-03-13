import { Component, OnInit, ViewChild } from "@angular/core";
import { Building } from "src/app/_models";
import { IonSearchbar } from "@ionic/angular";

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
    for (let i = 0; i < 16; i++) {
      this.buildings.push({
        name: "HQ's Quares " + i,
        address: "some adress...",
        image:
          "https://www.freepnglogos.com/uploads/building-png/download-building-png-image-pngimg-6.png",
        fav: i % 2 == 0 ? true : false
      });
    }
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
