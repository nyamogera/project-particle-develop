System.register(["../i18n/locale-data", "angular2/core", "../assets/particle-parameter"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var locale_data_1, core_1, particle_parameter_1;
    var SmallPropertyTemplateModal;
    return {
        setters:[
            function (locale_data_1_1) {
                locale_data_1 = locale_data_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (particle_parameter_1_1) {
                particle_parameter_1 = particle_parameter_1_1;
            }],
        execute: function() {
            "use strict";
            SmallPropertyTemplateModal = (function () {
                function SmallPropertyTemplateModal(localeData) {
                    this.localeData = localeData;
                    var template = new particle_parameter_1.ParticleParameter();
                    this.templateList = template.list;
                }
                SmallPropertyTemplateModal.prototype.ngOnInit = function () {
                    // テンプレートを適用
                    this.drawingData.importData(this.templateList[0].property);
                };
                SmallPropertyTemplateModal.prototype.selectTemplate = function (value) {
                    this.drawingData.importData(value);
                };
                SmallPropertyTemplateModal = __decorate([
                    core_1.Component({
                        selector: "small-particle-template-property-modal",
                        templateUrl: "app/components-html/property-template.html",
                        inputs: ["drawingData", "templateList"]
                    }), 
                    __metadata('design:paramtypes', [locale_data_1.LocaleData])
                ], SmallPropertyTemplateModal);
                return SmallPropertyTemplateModal;
            }());
            exports_1("SmallPropertyTemplateModal", SmallPropertyTemplateModal);
        }
    }
});
//# sourceMappingURL=small-template.component.js.map