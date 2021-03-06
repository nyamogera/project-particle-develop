System.register(["./data-color", "../enum/alpha-curve-type"], function(exports_1) {
    "use strict";
    var data_color_1, alpha_curve_type_1;
    var DrawingData;
    return {
        setters:[
            function (data_color_1_1) {
                data_color_1 = data_color_1_1;
            },
            function (alpha_curve_type_1_1) {
                alpha_curve_type_1 = alpha_curve_type_1_1;
            }],
        execute: function() {
            DrawingData = (function () {
                function DrawingData() {
                    this.bgColor = "";
                    this.width = 0.0;
                    this.height = 0.0;
                    this.emitFrequency = 0;
                    this.lifeSpan = 0;
                    this.lifeSpanVariance = 0;
                    this.initialDirection = 0;
                    this.initialDirectionVariance = 0;
                    this.initialSpeed = 0;
                    this.initialSpeedVariance = 0;
                    this.friction = 0;
                    this.accelerationSpeed = 0;
                    this.accelerationDirection = 0;
                    this.startScale = 0;
                    this.startScaleVariance = 0;
                    this.finishScale = 0;
                    this.finishScaleVariance = 0;
                    this.startAlpha = 0;
                    this.startAlphaVariance = 0;
                    this.finishAlpha = 0;
                    this.finishAlphaVariance = 0;
                    this.startX = 0;
                    this.startXVariance = 0;
                    this.startY = 0;
                    this.startYVariance = 0;
                    this.shapeIdList = ["kirakira"];
                    this.startColor = new data_color_1.ColorData();
                    this.blendMode = true;
                    this.alphaCurveType = alpha_curve_type_1.AlphaCurveType.Normal;
                }
                DrawingData.prototype.into = function (obj) {
                    for (var key in obj) {
                        // 無視するプロパティー
                        if (key == "width" || key == "height" || key == "startX" || key == "startY") {
                            continue;
                        }
                        if (Reflect.has(this, key) == true) {
                            var val = obj[key];
                            // イマドキなプロパティー反映方法を適用 ICS-Ikeda 2016-01-22
                            Reflect.set(this, key, val);
                        }
                    }
                };
                return DrawingData;
            })();
            exports_1("DrawingData", DrawingData);
        }
    }
});
//# sourceMappingURL=data-drawing.js.map