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

/***/ "./src/app/addmember/addmember.component.css":
/*!***************************************************!*\
  !*** ./src/app/addmember/addmember.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".float-right {\r\n    margin-right: 125px;\r\n}"

/***/ }),

/***/ "./src/app/addmember/addmember.component.html":
/*!****************************************************!*\
  !*** ./src/app/addmember/addmember.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <app-header></app-header>\n  \n<div class=\"container\">\n  <br><br>\n  <h2 class=\"float-left\">Add Member</h2><a routerLink='/members'><button class=\"btn btn-danger float-right\">Back</button></a>\n  <br><br><br>\n  <form class=\"form-horizontal\" #productData=\"ngForm\" (ngSubmit)=\"submitMember(productData.value)\">\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"name\">Name:</label>\n      <div class=\"col-sm-10\">\n        <input type=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Enter Name\" name=\"name\"ngModel>\n      </div>\n    </div>\n    <div class=\"form-group\">\n        <div class=\"col-sm-10\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <label>First Section:</label><input type=\"number\" class=\"form-control\" id=\"first\" name=\"first\" ngModel><br>\n                    <label>Third Section:</label> <input type=\"number\" class=\"form-control\" id=\"second\"  name=\"second\" ngModel><br>\n                </div>\n                <div class=\"col-md-6\">\n                    <label>Second Section:</label> <input type=\"number\" class=\"form-control\" id=\"third\"  name=\"third\" ngModel><br>\n                    <label>Fourth Section:</label><input type=\"number\" class=\"form-control\" id=\"fourth\"  name=\"fourth\" ngModel>\n                </div>\n              </div>\n        </div>\n      </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"joindate\">Join Date:</label>\n      <div class=\"col-sm-10\">          \n        <input type=\"datetime-local\" class=\"form-control\" id=\"joindate\" placeholder=\"Enter Join Date\" name=\"joindate\" ngModel>\n      </div>\n    </div>\n    <div class=\"form-group\">        \n      <div class=\"col-sm-offset-2 col-sm-10\">\n        <div class=\"checkbox\">\n          <label><input type=\"checkbox\" name=\"isActive\" ngModel> Is Active</label>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">        \n      <div class=\"col-sm-offset-2 col-sm-10\">\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n      </div>\n    </div>\n  </form>\n</div>\n</div>\n\n<br>\n<h3 *ngIf=\"isAdded\">{{confirm}}</h3>\n{{error}}"

/***/ }),

/***/ "./src/app/addmember/addmember.component.ts":
/*!**************************************************!*\
  !*** ./src/app/addmember/addmember.component.ts ***!
  \**************************************************/
