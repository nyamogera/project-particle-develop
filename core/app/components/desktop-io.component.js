System.register(["../i18n/locale-data", "angular2/core", 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var locale_data_1, core_1, core_2, core_3;
    var DesktopIOBox;
    return {
        setters:[
            function (locale_data_1_1) {
                locale_data_1 = locale_data_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
                core_3 = core_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            }],
        execute: function() {
            "use strict";
            DesktopIOBox = (function () {
                function DesktopIOBox(element, localeData) {
                    this.localeData = localeData;
                    this.exportSvgEvent = new core_2.EventEmitter();
                    this.exportPngEvent = new core_2.EventEmitter();
                    this.exportJpgEvent = new core_2.EventEmitter();
                    this.exportParamaterEvent = new core_2.EventEmitter();
                    this.element = element;
                    this.setDragAndDropSettings(element);
                }
                DesktopIOBox.prototype.exportParamater = function () {
                    this.exportParamaterEvent.emit(null);
                };
                DesktopIOBox.prototype.exportSvg = function () {
                    this.exportSvgEvent.emit(null);
                };
                DesktopIOBox.prototype.exportPng = function () {
                    this.exportPngEvent.emit(null);
                };
                DesktopIOBox.prototype.exportJpg = function () {
                    this.exportJpgEvent.emit(null);
                };
                DesktopIOBox.prototype.selectParameterFile = function (obj) {
                    this.importParameterFile(obj.target.files[0]);
                };
                DesktopIOBox.prototype.importParameterFile = function (file) {
                    var _this = this;
                    // ファイルの内容は FileReader で読み込みます.
                    var fileReader = new FileReader();
                    fileReader.onload = function (event) {
                        // event.target.result に読み込んだファイルの内容が入っています。
                        var json = event.target.result;
                        var object = JSON.parse(json);
                        _this.drawingData.into(object);
                    };
                    fileReader.readAsText(file);
                };
                DesktopIOBox.prototype.setDragAndDropSettings = function (element) {
                    /** documentにドラッグされた場合 / ドロップされた場合 */
                    document.ondragover = document.ondrop = function (e) {
                        e.preventDefault(); // イベントの伝搬を止めて、アプリケーションのHTMLとファイルが差し替わらないようにする
                        return false;
                    };
                    var holder = element.nativeElement;
                    /** hoverエリアにドラッグされた場合 */
                    holder.ondragover = function () {
                        return false;
                    };
                    /** hoverエリアから外れた or ドラッグが終了した */
                    holder.ondragleave = holder.ondragend = function () {
                        return false;
                    };
                    /** hoverエリアにドロップされた */
                    holder.ondrop = this.onDrop;
                };
                DesktopIOBox.prototype.onDrop = function (event) {
                    event.preventDefault(); // イベントの伝搬を止めて、アプリケーションのHTMLとファイルが差し替わらないようにする
                    var file = event.dataTransfer.files[0];
                    this.importParameterFile(file);
                    return false;
                };
                DesktopIOBox = __decorate([
                    core_1.Component({
                        selector: "desktop-io-box",
                        templateUrl: "app/components-html/desktop-io-box.html",
                        inputs: ["drawingData"],
                        events: [
                            "exportSvgEvent",
                            "exportPngEvent",
                            "exportJpgEvent",
                            "exportParamaterEvent"
                        ]
                    }), 
                    __metadata('design:paramtypes', [core_3.ElementRef, locale_data_1.LocaleData])
                ], DesktopIOBox);
                return DesktopIOBox;
            })();
            exports_1("DesktopIOBox", DesktopIOBox);
        }
    }
});
//# sourceMappingURL=desktop-io.component.js.map