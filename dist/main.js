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

/***/ "./src/app/admin-page/admin-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/admin-page/admin-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\n  margin: 10px;\n}\n\nlabel{\n  margin-top: 10px;\n}\n\ninput{\n  margin-top: 10px;\n}\n\nbutton {\n\n  margin-left: 10px;\n}\n\n.btn-block {\n  margin-top: 10px;\n}\n"

/***/ }),

/***/ "./src/app/admin-page/admin-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin-page/admin-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3> Input new Section information here</h3>\n<div class=\"form-group row\">\n    <label for=\"sectionName\" class=\"col-sm-2 col-form-label\">\n      <strong>name</strong>\n    </label>\n    <div class=\"col-sm-10\">\n      <input placeholder=\"Default Section Name\"\n             [(ngModel)]=\"sectionName\"\n             id=\"sectionName\"\n             class=\"form-control\">\n    </div>\n\n    <label for=\"seats\" class=\"col-sm-2 col-form-label\">\n      <strong>seats</strong>\n    </label>\n    <div class=\"col-sm-10\">\n      <input placeholder=\"seats\"\n             [(ngModel)]=\"seats\"\n             id=\"seats\"\n             class=\"form-control\">\n    </div>\n\n\n\n</div>\n<hr>\n<h3>Edit selected Section information here</h3>\n<div class=\"form-group row\">\n  <label for=\"newSectionName\" class=\"col-sm-2 col-form-label\">\n    <strong>newSectionName</strong>\n  </label>\n  <div class=\"col-sm-10\">\n    <input placeholder=\"Section Name\"\n           [(ngModel)]=\"newSectionName\"\n           id=\"newSectionName\"\n           class=\"form-control\">\n  </div>\n<!--<h1>{{newSeats}}</h1>-->\n  <label for=\"newSeats\" class=\"col-sm-2 col-form-label\">\n    <strong>newSeats</strong>\n  </label>\n  <div class=\"col-sm-10\">\n    <input placeholder=\"seats\"\n           [(ngModel)]=\"newSeats\"\n           id=\"newSeats\"\n           class=\"form-control\">\n  </div>\n\n\n  <button class=\"btn btn-primary btn-block\" (click)=\"updateSection()\">\n    save updates for this section\n  </button>\n\n\n</div>\n\n<hr>\n\n<div *ngFor=\"let course of courses\">\n\n  <h3>Course: {{course.title}}</h3>\n  <ul class=\"list-group\">\n    <li *ngFor=\"let section of course.sections\" class=\"list-group-item\">\n      name : {{section.name}}\n      seats : {{section.seats}}\n      <button class=\"btn btn-danger float-right\" (click)=\"deleteSection(section._id)\">\n        delete\n      </button>\n      <button class=\"btn btn-primary float-right\" (click)=\"selectSection(section)\">\n        select to edit\n      </button>\n    </li>\n  </ul>\n\n\n\n  <button class=\"btn btn-success btn-block\" (click)=\"createSection(course.id)\">\n    add new sections for this course\n  </button>\n\n  <hr>\n</div>\n\n\n<div class=\"row float-right\">\n  <a  routerLink=\"/profile\"><h3>Profile</h3></a>\n  <a  routerLink=\"/home\"><h3>Home</h3></a>\n</div>\n"

/***/ }),

/***/ "./src/app/admin-page/admin-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin-page/admin-page.component.ts ***!
  \****************************************************/
/*! exports provided: AdminPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageComponent", function() { return AdminPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminPageComponent = /** @class */ (function () {
    function AdminPageComponent(courseService, sectionService) {
        this.courseService = courseService;
        this.sectionService = sectionService;
        this.courses = [];
    }
    AdminPageComponent.prototype.ngOnInit = function () {
        this.findAllCourses();
    };
    AdminPageComponent.prototype.findAllCourses = function () {
        var _this = this;
        this.courseService.findAllCourses()
            .then(function (courses) { return _this.courses = courses; })
            .then(function () {
            console.log(_this.courses);
            var _loop_1 = function (i) {
                // this.courses[i].sections
                var courseId = _this.courses[i].id;
                _this.sectionService
                    .findSectionsForCourse(courseId)
                    .then(function (sections) { return _this.courses[i].sections = sections; });
            };
            for (var i = 0; i < _this.courses.length; i++) {
                _loop_1(i);
            }
        });
    };
    AdminPageComponent.prototype.deleteSection = function (sectionId) {
        var _this = this;
        this.sectionService
            .deleteSection(sectionId)
            .then(function () { return _this.findAllCourses(); });
    };
    AdminPageComponent.prototype.createSection = function (courseId) {
        if (!this.sectionName) {
            this.courseService.findCourseById(courseId)
                .then(function (course) { return console.log(course); });
        }
        // this.sectionService
        //   .createSection(this.sectionName, this.seats, courseId)
        //   .then(() => this.findAllCourses());
    };
    AdminPageComponent.prototype.selectSection = function (section) {
        this.selectedSection = section;
        this.newSectionName = section.name;
        this.newSeats = section.seats;
    };
    AdminPageComponent.prototype.updateSection = function () {
        var _this = this;
        var newSection = this.selectedSection;
        newSection.name = this.newSectionName;
        newSection.seats = this.newSeats;
        // console.log(newSection, this.newSeats);
        this.sectionService.updateSection(newSection)
            .then(function () { return _this.findAllCourses(); });
    };
    AdminPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-page',
            template: __webpack_require__(/*! ./admin-page.component.html */ "./src/app/admin-page/admin-page.component.html"),
            styles: [__webpack_require__(/*! ./admin-page.component.css */ "./src/app/admin-page/admin-page.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_service_client__WEBPACK_IMPORTED_MODULE_1__["default"],
            _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__["default"]])
    ], AdminPageComponent);
    return AdminPageComponent;
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

