import { Component, OnInit } from "@angular/core";
import { ConnectionService } from "ng-connection-service";
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from "@angular/material";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  status: string = "Online";
  isConnected: boolean = true;
  constructor(
    public connectionService: ConnectionService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    const config = new MatSnackBarConfig();
    config.horizontalPosition = "center";
    config.verticalPosition = "top";
    config.duration = 5000;
    config.panelClass = ["snackClass"];
    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
      if (this.isConnected) {
        console.log("online !!");
        this.snackBar.open("Online", "OK", config);
      } else {
        console.log("Offline !!");
        this.snackBar.open("Offline", "OK", config);
      }
    });
  }
}
