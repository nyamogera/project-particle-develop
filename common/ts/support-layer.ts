import Graphics = createjs.Graphics;
/**
 * Created by nyamogera on 2016/01/08.
 */

class ShapeSupport {
  public rotation:number;
  public size:createjs.Point;

  private baseShape:createjs.Shape;
  private controllerLeftTop:createjs.Shape;
  private controllerRightTop:createjs.Shape;
  private controllerLeftBottom:createjs.Shape;
  private controllerRightBottom:createjs.Shape;
  private controllerRotation:createjs.Shape;

  private strokeCommands:any[];

  public container:createjs.Container;

  public lineColor:string;
  private matrix:createjs.Matrix2D;

  private dragTarget:createjs.Shape;
  private dragPoint:createjs.Point;
  private stage:createjs.Stage;

  constructor(stage:createjs.Stage) {
    this.stage = stage;
    this.lineColor = "blue";

    this.rotation = 0;
    this.size = new createjs.Point();
    this.baseShape = new createjs.Shape();
    this.matrix = new createjs.Matrix2D();
    this.dragPoint = new createjs.Point();

    this.container = new createjs.Container();

    //  選択ツール
    this.baseShape = new createjs.Shape();
    this.container.addChild(this.baseShape);
    this.baseShape.addEventListener("mousedown", this.handleMouseDown);

    // 回転ツール
    this.controllerRotation = new createjs.Shape();
    this.container.addChild(this.controllerRotation);
    this.controllerRotation.addEventListener("mousedown", this.handleMouseDown);

    // 拡縮ツール
    this.controllerLeftTop = new createjs.Shape();
    this.controllerRightTop = new createjs.Shape();
    this.controllerLeftBottom = new createjs.Shape();
    this.controllerRightBottom = new createjs.Shape();

    let controlSize:number = 10;
    let controllerList:createjs.Shape[] = [
      this.controllerLeftTop,     //  left-top
      this.controllerRightTop,    //  right-top
      this.controllerRightBottom, //  right-bottom
      this.controllerLeftBottom]; //  left-bottom

    this.strokeCommands  = [];

    let controllerListLength = controllerList.length;

    for (var i = 0; i < controllerListLength; i++) {

      this.container.addChild(controllerList[i]);
      var graphics:createjs.Graphics = controllerList[i].graphics;
      graphics.beginFill("white");

      //  strokeのコマンドだけ保持する
      var strokeCommand = graphics.beginStroke(this.lineColor).command;
      graphics.drawRect(-controlSize / 2, -controlSize / 2, controlSize, controlSize).closePath();

      this.strokeCommands.push(strokeCommand);

      controllerList[i].addEventListener("mousedown", this.handleMouseDown);
    }

    //  丸
    var graphics:createjs.Graphics = this.controllerRotation.graphics;
    graphics.beginFill("white");

    //  strokeのコマンドだけ保持する
    var strokeCommand = graphics.beginStroke(this.lineColor).command;
    graphics.drawCircle(0, 0, controlSize / 2).closePath();

    this.strokeCommands.push(strokeCommand);

  }

  updateLineColor = (lineColor:string) =>{
    this.lineColor = lineColor;
    var strokeCommandLength = this.strokeCommands.length;

    for (var i = 0; i < strokeCommandLength; i++) {
      this.strokeCommands[i].style = this.lineColor;
    }
  }

  startSupport = () => {
    this.startDrag(this.controllerRightBottom);
  }

  startDrag = (dragTarget:createjs.Shape) => {

    if (this.dragTarget) {
      this.stage.removeEventListener("pressup", this.handlePressUp);
    }

    this.dragTarget = dragTarget;
    this.stage.addEventListener("pressup", this.handlePressUp);

    var mousePt = this.container.parent.globalToLocal(this.stage.mouseX, this.stage.mouseY);

    this.dragPoint.x = mousePt.x - (this.dragTarget.x + this.container.x );
    this.dragPoint.y = mousePt.y - (this.dragTarget.y + this.container.y );
  }

  handleMouseDown = (e:any) => {
    console.log("handleMouseDown:" + e.currentTarget);
    this.startDrag(e.currentTarget);
  }

