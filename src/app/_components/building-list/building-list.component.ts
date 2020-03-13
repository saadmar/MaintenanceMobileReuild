import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "building-list",
  templateUrl: "./building-list.component.html",
  styleUrls: ["./building-list.component.scss"]
})
export class BuildingListComponent implements OnInit {
  constructor() {}

  @Input()
  buildingList: any[] = [];

  ngOnInit() {
    console.log("buildingList", this.buildingList);
  }
}
