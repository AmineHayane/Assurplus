webpackJsonp([1,5],{

/***/ 1091:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(539);


/***/ }),

/***/ 1095:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadsService = (function () {
    function UploadsService(http) {
        this.http = http;
    }
    UploadsService.prototype.getAllUploads = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/api/uploads', { headers: headers }).map(function (res) { return res.json(); });
    };
    UploadsService.prototype.addUpload = function (newUpload) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/uploads', JSON.stringify(newUpload), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UploadsService.prototype.deleteUpload = function (uploadId) {
        return this.http.delete('/api/uploads/' + uploadId).map(function (res) { return res.json(); });
    };
    return UploadsService;
}());
UploadsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], UploadsService);

var _a;
//# sourceMappingURL=uploads.service.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.userSource = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
        this.user$ = this.userSource.asObservable();
    }
    AuthenticationService.prototype.setUser = function (user) {
        this.userSource.next(user);
    };
    AuthenticationService.prototype.registerUser = function (user) {
        var _this = this;
        console.log('registerUser', user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */];
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/users/register', JSON.stringify(user), { headers: headers })
            .map(function (res) { return _this.setToken(res); });
    };
    AuthenticationService.prototype.loginUser = function (user) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */];
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/users/login', JSON.stringify(user), { headers: headers })
            .map(function (res) { return _this.setToken(res); });
    };
    AuthenticationService.prototype.logout = function () {
        this.token = null;
        localStorage.removeItem('currentUser');
    };
    AuthenticationService.prototype.verify = function () {
        var _this = this;
        var currUser = JSON.parse(localStorage.getItem('currentUser'));
        var token = (currUser && 'token' in currUser) ? currUser.token : this.token;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'x-access-token': token });
        return this.http.get('api/users/check-state', { headers: headers }).map(function (res) { return _this.parseRes(res); });
    };
    AuthenticationService.prototype.setToken = function (res) {
        console.log('setToken', res);
        var body = JSON.parse(res['_body']);
        if (body['success'] == true) {
            this.token = body['token'];
            localStorage.setItem('currentUser', JSON.stringify({
                user_mail: body['user']['user_mail'],
                token: this.token
            }));
        }
        return body;
    };
    AuthenticationService.prototype.parseRes = function (res) {
        var body = JSON.parse(res['_body']);
        return body;
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enterleave_animation__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scale_animation__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flyInOrOut__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carousel_animation__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fadeInOut__ = __webpack_require__(700);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Animations; });





var Animations = (function () {
    function Animations() {
    }
    return Animations;
}());

Animations.enterLeaveLeft = __WEBPACK_IMPORTED_MODULE_0__enterleave_animation__["a" /* enterLeaveLeft */];
Animations.enterLeaveRight = __WEBPACK_IMPORTED_MODULE_0__enterleave_animation__["b" /* enterLeaveRight */];
Animations.scale = __WEBPACK_IMPORTED_MODULE_1__scale_animation__["a" /* scale */];
Animations.flyInOrOutLeft = __WEBPACK_IMPORTED_MODULE_2__flyInOrOut__["a" /* flyInOrOutLeft */];
Animations.flyInOrOutRight = __WEBPACK_IMPORTED_MODULE_2__flyInOrOut__["b" /* flyInOrOutRight */];
Animations.carousel = __WEBPACK_IMPORTED_MODULE_3__carousel_animation__["a" /* carousel */];
Animations.fadeInOut = __WEBPACK_IMPORTED_MODULE_4__fadeInOut__["a" /* fadeInOut */];
//# sourceMappingURL=animations.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uploads_service__ = __webpack_require__(1095);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileuploadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileuploadComponent = (function () {
    function FileuploadComponent(uploadsService) {
        this.uploadsService = uploadsService;
        this.uploads = [];
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({ url: 'http://localhost:8000/upload' });
    }
    FileuploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getSubscribeUploads();
        this.uploader.onCompleteAll = function () {
            console.log('All uploads completed');
        };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            _this.addUpload(item.file.name);
        };
    };
    FileuploadComponent.prototype.addUpload = function (url) {
        var _this = this;
        var newUpload = {
            url: url
        };
        this.uploadsService.addUpload(newUpload).subscribe(function (upload) {
            _this.uploads.push(upload);
            console.log(_this.uploads);
        });
    };
    FileuploadComponent.prototype.deleteUpload = function (uploadId) {
        var uploads = this.uploads;
        this.uploadsService.deleteUpload(uploadId).subscribe(function () {
            for (var i = 0; i < uploads.length; i++) {
                if (uploads[i].id == uploadId) {
                    uploads.splice(i, 1);
                }
            }
        });
    };
    FileuploadComponent.prototype.getSubscribeUploads = function () {
        var _this = this;
        this.uploads = [];
        this.uploadsService.getAllUploads().subscribe(function (uploads) {
            _this.uploads = uploads;
            console.log(uploads);
        });
    };
    return FileuploadComponent;
}());
FileuploadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-fileupload',
        template: __webpack_require__(832),
        styles: [__webpack_require__(770)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__uploads_service__["a" /* UploadsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__uploads_service__["a" /* UploadsService */]) === "function" && _a || Object])
], FileuploadComponent);

