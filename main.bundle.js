webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/angular-material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk__ = __webpack_require__("../../../cdk/@angular/cdk.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularMaterialModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/**
 * NgModule that includes all Material modules that are required to serve the demo-app.
 */
var AngularMaterialModule = (function () {
    function AngularMaterialModule() {
    }
    return AngularMaterialModule;
}());
AngularMaterialModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdChipsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdTableModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MdCoreModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MdPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MdRadioModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MdRippleModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MdSliderModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MdSortModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MdTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MdNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_cdk__["a" /* CdkTableModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* StyleModule */]
        ]
    })
], AngularMaterialModule);

//# sourceMappingURL=angular-material.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n    <app-sequence-form></app-sequence-form>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sequence_form_sequence_form_component__ = __webpack_require__("../../../../../src/app/sequence-form/sequence-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_module__ = __webpack_require__("../../../../../src/app/angular-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__sequence_form_sequence_form_component__["a" /* SequenceFormComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material_module__["a" /* AngularMaterialModule */],
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/gene-lookup.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneMap; });
var GeneMap = {
    "TAA": "STOP",
    "TAG": "STOP",
    "TGA": "STOP",
    "GCC": "A",
    "GCT": "A",
    "GCA": "A",
    "GCG": "A",
    "TGC": "C",
    "TGT": "C",
    "GAC": "D",
    "GAT": "D",
    "GAG": "E",
    "GAA": "E",
    "TTC": "F",
    "TTT": "F",
    "GGC": "G",
    "GGG": "G",
    "GGA": "G",
    "GGT": "G",
    "CAC": "H",
    "CAT": "H",
    "ATC": "I",
    "ATT": "I",
    "ATA": "I",
    "AAG": "K",
    "AAA": "K",
    "CTG": "L",
    "CTC": "L",
    "CTT": "L",
    "CTA": "L",
    "TTG": "L",
    "TTA": "L",
    "ATG": "M",
    "AAC": "N",
    "AAT": "N",
    "CCC": "P",
    "CCT": "P",
    "CCA": "P",
    "CCG": "P",
    "CAG": "Q",
    "CAA": "Q",
    "CGC": "R",
    "CGG": "R",
    "CGA": "R",
    "CGT": "R",
    "AGG": "R",
    "AGA": "R",
    "TCC": "S",
    "TCT": "S",
    "TCA": "S",
    "TCG": "S",
    "AGC": "S",
    "AGT": "S",
    "ACC": "T",
    "ACA": "T",
    "ACT": "T",
    "ACG": "T",
    "GTG": "V",
    "GTC": "V",
    "GTT": "V",
    "GTA": "V",
    "TGG": "W",
    "TAC": "Y",
    "TAT": "Y"
};
//# sourceMappingURL=gene-lookup.js.map

/***/ }),