  update = () => {


    this.matrix.identity();
    this.matrix.rotate(this.rotation);

    if (!this.dragTarget) {
      return;
    }

    var mousePt = this.container.parent.globalToLocal(this.stage.mouseX, this.stage.mouseY);

    //console.log(this.dragTarget + ":dragging");

    var diffX = (mousePt.x - this.container.x - this.dragPoint.x );
    var diffY = (mousePt.y - this.container.y - this.dragPoint.y );

    var diff = this.matrix.clone().invert().transformPoint(diffX, diffY);

    //console.log(this.matrix.transformPoint(diff.x, diff.y).x, this.matrix.transformPoint(diff.x, diff.y).y);

    switch (this.dragTarget) {

      case this.baseShape:
        console.log("baseShape - dragging");
        this.container.x = mousePt.x - this.dragPoint.x;
        this.container.y = mousePt.y - this.dragPoint.y;
        break;

      case this.controllerLeftTop:
        console.log("leftTop - dragging");
        this.size.x = -diff.x * 2;
        this.size.y = -diff.y * 2;
        break;

      case this.controllerRightTop:
        console.log("rightTop - dragging");
        this.size.x = diff.x * 2;
        this.size.y = -diff.y * 2;
        break;
      case this.controllerRightBottom:
        console.log("rightBottom - dragging");
        this.size.x = diff.x * 2;
        this.size.y = diff.y * 2;
        break;

      case this.controllerLeftBottom:
        console.log("leftBottom - dragging");
        this.size.x = -diff.x * 2;
        this.size.y = diff.y * 2;
        break;

      case this.controllerRotation:
        console.log("rotation - dragging");

        this.rotation = (Math.atan2(diffY, diffX) * 180 / Math.PI + 90 ) + (this.size.y >= 0 ? 0 : 180);
        console.log(this.rotation);

        break;
    }
  }

  handlePressUp = (e:any) => {
    if (this.stage) {
      this.stage.removeEventListener("pressup", this.handlePressUp);
    }
    this.dragTarget = null;

  }
  updateGraphics = (drawForce:boolean = false) => {
    if (!drawForce && !this.dragTarget) {
      return;
    }

    var graphics = this.baseShape.graphics;

    var harf_w:number = this.size.x / 2;
    var harf_h:number = this.size.y / 2;

    var leftTop:createjs.Point = this.matrix.transformPoint(-harf_w, -harf_h);
    var rightTop:createjs.Point = this.matrix.transformPoint(harf_w, -harf_h);
    var leftBottom:createjs.Point = this.matrix.transformPoint(-harf_w, harf_h);
    var rightBottom:createjs.Point = this.matrix.transformPoint(harf_w, harf_h);

    var rotationPointStart:createjs.Point = this.matrix.transformPoint(0, -harf_h);
    var rotationPoint:createjs.Point = this.matrix.transformPoint(0, -harf_h - (this.size.y >= 0 ? 50 : -50));

    var color = createjs.Graphics.getRGB(1, 1, 1, 0.01);

    graphics.clear().beginFill(color).beginStroke(this.lineColor).moveTo(leftTop.x, leftTop.y).lineTo(leftTop.x, leftTop.y).lineTo(rightTop.x, rightTop.y).lineTo(rightBottom.x, rightBottom.y).lineTo(leftBottom.x, leftBottom.y).lineTo(leftTop.x, leftTop.y);

    graphics.moveTo(rotationPointStart.x, rotationPointStart.y).lineTo(rotationPoint.x, rotationPoint.y);

    this.controllerLeftTop.setTransform(leftTop.x, leftTop.y, 1, 1, this.rotation);
    this.controllerRightTop.setTransform(rightTop.x, rightTop.y, 1, 1, this.rotation);
    this.controllerRightBottom.setTransform(rightBottom.x, rightBottom.y, 1, 1, this.rotation);
    this.controllerLeftBottom.setTransform(leftBottom.x, leftBottom.y, 1, 1, this.rotation);
    this.controllerRotation.setTransform(rotationPoint.x, rotationPoint.y, 1, 1, this.rotation);
  }
}