var _a;
//# sourceMappingURL=fileupload.component.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(455);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.notify = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */];
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function (user) {
        var _this = this;
        this.authService.loginUser(user).subscribe(function (res) {
            console.log(res);
            _this.user_status = res['success'];
            _this.notify.emit(_this.user_status);
            if (res['success'] == true) {
                _this.authService.setUser(res['user']);
            }
            else {
                _this.message = res['message'];
            }
        });
    };
    return LoginComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "notify", void 0);
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(834),
        styles: [__webpack_require__(772)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
        this.user_mail = '';
        this.user_password = '';
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(115);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = (function () {
    function SignupComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* User */];
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.registerUser = function (user) {
        var _this = this;
        console.log(user);
        this.authService.registerUser(user).subscribe(function (res) {
            console.log(res);
            if (res['success'] == true) {
                _this.authService.setUser(res['user']);
                _this.router.navigate(['']);
            }
            else {
                _this.message = res['message'];
            }
        });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(835),
        styles: [__webpack_require__(773)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* Router */]) === "function" && _b || Object])
], SignupComponent);

var _a, _b;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_animations__ = __webpack_require__(452);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestngsemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestngsemComponent = (function () {
    function TestngsemComponent(elref) {
        this.elref = elref;
        this.position = -600;
        this.myopacity = 0;
        this.SCALED = ['inactive', 'inactive', 'inactive'];
        this.APPEARED = [false, false, false];
        this.bngChanged = 'inactive';
        this.isScrolled_50 = false;
    }
    TestngsemComponent.prototype.scaleIn = function (i) { this.SCALED[i] = 'active'; };
    TestngsemComponent.prototype.scaleOut = function (i) { this.SCALED[i] = 'inactive'; };
    TestngsemComponent.prototype.onScrolll = function (event, menuChangePos, i) {
        if (window.pageYOffset >= menuChangePos) {
            this.APPEARED[i] = true;
        }
    };
    TestngsemComponent.prototype.onScrollll = function (event) {
        if (this.position <= -13) {
            this.position = -600 + window.pageYOffset;
            this.myopacity = window.pageYOffset / 500;
        }
        else {
            if (window.pageYOffset < 591) {
                this.position = -13;
            }
        }
        /*console.log(window.pageYOffset);
        console.log(this.position);
        console.log(this.myopacity);*/
    };
    TestngsemComponent.prototype.onScroll = function (event, menuChangePos) {
        if (window.pageYOffset >= menuChangePos) {
            this.isScrolled_50 = true;
        }
        else {
            this.isScrolled_50 = false;
        }
    };
    TestngsemComponent.prototype.animateButton = function () {
        jQuery(this.elref.nativeElement).find('.get_started').transition({
            animation: 'scale',
            duration: '2s',
        });
    };
    TestngsemComponent.prototype.ngOnInit = function () {
    };
    return TestngsemComponent;
}());
TestngsemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-testngsem',
        template: __webpack_require__(836),
        styles: [__webpack_require__(774)],
        animations: [__WEBPACK_IMPORTED_MODULE_1__animations_animations__["a" /* Animations */].flyInOrOutLeft, __WEBPACK_IMPORTED_MODULE_1__animations_animations__["a" /* Animations */].flyInOrOutRight, __WEBPACK_IMPORTED_MODULE_1__animations_animations__["a" /* Animations */].scale(1.1), __WEBPACK_IMPORTED_MODULE_1__animations_animations__["a" /* Animations */].fadeInOut,
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('changeBngColor', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    backgroundColor: '#008080'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    backgroundColor: '#008080'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('2000ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('active => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('2000ms ease-out'))
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('changeBngColorr', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ backgroundColor: '#4D4E4E' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('2000ms ease-in')
                ]),
            ]),
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], TestngsemComponent);

var _a;
//# sourceMappingURL=testngsem.component.js.map

/***/ }),

/***/ 538:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 538;


/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(712);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return carousel; });

var carousel = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])("friendAnimation", [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])("void => prev", // ---> Entering --->
    [
        // In order to maintain a zIndex of 2 throughout the ENTIRE
        // animation (but not after the animation), we have to define it
        // in both the initial and target styles. Unfortunately, this
        // means that we ALSO have to define target values for the rest
        // of the styles, which we wouldn't normally have to.
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
            left: -100,
            opacity: 0.0,
            zIndex: 2
        }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])("200ms ease-in-out", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
            left: 0,
            opacity: 1.0,
            zIndex: 2
        }))
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])("prev => void", // ---> Leaving --->
    [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])("200ms ease-in-out", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
            left: 100,
            opacity: 0.0
        }))
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])("void => next", // <--- Entering <---
    [
        // In order to maintain a zIndex of 2 throughout the ENTIRE
        // animation (but not after the animation), we have to define it
        // in both the initial and target styles. Unfortunately, this
        // means that we ALSO have to define target values for the rest
        // of the styles, which we wouldn't normally have to.
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
            left: 100,
            opacity: 0.0,
            zIndex: 2
        }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])("200ms ease-in-out", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
            left: 0,
            opacity: 1.0,
            zIndex: 2
        }))
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])("next => void", // <--- Leaving <---
    [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])("200ms ease-in-out", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
            left: -100,
            opacity: 0.0
        }))
    ])
]);
//# sourceMappingURL=carousel.animation.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return enterLeaveLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return enterLeaveRight; });

var enterLeaveLeft = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('enterLeaveLeft', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(-30%)' }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease-in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(0)' }))
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => void', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(0)' }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('1s ease-in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(-100%)' }))
    ]),
]);
var enterLeaveRight = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('enterLeaveRight', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(100%)' }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('1s ease-in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(0)' }))
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => void', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(0)' }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('1s ease-in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(100%)' }))
    ]),
]);
//# sourceMappingURL=enterleave.animation.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fadeInOut; });

var fadeInOut = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('fadeInOut', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('1s ease-in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1 }))
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => void', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1 }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('1s ease-in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 }))
    ]),
]);
//# sourceMappingURL=fadeInOut.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return flyInOrOutLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return flyInOrOutRight; });