module.exports = "<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _course_grid_course_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-grid/course-grid.component */ "./src/app/course-grid/course-grid.component.ts");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./white-board/white-board.component */ "./src/app/white-board/white-board.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./course-viewer/course-viewer.component */ "./src/app/course-viewer/course-viewer.component.ts");
/* harmony import */ var _module_list_module_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./module-list/module-list.component */ "./src/app/module-list/module-list.component.ts");
/* harmony import */ var _services_module_service_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/module.service.client */ "./src/app/services/module.service.client.ts");
/* harmony import */ var _lesson_tabs_lesson_tabs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lesson-tabs/lesson-tabs.component */ "./src/app/lesson-tabs/lesson-tabs.component.ts");
/* harmony import */ var _services_lesson_service_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/lesson.service.client */ "./src/app/services/lesson.service.client.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _section_list_section_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./section-list/section-list.component */ "./src/app/section-list/section-list.component.ts");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _topic_lists_topic_lists_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./topic-lists/topic-lists.component */ "./src/app/topic-lists/topic-lists.component.ts");
/* harmony import */ var _services_topic_service_client__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/topic.service.client */ "./src/app/services/topic.service.client.ts");
/* harmony import */ var _widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./widget-list/widget-list.component */ "./src/app/widget-list/widget-list.component.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin-page/admin-page.component */ "./src/app/admin-page/admin-page.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _course_grid_course_grid_component__WEBPACK_IMPORTED_MODULE_3__["CourseGridComponent"],
                _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_5__["WhiteBoardComponent"],
                _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_8__["CourseViewerComponent"],
                _module_list_module_list_component__WEBPACK_IMPORTED_MODULE_9__["ModuleListComponent"],
                _lesson_tabs_lesson_tabs_component__WEBPACK_IMPORTED_MODULE_11__["LessonTabsComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"],
                _section_list_section_list_component__WEBPACK_IMPORTED_MODULE_17__["SectionListComponent"],
                _topic_lists_topic_lists_component__WEBPACK_IMPORTED_MODULE_19__["TopicListsComponent"],
                _widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_21__["WidgetListComponent"],
                _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_23__["AdminPageComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            providers: [
                _services_course_service_client__WEBPACK_IMPORTED_MODULE_4__["default"],
                _services_module_service_client__WEBPACK_IMPORTED_MODULE_10__["default"],
                _services_lesson_service_client__WEBPACK_IMPORTED_MODULE_12__["LessonServiceClient"],
                _services_user_service_client__WEBPACK_IMPORTED_MODULE_14__["default"],
                _services_topic_service_client__WEBPACK_IMPORTED_MODULE_20__["default"],
                _services_widget_service_client__WEBPACK_IMPORTED_MODULE_22__["default"],
                _services_section_service_client__WEBPACK_IMPORTED_MODULE_18__["default"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./white-board/white-board.component */ "./src/app/white-board/white-board.component.ts");
/* harmony import */ var _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-viewer/course-viewer.component */ "./src/app/course-viewer/course-viewer.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _section_list_section_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./section-list/section-list.component */ "./src/app/section-list/section-list.component.ts");
/* harmony import */ var _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-page/admin-page.component */ "./src/app/admin-page/admin-page.component.ts");








var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_1__["WhiteBoardComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'adminPage', component: _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_7__["AdminPageComponent"] },
    { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_2__["CourseViewerComponent"] },
    { path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_2__["CourseViewerComponent"] },
    { path: 'course/:courseId/section', component: _section_list_section_list_component__WEBPACK_IMPORTED_MODULE_6__["SectionListComponent"] },
    { path: 'course/:courseId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_2__["CourseViewerComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'course/:courseId/module/:moduleId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_2__["CourseViewerComponent"] },
    { path: '**', component: _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_1__["WhiteBoardComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/course-grid/course-grid.component.css":
/*!*******************************************************!*\
  !*** ./src/app/course-grid/course-grid.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  margin-top: 20px;\n}\n"

/***/ }),

/***/ "./src/app/course-grid/course-grid.component.html":
/*!********************************************************!*\
  !*** ./src/app/course-grid/course-grid.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Course grid {{courses.length}} </h2>\n\n\n\n<div class=\"row\">\n  <div *ngFor=\"let course of courses\" class=\"col-sm-3\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{course.title}}</h5>\n        <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n        <a routerLink=\"/course/{{course.id}}\" class=\"btn btn-success\">\n          Contents\n        </a>\n        <a routerLink=\"/course/{{course.id}}/section\"\n           class=\"btn btn-primary\">Enroll</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"row float-right\">\n  <a  routerLink=\"/profile\"><h3>Profile</h3></a>\n  <a  routerLink=\"/home\"><h3>Home</h3></a>\n  <a routerLink=\"/login\"><h3>Login</h3></a>\n  <a routerLink=\"/register\"><h3>Register</h3></a>\n</div>\n\n"

/***/ }),

