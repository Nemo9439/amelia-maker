(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/action-buttons/action-buttons.component.html":
/*!**************************************************************!*\
  !*** ./src/app/action-buttons/action-buttons.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-stroked-button color=\"primary\">Random</button>\n<button mat-stroked-button color=\"primary\">Share</button>\n<button mat-stroked-button color=\"primary\" (click)=\"avatarService.saveAsPng()\">Download</button>\n"

/***/ }),

/***/ "./src/app/action-buttons/action-buttons.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/action-buttons/action-buttons.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: grid;\n  width: 500px;\n  grid-gap: 15px;\n  grid-template-columns: 1fr 1fr 1fr; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vc2hpdmVrL2Rldi9mcm9udGVuZC9hbWVsaWEtZ2VuZXJhdG9yL3NyYy9hcHAvYWN0aW9uLWJ1dHRvbnMvYWN0aW9uLWJ1dHRvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFhO0VBQ2IsYUFBWTtFQUNaLGVBQWM7RUFDZCxtQ0FBa0MsRUFDbkMiLCJmaWxlIjoic3JjL2FwcC9hY3Rpb24tYnV0dG9ucy9hY3Rpb24tYnV0dG9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgd2lkdGg6IDUwMHB4O1xuICBncmlkLWdhcDogMTVweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/action-buttons/action-buttons.component.ts":
/*!************************************************************!*\
  !*** ./src/app/action-buttons/action-buttons.component.ts ***!
  \************************************************************/
