System.register([], function(exports_1) {
    ///<reference path="../../libs-typescript/createjs/createjs.d.ts"/>
    "use strict";
    var ParticleExporter;
    return {
        setters:[],
        execute: function() {
            /**
             * Export SVG
             */
            ParticleExporter = (function () {
                function ParticleExporter(drawLayerContainer) {
                    this.drawLayerContainer = drawLayerContainer;
                }
                ParticleExporter.prototype.runExport = function () {
                    var _this = this;
                    return new Promise(function (onResolve, onReject) {
                        _this.exporter = new SVGExporter(_this.drawLayerContainer, false, false, false);
                        _this.exporter.run();
                        setTimeout(function () {
                            onResolve();
                        }, 1);
                    });
                };
                ParticleExporter.prototype.runExportSP = function (cavas) {
                    return new Promise(function (onResolve, onReject) {
                        var base64 = cavas.toDataURL();
                        cordova.base64ToGallery(base64, 'img_', function (msg) {
                            onResolve();
                            alert("画像ライブラリに保存しました。");
                        }, function (err) {
                            onReject();
                            alert("画像保存に失敗しました。");
                        });
                    });
                };
                ParticleExporter.prototype.getSVGString = function () {
                    var serializer = new XMLSerializer();
                    return serializer.serializeToString(this.exporter.svg);
                };
                return ParticleExporter;
            })();
            exports_1("ParticleExporter", ParticleExporter);
        }
    }
});
//# sourceMappingURL=particle-exporter.js.map