/***/ "./src/app/course-grid/course-grid.component.ts":
/*!******************************************************!*\
  !*** ./src/app/course-grid/course-grid.component.ts ***!
  \******************************************************/
/*! exports provided: CourseGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseGridComponent", function() { return CourseGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CourseGridComponent = /** @class */ (function () {
    function CourseGridComponent(courseService) {
        this.courseService = courseService;
        this.courses = [];
    }
    CourseGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.courseService.findAllCourses()
            .then(function (courses) { return _this.courses = courses; });
    };
    CourseGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-grid',
            template: __webpack_require__(/*! ./course-grid.component.html */ "./src/app/course-grid/course-grid.component.html"),
            styles: [__webpack_require__(/*! ./course-grid.component.css */ "./src/app/course-grid/course-grid.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_service_client__WEBPACK_IMPORTED_MODULE_1__["default"]])
    ], CourseGridComponent);
    return CourseGridComponent;
}());



/***/ }),

/***/ "./src/app/course-viewer/course-viewer.component.css":
/*!***********************************************************!*\
  !*** ./src/app/course-viewer/course-viewer.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin: 20px;\n}\nh2 {\n  margin: 20px;\n}\n"

/***/ }),

/***/ "./src/app/course-viewer/course-viewer.component.html":
/*!************************************************************!*\
  !*** ./src/app/course-viewer/course-viewer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div  class=\"col-1\">\n    <a routerLink=\"/\">\n      <button class=\"btn btn-dark\">\n        Go Back\n      </button>\n    </a>\n  </div>\n  <div class=\"col-11\">\n    <h2>{{course.title}}</h2>\n  </div>\n\n</div>\n\n<app-module-list></app-module-list>\n\n"

/***/ }),

/***/ "./src/app/course-viewer/course-viewer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/course-viewer/course-viewer.component.ts ***!
  \**********************************************************/
/*! exports provided: CourseViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseViewerComponent", function() { return CourseViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _models_course_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/course.model.client */ "./src/app/models/course.model.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CourseViewerComponent = /** @class */ (function () {
    function CourseViewerComponent(route, service) {
        var _this = this;
        this.route = route;
        this.service = service;
        this.course = new _models_course_model_client__WEBPACK_IMPORTED_MODULE_3__["Course"]();
        this.route.params.subscribe(function (params) { return _this.loadCourse(params.courseId); });
    }
    CourseViewerComponent.prototype.loadCourse = function (courseId) {
        var _this = this;
        this.service.findCourseById(courseId)
            .then(function (course) { return _this.course = course; });
    };
    CourseViewerComponent.prototype.ngOnInit = function () {
    };
    CourseViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-viewer',
            template: __webpack_require__(/*! ./course-viewer.component.html */ "./src/app/course-viewer/course-viewer.component.html"),
            styles: [__webpack_require__(/*! ./course-viewer.component.css */ "./src/app/course-viewer/course-viewer.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_course_service_client__WEBPACK_IMPORTED_MODULE_2__["default"]])
    ], CourseViewerComponent);
    return CourseViewerComponent;
}());



/***/ }),

/***/ "./src/app/lesson-tabs/lesson-tabs.component.css":
/*!*******************************************************!*\
  !*** ./src/app/lesson-tabs/lesson-tabs.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#btn-group {\n  margin-left: 5px;\n}\n"

/***/ }),

/***/ "./src/app/lesson-tabs/lesson-tabs.component.html":
/*!********************************************************!*\
  !*** ./src/app/lesson-tabs/lesson-tabs.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\n  <li *ngFor=\"let lesson of lessons\" class=\"nav-item\">\n    <a\n      class=\"nav-link\"\n      [ngClass]=\"{'active': lesson.id == params.lessonId}\"\n      routerLink=\"/course/{{courseId}}/module/{{moduleId}}/lesson/{{lesson.id}}\">\n      {{lesson.title}}\n    </a>\n  </li>\n</ul>\n\n<app-topic-lists></app-topic-lists>\n"

/***/ }),

/***/ "./src/app/lesson-tabs/lesson-tabs.component.ts":
/*!******************************************************!*\
  !*** ./src/app/lesson-tabs/lesson-tabs.component.ts ***!
  \******************************************************/
