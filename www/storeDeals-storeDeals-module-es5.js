(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["storeDeals-storeDeals-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/storeDeals/storeDeals.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/storeDeals/storeDeals.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"\"></ion-back-button>\n      </ion-buttons>\n    <ion-title>\n      {{storeName}} Deals\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n      <ion-item *ngFor=\"let deal of deals\" (click)=\"SearchDetailTitle(deal.title)\">\n        <div style=\"margin: 8px;\">\n          <ion-label class=\"title\">{{deal.title}}</ion-label>\n          <ion-label class=\"priceNormal\">Normal Price {{deal.normalPrice}}</ion-label>\n          <ion-label class=\"priceSale\">Sale Price {{deal.salePrice}}</ion-label>\n        </div>\n      </ion-item>\n    </ion-list>\n\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\"\n        loadingText=\"...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-content>\n"

/***/ }),

/***/ "./src/app/storeDeals/storeDeals.module.ts":
/*!*************************************************!*\
  !*** ./src/app/storeDeals/storeDeals.module.ts ***!
  \*************************************************/
/*! exports provided: StoreDealsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreDealsPageModule", function() { return StoreDealsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _storeDeals_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storeDeals.page */ "./src/app/storeDeals/storeDeals.page.ts");







var StoreDealsPageModule = /** @class */ (function () {
    function StoreDealsPageModule() {
    }
    StoreDealsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _storeDeals_page__WEBPACK_IMPORTED_MODULE_6__["StoreDeals"] }])
            ],
            declarations: [_storeDeals_page__WEBPACK_IMPORTED_MODULE_6__["StoreDeals"]]
        })
    ], StoreDealsPageModule);
    return StoreDealsPageModule;
}());



/***/ }),

/***/ "./src/app/storeDeals/storeDeals.page.scss":
/*!*************************************************!*\
  !*** ./src/app/storeDeals/storeDeals.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  white-space: normal;\n  font-weight: bold;\n  color: gray;\n}\n\n.priceNormal {\n  white-space: normal;\n  font-size: 12px;\n  color: darkred;\n}\n\n.priceSale {\n  white-space: normal;\n  font-size: 12px;\n  color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcmVEZWFscy9EOlxcUHJveXNcXFJlYWN0XFxzYXBwaGlyZS9zcmNcXGFwcFxcc3RvcmVEZWFsc1xcc3RvcmVEZWFscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3N0b3JlRGVhbHMvc3RvcmVEZWFscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvc3RvcmVEZWFscy9zdG9yZURlYWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRpdGxle1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IGdyYXk7XG4gIH1cblxuLnByaWNlTm9ybWFse1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiBkYXJrcmVkO1xuICB9XG5cbi5wcmljZVNhbGV7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6IGdyZWVuO1xuICB9IiwiLnRpdGxlIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4ucHJpY2VOb3JtYWwge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBkYXJrcmVkO1xufVxuXG4ucHJpY2VTYWxlIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogZ3JlZW47XG59Il19 */"

/***/ }),

/***/ "./src/app/storeDeals/storeDeals.page.ts":
/*!***********************************************!*\
  !*** ./src/app/storeDeals/storeDeals.page.ts ***!
  \***********************************************/
/*! exports provided: StoreDeals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreDeals", function() { return StoreDeals; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gameDetailModal_gameDetailModal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../gameDetailModal/gameDetailModal.page */ "./src/app/gameDetailModal/gameDetailModal.page.ts");






var StoreDeals = /** @class */ (function () {
    function StoreDeals(router, http, modalController) {
        this.router = router;
        this.http = http;
        this.modalController = modalController;
        this.deals = [];
        this.numberPage = 0;
    }
    StoreDeals.prototype.ngOnInit = function () {
        var _this = this;
        var sub = this.router.params.subscribe(function (params) {
            _this.storeID = params['storeID'];
            _this.storeName = params['storeName'];
            _this.getStoreDeals();
        });
    };
    StoreDeals.prototype.getStoreDeals = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('https://www.cheapshark.com/api/1.0/deals?storeID=' + _this.storeID + '&pageSize=20&pageNumber=' + _this.numberPage + '&onSale=1&sortBy=Deal Rating').subscribe(function (response) {
                _this.deals.push.apply(_this.deals, response);
                resolve(true);
            });
        });
    };
    StoreDeals.prototype.SearchDetailTitle = function (title) {
        var _this = this;
        var treatedTitle = title.replace(/\!|\?|\:/g, '').replace(' - ', ' ').replace(/ |_/g, '-'); //<-- REPLACE THIS WITH A PROPER STRING REPLACE METHOD
        this.http.get('https://api.rawg.io/api/games/' + treatedTitle).subscribe(function (response) {
            _this.gameDetail = response;
            _this.presentModal();
        }, function (error) { alert('No data available'); });
    };
    StoreDeals.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.numberPage += 1;
            _this.getStoreDeals().then((function () {
                event.target.complete();
            }));
            // Implement condition to stop infinite scrolling
            //if (CONDITION) {
            //  event.target.disabled = true;
            //}
        }, 500);
    };
    StoreDeals.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _gameDetailModal_gameDetailModal_page__WEBPACK_IMPORTED_MODULE_5__["GameDetailModal"],
                            componentProps: {
                                'gameDetail': this.gameDetail
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    StoreDeals.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
    ]; };
    StoreDeals = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-storeDeals',
            template: __webpack_require__(/*! raw-loader!./storeDeals.page.html */ "./node_modules/raw-loader/index.js!./src/app/storeDeals/storeDeals.page.html"),
            styles: [__webpack_require__(/*! ./storeDeals.page.scss */ "./src/app/storeDeals/storeDeals.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], StoreDeals);
    return StoreDeals;
}());



/***/ })

}]);
//# sourceMappingURL=storeDeals-storeDeals-module-es5.js.map