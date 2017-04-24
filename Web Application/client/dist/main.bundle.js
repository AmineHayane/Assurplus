webpackJsonp([1,5],{

/***/ 1116:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(549);


/***/ }),

/***/ 1123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__article_model__ = __webpack_require__(1124);
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
        template: __webpack_require__(1126),
        styles: [__webpack_require__(1125)],
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

/***/ 1124:
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

/***/ 1125:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1126:
/***/ (function(module, exports) {

module.exports = "  <div (mouseenter)=\"scaleIn()\" (mouseleave)=\"scaleOut()\" class=\"twelve wide column center aligned votes\"  [@flyInOut] [@scaleOut]=\"scaled\">\r\n    <div class=\"ui statistic\">\r\n      <div class=\"value\">\r\n        {{article.votes}}\r\n      </div>\r\n\r\n      <div class=\"label\">\r\n        Points\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"twelve wide column\">\r\n    <a class=\"ui large header\" href=\"{{article.link}}\">\r\n      {{article.title}}\r\n    </a>\r\n    <div class=\"meta\">({{article.domain()}})</div>\r\n    <ul class=\"ui big horizontal list voters\">\r\n      <li class=\"item\">\r\n        <a href (click)=\"voteUp()\">\r\n          <i class=\"arrow up icon\"></i>\r\n          upvote\r\n        </a>\r\n      </li>\r\n\r\n      <li class=\"item\">\r\n        <a href (click)=\"voteDown()\">\r\n          <i class=\"arrow down icon\"></i>\r\n          downvote\r\n        </a>\r\n      </li>\r\n    </ul>\r\n\r\n  </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(293);
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

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enterleave_animation__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scale_animation__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flyInOrOut__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carousel_animation__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fadeInOut__ = __webpack_require__(710);
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

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uploads_service__ = __webpack_require__(456);
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
        template: __webpack_require__(849),
        styles: [__webpack_require__(780)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__uploads_service__["a" /* UploadsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__uploads_service__["a" /* UploadsService */]) === "function" && _a || Object])
], FileuploadComponent);

var _a;
//# sourceMappingURL=fileupload.component.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(46);
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

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(461);
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
        template: __webpack_require__(854),
        styles: [__webpack_require__(785)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 461:
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

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(178);
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
        template: __webpack_require__(857),
        styles: [__webpack_require__(788)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* Router */]) === "function" && _b || Object])
], SignupComponent);

var _a, _b;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_animations__ = __webpack_require__(453);
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
        template: __webpack_require__(859),
        styles: [__webpack_require__(790)],
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

/***/ 548:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 548;


/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(722);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 708:
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

/***/ 709:
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

/***/ 710:
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

/***/ 711:
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

/***/ 712:
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

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(178);
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
        template: __webpack_require__(846),
        styles: [__webpack_require__(777)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__article_article_component__ = __webpack_require__(1123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs__ = __webpack_require__(793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__testngsem_testngsem_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_trackscroll_directive__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__carousel_carousel_component__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_page_scroll_ng2_page_scroll__ = __webpack_require__(798);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_responsive__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_responsive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_responsive__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__signup_signup_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_authentication_service__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_router__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__routes_app_routing__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__signup_signup_service__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__login_login_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_file_upload_ng2_file_upload__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_ng2_file_upload_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__fileupload_fileupload_component__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_semantic_ui__ = __webpack_require__(841);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__fileupload_uploads_service__ = __webpack_require__(456);
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

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_animations__ = __webpack_require__(453);
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
        template: __webpack_require__(847),
        styles: [__webpack_require__(778)],
        animations: [__WEBPACK_IMPORTED_MODULE_1__animations_animations__["a" /* Animations */].carousel, __WEBPACK_IMPORTED_MODULE_1__animations_animations__["a" /* Animations */].scale(1.2)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _a || Object])
], CarouselComponent);

var _a;
//# sourceMappingURL=carousel.component.js.map

/***/ }),

/***/ 717:
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

/***/ 718:
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
        template: __webpack_require__(850),
        styles: [__webpack_require__(781)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], FooterComponent);

var _a;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signup_signup_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__testngsem_testngsem_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fileupload_fileupload_component__ = __webpack_require__(455);
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

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(46);
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