/*! exports provided: LessonTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonTabsComponent", function() { return LessonTabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_lesson_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/lesson.service.client */ "./src/app/services/lesson.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LessonTabsComponent = /** @class */ (function () {
    function LessonTabsComponent(route, lessonService) {
        var _this = this;
        this.route = route;
        this.lessonService = lessonService;
        this.lessons = [];
        this.route.params.subscribe(function (params) { return _this.findLessonsForModule(params); });
    }
    LessonTabsComponent.prototype.findLessonsForModule = function (params) {
        var _this = this;
        this.params = params;
        this.courseId = params.courseId;
        this.moduleId = params.moduleId;
        this.lessonId = params.lessonId;
        if (!this.moduleId) {
            return;
        }
        this.lessonService.findLessonsForModule(this.courseId, this.moduleId)
            .then(function (lessons) { return _this.lessons = lessons; });
    };
    LessonTabsComponent.prototype.ngOnInit = function () {
    };
    LessonTabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lesson-tabs',
            template: __webpack_require__(/*! ./lesson-tabs.component.html */ "./src/app/lesson-tabs/lesson-tabs.component.html"),
            styles: [__webpack_require__(/*! ./lesson-tabs.component.css */ "./src/app/lesson-tabs/lesson-tabs.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_lesson_service_client__WEBPACK_IMPORTED_MODULE_2__["LessonServiceClient"]])
    ], LessonTabsComponent);
    return LessonTabsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  margin: 10px;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <h1>Login</h1>\n\n  <input [(ngModel)]=\"username\"\n         placeholder=\"username\"\n         class=\"form-control\"\n  />\n  <input [(ngModel)]=\"password\"\n         placeholder=\"password\"\n         class=\"form-control\"\n  />\n\n\n  <button (click)=\"login(username, password)\"\n          class=\"btn btn-success\"\n  >\n    Login\n  </button>\n  <div class=\"row float-right\">\n    <a  routerLink=\"/home\"><h3>Home</h3></a>\n    <a routerLink=\"/register\"><h3>Register</h3></a>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
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
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        if (!password || !username) {
            alert('Can not be empty');
            return;
        }
        this.userService.login(username, password)
            .then(function (user) {
            if (user.error) {
                alert('Invalid password or username');
            }
            else {
                _this.router.navigate(['profile']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["default"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/course.model.client.ts":
/*!***********************************************!*\
  !*** ./src/app/models/course.model.client.ts ***!
  \***********************************************/
/*! exports provided: Course */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Course", function() { return Course; });
var Course = /** @class */ (function () {
    function Course() {
    }
    return Course;
}());



/***/ }),

/***/ "./src/app/models/user.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/user.model.client.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/module-list/module-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/module-list/module-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active-module {\n  background-color: black;\n  color: white;\n}\n\n.active-element {\n  background-color: #9fcdff;\n}\n\na {\n  color: black;\n}\n\nli{\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/module-list/module-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/module-list/module-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-4\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item active-module\"> modules </li>\n      <li *ngFor=\"let module of modules\"\n          [ngClass]=\"{'active-element': params.moduleId == module.id}\"\n          class=\"list-group-item web-dev\">\n        <a routerLink=\"/course/{{courseId}}/module/{{module.id}}/\">\n          {{module.title}}\n        </a>\n      </li>\n    </ul>\n\n  </div>\n\n  <div class=\"col-8\">\n    <app-lesson-tabs></app-lesson-tabs>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/module-list/module-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/module-list/module-list.component.ts ***!
  \******************************************************/
/*! exports provided: ModuleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleListComponent", function() { return ModuleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_module_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/module.service.client */ "./src/app/services/module.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModuleListComponent = /** @class */ (function () {
    function ModuleListComponent(route, moduleService) {
        var _this = this;
        this.route = route;
        this.moduleService = moduleService;
        this.modules = [];
        this.route.params.subscribe(function (params) { return _this.onParamsChange(params); });
    }
    ModuleListComponent.prototype.ngOnInit = function () {
    };
    ModuleListComponent.prototype.onParamsChange = function (params) {
        this.params = params;
        this.findModulesForCourse(params.courseId);
    };
    ModuleListComponent.prototype.findModulesForCourse = function (courseId) {
        var _this = this;
        this.courseId = courseId;
        this.moduleService.findModulesForCourse(courseId)
            .then(function (modules) { return _this.modules = modules; });
    };
    ModuleListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-module-list',
            template: __webpack_require__(/*! ./module-list.component.html */ "./src/app/module-list/module-list.component.html"),
            styles: [__webpack_require__(/*! ./module-list.component.css */ "./src/app/module-list/module-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_module_service_client__WEBPACK_IMPORTED_MODULE_2__["default"]])
    ], ModuleListComponent);
    return ModuleListComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  margin-top: 20px;\n}\nlabel {\n  margin-top: 20px;\n}\n.btn-block {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.hidden {\n  background-color: black;\n}\nh1 {\n  text-align: center;\n}\n.active-module {\n  background-color: black;\n  color: white;\n}\nli{\n  text-align: center;\n}\na{\n  margin: 10px;\n}\n\n"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Profile</h1>\n\n\n\n\n<div class=\"form-group row\">\n  <label for=\"inputUsername\" class=\"col-sm-2 col-form-label\">\n    Username\n  </label>\n  <div class=\"col-sm-10\">\n    <input class=\"form-control\" id=\"inputUsername\" placeholder=\"Username\"  [(ngModel)]=\"user.username\">\n  </div>\n\n  <label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">\n    Password\n  </label>\n  <div class=\"col-sm-10\">\n    <input class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\"  [(ngModel)]=\"user.password\">\n  </div>\n\n  <label for=\"firstName\" class=\"col-sm-2 col-form-label\">\n    firstName\n  </label>\n  <div class=\"col-sm-10\">\n    <input class=\"form-control\" id=\"firstName\" placeholder=\"firstName\"  [(ngModel)]=\"user.firstName\">\n  </div>\n\n  <label for=\"lastName\" class=\"col-sm-2 col-form-label\">\n    lastName\n  </label>\n  <div class=\"col-sm-10\">\n    <input class=\"form-control\" id=\"lastName\" placeholder=\"lastName\"  [(ngModel)]=\"user.lastName\">\n  </div>\n\n  <label for=\"email\" class=\"col-sm-2 col-form-label\">\n    email\n  </label>\n  <div class=\"col-sm-10\">\n    <input class=\"form-control\" id=\"email\" placeholder=\"email\"  [(ngModel)]=\"user.email\">\n  </div>\n\n  <label for=\"phone\" class=\"col-sm-2 col-form-label\">\n    phone\n  </label>\n  <div class=\"col-sm-10\">\n    <input class=\"form-control\" id=\"phone\" placeholder=\"phone\"  [(ngModel)]=\"user.phone\">\n  </div>\n  <label for=\"address\" class=\"col-sm-2 col-form-label\">\n    address\n  </label>\n  <div class=\"col-sm-10\">\n    <input class=\"form-control\" id=\"address\" placeholder=\"address\"  [(ngModel)]=\"user.address\">\n  </div>\n\n\n</div>\n\n\n\n<ul class=\"list-group\">\n    <li class=\"list-group-item active-module\">\n      <div class=\"row\">\n        <div class=\"col-8\">\n          <strong>sections list</strong>\n        </div>\n\n      </div>\n\n    </li>\n    <li *ngFor=\"let section of sections\" class=\"list-group-item\">\n      <div class=\"row\">\n        <div class=\"col-8\">\n          {{section.section.name}}\n        </div>\n\n        <div class=\"col-4\">\n          <button class=\"btn btn-danger\" (click)=\"dropSection(section)\">\n            Drop Section\n          </button>\n        </div>\n      </div>\n    </li>\n\n</ul>\n\n<button class=\"btn btn-primary btn-block \"\n        (click)=\"updateProfile()\">\n  Update\n</button>\n\n<button class=\"btn btn-danger btn-block\"\n        (click)=\"logout()\">\n  Logout\n</button>\n\n<button (click)=\"deleteProfile()\" class=\"btn btn-dark btn-block\">\n  Delete Profile\n</button>\n\n<div class=\"row float-right\">\n  <a *ngIf=\"user.role == 'admin'\" routerLink=\"/adminPage\"><h3>Admin Page</h3></a>\n  <a  routerLink=\"/home\"><h3>Home</h3></a>\n</div>\n\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user.model.client */ "./src/app/models/user.model.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, sectionService, router) {
        this.userService = userService;
        this.sectionService = sectionService;
        this.router = router;
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.sections = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.loadProfile();
    };
    ProfileComponent.prototype.loadProfile = function () {
        var _this = this;
        this.userService
            .profile()
            .then(function (user) {
            if (user.error) {
                _this.router.navigate(['login']);
                return;
            }
            _this.user = user;
        });
        this.sectionService
            .findSectionForStudent()
            .then(function (sections) { return _this.sections = sections; });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService
            .logout()
            .then(function () { return _this.router.navigate(['login']); });
    };
    ProfileComponent.prototype.updateProfile = function () {
        this.userService
            .updateProfile(this.user)
            .then(function () { return alert('Updated!'); });
    };
    ProfileComponent.prototype.dropSection = function (enrollment) {
        var _this = this;
        console.log(enrollment.student, enrollment.section._id);
        var temp = {
            student: enrollment.student,
            section: enrollment.section._id
        };
        this.sectionService
            .dropSection(temp)
            .then(function () {
            alert('Dropped!');
            _this.sectionService
                .findSectionForStudent()
                .then(function (sections) { return _this.sections = sections; });
        });
    };
    ProfileComponent.prototype.deleteProfile = function () {
        var _this = this;
        this.userService.deleteProfile(this.user)
            .then(function () {
            alert('Deleted!');
            _this.loadProfile();
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["default"],
            _services_section_service_client__WEBPACK_IMPORTED_MODULE_3__["default"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  margin: 10px;\n}\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Register</h1>\n\n<input [(ngModel)]=\"username\"\n       placeholder=\"username\"\n       class=\"form-control\"\n/>\n<input [(ngModel)]=\"password\"\n       placeholder=\"password\"\n       class=\"form-control\"\n/>\n\n<input [(ngModel)]=\"password2\"\n       placeholder=\"password\"\n       class=\"form-control\"\n/>\n\n\n<button (click)=\"createUser()\"\n        class=\"btn btn-success\"\n>\n  Register\n</button>\n<div class=\"row float-right\">\n  <a  routerLink=\"/home\"><h3>Home</h3></a>\n  <a routerLink=\"/login\"><h3>Login</h3></a>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    RegisterComponent.prototype.createUser = function () {
        var _this = this;
        if (this.password !== this.password2) {
            alert('Two passwords should be same');
            return;
        }
        this.userService.createUser(this.username, this.password)
            .then(function (user) {
            if (user.error) {
                alert(user.error);
                return;
            }
            _this.router.navigate(['profile']);
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["default"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/section-list/section-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/section-list/section-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group {\n  margin-top: 30px;\n}\n"

/***/ }),

/***/ "./src/app/section-list/section-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/section-list/section-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Sections for course: {{courseId}}</h1>\n\n\n<ul class=\"list-group\">\n\n  <li *ngFor=\"let section of sections\" class=\"list-group-item\">\n    name : {{section.name}}\n    seats : {{section.seats}}\n\n    <button (click)=\"enroll(section)\"\n            class=\"btn btn-primary float-right\">\n      Enroll\n    </button>\n  </li>\n\n</ul>\n"

/***/ }),

/***/ "./src/app/section-list/section-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/section-list/section-list.component.ts ***!
  \********************************************************/
/*! exports provided: SectionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionListComponent", function() { return SectionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SectionListComponent = /** @class */ (function () {
    function SectionListComponent(sectionService, route, router) {
        var _this = this;
        this.sectionService = sectionService;
        this.route = route;
        this.router = router;
        this.sections = [];
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    SectionListComponent.prototype.ngOnInit = function () {
    };
    SectionListComponent.prototype.setParams = function (params) {
        this.courseId = params.courseId;
        this.loadSection();
    };
    SectionListComponent.prototype.loadSection = function () {
        var _this = this;
        this.sectionService
            .findSectionsForCourse(this.courseId)
            .then(function (sections) { return _this.sections = sections; });
    };
    SectionListComponent.prototype.enroll = function (section) {
        var _this = this;
        this.sectionService
            .enrollStudentInSection(section._id)
            .then(function () { return _this.router.navigate(['profile']); });
    };
    SectionListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-section-list',
            template: __webpack_require__(/*! ./section-list.component.html */ "./src/app/section-list/section-list.component.html"),
            styles: [__webpack_require__(/*! ./section-list.component.css */ "./src/app/section-list/section-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_section_service_client__WEBPACK_IMPORTED_MODULE_1__["default"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SectionListComponent);
    return SectionListComponent;
}());



/***/ }),

/***/ "./src/app/services/course.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/course.service.client.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var CourseServiceClient = /** @class */ (function () {
    function CourseServiceClient() {
        this.COURSE_URL = 'https://first-yanjianliao.herokuapp.com/api/course/';
    }
    CourseServiceClient.prototype.findAllCourses = function () {
        return fetch(this.COURSE_URL)
            .then(function (response) { return response.json(); });
    };
    CourseServiceClient.prototype.findCourseById = function (id) {
        return fetch(this.COURSE_URL + id)
            .then(function (response) { return response.json(); });
    };
    return CourseServiceClient;
}());
/* harmony default export */ __webpack_exports__["default"] = (CourseServiceClient);


/***/ }),

/***/ "./src/app/services/lesson.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/lesson.service.client.ts ***!
  \***************************************************/
/*! exports provided: LessonServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonServiceClient", function() { return LessonServiceClient; });
var LessonServiceClient = /** @class */ (function () {
    function LessonServiceClient() {
        this.LESSON_URL = 'https://first-yanjianliao.herokuapp.com/api/course/';
    }
    LessonServiceClient.prototype.findLessonsForModule = function (courseId, moduleId) {
        console.log(this.LESSON_URL + courseId + /module/ + moduleId + '/lesson');
        return fetch(this.LESSON_URL + courseId + /module/ + moduleId + '/lesson')
            .then(function (response) { return response.json(); });
    };
    return LessonServiceClient;
}());



/***/ }),

