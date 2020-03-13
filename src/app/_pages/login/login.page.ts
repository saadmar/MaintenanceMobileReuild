import { Component, OnInit } from "@angular/core";
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  passwordType: string = "password";
  passwordIcon: string = "eye-off";
  constructor(private screenOrientation: ScreenOrientation) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }
  hideShowPassword() {
    this.passwordType = this.passwordType === "text" ? "password" : "text";
    this.passwordIcon = this.passwordIcon === "eye-off" ? "eye" : "eye-off";
  }

  ngOnInit() {}
}