/***/ 722:
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

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".section_before_footer{\r\n  height : 200px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.example-icon {\r\n  padding: 0 14px;\r\n}\r\n\r\n.example-spacer {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n.ui.top.fixed.menu {\r\n  -webkit-transition: all 0.8s;\r\n  transition: all 0.8s;\r\n  -webkit-transition-timing-function: ease-in;\r\n          transition-timing-function: ease-in;\r\n}\r\n\r\na:hover {\r\n  color : red;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 778:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "app-carousel {\r\n\tdisplay: block ;\r\n}\r\n\r\na {\r\n\tcolor: #7e8890 ;\r\n\tcursor: pointer ;\r\n\ttext-decoration: none ;\r\n\t-ms-user-select: none ;\r\n\t    user-select: none ;\r\n\t\t-moz-user-select: none ;\r\n\t\t-webkit-user-select: none ;\r\n}\r\n\r\na:hover{\r\n  color : #333c4e;\r\n}\r\n\r\ndiv.container {\r\n\theight: 220px ;\r\n\tmargin: 20px 0px 20px 0px ;\r\n\tposition: relative ;\r\n}\r\n\r\ndiv.friend {\r\n\tbackground-color: #FAFAFA ;\r\n\tborder: 1px solid #CCCCCC ;\r\n\tborder-radius: 6px ;\r\n\theight: 220px ;\r\n\tleft: 0px ;\r\n\tposition: absolute ;\r\n\ttext-align: center ;\r\n\tpadding-top: 20px;\r\n\twidth: 100% ;\r\n}\r\n\r\ndiv.friend .sub.header {\r\n  margin-top : 15px;\r\n}\r\n\r\np.controls {\r\n\ttext-align: center ;\r\n\twidth: 350px ;\r\n}\r\n\r\n.test1{\r\n}\r\n\r\n.test2{\r\n}\r\n\r\n.test3{\r\n\r\n}\r\n\r\n.test1 i{\r\n  position: absolute;\r\n  right : -5px;\r\n  top : 100px;\r\n}\r\n\r\n.test3 i {\r\n  position: absolute;\r\n  left: 0;\r\n  top : 100px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 780:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".ui.container{\r\n  margin-top: 100px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 781:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".ui.segment {\r\n  box-shadow: -5px -5px 5px #008080;\r\n  -webkit-transition: all 2s;\r\n  transition: all 2s;\r\n  -webkit-transition-timing-function: ease-in;\r\n          transition-timing-function: ease-in;\r\n}\r\n\r\n.heightmodif {\r\n  height : 300px;\r\n}\r\n\r\n.get_started {\r\n  margin: auto;\r\n}\r\n\r\n.get_started:hover {\r\n  color : purple;\r\n}\r\n\r\nbody {\r\n  height : 95px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 785:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 788:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".centered-block {\r\n  margin-top:200px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 790:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".header-img-container {\r\n  height : 600px;\r\n  width : 100%;\r\n  margin:0 auto;\r\n  padding:0;\r\n\r\n}\r\n\r\n.header-img-container h1 {\r\n padding-top : 0px;\r\n}\r\n\r\n.header-img-container img {\r\n padding-top : 175px;\r\n}\r\n\r\n.header-img-container h1 .library{\r\n font-size: 1.3em;\r\n}\r\n\r\n.header-img-container h1 .tagline{\r\n font-size: 1.1em;\r\n  font-weight: normal;\r\n}\r\n\r\n.get_started {\r\n  margin-top : 90px;\r\n  color : white;\r\n}\r\n\r\n.get_started:hover {\r\n  color : purple;\r\n}\r\n\r\n#here{\r\n  height:50px;\r\n}\r\n.content_section{\r\n  padding-top: 50px;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.content_section .ui.huge.header {\r\n  margin-top : 10px;\r\n}\r\n\r\n.content_section2{\r\n  padding-top: 50px;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.content_section2 .ui.huge.header {\r\n  margin-top : 10px;\r\n}\r\n\r\n.bosch {\r\n  box-shadow: 5px 5px 12px #555;\r\n}\r\n\r\n.easy {\r\n  position : relative;\r\n}\r\n\r\n.easy p,.list {\r\n  color : #7e8890;\r\n  font-style: normal;\r\n  -webkit-font-variant-ligatures: normal;\r\n          font-variant-ligatures: normal;\r\n  font-variant-caps: normal;\r\n  font-variant-numeric: normal;\r\n  font-weight: 400;\r\n  font-stretch: normal;\r\n  font-size: 15px;\r\n  font-family: \"Open Sans\", open-sans, sans-serif;\r\n}\r\n\r\n.easy .huge.header{\r\n  color : #333c4e;\r\n  font-style: normal;\r\n  -webkit-font-variant-ligatures: normal;\r\n          font-variant-ligatures: normal;\r\n  font-variant-caps: normal;\r\n  font-variant-numeric: normal;\r\n  font-weight: 400;\r\n  font-stretch: normal;\r\n  font-size: 30px;\r\n  line-height: 52px;\r\n  font-family: \"Open Sans\", open-sans, sans-serif;\r\n}\r\n\r\n.easy .bulleted.list {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.ui.info.message {\r\n  margin-top : 50px;\r\n  margin-bottom : 40px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 846:
/***/ (function(module, exports) {

module.exports = " <div class=\"ui right vertical sidebar inverted menu\">\r\n    <a class=\"item\">\r\n      1\r\n    </a>\r\n    <a class=\"item\">\r\n      2\r\n    </a>\r\n    <a class=\"item\">\r\n      3\r\n    </a>\r\n  </div>\r\n\r\n  <div class=\"pusher\">\r\n    <div tracking-scroll (scrolled)=\"onScroll($event.value, 50)\" class=\"ui top fixed menu secondary \" [ngClass]= \"{'five item' : isScrolled_50}\">\r\n\r\n    <a href=\"/\" class=\"item active\">\r\n      <img class=\"ui tiny image\" src=\"./assets/images/brand_logo.png\">\r\n    </a>\r\n    <a *hideItSizes=\"{min:0,max:500}\" class=\"item\">\r\n      <i class=\"help circle outline large icon\"></i>\r\n      Comment ça marche\r\n    </a>\r\n    <a routerLink=\"/fileupload\" *hideItSizes=\"{min:0,max:500}\" class=\"item\">\r\n      FAQ\r\n    </a>\r\n    <a *hideItSizes=\"{min:0,max:500}\" class=\"item\">\r\n      Contact\r\n    </a>\r\n\r\n    <div class=\"right menu\">\r\n      <div *ngIf=\"!user && !isScrolled_50\" class=\"item\">\r\n        <a (click)=\"toggleLogin()\" *hideItSizes=\"{min:0,max:768}\" class=\"item\">\r\n        Se connecter\r\n      </a>\r\n      </div>\r\n\r\n      <div *ngIf=\"user && !isScrolled_50\" class=\"item\">\r\n        <a *hideItSizes=\"{min:0,max:768}\" class=\"ui small basic button teal\">\r\n        <i class=\"icon user\"></i>\r\n          {{user.user_mail}}\r\n      </a>\r\n      </div>\r\n\r\n      <div *hideItSizes=\"{min:0,max:768}\"  class=\"item\">\r\n          <a routerLink=\"/signup\" *ngIf=\"!user && !isScrolled_50\" class=\"ui small button teal\" >S'inscrire</a>\r\n          <a  (click)=\"logout()\" *ngIf=\"user && !isScrolled_50\" class=\"ui small button teal\" >Deconnexion</a>\r\n      </div>\r\n      <a *showItSizes=\"{min:0,max:768}\" (click)=\"toggleSidebar()\" class=\"item\"><i class=\"icon sidebar\"></i> </a>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"ui main \">\r\n\r\n    <router-outlet></router-outlet>\r\n    <p *ngIf=\"!user\">Not logged in</p>\r\n    <p>{{message}}</p>\r\n  </div>\r\n\r\n     <!--<div class=\"section_before_footer\">\r\n\r\n     </div>-->\r\n\r\n    <div class=\"ui page dimmer\">\r\n      <div class=\"content ui text container\">\r\n        <div class=\"center\">\r\n          <app-login (notify)=\"onNotify($event)\"></app-login>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui container fluid\">\r\n      <app-footer></app-footer>\r\n    </div>\r\n\r\n  </div>\r\n"

/***/ }),

/***/ 847:
/***/ (function(module, exports) {

module.exports = "<div class=\"container ui grid\">\n          <div class=\"column test1\">\n            <a (click)=\"showPrevFriend()\">\n              <i [@scaleOut]=\"SCALED[0]\" (mouseenter)=\"scaleIn(0)\" (mouseleave)=\"scaleOut(0)\" class=\"big icon chevron left\"></i></a>\n          </div>\n\n  <div class=\"fourteen wide column test2\">\n    <template ngFor let-friend [ngForOf]=\"[ selectedFriend ]\">\n                <div [@friendAnimation]=\"orientation\" class=\"friend\">\n                  <h2 class=\"ui icon header\">\n                    <i class=\"{{friend.img}} icon\"></i>\n                    <div class=\"content\">\n                      {{friend.title}}\n                      <div class=\"sub header\">{{friend.description}}</div>\n                    </div>\n                  </h2>\n                </div>\n            </template>\n  </div>\n\n          <div class=\"column test3\">\n            <a (click)=\"showNextFriend()\">\n              <i [@scaleOut]=\"SCALED[1]\" (mouseenter)=\"scaleIn(1)\" (mouseleave)=\"scaleOut(1)\" class=\"big icon chevron right\"></i></a>\n          </div>\n\n</div>\n\n\n"

/***/ }),

/***/ 849:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui container\">\r\n  <div class=\"ui inverted segment\">\r\n    <h2>FileUpload Component</h2>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"ui container\">\r\n  <div class=\"ui grid\">\r\n    <div class=\"row\">\r\n      <div class=\"five wide column\">\r\n        <form class=\"ui form\">\r\n          <div class=\"field\">\r\n            <label>Multiple Files Upload</label>\r\n            <input type=\"file\" name=\"multiple\" ng2FileSelect [uploader]=\"uploader\" multiple >\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n      <div class=\"eleven wide column\">\r\n        <h3>File Upload with Angular 2 and Node</h3>\r\n        Queue length: {{ uploader?.queue?.length }}\r\n\r\n        <table class=\"ui basic table\">\r\n          <thead>\r\n            <tr>\r\n              <th>Name</th>\r\n              <th>Size</th>\r\n              <th>Progress</th>\r\n              <th>Status</th>\r\n              <th>Actions</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let item of uploader.queue\">\r\n              <td><strong>{{ item.file.name }}</strong></td>\r\n              <td nowrap>{{ item.file.size/1024/1024 | number:'.2' }} MB</td>\r\n              <td>\r\n                <sui-progress [value]=\"item.progress\" [progress]=\"false\">\r\n                </sui-progress>\r\n              </td>\r\n              <td>\r\n                <span *ngIf=\"item.isSuccess\"><i class=\"checkmark icon\"></i></span>\r\n                <span *ngIf=\"item.isCancel\"><i class=\"minus circle icon\"></i></span>\r\n                <span *ngIf=\"item.isError\"><i class=\"remove icon\"></i></span>\r\n              </td>\r\n              <td nowrap>\r\n                <button type=\"button\" class=\"mini ui green button\"\r\n                        (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\r\n                  <i class=\"upload icon\"></i> Upload\r\n                </button>\r\n                <button type=\"button\" class=\"mini ui orange button\"\r\n                (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\r\n                  <i class=\"ben icon\"></i> Cancel\r\n                </button>\r\n                <button type=\"button\" class=\"mini ui red button\" (click)=\"item.remove()\" >\r\n                  <i class=\"trash icon\"></i> Remove\r\n                </button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n        <div>\r\n          <div>Queue progress:\r\n            <sui-progress [value]=\"uploader.progress\" [progress]=\"false\">\r\n            </sui-progress>\r\n          </div>\r\n          <button type=\"button\" class=\"ui green button\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\r\n            <i class=\"upload icon\"></i> Upload all\r\n          </button>\r\n          <button type=\"button\" class=\"ui orange button\" (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\r\n            <i class=\"ban icon\"></i> Cancel all\r\n          </button>\r\n          <button type=\"button\" class=\"ui red button\" (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\r\n            <i class=\"trash icon\"></i> Remove all\r\n          </button>\r\n        </div>\r\n\r\n        <div *ngFor=\"let upload of uploads\">\r\n          <img src=\"./uploads/{{upload.url}}\">\r\n          <button (click)=\"deleteUpload(upload.id)\" type=\"button\" class=\"ui red button\">\r\n            <i class=\"trash icon\"></i> Delete\r\n          </button>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 850:
/***/ (function(module, exports) {

module.exports = "<body tracking-scroll (scrolled)=\"onScroll($event.value, 2141)\">\r\n\r\n <div class=\"ui bottom sidebar inverted\">\r\n    <div class=\"ui segment teal heightmodif\">\r\n      <div class=\"ui grid\">\r\n        <div class=\" centered row\">\r\n          <a (click)=\"closeSidebar()\"><i class=\" large chevron down link icon get_started\"></i></a>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"four wide column\">\r\n            <img class=\"ui tiny image\" src=\"assets/images/brand_logo.png\">\r\n          </div>\r\n\r\n          <div class=\"four wide column\">\r\n            <h4>Contact</h4>\r\n            <div class=\"ui link list\">\r\n              <div class=\"active item\">Home</div>\r\n              <a class=\"item\">About</a>\r\n              <a class=\"item\">Jobs</a>\r\n              <a class=\"item\">Team</a>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"four wide column\">\r\n            <h4>Contact</h4>\r\n            <div class=\"ui link list\">\r\n              <div class=\"active item\">Home</div>\r\n              <a class=\"item\">About</a>\r\n              <a class=\"item\">Jobs</a>\r\n              <a class=\"item\">Team</a>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"four wide column\">\r\n            <h4>Contact</h4>\r\n            <div class=\"ui link list\">\r\n              <div class=\"active item\">Home</div>\r\n              <a class=\"item\">About</a>\r\n              <a class=\"item\">Jobs</a>\r\n              <a class=\"item\">Team</a>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"pusher\">\r\n    <div class=\"ui centered grid\">\r\n      <div class=\"row\">\r\n        <a (click)=\"openSidebar()\">\r\n          <h5 class=\"ui icon header\">\r\n            <i class=\" large chevron up link icon get_started\"></i>\r\n            <div class=\"content\">\r\n              Disclaimer\r\n            </div>\r\n          </h5>\r\n\r\n        </a>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</body>\r\n\r\n"

/***/ }),

/***/ 854:
/***/ (function(module, exports) {

module.exports = "  <form #loginForm (ngSubmit)=\"loginUser(user);loginForm.reset()\" class=\"ui inverted form\">\r\n\r\n    <div class=\" field\">\r\n      <input type=\"email\" id=\"email\" [(ngModel)]=\"user.user_mail\" name=\"email\" placeholder=\"Email\" required>\r\n    </div>\r\n\r\n    <div class=\" field\">\r\n      <input type=\"password\" id=\"password\" [(ngModel)]=\"user.user_password\" placeholder=\"Password\" name=\"password\" required>\r\n    </div>\r\n\r\n    <button type=\"submit\" class=\"ui button teal\">Login</button>\r\n  </form>\r\n\r\n  <div *ngIf=\"message\" class=\"ui warning message\">\r\n    <i class=\"warning icon\"></i>\r\n    {{message}}\r\n  </div>\r\n"

/***/ }),

/***/ 857:
/***/ (function(module, exports) {

module.exports = "<div class=\"centered-block\">\r\n    <h2>Register</h2>\r\n    <form (ngSubmit)=\"registerUser(user)\">\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"email\">Email</label>\r\n        <input type=\"email\" id=\"email\" [(ngModel)]=\"user.user_mail\" name=\"email\" required>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"email\">Password</label>\r\n        <input type=\"password\" id=\"password\" [(ngModel)]=\"user.user_password\" name=\"password\" required>\r\n      </div>\r\n\r\n      <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n    </form>\r\n\r\n    <p>{{message}}</p>\r\n  </div>\r\n"

/***/ }),

/***/ 859:
/***/ (function(module, exports) {

module.exports = "  <div class=\"header-img-container\" [@changeBngColor]=\"bngChanged\" [@changeBngColorr]>\r\n    <div class=\"ui centered grid\">\r\n      <div class=\"row\">\r\n        <div class=\"ui container\">\r\n          <img class=\"ui centered image\" src=\"./assets/images/brand_logo_3.png\" >\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <h1 class=\"ui inverted header\" >\r\n          <span class=\"tagline\">L'assurance sur-mesure à portée de main</span>\r\n        </h1>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <a pageScroll href=\"#here\"><i class=\" large chevron down icon get_started\"></i> </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"here\"></div>\r\n\r\n<div tracking-scroll (scrolled)=\"onScrolll($event.value, 300, 0)\" class=\"content_section section_top\">\r\n  <div class=\"ui stackable grid container\">\r\n    <div class=\"three column row\">\r\n      <div class=\"left floated column\">\r\n        <img class=\" ui image rounded bosch\" src=\"./assets/images/bosch.jpg\"\r\n             [@scaleOut]=\"SCALED[0]\" (mouseenter)=\"scaleIn(0)\" (mouseleave)=\"scaleOut(0)\" [@fadeInOut] *ngIf=\"APPEARED[0]\">\r\n      </div>\r\n      <div class=\"right floated eight wide column easy\"  [@flyInOrOutRight] *ngIf=\"APPEARED[0]\">\r\n        <div class=\"ui piled segment\">\r\n        <div class=\"ui huge header\">Facile</div>\r\n        <p>Avec Assur+ constituez en un clin d’œil votre coffre-fort de biens assurables.\r\n          Choisissez, parmi les nombreux modes d’ajout, celui qui vous convient le mieux.\r\n          Découvrez le mode photo, basé sur un algorithme de reconnaissance d’images,\r\n          qui vous fera gagner un temps colossal dans la constitution de votre panier de biens.</p>\r\n        <h2 class=\"ui huge header\">Avec Assur+, fini la paperasse !</h2>\r\n        <div class=\"ui bulleted list\">\r\n          <div class=\"item\">Votre bien est automatiquement identifié parmi de nombreux produits.</div>\r\n          <div class=\"item\">Sa valeur est immédiatement estimée.</div>\r\n          <div class=\"item\">Signez votre contrat d’assurance en un clic.</div>\r\n        </div>\r\n             <app-carousel></app-carousel>\r\n        <div class=\"ui info message\">\r\n            <div class=\"header\">\r\n              Information :\r\n            </div>\r\n            <ul class=\"list\">\r\n              Vous pourrez être en mesure d'ajouter les informations qui vous semblent pertinentes après avoir enregistré votre produit.\r\n            </ul>\r\n          </div>\r\n      </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"ui divider\"></div>\r\n\r\n<div tracking-scroll (scrolled)=\"onScrolll($event.value, 1100, 1)\" class=\"content_section2\" >\r\n  <div class=\"ui stackable grid container\">\r\n    <div class=\"three column row\">\r\n\r\n\r\n      <div class=\"left floated eight wide column here easy\" [@flyInOrOutLeft] *ngIf=\"APPEARED[1]\">\r\n        <div class=\"ui piled segment\">\r\n        <div class=\"ui huge header\">Sécurisé</div>\r\n        <p>Soyez protégés en cas de sinistre, vos biens précieux restent à l’abri dans votre coffre-fort. </p>\r\n        <h2 class=\"ui huge header\">Sécurisez vos données</h2>\r\n        <p>Avec Assur+ les données contenues dans votre coffre-fort sont protégées par une méthode de chiffrement.\r\n        Vos données personnelles ne sont jamais transmises à un tiers sans votre accord préalable</p>\r\n\r\n      </div>\r\n        </div>\r\n\r\n      <div class=\"right floated column\">\r\n        <img class=\" ui image rounded bosch\" src=\"./assets/images/bosch.jpg\"\r\n        [@scaleOut]=\"SCALED[1]\" (mouseenter)=\"scaleIn(1)\" (mouseleave)=\"scaleOut(1)\"\r\n        [@fadeInOut] *ngIf=\"APPEARED[1]\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"ui divider\"></div>\r\n\r\n<div tracking-scroll (scrolled)=\"onScrolll($event.value, 1570, 2)\" class=\"content_section\">\r\n  <div class=\"ui stackable grid container\">\r\n    <div class=\"three column row\">\r\n      <div class=\"left floated column\">\r\n        <img class=\" ui image rounded bosch\" src=\"./assets/images/bosch.jpg\"\r\n        [@scaleOut]=\"SCALED[2]\" (mouseenter)=\"scaleIn(2)\" (mouseleave)=\"scaleOut(2)\"\r\n        [@fadeInOut] *ngIf=\"APPEARED[2]\">\r\n      </div>\r\n     <div class=\"right floated eight wide column here easy\" [@flyInOrOutRight] *ngIf=\"APPEARED[2]\">\r\n        <div class=\"ui piled segment\">\r\n        <div class=\"ui huge header\">Flexible</div>\r\n        <p>Soyez protégés en cas de sinistre, vos biens précieux restent à l’abri dans votre coffre-fort. </p>\r\n        <h2 class=\"ui huge header\">Sécurisez vos données</h2>\r\n        <p>Avec Assur+ les données contenues dans votre coffre-fort sont protégées par une méthode de chiffrement.\r\n        Vos données personnelles ne sont jamais transmises à un tiers sans votre accord préalable</p>\r\n\r\n      </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ })

},[1116]);
//# sourceMappingURL=main.bundle.js.map