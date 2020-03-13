import { Component, OnInit, Input } from "@angular/core";
import { Building } from "src/app/_models";

@Component({
  selector: "building-list-item",
  templateUrl: "./building-list-item.component.html",
  styleUrls: ["./building-list-item.component.scss"]
})
export class BuildingListItemComponent implements OnInit {
  constructor() {}

  @Input()
  building: Building;

  ngOnInit() {}
}
