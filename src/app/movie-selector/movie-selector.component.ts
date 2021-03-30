import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FLOP_DATA } from "../FLOP_DATA.ts";

@Component({
  selector: "app-movie-selector",
  templateUrl: "./movie-selector.component.html"
})
export class MovieSelectorComponent {
  @Input() movie;
  @Output() select = new EventEmitter();
  flops = FLOP_DATA;

  onClick() {
    this.select.emit();
  }
}