/*! exports provided: ActionButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionButtonsComponent", function() { return ActionButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _avatar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../avatar.service */ "./src/app/avatar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActionButtonsComponent = /** @class */ (function () {
    function ActionButtonsComponent(avatarService) {
        this.avatarService = avatarService;
    }
    ActionButtonsComponent.prototype.ngOnInit = function () { };
    ActionButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-action-buttons',
            template: __webpack_require__(/*! ./action-buttons.component.html */ "./src/app/action-buttons/action-buttons.component.html"),
            styles: [__webpack_require__(/*! ./action-buttons.component.scss */ "./src/app/action-buttons/action-buttons.component.scss")],
        }),
        __metadata("design:paramtypes", [_avatar_service__WEBPACK_IMPORTED_MODULE_1__["AvatarService"]])
    ], ActionButtonsComponent);
    return ActionButtonsComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Amelia Maker</h1>\n<div class=\"main-content flex-container space-between\">\n  <div class=\"avatar-section\">\n    <app-avatar *ngIf=\"avatarService.isAvatarVisible\" [avatarState]=\"avatarService.avatarState\"></app-avatar>\n    <app-action-buttons></app-action-buttons>\n  </div>\n\n  <mat-tab-group mat-align-tabs=\"Beards\">\n    <mat-tab label=\"Beards\">\n      <app-items-grid\n        [items]=\"avatarItemsService.getBeardItems()\"\n        (selectItemEv)=\"avatarService.selectItem($event, ItemCategory.Beard)\"\n      ></app-items-grid>\n    </mat-tab>\n    <mat-tab label=\"Hairs\"\n      ><app-items-grid\n        [items]=\"avatarItemsService.getHairItems()\"\n        (selectItemEv)=\"avatarService.selectItem($event, ItemCategory.Hair)\"\n      ></app-items-grid\n    ></mat-tab>\n    <mat-tab label=\"Decorations\"\n      ><app-items-grid\n        [items]=\"avatarItemsService.getDecorationItems()\"\n        (selectItemEv)=\"avatarService.selectItem($event, ItemCategory.Decoration)\"\n      ></app-items-grid\n    ></mat-tab>\n  </mat-tab-group>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  text-align: center; }\n\n.main-content {\n  justify-content: center; }\n\n.avatar-section {\n  margin-right: 150px;\n  margin-top: 70px; }\n\napp-action-buttons {\n  padding: 20px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vc2hpdmVrL2Rldi9mcm9udGVuZC9hbWVsaWEtZ2VuZXJhdG9yL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0Usd0JBQXVCLEVBQ3hCOztBQUVEO0VBQ0Usb0JBQW1CO0VBQ25CLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLGdCQUFlLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYWluLWNvbnRlbnQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmF2YXRhci1zZWN0aW9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNTBweDtcbiAgbWFyZ2luLXRvcDogNzBweDtcbn1cblxuYXBwLWFjdGlvbi1idXR0b25zIHtcbiAgcGFkZGluZzogMjBweCAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _avatar_items_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./avatar-items.service */ "./src/app/avatar-items.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _avatar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./avatar.service */ "./src/app/avatar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(avatarService, avatarItemsService) {
        this.avatarService = avatarService;
        this.avatarItemsService = avatarItemsService;
        this.title = 'amelia-generator';
        this.ItemCategory = _avatar_items_service__WEBPACK_IMPORTED_MODULE_0__["ItemCategory"];
    }
    AppComponent.prototype.onItemSelected = function (avaterItem, category) {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
        }),
        __metadata("design:paramtypes", [_avatar_service__WEBPACK_IMPORTED_MODULE_2__["AvatarService"], _avatar_items_service__WEBPACK_IMPORTED_MODULE_0__["AvatarItemsService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./avatar/avatar.component */ "./src/app/avatar/avatar.component.ts");
/* harmony import */ var _action_buttons_action_buttons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action-buttons/action-buttons.component */ "./src/app/action-buttons/action-buttons.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _items_grid_items_grid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./items-grid/items-grid.component */ "./src/app/items-grid/items-grid.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_3__["AvatarComponent"], _action_buttons_action_buttons_component__WEBPACK_IMPORTED_MODULE_4__["ActionButtonsComponent"], _items_grid_items_grid_component__WEBPACK_IMPORTED_MODULE_8__["ItemsGridComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/avatar-items.service.ts":
/*!*****************************************!*\
  !*** ./src/app/avatar-items.service.ts ***!
  \*****************************************/
/*! exports provided: ItemCategory, BEARD_ITEMS, HAIR_ITEMS, DECORATION_ITEMS, AvatarItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCategory", function() { return ItemCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BEARD_ITEMS", function() { return BEARD_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAIR_ITEMS", function() { return HAIR_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECORATION_ITEMS", function() { return DECORATION_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarItemsService", function() { return AvatarItemsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ItemCategory;
(function (ItemCategory) {
    ItemCategory["Beard"] = "BEARD";
    ItemCategory["Hair"] = "HAIR";
    ItemCategory["Decoration"] = "DECORATION";
})(ItemCategory || (ItemCategory = {}));
var BEARD_ITEMS = [
    { name: 'b1', assetPath: 'assets/beards/b1.svg', position: { x: 0, y: 140 }, size: { width: 370, height: 280 } },
    { name: 'b2', assetPath: 'assets/beards/b2.svg', position: { x: -10, y: 150 }, size: { width: 385, height: 293 } },
    { name: 'b3', assetPath: 'assets/beards/b3.svg', position: { x: 25, y: 140 }, size: { width: 315, height: 280 } },
    { name: 'b4', assetPath: 'assets/beards/b4.svg', position: { x: 63, y: 140 }, size: { width: 250, height: 280 } },
    { name: 'b5', assetPath: 'assets/beards/b5.svg', position: { x: 20, y: 140 }, size: { width: 320, height: 335 } },
    { name: 'b6', assetPath: 'assets/beards/b6.svg', position: { x: 25, y: 145 }, size: { width: 320, height: 280 } },
    { name: 'b7', assetPath: 'assets/beards/b7.svg', position: { x: 22, y: 190 }, size: { width: 320, height: 280 } },
    { name: 'b8', assetPath: 'assets/beards/b8.svg', position: { x: 22, y: 150 }, size: { width: 320, height: 300 } },
    { name: 'b9', assetPath: 'assets/beards/b9.svg', position: { x: 20, y: 170 }, size: { width: 320, height: 300 } },
    { name: 'none', assetPath: '', position: { x: 35, y: 25 }, size: { width: 295, height: 240 } },
];
var HAIR_ITEMS = [
    { name: 'hair0', assetPath: 'assets/hairs/Hair0.svg', position: { x: 35, y: 25 }, size: { width: 300, height: 240 } },
    { name: 'hair1', assetPath: 'assets/hairs/Hair1.svg', position: { x: -65, y: -30 }, size: { width: 500, height: 390 } },
    { name: 'hair2', assetPath: 'assets/hairs/Hair2.svg', position: { x: 40, y: 20 }, size: { width: 290, height: 280 } },
    { name: 'hair3', assetPath: 'assets/hairs/Hair3.svg', position: { x: -60, y: -30 }, size: { width: 600, height: 550 } },
    { name: 'hair4', assetPath: 'assets/hairs/Hair4.svg', position: { x: 25, y: 0 }, size: { width: 320, height: 280 } },
    { name: 'hair5', assetPath: 'assets/hairs/Hair5.svg', position: { x: -97, y: -95 }, size: { width: 550, height: 550 } },
    { name: 'hair6', assetPath: 'assets/hairs/Hair6.svg', position: { x: -100, y: -80 }, size: { width: 550, height: 550 } },
    { name: 'hair7', assetPath: 'assets/hairs/Hair7.svg', position: { x: -90, y: -120 }, size: { width: 550, height: 570 } },
    { name: 'hair8', assetPath: 'assets/hairs/Hair8.svg', position: { x: -99, y: -160 }, size: { width: 550, height: 560 } },
    { name: 'hair9', assetPath: 'assets/hairs/Hair9.svg', position: { x: -95, y: -85 }, size: { width: 550, height: 600 } },
    { name: 'hair10', assetPath: 'assets/hairs/Hair10.svg', position: { x: -100, y: -10 }, size: { width: 550, height: 570 } },
    { name: 'hair11', assetPath: 'assets/hairs/Hair11.svg', position: { x: -115, y: 0 }, size: { width: 600, height: 680 } },
    { name: 'hair12', assetPath: 'assets/hairs/Hair12.svg', position: { x: -65, y: -30 }, size: { width: 500, height: 680 } },
    { name: 'hair13', assetPath: 'assets/hairs/Hair13.svg', position: { x: -70, y: -10 }, size: { width: 500, height: 400 } },
    { name: 'hair14', assetPath: 'assets/hairs/Hair14.svg', position: { x: -15, y: -10 }, size: { width: 500, height: 630 } },
    { name: 'hair15', assetPath: 'assets/hairs/Hair15.svg', position: { x: 0, y: -100 }, size: { width: 370, height: 420 } },
    { name: 'none', assetPath: '', position: { x: 35, y: 25 }, size: { width: 295, height: 240 } },
];
var DECORATION_ITEMS = [
    {
        name: 'Access0',
        assetPath: 'assets/accessories/Access0.svg',
        position: { x: 37, y: 80 },
        size: { width: 300, height: 280 },
    },
    {
        name: 'Access1',
        assetPath: 'assets/accessories/Access1.svg',
        position: { x: -15, y: -15 },
        size: { width: 400, height: 320 },
    },
    {
        name: 'Access2',
        assetPath: 'assets/accessories/Access2.svg',
        position: { x: -35, y: 0 },
        size: { width: 440, height: 440 },
    },
    {
        name: 'Access3',
        assetPath: 'assets/accessories/Access3.svg',
        position: { x: 55, y: 85 },
        size: { width: 260, height: 280 },
    },
    {
        name: 'Access4',
        assetPath: 'assets/accessories/Access4.svg',
        position: { x: 43, y: 90 },
        size: { width: 280, height: 280 },
    },
    { name: 'none', assetPath: '', position: { x: 35, y: 25 }, size: { width: 295, height: 240 } },
];
var AvatarItemsService = /** @class */ (function () {
    function AvatarItemsService() {
    }
    AvatarItemsService.prototype.getBeardItems = function () {
        return BEARD_ITEMS;
    };
    AvatarItemsService.prototype.getHairItems = function () {
        return HAIR_ITEMS;
    };
    AvatarItemsService.prototype.getDecorationItems = function () {
        return DECORATION_ITEMS;
    };
    AvatarItemsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [])
    ], AvatarItemsService);
    return AvatarItemsService;
}());



/***/ }),

