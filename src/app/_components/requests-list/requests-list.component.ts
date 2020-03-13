import { Component, OnInit, Input } from "@angular/core";
import { Request } from "src/app/_models";

@Component({
  selector: "requests-list",
  templateUrl: "./requests-list.component.html",
  styleUrls: ["./requests-list.component.scss"]
})
export class RequestsListComponent implements OnInit {
  @Input()
  requestsList: Request[];
  constructor() {}

  ngOnInit() {}
}