/*! exports provided: AddmemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddmemberComponent", function() { return AddmemberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddmemberComponent = /** @class */ (function () {
    function AddmemberComponent(http) {
        this.http = http;
        this.memberObj = {};
        this.confirm = "New Product is added";
        this.isAdded = false;
        this.submitMember = function (member) {
            /*   return this.backendservice.addNewMember(this.members).subscribe(
                data=> this.members.push(data),
                error => this.error =error
              ); */
            var _this = this;
            var addmemberObj = {
                "name": member.name,
                "joinDate": member.joinDate,
                "isActive": member.isActive
            };
            alert(addmemberObj.name);
            this.http.post('http://localhost:3000/members/', this.memberObj).subscribe(function (res) {
                console.log(res.json);
                alert(res.json);
                _this.isAdded = true;
            });
        };
    }
    AddmemberComponent.prototype.ngOnInit = function () {
    };
    AddmemberComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addmember',
            template: __webpack_require__(/*! ./addmember.component.html */ "./src/app/addmember/addmember.component.html"),
            styles: [__webpack_require__(/*! ./addmember.component.css */ "./src/app/addmember/addmember.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AddmemberComponent);
    return AddmemberComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Angulartask';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _members_members_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./members/members.component */ "./src/app/members/members.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _reporting_reporting_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reporting/reporting.component */ "./src/app/reporting/reporting.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./data-table/data-table.component */ "./src/app/data-table/data-table.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/material/material.module */ "./src/app/shared/material/material.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/backend.service */ "./src/app/services/backend.service.ts");
/* harmony import */ var _addmember_addmember_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./addmember/addmember.component */ "./src/app/addmember/addmember.component.ts");
/* harmony import */ var _members_member_filter_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./members/member-filter.pipe */ "./src/app/members/member-filter.pipe.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
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
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _members_members_component__WEBPACK_IMPORTED_MODULE_9__["MembersComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_10__["ProductsComponent"],
                _reporting_reporting_component__WEBPACK_IMPORTED_MODULE_11__["ReportingComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_12__["UsersComponent"],
                _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_13__["DataTableComponent"],
                _addmember_addmember_component__WEBPACK_IMPORTED_MODULE_18__["AddmemberComponent"],
                _members_member_filter_pipe__WEBPACK_IMPORTED_MODULE_19__["MemberFilterPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_7__["routing"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
                _shared_material_material_module__WEBPACK_IMPORTED_MODULE_15__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_20__["NgxPaginationModule"]
            ],
            providers: [_services_backend_service__WEBPACK_IMPORTED_MODULE_17__["BackendService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _members_members_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./members/members.component */ "./src/app/members/members.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _reporting_reporting_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reporting/reporting.component */ "./src/app/reporting/reporting.component.ts");
/* harmony import */ var _addmember_addmember_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addmember/addmember.component */ "./src/app/addmember/addmember.component.ts");








var appRoutes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"] },
    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"] },
    { path: 'reporting', component: _reporting_reporting_component__WEBPACK_IMPORTED_MODULE_6__["ReportingComponent"] },
    { path: 'members', component: _members_members_component__WEBPACK_IMPORTED_MODULE_4__["MembersComponent"] },
    { path: 'addmember', component: _addmember_addmember_component__WEBPACK_IMPORTED_MODULE_7__["AddmemberComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <app-header></app-header>\n</div>\n\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
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

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/data-table/data-table-datasource.ts":
/*!*****************************************************!*\
  !*** ./src/app/data-table/data-table-datasource.ts ***!
  \*****************************************************/
/*! exports provided: DataTableDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableDataSource", function() { return DataTableDataSource; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



// TODO: replace this with real data from your application
var EXAMPLE_DATA = [
    { id: 1, name: 'Hydrogen' },
    { id: 2, name: 'Helium' },
    { id: 3, name: 'Lithium' },
    { id: 4, name: 'Beryllium' },
    { id: 5, name: 'Boron' },
    { id: 6, name: 'Carbon' },
    { id: 7, name: 'Nitrogen' },
    { id: 8, name: 'Oxygen' },
    { id: 9, name: 'Fluorine' },
    { id: 10, name: 'Neon' },
    { id: 11, name: 'Sodium' },
    { id: 12, name: 'Magnesium' },
    { id: 13, name: 'Aluminum' },
    { id: 14, name: 'Silicon' },
    { id: 15, name: 'Phosphorus' },
    { id: 16, name: 'Sulfur' },
    { id: 17, name: 'Chlorine' },
    { id: 18, name: 'Argon' },
    { id: 19, name: 'Potassium' },
    { id: 20, name: 'Calcium' },
];
/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
var DataTableDataSource = /** @class */ (function (_super) {
    __extends(DataTableDataSource, _super);
    function DataTableDataSource(paginator, sort) {
        var _this = _super.call(this) || this;
        _this.paginator = paginator;
        _this.sort = sort;
        _this.data = EXAMPLE_DATA;
        return _this;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    DataTableDataSource.prototype.connect = function () {
        var _this = this;
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        var dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        // Set the paginator's length
        this.paginator.length = this.data.length;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"].apply(void 0, dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
            return _this.getPagedData(_this.getSortedData(_this.data.slice()));
        }));
    };
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    DataTableDataSource.prototype.disconnect = function () { };
    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    DataTableDataSource.prototype.getPagedData = function (data) {
        var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    };
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    DataTableDataSource.prototype.getSortedData = function (data) {
        var _this = this;
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'id': return compare(+a.id, +b.id, isAsc);
                default: return 0;
            }
        });
    };
    return DataTableDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["DataSource"]));

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/data-table/data-table.component.css":
/*!*****************************************************!*\
  !*** ./src/app/data-table/data-table.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width-table {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/data-table/data-table.component.html":
/*!******************************************************!*\
  !*** ./src/app/data-table/data-table.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\n  <table mat-table class=\"full-width-table\" [dataSource]=\"dataSource\" matSort aria-label=\"Elements\">\n    <!-- Id Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Id</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.id}}</td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator #paginator\n      [length]=\"dataSource.data.length\"\n      [pageIndex]=\"0\"\n      [pageSize]=\"50\"\n      [pageSizeOptions]=\"[25, 50, 100, 250]\">\n  </mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/app/data-table/data-table.component.ts":
/*!****************************************************!*\
  !*** ./src/app/data-table/data-table.component.ts ***!
  \****************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _data_table_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-table-datasource */ "./src/app/data-table/data-table-datasource.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataTableComponent = /** @class */ (function () {
    function DataTableComponent() {
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['id', 'name'];
    }
    DataTableComponent.prototype.ngOnInit = function () {
        this.dataSource = new _data_table_datasource__WEBPACK_IMPORTED_MODULE_2__["DataTableDataSource"](this.paginator, this.sort);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], DataTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], DataTableComponent.prototype, "sort", void 0);
    DataTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-data-table',
            template: __webpack_require__(/*! ./data-table.component.html */ "./src/app/data-table/data-table.component.html"),
            styles: [__webpack_require__(/*! ./data-table.component.css */ "./src/app/data-table/data-table.component.css")],
        })
    ], DataTableComponent);
    return DataTableComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand text-secondary\">Admin Section</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/members\" routerLinkActive=\"active\">Members</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/products\" routerLinkActive=\"active\">Products</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/reporting\" routerLinkActive=\"active\">Reporting</a>      \n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/users\" routerLinkActive=\"active\">Users</a>\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n        <li><a class=\"nav-link\" routerLink=\"/users\" routerLinkActive=\"active\">Admin</a></li>\n        <li><a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\">Logout</a></li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-success {\r\n    margin-left: 44px;\r\n}\r\n\r\n.container{\r\n    height: 400px;\r\n}\r\n\r\n.invalid-feedback{\r\n   padding-left: 39px;\r\n}\r\n\r\n.btn-success{\r\n    cursor: pointer;\r\n}\r\n\r\n@media(min-width: 768px) {\r\n    .field-label-responsive {\r\n      padding-top: .5rem;\r\n      text-align: right;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form class=\"form-horizontal\" name=\"form\" [formGroup]=\"form\" (ngSubmit)=\"form.valid && onSubmit()\">\n        <div class=\"row\">\n            <div class=\"col-md-3\"></div>\n            <div class=\"col-md-6\">\n                <h2>Please Login</h2>\n                <hr>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-3 field-label-responsive\">\n                <label for=\"email\">E-Mail Address</label>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                        <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-at\"></i></div>\n                        <input type=\"text\" name=\"email\" class=\"form-control\"\n                        id=\"email\" formControlName=\"email\" [ngClass]=\"{'is-invalid': form.get('email').touched && form.get('email').invalid}\"\n                         autofocus>\n                         <div *ngIf=\"form.get('email').touched && form.get('email').invalid\" class=\"invalid-feedback\">\n                          <div *ngIf=\"form.get('email').errors.required\">Email is required</div>\n                        <div *ngIf=\"form.get('email').errors.email\">Email must be a valid email address</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3 field-label-responsive\">\n              <label for=\"password\">Password</label>\n          </div>\n          <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                  <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                      <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-key\"></i></div>\n                      <input type=\"text\" name=\"password\" class=\"form-control\"\n                      id=\"password\" formControlName=\"password\" [ngClass]=\"{'is-invalid': form.get('password').touched && form.get('password').invalid}\"\n                       autofocus>\n                       <div *ngIf=\"form.get('password').touched && form.get('password').invalid\" class=\"invalid-feedback\">\n                        <div *ngIf=\"form.get('password').errors.required\">Password is required</div>\n                      <div *ngIf=\"form.get('password').errors.minlength\">Password must be a latest 6 charector</div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n        \n        <div class=\"row\">\n            <div class=\"col-md-3\"></div>\n            <div class=\"col-md-6\">\n                <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-success\">Submit</button>\n            </div>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var email = this.form.get('email').value;
        var password = this.form.get('password').value;
        //alert(email);
        if (email == 'admin@gmail.com' && password == 'admin@123')
            this.router.navigate(['members']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/members/member-filter.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/members/member-filter.pipe.ts ***!
  \***********************************************/
/*! exports provided: MemberFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberFilterPipe", function() { return MemberFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MemberFilterPipe = /** @class */ (function () {
    function MemberFilterPipe() {
    }
    MemberFilterPipe.prototype.transform = function (value, keys, term) {
        if (!term)
            return value;
        return (value || []).filter(function (members) { return keys.split(',').some(function (key) { return members.hasOwnProperty(key) && new RegExp(term, 'gi').test(members[key]); }); });
    };
    MemberFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'search'
        })
    ], MemberFilterPipe);
    return MemberFilterPipe;
}());