/***/ "./src/app/services/module.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/module.service.client.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ModuleServiceClient = /** @class */ (function () {
    function ModuleServiceClient() {
        this.LESSON_URL = 'https://first-yanjianliao.herokuapp.com/api/course/';
        this.SINGLE_URL = 'https://first-yanjianliao.herokuapp.com/api/lesson/';
    }
    ModuleServiceClient.prototype.findModulesForCourse = function (id) {
        return fetch(this.LESSON_URL + id + '/module')
            .then(function (response) { return response.json(); });
    };
    return ModuleServiceClient;
}());
/* harmony default export */ __webpack_exports__["default"] = (ModuleServiceClient);


/***/ }),

/***/ "./src/app/services/section.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/section.service.client.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var SectionServiceClient = /** @class */ (function () {
    function SectionServiceClient() {
        this.SECTION_URL = 'https://pacific-oasis-70306.herokuapp.com/api/course/CID/section';
        this.BASE_URL = 'https://pacific-oasis-70306.herokuapp.com/api/';
    }
    SectionServiceClient.prototype.enrollStudentInSection = function (sectionId) {
        var url = this.BASE_URL + 'section/' + sectionId + '/enrollment';
        return fetch(url, {
            method: 'post',
            credentials: 'include'
        }).then(function (response) { return response.json(); });
    };
    SectionServiceClient.prototype.findSectionForStudent = function () {
        var url = this.BASE_URL + 'student/section';
        return fetch(url, {
            method: 'get',
            credentials: 'include'
        }).then(function (response) { return response.json(); });
    };
    SectionServiceClient.prototype.createSection = function (sectionName, seats, courseId) {
        var section = {
            name: sectionName,
            seats: seats,
            courseId: courseId
        };
        return fetch(this.SECTION_URL.replace('CID', courseId), {
            method: 'post',
            body: JSON.stringify(section),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) { return response.json(); });
    };
    SectionServiceClient.prototype.findSectionsForCourse = function (courseId) {
        return fetch(this.SECTION_URL.replace('CID', courseId))
            .then(function (response) { return response.json(); });
    };
    SectionServiceClient.prototype.dropSection = function (enrollment) {
        return fetch(this.BASE_URL + 'student/' + enrollment.student + '/section/' + enrollment.section, {
            method: 'delete',
            credentials: 'include'
        });
    };
    SectionServiceClient.prototype.deleteSection = function (sectionId) {
        return fetch(this.BASE_URL + 'section/' + sectionId, {
            method: 'delete',
            credentials: 'include'
        });
    };
    SectionServiceClient.prototype.updateSection = function (section) {
        // console.log(section);
        return fetch(this.BASE_URL + 'section/' + section._id, {
            method: 'put',
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(section),
        });
    };
    return SectionServiceClient;
}());
/* harmony default export */ __webpack_exports__["default"] = (SectionServiceClient);