/***/ "./src/app/avatar.service.ts":
/*!***********************************!*\
  !*** ./src/app/avatar.service.ts ***!
  \***********************************/
/*! exports provided: AvatarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarService", function() { return AvatarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var save_svg_as_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! save-svg-as-png */ "./node_modules/save-svg-as-png/lib/saveSvgAsPng.js");
/* harmony import */ var save_svg_as_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(save_svg_as_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _avatar_items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./avatar-items.service */ "./src/app/avatar-items.service.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AvatarService = /** @class */ (function () {
    function AvatarService() {
        var _a;
        var _this = this;
        this.avatarState = {
            selectedItems: (_a = {},
                _a[_avatar_items_service__WEBPACK_IMPORTED_MODULE_4__["ItemCategory"].Hair] = lodash__WEBPACK_IMPORTED_MODULE_3__["first"](_avatar_items_service__WEBPACK_IMPORTED_MODULE_4__["HAIR_ITEMS"]),
                _a[_avatar_items_service__WEBPACK_IMPORTED_MODULE_4__["ItemCategory"].Decoration] = lodash__WEBPACK_IMPORTED_MODULE_3__["first"](_avatar_items_service__WEBPACK_IMPORTED_MODULE_4__["DECORATION_ITEMS"]),
                _a),
        };
        this.isAvatarVisible = true;
        this.refreshAvatar = function () {
            _this.isAvatarVisible = false;
            setTimeout(function () {
                _this.isAvatarVisible = true;
            });
        };
    }
    AvatarService.prototype.saveAsPng = function () {
        save_svg_as_png__WEBPACK_IMPORTED_MODULE_1__["saveSvgAsPng"](d3__WEBPACK_IMPORTED_MODULE_2__["select"]('#avatar').node(), 'amelia.png', {
            scale: 1,
            encoderOptions: 1,
            backgroundColor: 'white',
        });
        this.refreshAvatar();
    };
    AvatarService.prototype.saveAsSvg = function () {
        save_svg_as_png__WEBPACK_IMPORTED_MODULE_1__["svgAsDataUri"](d3__WEBPACK_IMPORTED_MODULE_2__["select"]('#avatar').node(), {}, function (uri) { });
    };
    AvatarService.prototype.selectItem = function (avaterItem, category) {
        var _a;
        this.avatarState = {
            selectedItems: __assign({}, this.avatarState.selectedItems, (_a = {}, _a[category] = avaterItem, _a)),
        };
    };
    AvatarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [])
    ], AvatarService);
    return AvatarService;
}());



