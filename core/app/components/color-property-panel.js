System.register(["angular2/core", "./color-unit-property.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, color_unit_property_component_1;
    var ColorPropertyPanel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (color_unit_property_component_1_1) {
                color_unit_property_component_1 = color_unit_property_component_1_1;
            }],
        execute: function() {
            ColorPropertyPanel = (function () {
                function ColorPropertyPanel() {
                }
                ColorPropertyPanel = __decorate([
                    core_1.Component({
                        selector: "color-property-panel",
                        templateUrl: "app/components/template/color-property.html",
                        inputs: ["drawingData"],
                        directives: [color_unit_property_component_1.ColorUnitPropertyPanel]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ColorPropertyPanel);
                return ColorPropertyPanel;
            })();
            exports_1("ColorPropertyPanel", ColorPropertyPanel);
        }
    }
});
//# sourceMappingURL=color-property-panel.js.map