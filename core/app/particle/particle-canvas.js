///<reference path="../../typings/tsd.d.ts" />
System.register(["../enum/view-port", "../enum/canvas-margin", "./particle-emitter", "./particle-exporter", "./particle-image-importer", "./particle-capture-image-layer"], function(exports_1) {
    var view_port_1, canvas_margin_1, particle_emitter_1, particle_exporter_1, particle_image_importer_1, particle_capture_image_layer_1;
    var ParticleCanvas;
    return {
        setters:[
            function (view_port_1_1) {
                view_port_1 = view_port_1_1;
            },
            function (canvas_margin_1_1) {
                canvas_margin_1 = canvas_margin_1_1;
            },
            function (particle_emitter_1_1) {
                particle_emitter_1 = particle_emitter_1_1;
            },
            function (particle_exporter_1_1) {
                particle_exporter_1 = particle_exporter_1_1;
            },
            function (particle_image_importer_1_1) {
                particle_image_importer_1 = particle_image_importer_1_1;
            },
            function (particle_capture_image_layer_1_1) {
                particle_capture_image_layer_1 = particle_capture_image_layer_1_1;
            }],
        execute: function() {
            ParticleCanvas = (function () {
                function ParticleCanvas(canvas, data) {
                    var _this = this;
                    this.runExport = function () {
                        return _this.particleExporter.runExport();
                    };
                    this.update = function (data) {
                        if (data.width != _this.backgroundSize.w || data.height != _this.backgroundSize.h ||
                            _this.backgroundColorCommand.style != data.bgColor) {
                            _this.backgroundColorCommand.style = data.bgColor;
                            _this.backgroundSize.w = data.width;
                            _this.backgroundSize.h = data.height;
                        }
                        _this.particleEmitter.update(data);
                        _this.stage.update();
                    };
                    this.canvas = canvas;
                    this.canvas.width = data.width;
                    this.canvas.height = data.height;
                    this.stage = new createjs.Stage(this.canvas);
                    //  キャンバスより後ろ
                    this.background = new createjs.Shape();
                    this.backgroundColorCommand = this.background.graphics.beginFill("gray").command;
                    this.backgroundSize = this.background.graphics.drawRect(0, 0, data.width, data.height).command;
                    this.backgroundColorCommand.style = data.bgColor;
                    this.backgroundSize.w = data.width;
                    this.backgroundSize.h = data.height;
                    this.stage.addChild(this.background);
                    this.captureImageLayer = new particle_capture_image_layer_1.ParticleCaptureImageLayer();
                    this.stage.addChild(this.captureImageLayer);
                    this.particleEmitter = new particle_emitter_1.ParticleEmitter();
                    this.stage.addChild(this.particleEmitter.container);
                    this.particleExporter = new particle_exporter_1.ParticleExporter(this.stage);
                    this.partcileImageImporter = new particle_image_importer_1.PartcicleImageImporter();
                    // リサイズイベント
                    this.resizeHandler();
                    window.addEventListener("resize", function () { return _this.resizeHandler(); });
                }
                ParticleCanvas.prototype.getSVGString = function () {
                    return this.particleExporter.getSVGString();
                };
                ParticleCanvas.prototype.runExportSP = function () {
                    return this.particleExporter.runExportSP(this.canvas);
                };
                ParticleCanvas.prototype.runCamera = function () {
                    var _this = this;
                    var canvasWidth = this.stage.canvas.width;
                    var canvasHeight = this.stage.canvas.height;
                    return this.partcileImageImporter.getCapture(canvasWidth, canvasHeight).then(function (imageData) { return _this.insertCaptureToStage(imageData); }, function () { return _this.insertDummyImageToStage(); });
                };
                /**
                 * Stageにキャプチャー画像を挿入します。
                 */
                ParticleCanvas.prototype.insertCaptureToStage = function (imageData) {
                    this.captureImageLayer.addImageFromImageData(imageData);
                    this.stage.update();
                };
                ParticleCanvas.prototype.insertDummyImageToStage = function () {
                    this.captureImageLayer.addImageFromURL("http://ics-web.jp/imgs/works/pollenmap.jpg");
                    this.stage.update();
                };
                /**
                 * リサイズのイベント処理
                 */
                ParticleCanvas.prototype.resizeHandler = function () {
                    var canvasWidth;
                    var canvasHeight;
                    var windowWidth = window.innerWidth;
                    var windowHeight = window.innerHeight;
                    canvasWidth = windowWidth;
                    canvasHeight = windowHeight;
                    if (windowWidth > view_port_1.Viewport.sm) {
                        canvasHeight -= canvas_margin_1.CanvasMargin.TOP_DESKTOP;
                        canvasWidth -= canvas_margin_1.CanvasMargin.RIGHT_DESKTOP;
                    }
                    else {
                        canvasHeight -= canvas_margin_1.CanvasMargin.TOP_MOBILE;
                        canvasWidth -= canvas_margin_1.CanvasMargin.RIGHT_MOBILE;
                    }
                    // ステージのサイズをwindowのサイズに変更
                    this.stage.canvas.width = canvasWidth;
                    this.stage.canvas.height = canvasHeight;
                };
                return ParticleCanvas;
            })();
            exports_1("ParticleCanvas", ParticleCanvas);
        }
    }
});
//# sourceMappingURL=particle-canvas.js.map