/***/ }),

/***/ "./src/app/avatar/avatar.component.html":
/*!**********************************************!*\
  !*** ./src/app/avatar/avatar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main\"></div>\n"

/***/ }),

/***/ "./src/app/avatar/avatar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/avatar/avatar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F2YXRhci9hdmF0YXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/avatar/avatar.component.ts":
/*!********************************************!*\
  !*** ./src/app/avatar/avatar.component.ts ***!
  \********************************************/
/*! exports provided: AvatarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarComponent", function() { return AvatarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var AvatarComponent = /** @class */ (function () {
    function AvatarComponent() {
    }
    AvatarComponent.prototype.ngOnChanges = function (changes) {
        this.render();
    };
    AvatarComponent.prototype.drawSelectedItem = function (ameliaBox, item) {
        return __awaiter(this, void 0, void 0, function () {
            var itemContainer, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        itemContainer = ameliaBox
                            .append('svg')
                            .attr('width', item.size.width)
                            .attr('height', item.size.height)
                            .attr('x', item.position.x)
                            .attr('y', item.position.y);
                        return [4 /*yield*/, d3__WEBPACK_IMPORTED_MODULE_1__["svg"](item.assetPath)];
                    case 1:
                        data = _a.sent();
                        itemContainer.node().append(data.documentElement);
                        return [2 /*return*/];
                }
            });
        });
    };
    AvatarComponent.prototype.render = function () {
        return __awaiter(this, void 0, void 0, function () {
            var width, height, svg, g, bg, ameliaBox, ameliaContainer, data;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        d3__WEBPACK_IMPORTED_MODULE_1__["select"]('#avatar').remove();
                        width = 500, height = 500;
                        svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]('#main')
                            .append('svg')
                            .attr('id', 'avatar')
                            .attr('width', width)
                            .attr('height', height);
                        g = svg.append('g');
                        bg = g
                            .append('rect')
                            .attr('width', '100%')
                            .attr('height', '100%')
                            .attr('fill', 'tomato')
                            .attr('opacity', 0.1);
                        ameliaBox = svg.append('g').attr('transform', 'translate(65,65)');
                        ameliaContainer = ameliaBox
                            .append('svg')
                            .attr('width', 370)
                            .attr('height', 370);
                        return [4 /*yield*/, d3__WEBPACK_IMPORTED_MODULE_1__["svg"]('assets/base-amelia.svg')];
                    case 1:
                        data = _a.sent();
                        ameliaContainer.node().append(data.documentElement);
                        if (!this.avatarState.selectedItems) {
                            return [2 /*return*/];
                        }
                        lodash__WEBPACK_IMPORTED_MODULE_2__["map"](this.avatarState.selectedItems, function (item) { return _this.drawSelectedItem(ameliaBox, item); });
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AvatarComponent.prototype, "avatarState", void 0);
    AvatarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-avatar',
            template: __webpack_require__(/*! ./avatar.component.html */ "./src/app/avatar/avatar.component.html"),
            styles: [__webpack_require__(/*! ./avatar.component.scss */ "./src/app/avatar/avatar.component.scss")],
        })
    ], AvatarComponent);
    return AvatarComponent;
}());



