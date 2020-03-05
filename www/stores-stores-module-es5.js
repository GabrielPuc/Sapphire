(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stores-stores-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/stores/stores.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/stores/stores.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"toolbar\">\n    <ion-title>\n      Deals by Store\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n\t\t<ion-item *ngFor=\"let store of stores\" (click)=\"LaunchStoreDeals(store.storeID,store.storeName)\">\n      <ion-thumbnail slot=\"start\">\n        <img src=\"https://www.cheapshark.com/{{store.images.logo}}\">\n      </ion-thumbnail>\n      <div style=\"margin: 8px;\">\n        <ion-label>{{store.storeName}}</ion-label>\n      </div>\n    </ion-item>\n\t</ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/stores/stores.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/stores/stores.module.ts ***!
  \***********************************************/
/*! exports provided: StoresPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresPageModule", function() { return StoresPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _stores_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stores.page */ "./src/app/pages/stores/stores.page.ts");







var StoresPageModule = /** @class */ (function () {
    function StoresPageModule() {
    }
    StoresPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _stores_page__WEBPACK_IMPORTED_MODULE_6__["StoresPage"] }])
            ],
            declarations: [_stores_page__WEBPACK_IMPORTED_MODULE_6__["StoresPage"]]
        })
    ], StoresPageModule);
    return StoresPageModule;
}());



/***/ }),

/***/ "./src/app/pages/stores/stores.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/stores/stores.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0b3Jlcy9zdG9yZXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/stores/stores.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/stores/stores.page.ts ***!
  \*********************************************/
/*! exports provided: StoresPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresPage", function() { return StoresPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var StoresPage = /** @class */ (function () {
    function StoresPage(http, router) {
        this.http = http;
        this.router = router;
        this.stores = [];
        this.getStores();
    }
    StoresPage.prototype.getStores = function () {
        var _this = this;
        this.http.get('https://www.cheapshark.com/api/1.0/stores').subscribe(function (response) {
            _this.stores = response;
        });
    };
    StoresPage.prototype.LaunchStoreDeals = function (storeID, storeName) {
        this.router.navigate(['/stores', storeID, storeName]);
    };
    StoresPage.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    StoresPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stores',
            template: __webpack_require__(/*! raw-loader!./stores.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/stores/stores.page.html"),
            styles: [__webpack_require__(/*! ./stores.page.scss */ "./src/app/pages/stores/stores.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], StoresPage);
    return StoresPage;
}());



/***/ })

}]);
//# sourceMappingURL=stores-stores-module-es5.js.map