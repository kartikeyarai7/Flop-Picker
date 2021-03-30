import { Component } from "@angular/core";
import { FlopChooserService } from "./flop-chooser.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  flops;
  isChosen = false;
  isCorrect = false;
  constructor(public flopChooser: FlopChooserService) {}
  ngOnInit() {
    this.flops = this.flopChooser.getTwoRandomFlops();
  }

  // Feel free to put your own data here if you have other favorite flops
  // flops = FLOP_DATA;
  selectNewFlops() {
    this.isChosen = false;
    this.flops = this.flopChooser.getTwoRandomFlops();
  }

  onFirstSelected() {
    if (!this.isChosen) {
      console.log("Selected");
      this.isChosen = true;
      this.isCorrect = this.flopChooser.isChoiceCorrect(
        this.flops.first,
        this.flops.second
      );
    }
  }
  onSecondSelected() {
    if (!this.isChosen) {
      this.isChosen = true;
      this.isCorrect = this.flopChooser.isChoiceCorrect(
        this.flops.second,
        this.flops.first
      );
    }
  }
}