/***/ }),

/***/ "./src/app/members/members.component.css":
/*!***********************************************!*\
  !*** ./src/app/members/members.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Structure */\r\ntable {\r\n    width: 100%;\r\n  }\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\nth.section{\r\n  text-align: center;\r\n  font-size: 20px;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/members/members.component.html":
/*!************************************************!*\
  !*** ./src/app/members/members.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <app-header></app-header>\n  <div class=\"container\">\n      <h1>Data table</h1>\n      <div class=\"col-sm-4 float-left\" ng-app=\"myapp\" ng-controller=\"charactersCtrl\">\n        <input class=\"form-control\" id=\"myInput\" type=\"text\" [(ngModel)]=\"query\" placeholder=\"Search..\">\n      </div>\n    <div class=\"col-sm-4\"></div>\n    <div class=\"col-sm-4 float-right\"><a routerLink='/addmember'><button class=\"btn btn-success\">Create a new Member</button></a></div>\n      <br>\n      <br>\n      <table class=\"table table-striped table-bordered table-hover\" id=\"mydata\">\n        <thead>\n          <tr>\n            <th rowspan=\"2\">ID</th>\n            <th rowspan=\"2\">Name</th>\n            <th colspan=\"4\" class=\"section\">Sections</th>\n            <th rowspan=\"2\">Join Date</th>\n            <th rowspan=\"2\">Status</th>\n            <th rowspan=\"2\"></th>\n          </tr>\n          <tr>\n              <td>1st</td>\n              <td>2nd</td>\n              <td>3rd</td>\n              <td>4th</td>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let member of members | search:'id,text,email,name':query |paginate: { itemsPerPage: 5, currentPage: p }\">\n          <td>{{member.id}}</td>\n          <td>{{member.name}}</td>\n          <td>{{member.first}}</td>\n          <td>{{member.second}}</td>\n          <td>{{member.third}}</td>\n          <td>{{member.fourth}}</td>\n          <td>{{member.join_date}}</td>\n          <td>{{member.status}}</td>\n          <td><a routerLink=\"/members/{{member.id}}\">edit</a></td>\n        </tr>\n        </tbody>\n      </table>\n      <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/members/members.component.ts":
/*!**********************************************!*\
  !*** ./src/app/members/members.component.ts ***!
  \**********************************************/
/*! exports provided: MembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersComponent", function() { return MembersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MembersComponent = /** @class */ (function () {
    function MembersComponent(backendservice) {
        this.backendservice = backendservice;
        this.members = [];
        this.p = 1;
    }
    MembersComponent.prototype.ngOnInit = function () {
        this.getConfig();
    };
    MembersComponent.prototype.getConfig = function () {
        var _this = this;
        this.backendservice.getConfig().subscribe(function (data) {
            _this.members = data;
            console.log(data);
        });
    };
    MembersComponent.prototype.edit = function (obj) {
        this.title = 'update';
    };
    MembersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-members',
            template: __webpack_require__(/*! ./members.component.html */ "./src/app/members/members.component.html"),
            styles: [__webpack_require__(/*! ./members.component.css */ "./src/app/members/members.component.css")]
        }),
        __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"]])
    ], MembersComponent);
    return MembersComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.css":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <app-header></app-header>\n  </div>\n  <div class=\"container\">\n      <div class=\"panel-group\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading text-primary\"><h1>Angular</h1></div>\n          <div class=\"panel-body\">\n              Angular 4 is a JavaScript framework for building web applications and apps in JavaScript, html,\n              and TypeScript, which is a superset of JavaScript. Angular provides built-in features for animation,\n              http service, and materials which in turn has features such as auto-complete, navigation, toolbar,\n              menus, etc.The code is written in TypeScript, which compiles to JavaScript and displays the same in\n              the browser.\n          </div>\n        </div>\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading text-primary\"><h1>Javascript</h1></div>\n            <div class=\"panel-body\">\n                JavaScript is a lightweight, interpreted programming language. It is designed for creating \n                network-centric applications. It is complimentary to and integrated with Java.\n                 JavaScript is very easy to implement because it is integrated with HTML.\n                 It is open and cross-platform.\n            </div>\n        </div>\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading text-primary\"><h1>HTML</h1></div>\n            <div class=\"panel-body\">\n                HTML stands for Hyper Text Markup Language, which is the most widely\n                 used language on Web to develop web pages. HTML was created by Berners-\n                  in late 1991 but \"HTML 2.0\" was the first standard HTML specification \n                   was published in 1995. HTML 4.01 was a major version of HTML and it was\n                    published in late 1999. Though HTML 4.01 version is widely used but currently\n                 we are having HTML-5 version which is an extension to HTML 4.01, and this \n                  was published in 2012.\n            </div>\n        </div>\n      </div>\n    </div>"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
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