/***/ }),

/***/ "./src/app/items-grid/items-grid.component.html":
/*!******************************************************!*\
  !*** ./src/app/items-grid/items-grid.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"items\">\n  <div\n    *ngFor=\"let item of items\"\n    class=\"item btn-div\"\n    matRipple\n    matRippleColor=\"#ff98001a\"\n    [ngStyle]=\"getImageUrl(item)\"\n    (click)=\"selectItem(item)\"\n  >\n    {{ item?.name }}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/items-grid/items-grid.component.scss":
/*!******************************************************!*\
  !*** ./src/app/items-grid/items-grid.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".items {\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  padding: 20px;\n  box-sizing: border-box; }\n\n.item {\n  width: 130px;\n  height: 130px;\n  border: 1px solid #ff9800;\n  border-radius: 5px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain; }\n\n.item:hover {\n    transition: 0.3s;\n    background-color: rgba(255, 152, 0, 0.05); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vc2hpdmVrL2Rldi9mcm9udGVuZC9hbWVsaWEtZ2VuZXJhdG9yL3NyYy9hcHAvaXRlbXMtZ3JpZC9pdGVtcy1ncmlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYTtFQUNiLGVBQWM7RUFDZCx1Q0FBc0M7RUFDdEMsY0FBYTtFQUNiLHVCQUFzQixFQUN2Qjs7QUFFRDtFQUNFLGFBQVk7RUFDWixjQUFhO0VBQ2IsMEJBQXlCO0VBQ3pCLG1CQUFrQjtFQUNsQiw2QkFBNEI7RUFDNUIsNEJBQTJCO0VBQzNCLHlCQUF3QixFQU16Qjs7QUFiRDtJQVVJLGlCQUFnQjtJQUNoQiwwQ0FBeUMsRUFDMUMiLCJmaWxlIjoic3JjL2FwcC9pdGVtcy1ncmlkL2l0ZW1zLWdyaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbXMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMjBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5pdGVtIHtcbiAgd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDEzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmY5ODAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1MiwgMCwgMC4wNSk7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/items-grid/items-grid.component.ts":
/*!****************************************************!*\
  !*** ./src/app/items-grid/items-grid.component.ts ***!
  \****************************************************/
/*! exports provided: ItemsGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsGridComponent", function() { return ItemsGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ItemsGridComponent = /** @class */ (function () {
    function ItemsGridComponent() {
        this.selectItemEv = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ItemsGridComponent.prototype.ngOnInit = function () { };
    ItemsGridComponent.prototype.getImageUrl = function (item) {
        return { 'background-image': "url(" + item.assetPath + ")" };
    };
    ItemsGridComponent.prototype.selectItem = function (item) {
        this.selectItemEv.emit(item);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ItemsGridComponent.prototype, "items", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ItemsGridComponent.prototype, "selectItemEv", void 0);
    ItemsGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-items-grid',
            template: __webpack_require__(/*! ./items-grid.component.html */ "./src/app/items-grid/items-grid.component.html"),
            styles: [__webpack_require__(/*! ./items-grid.component.scss */ "./src/app/items-grid/items-grid.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], ItemsGridComponent);
    return ItemsGridComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/oshivek/dev/frontend/amelia-generator/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map