import {Component} from "angular2/core";
import {DrawingData} from "../data/drawing-data";
import {EventEmitter} from 'angular2/core';
import {ShapeData} from "../data/shape-data";

@Component({
  selector: "shape-property-panel",
  templateUrl: "app/components/template/shape-property.html",
  inputs: ["drawingData", "shapeIdList"]
})

/**
 * シェイプの選択パネルの制御クラスです。
 */
export class ShapePropertyModal {
  private drawingData:DrawingData;
  private shapeIdList:string[] = new ShapeData().assetList;

  private handleClick(shapeId:string) {
    var index = this.drawingData.shapeIdList.indexOf(shapeId);
    if (index == -1) { // 含まれていなければ
      // 追加
      this.drawingData.shapeIdList.push(shapeId);
    } else { // 含まれていたら
      // 削除
      this.drawingData.shapeIdList.splice(index, 1);
    }
  }

  constructor() {
  }
}