var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/reporting/reporting.component.css":
/*!***************************************************!*\
  !*** ./src/app/reporting/reporting.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reporting/reporting.component.html":
/*!****************************************************!*\
  !*** ./src/app/reporting/reporting.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <app-header></app-header>\n  </div>\n    <div class=\"container\">\n        <div class=\"panel-group\">\n          <div class=\"panel panel-default\">\n              <div class=\"panel-heading text-primary\"><h1>HTML</h1></div>\n              <div class=\"panel-body\">\n                  HTML stands for Hyper Text Markup Language, which is the most widely\n                   used language on Web to develop web pages. HTML was created by Berners-\n                    in late 1991 but \"HTML 2.0\" was the first standard HTML specification \n                     was published in 1995. HTML 4.01 was a major version of HTML and it was\n                      published in late 1999. Though HTML 4.01 version is widely used but currently\n                   we are having HTML-5 version which is an extension to HTML 4.01, and this \n                    was published in 2012.\n              </div>\n          </div>\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading text-primary\"><h1>Angular</h1></div>\n            <div class=\"panel-body\">\n                Angular 4 is a JavaScript framework for building web applications and apps in JavaScript, html,\n                and TypeScript, which is a superset of JavaScript. Angular provides built-in features for animation,\n                http service, and materials which in turn has features such as auto-complete, navigation, toolbar,\n                menus, etc.The code is written in TypeScript, which compiles to JavaScript and displays the same in\n                the browser.\n            </div>\n          </div>\n          <div class=\"panel panel-default\">\n              <div class=\"panel-heading text-primary\"><h1>Javascript</h1></div>\n              <div class=\"panel-body\">\n                  JavaScript is a lightweight, interpreted programming language. It is designed for creating \n                  network-centric applications. It is complimentary to and integrated with Java.\n                   JavaScript is very easy to implement because it is integrated with HTML.\n                   It is open and cross-platform.\n              </div>\n          </div>\n        </div>\n      </div>"

/***/ }),