/***/ }),

/***/ "./src/app/services/topic.service.client.ts":
/*!**************************************************!*\
  !*** ./src/app/services/topic.service.client.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var TopicServiceClient = /** @class */ (function () {
    function TopicServiceClient() {
        this.LESSON_URL = 'https://first-yanjianliao.herokuapp.com/api/course/';
    }
    TopicServiceClient.prototype.findTopicsForLesson = function (courseId, moduleId, lessonId) {
        return fetch(this.LESSON_URL + courseId + '/module/' + moduleId + '/lesson/' + lessonId + '/topic')
            .then(function (response) { return response.json(); });
    };
    return TopicServiceClient;
}());
/* harmony default export */ __webpack_exports__["default"] = (TopicServiceClient);


/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var UserServiceClient = /** @class */ (function () {
    function UserServiceClient() {
        this.USER_URL = 'https://pacific-oasis-70306.herokuapp.com/api';
    }
    UserServiceClient.prototype.createUser = function (username, password) {
        var user = {
            username: username,
            password: password
        };
        return fetch(this.USER_URL + '/user', {
            method: 'post',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.login = function (username, password) {
        var user = {
            username: username,
            password: password
        };
        return fetch(this.USER_URL + '/login', {
            method: 'post',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        });
    };
    UserServiceClient.prototype.profile = function () {
        return fetch(this.USER_URL + '/profile', {
            credentials: 'include'
        }).then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.logout = function () {
        return fetch(this.USER_URL + '/logout', {
            credentials: 'include'
        });
    };
    UserServiceClient.prototype.updateProfile = function (user) {
        if (user.username === 'admin') {
            user.role = 'admin';
        }
        return fetch(this.USER_URL + '/profile', {
            method: 'put',
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user),
        });
    };
    UserServiceClient.prototype.deleteProfile = function (user) {
        console.log(this.USER_URL + '/profile');
        return fetch(this.USER_URL + '/profile', {
            method: 'delete',
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user),
        });
    };
    return UserServiceClient;
}());
/* harmony default export */ __webpack_exports__["default"] = (UserServiceClient);


/***/ }),

