System.register(["angular2/core", "./property-color-unit.component", "./property-emitter.component", "./property-particle.component", "./property-color.component", "./property-template.component", "./property-shape.component", "./property-canvas.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, property_color_unit_component_1, property_emitter_component_1, property_particle_component_1, property_color_component_1, property_template_component_1, property_shape_component_1, property_canvas_component_1;
    var PropertyPanel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (property_color_unit_component_1_1) {
                property_color_unit_component_1 = property_color_unit_component_1_1;
            },
            function (property_emitter_component_1_1) {
                property_emitter_component_1 = property_emitter_component_1_1;
            },
            function (property_particle_component_1_1) {
                property_particle_component_1 = property_particle_component_1_1;
            },
            function (property_color_component_1_1) {
                property_color_component_1 = property_color_component_1_1;
            },
            function (property_template_component_1_1) {
                property_template_component_1 = property_template_component_1_1;
            },
            function (property_shape_component_1_1) {
                property_shape_component_1 = property_shape_component_1_1;
            },
            function (property_canvas_component_1_1) {
                property_canvas_component_1 = property_canvas_component_1_1;
            }],
        execute: function() {
            PropertyPanel = (function () {
                function PropertyPanel() {
                }
                PropertyPanel = __decorate([
                    core_1.Component({
                        selector: "property-panel",
                        templateUrl: "app/components/template/property.html",
                        inputs: ["drawingData"],
                        directives: [
                            property_color_unit_component_1.PropertyColorUnit,
                            property_emitter_component_1.PropertyEmitterPanel,
                            property_particle_component_1.PropertyParticlePanel,
                            property_color_component_1.PropertyColorPanel,
                            property_template_component_1.PropertyTemplatePanel,
                            property_shape_component_1.PropertyShapePanel,
                            property_canvas_component_1.PropertyCanvasPanel]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PropertyPanel);
                return PropertyPanel;
            })();
            exports_1("PropertyPanel", PropertyPanel);
        }
    }
});
//# sourceMappingURL=property.component.js.map