/***/ "./src/app/reporting/reporting.component.ts":
/*!**************************************************!*\
  !*** ./src/app/reporting/reporting.component.ts ***!
  \**************************************************/
/*! exports provided: ReportingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportingComponent", function() { return ReportingComponent; });
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

var ReportingComponent = /** @class */ (function () {
    function ReportingComponent() {
    }
    ReportingComponent.prototype.ngOnInit = function () {
    };
    ReportingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reporting',
            template: __webpack_require__(/*! ./reporting.component.html */ "./src/app/reporting/reporting.component.html"),
            styles: [__webpack_require__(/*! ./reporting.component.css */ "./src/app/reporting/reporting.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReportingComponent);
    return ReportingComponent;
}());



/***/ }),

/***/ "./src/app/services/backend.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/backend.service.ts ***!
  \*********************************************/
/*! exports provided: BackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return BackendService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BackendService = /** @class */ (function () {
    function BackendService(http) {
        this.http = http;
        this.configUrl = 'http://localhost:3000/members';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token'
            })
        };
        this.confirmationString = "New product has been added";
        this.isAdded = false;
        this.memberobj = {};
    }
    BackendService.prototype.getConfig = function () {
        return this.http.get(this.configUrl);
    };
    ;
    BackendService.prototype.addNewMember = function (member) {
        this.memberobj = {
            "name": member.name,
            "joindate": member.joindate
        };
        return this.http.post(this.configUrl, this.memberobj, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    BackendService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BackendService);
    return BackendService;
}());