var flyInOrOutLeft = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('flyInOrOutLeft', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(0)' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(1000, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(-50%)', offset: 0 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(20px)', offset: 0.5 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(0)', offset: 1.0 })
        ]))
    ]),
]);
var flyInOrOutRight = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('flyInOrOutRight', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(0)' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(1000, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(50%)', offset: 0 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(-20px)', offset: 0.5 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(0)', offset: 1.0 })
        ]))
    ]),
]);
//# sourceMappingURL=flyInOrOut.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = scale;

function scale(degree) {
    if (degree === void 0) { degree = 1.2; }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('scaleOut', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'scale(1)' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'scale(' + degree + ')' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('150ms ease-in')),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('active => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('150ms ease-out'))
    ]);
}
//# sourceMappingURL=scale.animation.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(115);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(elref, authService, router) {
        var _this = this;
        this.elref = elref;
        this.authService = authService;
        this.router = router;
        this.title = 'My Post App!';
        this.isScrolled_50 = false;
        this.subscription = authService.user$.subscribe(function (user) { return _this.user = user; });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        console.log(JSON.parse(localStorage.getItem('currentUser')));
        //example of verification
        this.authService.verify().subscribe(function (res) {
            console.log(res);
            _this.message = res['message'];
            if (res['message'] == 'Failed to authenticate token.') {
                _this.authService.logout();
                _this.user = null;
                _this.message = "Your session expired, you've been logged out";
                _this.router.navigate(['/login']);
            }
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    AppComponent.prototype.logout = function () {
        this.authService.logout();
        this.user = null;
        this.message = "Logged out";
        this.router.navigateByUrl('http://google.fr');
    };
    AppComponent.prototype.toggleLogin = function () {
        jQuery(this.elref.nativeElement).find('.ui.page.dimmer').dimmer('setting', { opacity: 1 })
            .dimmer('setting', { transition: 'slide down' }).dimmer('show');
    };
    AppComponent.prototype.onNotify = function (status) {
        if (status == false) {
            console.log('not connected');
        }
        else {
            console.log('connected');
            jQuery(this.elref.nativeElement).find('.ui.page.dimmer').dimmer('hide');
        }
    };
    AppComponent.prototype.toggleSidebar = function () {
        /*alert(window.pageYOffset);*/
        jQuery(this.elref.nativeElement).find('.ui.sidebar.right').sidebar('setting', 'transition', 'overlay').sidebar('toggle');
    };
    AppComponent.prototype.onScroll = function (event, menuChangePos) {
        /*console.log(window.pageYOffset);*/
        if (window.pageYOffset >= menuChangePos) {
            this.isScrolled_50 = true;
        }
        else {
            this.isScrolled_50 = false;
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(829),
        styles: [__webpack_require__(767)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__article_article_component__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs__ = __webpack_require__(776);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__testngsem_testngsem_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_trackscroll_directive__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__carousel_carousel_component__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_page_scroll_ng2_page_scroll__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_responsive__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_responsive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_responsive__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__signup_signup_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_authentication_service__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_router__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__routes_app_routing__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__signup_signup_service__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__login_login_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_file_upload_ng2_file_upload__ = __webpack_require__(780);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_ng2_file_upload_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__fileupload_fileupload_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_semantic_ui__ = __webpack_require__(824);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__fileupload_uploads_service__ = __webpack_require__(1095);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__article_article_component__["a" /* ArticleComponent */],
            __WEBPACK_IMPORTED_MODULE_8__testngsem_testngsem_component__["a" /* TestngsemComponent */],
            __WEBPACK_IMPORTED_MODULE_9__directives_trackscroll_directive__["a" /* TrackScrollDirective */],
            __WEBPACK_IMPORTED_MODULE_10__carousel_carousel_component__["a" /* CarouselComponent */],
            __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_14__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_19__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_20_ng2_file_upload_ng2_file_upload__["FileSelectDirective"],
            __WEBPACK_IMPORTED_MODULE_20_ng2_file_upload_ng2_file_upload__["FileDropDirective"],
            __WEBPACK_IMPORTED_MODULE_21__fileupload_fileupload_component__["a" /* FileuploadComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_11_ng2_page_scroll_ng2_page_scroll__["a" /* Ng2PageScrollModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_13_ng2_responsive__["ResponsiveModule"],
            __WEBPACK_IMPORTED_MODULE_16__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_17__routes_app_routing__["a" /* ROUTES */]),
            __WEBPACK_IMPORTED_MODULE_22_ng2_semantic_ui__["a" /* SuiModule */],
            __WEBPACK_IMPORTED_MODULE_22_ng2_semantic_ui__["b" /* SuiProgressModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_15__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_18__signup_signup_service__["a" /* SignupService */], __WEBPACK_IMPORTED_MODULE_23__fileupload_uploads_service__["a" /* UploadsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__article_model__ = __webpack_require__(706);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticleComponent = (function () {
    function ArticleComponent() {
        this.scaled = 'inactive';
    }
    ArticleComponent.prototype.voteUp = function () {
        this.article.voteUp();
        return false;
    };
    ArticleComponent.prototype.voteDown = function () {
        this.article.voteDown();
        return false;
    };
    ArticleComponent.prototype.scaleIn = function () {
        this.scaled = 'active';
    };
    ArticleComponent.prototype.scaleOut = function () {
        this.scaled = 'inactive';
    };
    ArticleComponent.prototype.ngOnInit = function () {
    };
    return ArticleComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__article_model__["a" /* Article */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__article_model__["a" /* Article */]) === "function" && _a || Object)
], ArticleComponent.prototype, "article", void 0);
ArticleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-article',
        template: __webpack_require__(830),
        styles: [__webpack_require__(768)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('flyInOut', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(-100%)' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease-in')
                ]),
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('scaleOut', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    transform: 'scale(1)',
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    transform: 'scale(1.1)',
                    background: 'green'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('150ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('active => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('150ms ease-out'))
            ])
        ],
        host: {
            class: 'row'
        }
    })
], ArticleComponent);

