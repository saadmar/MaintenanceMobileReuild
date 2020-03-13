import { Component, OnInit, Input } from "@angular/core";
import { Request } from "src/app/_models";

@Component({
  selector: "requests-list-item",
  templateUrl: "./requests-list-item.component.html",
  styleUrls: ["./requests-list-item.component.scss"]
})
export class RequestsListItemComponent implements OnInit {
  @Input()
  request: Request;
  type = "sent";
  constructor() {}

  ngOnInit() {}
}