/***/ }),

/***/ "./src/app/shared/material/material.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/material/material.module.ts ***!
  \****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["NoopAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"]
            ],
            exports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["NoopAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"]
            ],
            declarations: []
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"container-fluid\">\n      <app-header></app-header>\n    </div>\n    <div class=\"container\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading text-primary\"><h1>Javascript</h1></div>\n            <div class=\"panel-body\">\n                JavaScript is a lightweight, interpreted programming language. It is designed for creating \n                network-centric applications. It is complimentary to and integrated with Java.\n                 JavaScript is very easy to implement because it is integrated with HTML.\n                 It is open and cross-platform.\n            </div>\n        </div>\n        <div class=\"panel-group\">\n          <div class=\"panel panel-default\">\n              <div class=\"panel-heading text-primary\"><h1>HTML</h1></div>\n              <div class=\"panel-body\">\n                  HTML stands for Hyper Text Markup Language, which is the most widely\n                   used language on Web to develop web pages. HTML was created by Berners-\n                    in late 1991 but \"HTML 2.0\" was the first standard HTML specification \n                     was published in 1995. HTML 4.01 was a major version of HTML and it was\n                      published in late 1999. Though HTML 4.01 version is widely used but currently\n                   we are having HTML-5 version which is an extension to HTML 4.01, and this \n                    was published in 2012.\n              </div>\n          </div>\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading text-primary\"><h1>Angular</h1></div>\n            <div class=\"panel-body\">\n                Angular 4 is a JavaScript framework for building web applications and apps in JavaScript, html,\n                and TypeScript, which is a superset of JavaScript. Angular provides built-in features for animation,\n                http service, and materials which in turn has features such as auto-complete, navigation, toolbar,\n                menus, etc.The code is written in TypeScript, which compiles to JavaScript and displays the same in\n                the browser.\n            </div>\n          </div>\n         \n        </div>\n      </div>"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
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

var UsersComponent = /** @class */ (function () {
    function UsersComponent() {
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UsersComponent);
    return UsersComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp2\www\tran\task2\angular\Angulartask\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map