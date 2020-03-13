import {
  Component,
  OnInit,
  ViewChild,
  ViewChildren,
  QueryList,
  AfterViewInit
} from "@angular/core";
import { IonInput, IonButton } from "@ionic/angular";

@Component({
  selector: "app-pin",
  templateUrl: "./pin.page.html",
  styleUrls: ["./pin.page.scss"]
})
export class PinPage implements OnInit, AfterViewInit {
  //used to access the search input
  @ViewChildren("pin") pins: QueryList<IonInput>;
  // used to click automatically on loginBTN
  //@ViewChild('login',{static:true}) login:IonButton;

  constructor() {}

  _0: number;
  _1: number;
  _2: number;
  _3: number;

  setPinNumber(event, idx) {
    // set the pin number row
    console.log(event);
    let el = this.pins.find((element, index) => index == idx + 1);
    if (el) el.setFocus();
    else this.login(event);
  }

  ngOnInit() {}
  ngAfterViewInit() {
    this.pins.first.setFocus();
  }

  login(value) {
    console.log("verifing login", value.form);
  }
}