/***/ "../../../../../src/app/mock-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockInput; });
var MockInput = {
    name: "exon 7",
    rawdata: "CTCTCTCTAGCTCGCTAGTGGGTTGCAGGAGGTGCTTACGCATGTTTGTTTCTTTGCTGCCGTCTTCCAGTTGCTTTATCTGTTCACTTGTGCCCTGACTTTCAACTCTGTCTCCTTCCTCTTCCTACAGTACTCCCCTGCCCTCAACAAGATGTTTTGCCAACTGGCCAAGACCTGCCCTGTGCAGCTGTGGGTTGATTCCACACCCCCGCCCGGCACCCGCGTCCGCGCCATGGCCATCTACAAGCAGTCACAGCACATGACGGAGGTTGTGAGGCGCTGCCCCCACCATGAGCGCTGCTCAGATAGCGATGGTGAGCAGCTGGGGCTGGAGAGACGACAGGGCTGGTTGCCC",
    startIntron: "c.376-130",
    endIntron: "c.559+41",
};
//# sourceMappingURL=mock-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/sequence-form/sequence-form.component.html":
/***/ (function(module, exports) {

module.exports = "<md-input-container class=\"full-width\">\n  <textarea [rows]=\"6\" mdInput #message placeholder=\"Sekvens\" [(ngModel)]=\"sequence\" ></textarea>\n  <md-hint align=\"start\"> </md-hint>\n  <md-hint align=\"end\">{{message.value.length}} tegn</md-hint>\n</md-input-container>\n\n<md-input-container >\n  <input mdInput placeholder=\"Startende intron\" value=\"c.00-00\" [(ngModel)]=\"startIntron\">\n</md-input-container>\n\n<md-input-container >\n  <input mdInput placeholder=\"Sluttende intron\" value=\"c.00-00\" [(ngModel)]=\"endIntron\">\n</md-input-container>\n\n<md-select placeholder=\"Lengde første kodon\" [(ngModel)]=\"leadingCodonSize\">\n   <md-option *ngFor=\"let state of codonSizes\" [value]=\"state\">{{ state }}</md-option>\n</md-select>\n\n\n<div>\n  <md-input-container >\n    <input mdInput placeholder=\"Mutasjon\" #mutation (paste)=\"handlePaste(mutation.value)\">\n    <md-hint align=\"start\">c.00 A>C</md-hint>\n  </md-input-container>\n\n  <button (click)=\"mutations.push(mutation.value)\" md-mini-fab><md-icon>add</md-icon></button>\n  <button (click)=\"submitInput()\" md-raised-button>Kalkuler</button>\n\n  <md-chip-list>\n    <md-chip *ngFor=\"let mutation of mutations\">{{ mutation }}</md-chip>\n  </md-chip-list>\n</div>\n\n<br>\n<hr>\n<br>\n\n<div style=\"text-align: right\">\n  <md-checkbox class=\"example-margin\" [(ngModel)]=\"showGenes\">Vis gener</md-checkbox>\n</div>\n\n<br>\n<br>\n<div class=\"grouped-sequence\">\n  <span *ngFor=\"let group of transformed.StartIntron\" class=\"group\">\n    <span *ngFor=\"let letter of group.AminoLetters\">{{ letter.Letter }}</span>\n  </span>\n</div>\n\n\n<br><br>\n<div class=\"grouped-sequence\">\n  <span *ngFor=\"let group of transformed.Exon\" class=\"group group-exon\">\n    <span class=\"gene\" *ngIf=\"showGenes\">{{ group.Gene || '&nbsp;' }}</span>\n    <span *ngFor=\"let letter of group.AminoLetters\" [class.mutated]=\"letter.Mutated\">{{ letter.Letter }}</span>\n  </span>\n</div>\n\n<br><br>\n\n<div class=\"grouped-sequence\">\n  <span *ngFor=\"let group of transformed.EndIntron\" class=\"group\">\n    <span *ngFor=\"let letter of group.AminoLetters\">{{ letter.Letter }}</span>\n  </span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/sequence-form/sequence-form.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-width {\n  width: 100%;\n}\n.grouped-sequence {\n  display: inline-block;\n  font-family: 'Roboto Mono', monospace;\n}\n.grouped-sequence .group {\n  display: inline-block;\n  border: 1px solid #eeeeee;\n  border-radius: 1px;\n  margin-right: 8px;\n  margin-bottom: 6px;\n  line-height: 150%;\n}\n.grouped-sequence .group-exon {\n  text-align: center;\n}\n.grouped-sequence .gene {\n  display: inline-block;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 100%;\n  font-weight: bold;\n}\n.grouped-sequence .mutated {\n  color: firebrick;\n  font-weight: bold;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sequence-form/sequence-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_data_service__ = __webpack_require__("../../../../../src/app/mock-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transform_sequence_service__ = __webpack_require__("../../../../../src/app/transform-sequence.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SequenceFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SequenceFormComponent = (function () {
    function SequenceFormComponent() {
        this.mutations = ["c.391A>T"];
        this.startIntron = __WEBPACK_IMPORTED_MODULE_1__mock_data_service__["a" /* MockInput */].startIntron;
        this.endIntron = __WEBPACK_IMPORTED_MODULE_1__mock_data_service__["a" /* MockInput */].endIntron;
        this.sequence = __WEBPACK_IMPORTED_MODULE_1__mock_data_service__["a" /* MockInput */].rawdata;
        this.leadingCodonSize = 3;
        this.codonSizes = [1, 2, 3];
        this.showGenes = true;
    }
    SequenceFormComponent.prototype.ngOnInit = function () {
        this.submitInput();
    };
    SequenceFormComponent.prototype.submitInput = function () {
        this.transformed = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__transform_sequence_service__["a" /* transformRawSequence */])({
            EndIntron: this.endIntron,
            StartIntron: this.startIntron,
            FirstCodonSize: this.leadingCodonSize,
            Mutations: this.mutations,
            RawSequence: this.sequence,
        });
    };
    SequenceFormComponent.prototype.handlePaste = function (mutations) {
        var newMutations = mutations.split(",").map(function (m) { return m.trim(); }).filter(function (m) { return /c\.\d+/.test(m); });
        this.mutations = this.mutations.concat(newMutations);
    };
    return SequenceFormComponent;
}());
SequenceFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-sequence-form',
        template: __webpack_require__("../../../../../src/app/sequence-form/sequence-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sequence-form/sequence-form.component.less")]
    }),
    __metadata("design:paramtypes", [])
], SequenceFormComponent);

