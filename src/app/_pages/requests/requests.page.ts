import { Component, OnInit, ViewChild } from "@angular/core";
import { IonSearchbar } from "@ionic/angular";
import { Request } from "src/app/_models";

@Component({
  selector: "app-requests",
  templateUrl: "./requests.page.html",
  styleUrls: ["./requests.page.scss"]
})
export class RequestsPage implements OnInit {
  //list of the requests for this user
  requests: Request[] = [];
  //type of the resquests to show : all|open|concept|close
  types = ["all", "open", "concept", "closed"];
  requestStatus: string;
  //searching mode is activated or not
  searching: boolean = false;
  searchText: string;

  //used to access the search input
  @ViewChild("search", { static: false }) searchInput: IonSearchbar;

  constructor() {}

  ngOnInit() {
    this.requests.push({ status: "open" });
    this.requests.push({ status: "closed" });
    this.requests.push({ status: "open" });
    this.requests.push({ status: "concept" });
    this.requests.push({ status: "concept" });
    this.requests.push({ status: "concept" });
    this.requests.push({ status: "concept" });
  }

  onBlur() {
    this.searching = false;
  }

  statusSelected({ detail }) {
    this.requestStatus = detail.value;
  }

  startSearching() {
    this.searching = true;
    this.searchInput.setFocus();
  }
}
