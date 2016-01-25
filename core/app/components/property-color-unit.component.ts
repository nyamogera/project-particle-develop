import {LocaleData} from "../i18n/locale-data";
import {Component} from "angular2/core";
import {ColorData} from "../data/data-color";
import {InputRangeComponent} from "./input-range.component";

"use strict";

@Component({
  selector: "color-unit-property-panel",
  templateUrl: "app/components-html/property-color-unit.html",
  inputs: ["colorData"],
  directives: [InputRangeComponent]
})
export class PropertyColorUnit {
  private colorData:ColorData;

  constructor(private localeData:LocaleData){
  }
}