var _a;
//# sourceMappingURL=article.component.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Article; });
var Article = (function () {
    function Article(title, link, votes) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }
    Article.prototype.voteUp = function () {
        this.votes += 1;
    };
    Article.prototype.voteDown = function () {
        this.votes -= 1;
    };
    Article.prototype.domain = function () {
        try {
            var link = this.link.split('//')[1];
            return link.split('/')[0];
        }
        catch (err) {
            return null;
        }
    };
    return Article;
}());

//# sourceMappingURL=article.model.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_animations__ = __webpack_require__(452);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarouselComponent = (function () {
    // I initialize the component.
    function CarouselComponent(changeDetectorRef) {
        this.SCALED = ['inactive', 'inactive'];
        this.changeDetectorRef = changeDetectorRef;
        this.orientation = "none";
        // Setup the friends collection.
        this.friends = [
            {
                id: 1,
                title: "Reconnaissance d'image",
                description: "Prenez tout simplement votre produit en photo, nos algorithmes se chargeront de procéder à son identification",
                img: 'photo'
            },
            {
                id: 2,
                title: "Scan via code barre",
                description: "Si votre emballage produit est toujours à votre disposition, scannez le code et votre produit sera reconnu",
                img: 'barcode'
            },
            {
                id: 3,
                title: "Recherche manuelle",
                description: "Profitez de notre moteur intelligent pour rechercher directement votre produit",
                img: 'search'
            },
        ];
        // Randomly(ish) select the initial friend to display.
        this.selectedFriend = this.friends[Math.floor(Math.random() * this.friends.length)];
    }
    CarouselComponent.prototype.scaleIn = function (i) { this.SCALED[i] = 'active'; };
    CarouselComponent.prototype.scaleOut = function (i) { this.SCALED[i] = 'inactive'; };
    // ---
    // PUBLIC METHODS.
    // ---
    // I cycle to the next friend in the collection.
    CarouselComponent.prototype.showNextFriend = function () {
        // Change the "state" for our animation trigger.
        this.orientation = "next";
        // Force the Template to apply the new animation state before we actually
        // change the rendered element view-model. If we don't force a change-detection,
        // the new [@orientation] state won't be applied prior to the "leave" transition;
        // which means that we won't be leaving from the "expected" state.
        this.changeDetectorRef.detectChanges();
        // Find the currently selected index.
        var index = this.friends.indexOf(this.selectedFriend);
        // Move the rendered element to the next index - this will cause the current item
        // to enter the ( "next" => "void" ) transition and this new item to enter the
        // ( "void" => "next" ) transition.
        this.selectedFriend = this.friends[index + 1]
            ? this.friends[index + 1]
            : this.friends[0];
    };
    // I cycle to the previous friend in the collection.
    CarouselComponent.prototype.showPrevFriend = function () {
        // Change the "state" for our animation trigger.
        this.orientation = "prev";
        // Force the Template to apply the new animation state before we actually
        // change the rendered element view-model. If we don't force a change-detection,
        // the new [@orientation] state won't be applied prior to the "leave" transition;
        // which means that we won't be leaving from the "expected" state.
        this.changeDetectorRef.detectChanges();
        // Find the currently selected index.
        var index = this.friends.indexOf(this.selectedFriend);
        // Move the rendered element to the previous index - this will cause the current
        // item to enter the ( "prev" => "void" ) transition and this new item to enter
        // the ( "void" => "prev" ) transition.
        this.selectedFriend = this.friends[index - 1]
            ? this.friends[index - 1]
            : this.friends[this.friends.length - 1];
    };
    return CarouselComponent;
}());
CarouselComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-carousel",
        template: __webpack_require__(831),
        styles: [__webpack_require__(769)],
        animations: [__WEBPACK_IMPORTED_MODULE_1__animations_animations__["a" /* Animations */].carousel, __WEBPACK_IMPORTED_MODULE_1__animations_animations__["a" /* Animations */].scale(1.2)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _a || Object])
], CarouselComponent);

var _a;
//# sourceMappingURL=carousel.component.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackScrollDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrackScrollDirective = (function () {
    function TrackScrollDirective() {
        this.scrolled = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"];
    }
    TrackScrollDirective.prototype.onScroll = function (event) {
        this.scrolled.emit({ value: event });
    };
    ;
    return TrackScrollDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TrackScrollDirective.prototype, "scrolled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TrackScrollDirective.prototype, "onScroll", null);
TrackScrollDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[tracking-scroll]'
    })
], TrackScrollDirective);

//# sourceMappingURL=trackscroll.directive.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent(elref) {
        this.elref = elref;
        this.onFooter = false;
        this.toggledBottomSidebar = false;
    }
    FooterComponent.prototype.toggleFooter = function () {
        this.onFooter = !this.onFooter;
    };
    FooterComponent.prototype.openSidebar = function () {
        jQuery(this.elref.nativeElement).find('.ui.sidebar.bottom').sidebar('show');
    };
    FooterComponent.prototype.closeSidebar = function () {
        jQuery(this.elref.nativeElement).find('.ui.sidebar.bottom').sidebar('hide');
    };
    FooterComponent.prototype.onScroll = function (event, changePos) {
        if (window.pageYOffset >= changePos) {
            this.openSidebar();
        }
        else {
            this.closeSidebar();
        }
    };
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(833),
        styles: [__webpack_require__(771)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], FooterComponent);