//# sourceMappingURL=sequence-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/transform-sequence.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gene_lookup__ = __webpack_require__("../../../../../src/app/gene-lookup.ts");
/* harmony export (immutable) */ __webpack_exports__["a"] = transformRawSequence;


function transformRawSequence(input) {
    var _a = input.StartIntron.match(/c\.(\d+)-?(\d*)/).slice(1).map(Number), exonStartCIndex = _a[0], startIntronLength = _a[1];
    var _b = input.EndIntron.match(/c\.(\d+)\+?(\d*)/).slice(1).map(Number), exonEndCIndex = _b[0], endIntronLength = _b[1];
    var rawStartIntron = input.RawSequence.substring(0, startIntronLength);
    var rawExon = input.RawSequence.substring(startIntronLength, exonEndCIndex - exonStartCIndex + startIntronLength + 1);
    var rawEndIntron = input.RawSequence.substring(startIntronLength + rawExon.length, startIntronLength + rawExon.length + endIntronLength + 1);
    return {
        StartIntron: transformRawIntron(rawStartIntron, input),
        Exon: transformRawExon(rawExon, input, exonStartCIndex),
        EndIntron: transformRawEndIntron(rawEndIntron, input),
    };
}
function transformRawIntron(sequence, input) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash__["chunk"])(sequence.split("").reverse(), 10).reverse().map(function (group) { return ({
        AminoLetters: group.reverse().map(function (letter) { return ({ Letter: letter }); }),
    }); });
}
function transformRawEndIntron(sequence, input) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash__["chunk"])(sequence, 10).map(function (group) { return ({
        AminoLetters: group.map(function (letter) { return ({ Letter: letter }); }),
    }); });
}
function transformRawExon(sequence, input, exonStartCIndex) {
    var padding = input.FirstCodonSize === 3 ? "" : input.FirstCodonSize === 2 ? " " : "  ";
    var sequenceWithMutations = (padding + sequence).split("")
        .map(function (letter, index) { return ({ Letter: letter, Mutated: isMutated(index) }); });
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash__["chunk"])(sequenceWithMutations, 3).map(function (group) { return ({
        AminoLetters: group,
        Gene: __WEBPACK_IMPORTED_MODULE_1__gene_lookup__["a" /* GeneMap */][group.map(function (letter) { return letter.Letter; }).join("")],
    }); });
    function isMutated(index) {
        return input.Mutations.some(function (mutation) {
            var _a = mutation.match(/c\.(\d+)\s*(.*)/).splice(1), offset = _a[0], conversion = _a[1];
            return Number(offset) === index + exonStartCIndex;
        });
    }
}
//# sourceMappingURL=transform-sequence.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map