/***/ "./src/app/services/widget.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/widget.service.client.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var WidgetServiceClient = /** @class */ (function () {
    function WidgetServiceClient() {
        this.WIDGET_API = 'https://first-yanjianliao.herokuapp.com/api/topic/';
    }
    WidgetServiceClient.prototype.findWidgetsForTopic = function (topicId) {
        return fetch(this.WIDGET_API + topicId + '/widget')
            .then(function (response) { return response.json(); });
    };
    return WidgetServiceClient;
}());
/* harmony default export */ __webpack_exports__["default"] = (WidgetServiceClient);


/***/ }),

/***/ "./src/app/topic-lists/topic-lists.component.css":
/*!*******************************************************!*\
  !*** ./src/app/topic-lists/topic-lists.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin: 10px;\n}\n\n.active-button{\n  background-color: black;\n}\n"

/***/ }),

/***/ "./src/app/topic-lists/topic-lists.component.html":
/*!********************************************************!*\
  !*** ./src/app/topic-lists/topic-lists.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group container\" role=\"group\" aria-label=\"Basic example\">\n  <a  *ngFor=\"let topic of topics\"\n      routerLink=\"/course/{{courseId}}/module/{{moduleId}}/lesson/{{lessonId}}/topic/{{topic.id}}\">\n    <button [ngClass]=\"{'active-button': topic.id == params.topicId}\"\n            class=\"btn btn-secondary\">\n      {{topic.title}}\n    </button>\n  </a>\n</div>\n<hr>\n\n<app-widget-list></app-widget-list>\n"

/***/ }),

/***/ "./src/app/topic-lists/topic-lists.component.ts":
/*!******************************************************!*\
  !*** ./src/app/topic-lists/topic-lists.component.ts ***!
  \******************************************************/
/*! exports provided: TopicListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicListsComponent", function() { return TopicListsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_topic_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/topic.service.client */ "./src/app/services/topic.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopicListsComponent = /** @class */ (function () {
    function TopicListsComponent(route, topicService) {
        var _this = this;
        this.route = route;
        this.topicService = topicService;
        this.topics = [];
        this.route.params.subscribe(function (params) {
            _this.setParams(params);
        });
    }
    TopicListsComponent.prototype.ngOnInit = function () {
    };
    TopicListsComponent.prototype.setParams = function (params) {
        this.params = params;
        this.courseId = params.courseId;
        this.moduleId = params.moduleId;
        this.lessonId = params.lessonId;
        if (!this.lessonId) {
            return;
        }
        this.loadTopics();
    };
    TopicListsComponent.prototype.loadTopics = function () {
        var _this = this;
        this.topicService
            .findTopicsForLesson(this.courseId, this.moduleId, this.lessonId)
            .then(function (topics) { return _this.topics = topics; });
    };
    TopicListsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topic-lists',
            template: __webpack_require__(/*! ./topic-lists.component.html */ "./src/app/topic-lists/topic-lists.component.html"),
            styles: [__webpack_require__(/*! ./topic-lists.component.css */ "./src/app/topic-lists/topic-lists.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_topic_service_client__WEBPACK_IMPORTED_MODULE_2__["default"]])
    ], TopicListsComponent);
    return TopicListsComponent;
}());



/***/ }),