var _a;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signup_signup_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__testngsem_testngsem_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fileupload_fileupload_component__ = __webpack_require__(453);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });




// Define the routes
var ROUTES = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__testngsem_testngsem_component__["a" /* TestngsemComponent */],
        useAsDefault: true
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'signup',
        name: 'Signup',
        component: __WEBPACK_IMPORTED_MODULE_0__signup_signup_component__["a" /* SignupComponent */]
    },
    {
        path: 'fileupload',
        component: __WEBPACK_IMPORTED_MODULE_3__fileupload_fileupload_component__["a" /* FileuploadComponent */]
    }
];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupService = (function () {
    function SignupService(http) {
        this.http = http;
    }
    SignupService.prototype.addUser = function (newUser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */];
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/users/register', JSON.stringify(newUser), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return SignupService;
}());
SignupService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], SignupService);

var _a;
//# sourceMappingURL=signup.service.js.map

/***/ }),

/***/ 712:
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

/***/ 767:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, ".section_before_footer{\n  height : 200px;\n  margin-bottom: 20px;\n}\n\n.example-icon {\n  padding: 0 14px;\n}\n\n.example-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n.ui.top.fixed.menu {\n  -webkit-transition: all 0.8s;\n  transition: all 0.8s;\n  -webkit-transition-timing-function: ease-in;\n          transition-timing-function: ease-in;\n}\n\na:hover {\n  color : red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, "app-carousel {\n\tdisplay: block ;\n}\n\na {\n\tcolor: #7e8890 ;\n\tcursor: pointer ;\n\ttext-decoration: none ;\n\t-ms-user-select: none ;\n\t    user-select: none ;\n\t\t-moz-user-select: none ;\n\t\t-webkit-user-select: none ;\n}\n\na:hover{\n  color : #333c4e;\n}\n\ndiv.container {\n\theight: 220px ;\n\tmargin: 20px 0px 20px 0px ;\n\tposition: relative ;\n}\n\ndiv.friend {\n\tbackground-color: #FAFAFA ;\n\tborder: 1px solid #CCCCCC ;\n\tborder-radius: 6px ;\n\theight: 220px ;\n\tleft: 0px ;\n\tposition: absolute ;\n\ttext-align: center ;\n\tpadding-top: 20px;\n\twidth: 100% ;\n}\n\ndiv.friend .sub.header {\n  margin-top : 15px;\n}\n\np.controls {\n\ttext-align: center ;\n\twidth: 350px ;\n}\n\n.test1{\n}\n\n.test2{\n}\n\n.test3{\n\n}\n\n.test1 i{\n  position: absolute;\n  right : -5px;\n  top : 100px;\n}\n\n.test3 i {\n  position: absolute;\n  left: 0;\n  top : 100px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 770:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, ".ui.container{\n  margin-top: 100px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, ".ui.segment {\n  box-shadow: -5px -5px 5px #008080;\n  -webkit-transition: all 2s;\n  transition: all 2s;\n  -webkit-transition-timing-function: ease-in;\n          transition-timing-function: ease-in;\n}\n\n.heightmodif {\n  height : 300px;\n}\n\n.get_started {\n  margin: auto;\n}\n\n.get_started:hover {\n  color : purple;\n}\n\nbody {\n  height : 95px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 773:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, ".centered-block {\n  margin-top:200px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 774:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, ".header-img-container {\n  height : 600px;\n  width : 100%;\n  margin:0 auto;\n  padding:0;\n\n}\n\n.header-img-container h1 {\n padding-top : 0px;\n}\n\n.header-img-container img {\n padding-top : 175px;\n}\n\n.header-img-container h1 .library{\n font-size: 1.3em;\n}\n\n.header-img-container h1 .tagline{\n font-size: 1.1em;\n  font-weight: normal;\n}\n\n.get_started {\n  margin-top : 90px;\n  color : white;\n}\n\n.get_started:hover {\n  color : purple;\n}\n\n#here{\n  height:50px;\n}\n.content_section{\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n\n.content_section .ui.huge.header {\n  margin-top : 10px;\n}\n\n.content_section2{\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n\n.content_section2 .ui.huge.header {\n  margin-top : 10px;\n}\n\n.bosch {\n  box-shadow: 5px 5px 12px #555;\n}\n\n.easy {\n  position : relative;\n}\n\n.easy p,.list {\n  color : #7e8890;\n  font-style: normal;\n  -webkit-font-variant-ligatures: normal;\n          font-variant-ligatures: normal;\n  font-variant-caps: normal;\n  font-variant-numeric: normal;\n  font-weight: 400;\n  font-stretch: normal;\n  font-size: 15px;\n  font-family: \"Open Sans\", open-sans, sans-serif;\n}\n\n.easy .huge.header{\n  color : #333c4e;\n  font-style: normal;\n  -webkit-font-variant-ligatures: normal;\n          font-variant-ligatures: normal;\n  font-variant-caps: normal;\n  font-variant-numeric: normal;\n  font-weight: 400;\n  font-stretch: normal;\n  font-size: 30px;\n  line-height: 52px;\n  font-family: \"Open Sans\", open-sans, sans-serif;\n}\n\n.easy .bulleted.list {\n  margin-bottom: 30px;\n}\n\n.ui.info.message {\n  margin-top : 50px;\n  margin-bottom : 40px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 829:
/***/ (function(module, exports) {

module.exports = " <div class=\"ui right vertical sidebar inverted menu\">\n    <a class=\"item\">\n      1\n    </a>\n    <a class=\"item\">\n      2\n    </a>\n    <a class=\"item\">\n      3\n    </a>\n  </div>\n\n  <div class=\"pusher\">\n    <div tracking-scroll (scrolled)=\"onScroll($event.value, 50)\" class=\"ui top fixed menu secondary \" [ngClass]= \"{'five item' : isScrolled_50}\">\n\n    <a href=\"/\" class=\"item active\">\n      <img class=\"ui tiny image\" src=\"./assets/images/brand_logo.png\">\n    </a>\n    <a *hideItSizes=\"{min:0,max:500}\" class=\"item\">\n      <i class=\"help circle outline large icon\"></i>\n      Comment ça marche\n    </a>\n    <a routerLink=\"/fileupload\" *hideItSizes=\"{min:0,max:500}\" class=\"item\">\n      FAQ\n    </a>\n    <a *hideItSizes=\"{min:0,max:500}\" class=\"item\">\n      Contact\n    </a>\n\n    <div class=\"right menu\">\n      <div *ngIf=\"!user && !isScrolled_50\" class=\"item\">\n        <a (click)=\"toggleLogin()\" *hideItSizes=\"{min:0,max:768}\" class=\"item\">\n        Se connecter\n      </a>\n      </div>\n\n      <div *ngIf=\"user && !isScrolled_50\" class=\"item\">\n        <a *hideItSizes=\"{min:0,max:768}\" class=\"ui small basic button teal\">\n        <i class=\"icon user\"></i>\n          {{user.user_mail}}\n      </a>\n      </div>\n\n      <div *hideItSizes=\"{min:0,max:768}\"  class=\"item\">\n          <a routerLink=\"/signup\" *ngIf=\"!user && !isScrolled_50\" class=\"ui small button teal\" >S'inscrire</a>\n          <a  (click)=\"logout()\" *ngIf=\"user && !isScrolled_50\" class=\"ui small button teal\" >Deconnexion</a>\n      </div>\n      <a *showItSizes=\"{min:0,max:768}\" (click)=\"toggleSidebar()\" class=\"item\"><i class=\"icon sidebar\"></i> </a>\n    </div>\n\n  </div>\n\n  <div class=\"ui main \">\n\n    <router-outlet></router-outlet>\n    <p *ngIf=\"!user\">Not logged in</p>\n    <p>{{message}}</p>\n  </div>\n\n     <!--<div class=\"section_before_footer\">\n\n     </div>-->\n\n    <div class=\"ui page dimmer\">\n      <div class=\"content ui text container\">\n        <div class=\"center\">\n          <app-login (notify)=\"onNotify($event)\"></app-login>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"ui container fluid\">\n      <app-footer></app-footer>\n    </div>\n\n  </div>\n"

/***/ }),

/***/ 830:
/***/ (function(module, exports) {

module.exports = "  <div (mouseenter)=\"scaleIn()\" (mouseleave)=\"scaleOut()\" class=\"twelve wide column center aligned votes\"  [@flyInOut] [@scaleOut]=\"scaled\">\n    <div class=\"ui statistic\">\n      <div class=\"value\">\n        {{article.votes}}\n      </div>\n\n      <div class=\"label\">\n        Points\n      </div>\n    </div>\n\n    <div class=\"twelve wide column\">\n    <a class=\"ui large header\" href=\"{{article.link}}\">\n      {{article.title}}\n    </a>\n    <div class=\"meta\">({{article.domain()}})</div>\n    <ul class=\"ui big horizontal list voters\">\n      <li class=\"item\">\n        <a href (click)=\"voteUp()\">\n          <i class=\"arrow up icon\"></i>\n          upvote\n        </a>\n      </li>\n\n      <li class=\"item\">\n        <a href (click)=\"voteDown()\">\n          <i class=\"arrow down icon\"></i>\n          downvote\n        </a>\n      </li>\n    </ul>\n\n  </div>\n  </div>\n\n\n\n\n"

/***/ }),

/***/ 831:
/***/ (function(module, exports) {

module.exports = "<div class=\"container ui grid\">\n          <div class=\"column test1\">\n            <a (click)=\"showPrevFriend()\">\n              <i [@scaleOut]=\"SCALED[0]\" (mouseenter)=\"scaleIn(0)\" (mouseleave)=\"scaleOut(0)\" class=\"big icon chevron left\"></i></a>\n          </div>\n\n  <div class=\"fourteen wide column test2\">\n    <template ngFor let-friend [ngForOf]=\"[ selectedFriend ]\">\n                <div [@friendAnimation]=\"orientation\" class=\"friend\">\n                  <h2 class=\"ui icon header\">\n                    <i class=\"{{friend.img}} icon\"></i>\n                    <div class=\"content\">\n                      {{friend.title}}\n                      <div class=\"sub header\">{{friend.description}}</div>\n                    </div>\n                  </h2>\n                </div>\n            </template>\n  </div>\n\n          <div class=\"column test3\">\n            <a (click)=\"showNextFriend()\">\n              <i [@scaleOut]=\"SCALED[1]\" (mouseenter)=\"scaleIn(1)\" (mouseleave)=\"scaleOut(1)\" class=\"big icon chevron right\"></i></a>\n          </div>\n\n</div>\n\n\n"

/***/ }),

/***/ 832:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui container\">\n  <div class=\"ui inverted segment\">\n    <h2>FileUpload Component</h2>\n  </div>\n</div>\n\n<div class=\"ui container\">\n  <div class=\"ui grid\">\n    <div class=\"row\">\n      <div class=\"five wide column\">\n        <form class=\"ui form\">\n          <div class=\"field\">\n            <label>Multiple Files Upload</label>\n            <input type=\"file\" name=\"multiple\" ng2FileSelect [uploader]=\"uploader\" multiple >\n          </div>\n        </form>\n      </div>\n\n      <div class=\"eleven wide column\">\n        <h3>File Upload with Angular 2 and Node</h3>\n        Queue length: {{ uploader?.queue?.length }}\n\n        <table class=\"ui basic table\">\n          <thead>\n            <tr>\n              <th>Name</th>\n              <th>Size</th>\n              <th>Progress</th>\n              <th>Status</th>\n              <th>Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of uploader.queue\">\n              <td><strong>{{ item.file.name }}</strong></td>\n              <td nowrap>{{ item.file.size/1024/1024 | number:'.2' }} MB</td>\n              <td>\n                <sui-progress [value]=\"item.progress\" [progress]=\"false\">\n                </sui-progress>\n              </td>\n              <td>\n                <span *ngIf=\"item.isSuccess\"><i class=\"checkmark icon\"></i></span>\n                <span *ngIf=\"item.isCancel\"><i class=\"minus circle icon\"></i></span>\n                <span *ngIf=\"item.isError\"><i class=\"remove icon\"></i></span>\n              </td>\n              <td nowrap>\n                <button type=\"button\" class=\"mini ui green button\"\n                        (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                  <i class=\"upload icon\"></i> Upload\n                </button>\n                <button type=\"button\" class=\"mini ui orange button\"\n                (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n                  <i class=\"ben icon\"></i> Cancel\n                </button>\n                <button type=\"button\" class=\"mini ui red button\" (click)=\"item.remove()\" >\n                  <i class=\"trash icon\"></i> Remove\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n        <div>\n          <div>Queue progress:\n            <sui-progress [value]=\"uploader.progress\" [progress]=\"false\">\n            </sui-progress>\n          </div>\n          <button type=\"button\" class=\"ui green button\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n            <i class=\"upload icon\"></i> Upload all\n          </button>\n          <button type=\"button\" class=\"ui orange button\" (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n            <i class=\"ban icon\"></i> Cancel all\n          </button>\n          <button type=\"button\" class=\"ui red button\" (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n            <i class=\"trash icon\"></i> Remove all\n          </button>\n        </div>\n\n        <div *ngFor=\"let upload of uploads\">\n          <img src=\"./uploads/{{upload.url}}\">\n          <button (click)=\"deleteUpload(upload.id)\" type=\"button\" class=\"ui red button\">\n            <i class=\"trash icon\"></i> Delete\n          </button>\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 833:
/***/ (function(module, exports) {

module.exports = "<body tracking-scroll (scrolled)=\"onScroll($event.value, 2141)\">\n\n <div class=\"ui bottom sidebar inverted\">\n    <div class=\"ui segment teal heightmodif\">\n      <div class=\"ui grid\">\n        <div class=\" centered row\">\n          <a (click)=\"closeSidebar()\"><i class=\" large chevron down link icon get_started\"></i></a>\n        </div>\n        <div class=\"row\">\n          <div class=\"four wide column\">\n            <img class=\"ui tiny image\" src=\"assets/images/brand_logo.png\">\n          </div>\n\n          <div class=\"four wide column\">\n            <h4>Contact</h4>\n            <div class=\"ui link list\">\n              <div class=\"active item\">Home</div>\n              <a class=\"item\">About</a>\n              <a class=\"item\">Jobs</a>\n              <a class=\"item\">Team</a>\n            </div>\n          </div>\n\n          <div class=\"four wide column\">\n            <h4>Contact</h4>\n            <div class=\"ui link list\">\n              <div class=\"active item\">Home</div>\n              <a class=\"item\">About</a>\n              <a class=\"item\">Jobs</a>\n              <a class=\"item\">Team</a>\n            </div>\n          </div>\n\n          <div class=\"four wide column\">\n            <h4>Contact</h4>\n            <div class=\"ui link list\">\n              <div class=\"active item\">Home</div>\n              <a class=\"item\">About</a>\n              <a class=\"item\">Jobs</a>\n              <a class=\"item\">Team</a>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"pusher\">\n    <div class=\"ui centered grid\">\n      <div class=\"row\">\n        <a (click)=\"openSidebar()\">\n          <h5 class=\"ui icon header\">\n            <i class=\" large chevron up link icon get_started\"></i>\n            <div class=\"content\">\n              Disclaimer\n            </div>\n          </h5>\n\n        </a>\n      </div>\n\n    </div>\n\n  </div>\n\n</body>\n\n"

/***/ }),

/***/ 834:
/***/ (function(module, exports) {

module.exports = "  <form #loginForm (ngSubmit)=\"loginUser(user);loginForm.reset()\" class=\"ui inverted form\">\n\n    <div class=\" field\">\n      <input type=\"email\" id=\"email\" [(ngModel)]=\"user.user_mail\" name=\"email\" placeholder=\"Email\" required>\n    </div>\n\n    <div class=\" field\">\n      <input type=\"password\" id=\"password\" [(ngModel)]=\"user.user_password\" placeholder=\"Password\" name=\"password\" required>\n    </div>\n\n    <button type=\"submit\" class=\"ui button teal\">Login</button>\n  </form>\n\n  <div *ngIf=\"message\" class=\"ui warning message\">\n    <i class=\"warning icon\"></i>\n    {{message}}\n  </div>\n"

/***/ }),

/***/ 835:
/***/ (function(module, exports) {

module.exports = "<div class=\"centered-block\">\n    <h2>Register</h2>\n    <form (ngSubmit)=\"registerUser(user)\">\n\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"email\" id=\"email\" [(ngModel)]=\"user.user_mail\" name=\"email\" required>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"email\">Password</label>\n        <input type=\"password\" id=\"password\" [(ngModel)]=\"user.user_password\" name=\"password\" required>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n    </form>\n\n    <p>{{message}}</p>\n  </div>\n"

/***/ }),

/***/ 836:
/***/ (function(module, exports) {

module.exports = "  <div class=\"header-img-container\" [@changeBngColor]=\"bngChanged\" [@changeBngColorr]>\n    <div class=\"ui centered grid\">\n      <div class=\"row\">\n        <div class=\"ui container\">\n          <img class=\"ui centered image\" src=\"./assets/images/brand_logo_3.png\" >\n        </div>\n      </div>\n      <div class=\"row\">\n        <h1 class=\"ui inverted header\" >\n          <span class=\"tagline\">L'assurance sur-mesure à portée de main</span>\n        </h1>\n      </div>\n\n      <div class=\"row\">\n        <a pageScroll href=\"#here\"><i class=\" large chevron down icon get_started\"></i> </a>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"here\"></div>\n\n<div tracking-scroll (scrolled)=\"onScrolll($event.value, 300, 0)\" class=\"content_section section_top\">\n  <div class=\"ui stackable grid container\">\n    <div class=\"three column row\">\n      <div class=\"left floated column\">\n        <img class=\" ui image rounded bosch\" src=\"./assets/images/bosch.jpg\"\n             [@scaleOut]=\"SCALED[0]\" (mouseenter)=\"scaleIn(0)\" (mouseleave)=\"scaleOut(0)\" [@fadeInOut] *ngIf=\"APPEARED[0]\">\n      </div>\n      <div class=\"right floated eight wide column easy\"  [@flyInOrOutRight] *ngIf=\"APPEARED[0]\">\n        <div class=\"ui piled segment\">\n        <div class=\"ui huge header\">Facile</div>\n        <p>Avec Assur+ constituez en un clin d’œil votre coffre-fort de biens assurables.\n          Choisissez, parmi les nombreux modes d’ajout, celui qui vous convient le mieux.\n          Découvrez le mode photo, basé sur un algorithme de reconnaissance d’images,\n          qui vous fera gagner un temps colossal dans la constitution de votre panier de biens.</p>\n        <h2 class=\"ui huge header\">Avec Assur+, fini la paperasse !</h2>\n        <div class=\"ui bulleted list\">\n          <div class=\"item\">Votre bien est automatiquement identifié parmi de nombreux produits.</div>\n          <div class=\"item\">Sa valeur est immédiatement estimée.</div>\n          <div class=\"item\">Signez votre contrat d’assurance en un clic.</div>\n        </div>\n             <app-carousel></app-carousel>\n        <div class=\"ui info message\">\n            <div class=\"header\">\n              Information :\n            </div>\n            <ul class=\"list\">\n              Vous pourrez être en mesure d'ajouter les informations qui vous semblent pertinentes après avoir enregistré votre produit.\n            </ul>\n          </div>\n      </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"ui divider\"></div>\n\n<div tracking-scroll (scrolled)=\"onScrolll($event.value, 1100, 1)\" class=\"content_section2\" >\n  <div class=\"ui stackable grid container\">\n    <div class=\"three column row\">\n\n\n      <div class=\"left floated eight wide column here easy\" [@flyInOrOutLeft] *ngIf=\"APPEARED[1]\">\n        <div class=\"ui piled segment\">\n        <div class=\"ui huge header\">Sécurisé</div>\n        <p>Soyez protégés en cas de sinistre, vos biens précieux restent à l’abri dans votre coffre-fort. </p>\n        <h2 class=\"ui huge header\">Sécurisez vos données</h2>\n        <p>Avec Assur+ les données contenues dans votre coffre-fort sont protégées par une méthode de chiffrement.\n        Vos données personnelles ne sont jamais transmises à un tiers sans votre accord préalable</p>\n\n      </div>\n        </div>\n\n      <div class=\"right floated column\">\n        <img class=\" ui image rounded bosch\" src=\"./assets/images/bosch.jpg\"\n        [@scaleOut]=\"SCALED[1]\" (mouseenter)=\"scaleIn(1)\" (mouseleave)=\"scaleOut(1)\"\n        [@fadeInOut] *ngIf=\"APPEARED[1]\">\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"ui divider\"></div>\n\n<div tracking-scroll (scrolled)=\"onScrolll($event.value, 1570, 2)\" class=\"content_section\">\n  <div class=\"ui stackable grid container\">\n    <div class=\"three column row\">\n      <div class=\"left floated column\">\n        <img class=\" ui image rounded bosch\" src=\"./assets/images/bosch.jpg\"\n        [@scaleOut]=\"SCALED[2]\" (mouseenter)=\"scaleIn(2)\" (mouseleave)=\"scaleOut(2)\"\n        [@fadeInOut] *ngIf=\"APPEARED[2]\">\n      </div>\n     <div class=\"right floated eight wide column here easy\" [@flyInOrOutRight] *ngIf=\"APPEARED[2]\">\n        <div class=\"ui piled segment\">\n        <div class=\"ui huge header\">Flexible</div>\n        <p>Soyez protégés en cas de sinistre, vos biens précieux restent à l’abri dans votre coffre-fort. </p>\n        <h2 class=\"ui huge header\">Sécurisez vos données</h2>\n        <p>Avec Assur+ les données contenues dans votre coffre-fort sont protégées par une méthode de chiffrement.\n        Vos données personnelles ne sont jamais transmises à un tiers sans votre accord préalable</p>\n\n      </div>\n        </div>\n    </div>\n  </div>\n</div>\n"

/***/ })

},[1091]);
//# sourceMappingURL=main.bundle.js.map