/***/ "./src/app/white-board/white-board.component.css":
/*!*******************************************************!*\
  !*** ./src/app/white-board/white-board.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/white-board/white-board.component.html":
/*!********************************************************!*\
  !*** ./src/app/white-board/white-board.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>\n  White board\n</h2>\n<hr>\n<h3 *ngIf=\"courses.length != 0\">Enrolled courses of this students: </h3>\n<h3 *ngIf=\"courses.length == 0\">No Login User</h3>\n<div *ngFor=\"let course of courses\">\n  <h4>title: {{course.title}}</h4>\n</div>\n<hr>\n<app-course-grid></app-course-grid>\n"

/***/ }),

/***/ "./src/app/white-board/white-board.component.ts":
/*!******************************************************!*\
  !*** ./src/app/white-board/white-board.component.ts ***!
  \******************************************************/
/*! exports provided: WhiteBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhiteBoardComponent", function() { return WhiteBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WhiteBoardComponent = /** @class */ (function () {
    function WhiteBoardComponent(userService, sectionService, router, courseService) {
        this.userService = userService;
        this.sectionService = sectionService;
        this.router = router;
        this.courseService = courseService;
        this.sections = [];
        this.user = { error: undefined };
        this.courses = [];
    }
    WhiteBoardComponent.prototype.ngOnInit = function () {
        this.findCourses();
    };
    WhiteBoardComponent.prototype.findCourses = function () {
        var _this = this;
        this.userService
            .profile()
            .then(function (user) {
            _this.user = user;
        }).then(function () {
            if (_this.user.error) {
                return;
            }
            _this.sectionService
                .findSectionForStudent()
                .then(function (sections) { return _this.sections = sections; })
                .then(function () {
                // console.log(this.sections);
                for (var i = 0; i < _this.sections.length; i++) {
                    _this.courseService.findCourseById(_this.sections[i].section.courseId)
                        .then(function (course) {
                        var flag = false;
                        for (var j = 0; j < _this.courses.length; j++) {
                            // console.log(this.courses[j], course.title);
                            if (_this.courses[j].title === course.title) {
                                flag = true;
                                break;
                            }
                        }
                        if (!flag) {
                            _this.courses.push(course);
                        }
                    });
                }
            });
        });
    };
    WhiteBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-white-board',
            template: __webpack_require__(/*! ./white-board.component.html */ "./src/app/white-board/white-board.component.html"),
            styles: [__webpack_require__(/*! ./white-board.component.css */ "./src/app/white-board/white-board.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["default"],
            _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__["default"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_course_service_client__WEBPACK_IMPORTED_MODULE_4__["default"]])
    ], WhiteBoardComponent);
    return WhiteBoardComponent;
}());



/***/ }),

/***/ "./src/app/widget-list/widget-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/widget-list/widget-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  width: 300px;\n}\n"

/***/ }),

/***/ "./src/app/widget-list/widget-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/widget-list/widget-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let widget of widgets\">\n\n  <div class=\"row\">\n    <h3 class=\"col-4\">{{widget.name}}</h3>\n    <p><em>({{widget.widgetType}} widget)</em></p>\n  </div>\n\n  <div *ngIf=\"widget.widgetType == 'Heading'\">\n    <h1 *ngIf=\"widget.size == '1'\">{{widget.text}}</h1>\n    <h2 *ngIf=\"widget.size == '2'\">{{widget.text}}</h2>\n    <h3 *ngIf=\"widget.size == '3'\">{{widget.text}}</h3>\n  </div>\n\n\n  <div *ngIf=\"widget.widgetType == 'List'\">\n    <ol *ngIf=\"widget.listType == 'ordered' && widget.listItems\">\n      <li *ngFor=\"let item of widget.listItems.split('\\n')\">\n        {{item}}\n      </li>\n    </ol>\n    <ul *ngIf=\"widget.listType == 'unordered' && widget.listItems\">\n      <li *ngFor=\"let item of widget.listItems.split('\\n')\">\n        {{item}}\n      </li>\n    </ul>\n  </div>\n\n  <div *ngIf=\"widget.widgetType == 'Image'\">\n    <img src=\"{{widget.src}}\" alt=\"\">\n  </div>\n\n  <div *ngIf=\"widget.widgetType == 'Link'\">\n    <a href=\"{{widget.href}}\">{{widget.text}}</a>\n  </div>\n\n  <div *ngIf=\"widget.widgetType == 'Paragraph'\">\n    {{widget.text}}\n  </div>\n\n  <hr>\n</div>\n"

/***/ }),

/***/ "./src/app/widget-list/widget-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/widget-list/widget-list.component.ts ***!
  \******************************************************/
/*! exports provided: WidgetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(route, widgetService) {
        var _this = this;
        this.route = route;
        this.widgetService = widgetService;
        this.widgets = [];
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    WidgetListComponent.prototype.ngOnInit = function () {
    };
    WidgetListComponent.prototype.setParams = function (params) {
        if (!params.topicId) {
            return;
        }
        this.params = params;
        this.loadWidgets(params.topicId);
    };
    WidgetListComponent.prototype.loadWidgets = function (topicId) {
        var _this = this;
        this.widgetService
            .findWidgetsForTopic(topicId)
            .then(function (widgets) { return _this.widgets = widgets; });
    };
    WidgetListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/widget-list/widget-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["default"]])
    ], WidgetListComponent);
    return WidgetListComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! /Users/yanjianliao/web-2018/assignment-five-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map