webpackJsonp([1,5],{

/***/ 1114:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Index2.737bde6837673d402322.png";

/***/ }),

/***/ 1116:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(549);


/***/ }),

/***/ 177:
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
Animations.modal = __WEBPACK_IMPORTED_MODULE_1__scale_animation__["b" /* modal */];
Animations.flyInOrOutLeft = __WEBPACK_IMPORTED_MODULE_2__flyInOrOut__["a" /* flyInOrOutLeft */];
Animations.flyInOrOutRight = __WEBPACK_IMPORTED_MODULE_2__flyInOrOut__["b" /* flyInOrOutRight */];
Animations.carousel = __WEBPACK_IMPORTED_MODULE_3__carousel_animation__["a" /* carousel */];
Animations.fadeInOut = __WEBPACK_IMPORTED_MODULE_4__fadeInOut__["a" /* fadeInOut */];
//# sourceMappingURL=animations.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonserviceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MonserviceService = (function () {
    /* Url du serveur*/
    function MonserviceService(http) {
        this.http = http;
        this.url = "coffrefort/data.json";
    }
    MonserviceService.prototype.getData = function () {
        return this.http.get('/api/objets')
            .map(function (res) { return res.json(); });
    };
    MonserviceService.prototype.AjoutObjet = function (newObject) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/ajoutobjet', JSON.stringify(newObject), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MonserviceService.prototype.deleteObject = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete('/api/supprimerobjet/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MonserviceService.prototype.checkIdentity = function (infoConnexion) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/connexion', JSON.stringify(infoConnexion), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MonserviceService.prototype.calculPatrimoine = function () {
        return this.http.get('/api/calculpatrimoine')
            .map(function (res) { return res.json(); });
    };
    return MonserviceService;
}());
MonserviceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], MonserviceService);

var _a;
//# sourceMappingURL=monservice.service.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(296);
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

/***/ 274:
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
        return this.http.get('/api/objets', { headers: headers }).map(function (res) { return res.json(); });
    };
    UploadsService.prototype.addUpload = function (newUpload) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/ajoutobjet', JSON.stringify(newUpload), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UploadsService.prototype.deleteUpload = function (uploadId) {
        return this.http.delete('/api/supprimerobjet/' + uploadId).map(function (res) { return res.json(); });
    };
    UploadsService.prototype.getPrediction = function (newPrediction) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/prediction', JSON.stringify(newPrediction), { headers: headers }).map(function (res) { return res.json(); });
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

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__monservice_service__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations_animations__ = __webpack_require__(177);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoffrefortComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CoffrefortComponent = (function () {
    function CoffrefortComponent(serviceBiens, elRef, http) {
        this.serviceBiens = serviceBiens;
        this.elRef = elRef;
        this.http = http;
        this.state = 'inactive';
        this.biens = [];
        this.statebis = 'inactive';
    }
    CoffrefortComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Retrieve posts from the API
        this.serviceBiens.getData().subscribe(function (biens) {
            _this.biens = biens;
            _this.calculPatrimoine();
            console.log(_this.biens);
        });
    };
    CoffrefortComponent.prototype.ngAfterViewChecked = function () {
        jQuery(this.elRef.nativeElement).find('.special.cards .image').dimmer({ on: 'hover' });
    };
    CoffrefortComponent.prototype.calculPatrimoine = function () {
        this.patrimoine = 0;
        for (var _i = 0, _a = this.biens; _i < _a.length; _i++) {
            var bien = _a[_i];
            this.patrimoine = this.patrimoine + Number(bien.prixachat);
        }
        console.log('patrimoine', this.patrimoine);
    };
    CoffrefortComponent.prototype.toggleMove = function () { this.state = (this.state === 'inactive' ? 'active' : 'inactive'); };
    CoffrefortComponent.prototype.closeActions = function () { this.state = (this.state === 'active' ? 'inactive' : 'inactive'); };
    CoffrefortComponent.prototype.deleteObject = function (id) {
        this.serviceBiens.deleteObject(id).subscribe();
    };
    CoffrefortComponent.prototype.deleteOnView = function (i) {
        this.biens.splice(i, 1);
    };
    CoffrefortComponent.prototype.showModal = function () {
        jQuery(this.elRef.nativeElement).find('.ui.page.dimmer.dos')
            .dimmer('setting', { transition: 'fade' }).dimmer('show');
        this.statebis = 'active';
    };
    return CoffrefortComponent;
}());
CoffrefortComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-coffrefort',
        template: __webpack_require__(848),
        styles: [__webpack_require__(779)],
        animations: [__WEBPACK_IMPORTED_MODULE_3__animations_animations__["a" /* Animations */].modal(0.8, 1),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('focusInput', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({})),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    transform: "rotate(45deg)",
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('active => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms ease-out')),
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('showAction1', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    visibility: "hidden",
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({})),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('0ms 150ms')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('active => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('0ms 0ms'))
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('showAction2', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    visibility: "hidden",
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    visibility: "visible",
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('0s 300ms')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('active => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('0s 0ms'))
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('showAction3', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    visibility: "hidden",
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    visibility: "visible",
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('0s 450ms')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('active => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('0s 0ms'))
            ]),
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__monservice_service__["a" /* MonserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__monservice_service__["a" /* MonserviceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _c || Object])
], CoffrefortComponent);

var _a, _b, _c;
//# sourceMappingURL=coffrefort.component.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uploads_service__ = __webpack_require__(274);
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

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__monservice_service__ = __webpack_require__(178);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormulaireInscriptionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormulaireInscriptionComponent = (function () {
    function FormulaireInscriptionComponent(userService) {
        this.userService = userService;
        this.submitted = false;
    }
    FormulaireInscriptionComponent.prototype.ngOnInit = function () {
    };
    FormulaireInscriptionComponent.prototype.comparePasswords = function () {
        if (this.password != this.passwordbis) {
            this.samePasswords = true;
        }
        else {
            this.samePasswords = false;
        }
    };
    FormulaireInscriptionComponent.prototype.onSubmit = function (data) {
        if (this.samePasswords === false) {
            this.submitted = true;
            this.data = JSON.stringify(data);
            console.log(this.data);
            var dataClient = JSON.parse(this.data);
            console.log(dataClient.ClientEmail);
            console.log(dataClient.ClientMotDePasse);
            var newUser = this.data;
        }
    };
    return FormulaireInscriptionComponent;
}());
FormulaireInscriptionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-formulaire-inscription',
        template: __webpack_require__(851),
        styles: [__webpack_require__(782)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__monservice_service__["a" /* MonserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__monservice_service__["a" /* MonserviceService */]) === "function" && _a || Object])
], FormulaireInscriptionComponent);

var _a;
//# sourceMappingURL=formulaire-inscription.component.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationsProduitComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InformationsProduitComponent = (function () {
    function InformationsProduitComponent(el) {
        this.el = el;
        this.visibility = false;
    }
    InformationsProduitComponent.prototype.ngOnInit = function () {
    };
    return InformationsProduitComponent;
}());
InformationsProduitComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-informations-produit',
        template: __webpack_require__(852),
        styles: [__webpack_require__(783)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], InformationsProduitComponent);

var _a;
//# sourceMappingURL=informations-produit.component.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JustificatifsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JustificatifsComponent = (function () {
    function JustificatifsComponent() {
    }
    JustificatifsComponent.prototype.ngOnInit = function () {
    };
    return JustificatifsComponent;
}());
JustificatifsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-justificatifs',
        template: __webpack_require__(853),
        styles: [__webpack_require__(784)]
    }),
    __metadata("design:paramtypes", [])
], JustificatifsComponent);

//# sourceMappingURL=justificatifs.component.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(462);
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

/***/ 462:
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

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoncompteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MoncompteComponent = (function () {
    function MoncompteComponent(elRef) {
        this.elRef = elRef;
    }
    MoncompteComponent.prototype.ngOnInit = function () {
        jQuery(this.elRef.nativeElement).find('.special.cards .image').dimmer({
            on: 'hover'
        });
    };
    return MoncompteComponent;
}());
MoncompteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-moncompte',
        template: __webpack_require__(855),
        styles: [__webpack_require__(786)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], MoncompteComponent);

var _a;
//# sourceMappingURL=moncompte.component.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objet__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fileupload_uploads_service__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animations_animations__ = __webpack_require__(177);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProduitComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProduitComponent = (function () {
    function ProduitComponent(uploadsService, router) {
        this.uploadsService = uploadsService;
        this.router = router;
        this.myObjet = new __WEBPACK_IMPORTED_MODULE_1__objet__["a" /* objet */]();
        this.choixPhoto = true;
        this.fileUploadWindow = false;
        this.recognitionButton = false;
        this.uploads = [];
        this.predicting = false;
        this.predicted = false;
        this.predictionAnswered = false;
        this.predictionAccepted = false;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__["FileUploader"]({ url: 'http://localhost:8000/upload' });
    }
    ProduitComponent.prototype.ngOnInit = function () {
        /*this.getSubscribeUploads();*/
        var _this = this;
        this.uploader.onCompleteAll = function () {
            console.log('All uploads completed');
        };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            _this.myObjet.imageurl = item.file.name;
            _this.predicting = true;
            var newPrediction = {
                imgName: item.file.name
            };
            console.log(newPrediction);
            _this.recognitionButton = true;
            _this.uploadsService.getPrediction(newPrediction).subscribe(function (res) {
                console.log(res);
                _this.itemPrediction = res['prediction'];
                console.log(_this.itemPrediction);
                if (res['prediction'] != undefined) {
                    _this.predicted = true;
                }
            });
            /*this.addUpload(item.file.name);*/
        };
    };
    ProduitComponent.prototype.acceptPrediction = function () {
        this.predictionAnswered = true;
        this.predictionAccepted = true;
        this.myObjet.description = this.itemPrediction;
    };
    ProduitComponent.prototype.refusePrediction = function () {
        this.predictionAnswered = true;
    };
    ProduitComponent.prototype.validateObject = function () {
        this.addUpload();
        this.router.navigateByUrl('/coffrefort');
    };
    ProduitComponent.prototype.addUpload = function () {
        var _this = this;
        var newUpload = {
            imageurl: this.myObjet.imageurl,
            prixachat: this.myObjet.prixachat,
            description: this.myObjet.description,
            dateachat: this.myObjet.dateachat,
        };
        this.uploadsService.addUpload(newUpload).subscribe(function (upload) {
            _this.uploads.push(upload);
            console.log(_this.uploads);
        });
    };
    ProduitComponent.prototype.deleteUpload = function (uploadId) {
        var uploads = this.uploads;
        this.uploadsService.deleteUpload(uploadId).subscribe(function () {
            for (var i = 0; i < uploads.length; i++) {
                if (uploads[i].id == uploadId) {
                    uploads.splice(i, 1);
                }
            }
        });
    };
    ProduitComponent.prototype.getSubscribeUploads = function () {
        var _this = this;
        this.uploads = [];
        this.uploadsService.getAllUploads().subscribe(function (uploads) {
            _this.uploads = uploads;
            console.log(uploads);
        });
    };
    ProduitComponent.prototype.changeChoixPhoto = function () {
        this.choixPhoto = (this.choixPhoto === true ? false : true);
    };
    ProduitComponent.prototype.switch = function () {
        this.fileUploadWindow = (this.fileUploadWindow === true ? false : true);
    };
    return ProduitComponent;
}());
ProduitComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-produit',
        template: __webpack_require__(856),
        styles: [__webpack_require__(787)],
        animations: [__WEBPACK_IMPORTED_MODULE_5__animations_animations__["a" /* Animations */].fadeInOut]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__fileupload_uploads_service__["a" /* UploadsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__fileupload_uploads_service__["a" /* UploadsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["e" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["e" /* Router */]) === "function" && _b || Object])
], ProduitComponent);

var _a, _b;
//# sourceMappingURL=produit.component.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(88);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__monservice_service__ = __webpack_require__(178);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableauDeBordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TableauDeBordComponent = (function () {
    function TableauDeBordComponent(serviceCalcul) {
        this.serviceCalcul = serviceCalcul;
    }
    TableauDeBordComponent.prototype.ngOnInit = function () {
        this.calculPatrimoine();
    };
    TableauDeBordComponent.prototype.calculPatrimoine = function () {
        var _this = this;
        this.serviceCalcul.calculPatrimoine().subscribe(function (patrimoine) {
            _this.patrimoine = patrimoine;
        });
    };
    return TableauDeBordComponent;
}());
TableauDeBordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tableau-de-bord',
        template: __webpack_require__(858),
        styles: [__webpack_require__(789)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__monservice_service__["a" /* MonserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__monservice_service__["a" /* MonserviceService */]) === "function" && _a || Object])
], TableauDeBordComponent);

var _a;
//# sourceMappingURL=tableau-de-bord.component.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_animations__ = __webpack_require__(177);
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
        jQuery(this.elref.nativeElement).find('.popup').popup();
    };
    return TestngsemComponent;
}());
TestngsemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-testngsem',
        template: __webpack_require__(859),
        styles: [__webpack_require__(790)],
        animations: [__WEBPACK_IMPORTED_MODULE_1__animations_animations__["a" /* Animations */].flyInOrOutLeft, __WEBPACK_IMPORTED_MODULE_1__animations_animations__["a" /* Animations */].flyInOrOutRight, __WEBPACK_IMPORTED_MODULE_1__animations_animations__["a" /* Animations */].scale(1, 1.1), __WEBPACK_IMPORTED_MODULE_1__animations_animations__["a" /* Animations */].fadeInOut,
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

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidationComponent = (function () {
    function ValidationComponent() {
    }
    ValidationComponent.prototype.ngOnInit = function () {
    };
    return ValidationComponent;
}());
ValidationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-validation',
        template: __webpack_require__(860),
        styles: [__webpack_require__(791)]
    }),
    __metadata("design:paramtypes", [])
], ValidationComponent);

//# sourceMappingURL=validation.component.js.map

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
/* harmony export (immutable) */ __webpack_exports__["b"] = modal;

function scale(degree_in, degree_out) {
    if (degree_in === void 0) { degree_in = 1; }
    if (degree_out === void 0) { degree_out = 1.2; }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('scaleOut', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'scale(' + degree_in + ')' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'scale(' + degree_out + ')' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('250ms ease-in')),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('active => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('250ms ease-out'))
    ]);
}
function modal(degree_in, degree_out) {
    if (degree_in === void 0) { degree_in = 0.8; }
    if (degree_out === void 0) { degree_out = 1; }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('modal', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'scale(' + degree_in + ')' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'scale(' + degree_out + ')' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('250ms ease-in')),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('active => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('250ms ease-out'))
    ]);
}
//# sourceMappingURL=scale.animation.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(88);
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
        this.title = 'Assur+';
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
        jQuery(this.elref.nativeElement).find('.ui.dropdown.item').dropdown({ on: 'hover', transition: 'drop' });
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
        jQuery(this.elref.nativeElement).find('.ui.page.dimmer.uno').dimmer('setting', { opacity: 1 })
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
    AppComponent.prototype.closeSidenav = function () {
        jQuery(this.elref.nativeElement).find('.ui.sidebar.right').sidebar('setting', 'transition', 'overlay').sidebar('hide');
    };
    AppComponent.prototype.onScroll = function (event, menuChangePos) {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__(793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__testngsem_testngsem_component__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives_trackscroll_directive__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__carousel_carousel_component__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_page_scroll_ng2_page_scroll__ = __webpack_require__(798);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_responsive__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_responsive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_responsive__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__signup_signup_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_authentication_service__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_router__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__routes_app_routing__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__signup_signup_service__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__login_login_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_file_upload_ng2_file_upload__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_ng2_file_upload_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__fileupload_fileupload_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_semantic_ui__ = __webpack_require__(841);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__fileupload_uploads_service__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__directives_ma_directive_directive__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__coffrefort_coffrefort_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__moncompte_moncompte_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__formulaire_inscription_formulaire_inscription_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__tableau_de_bord_tableau_de_bord_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__produit_produit_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__informations_produit_informations_produit_component__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__validation_validation_component__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__monservice_service__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__justificatifs_justificatifs_component__ = __webpack_require__(460);
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
            __WEBPACK_IMPORTED_MODULE_7__testngsem_testngsem_component__["a" /* TestngsemComponent */],
            __WEBPACK_IMPORTED_MODULE_8__directives_trackscroll_directive__["a" /* TrackScrollDirective */],
            __WEBPACK_IMPORTED_MODULE_9__carousel_carousel_component__["a" /* CarouselComponent */],
            __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_18__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_19_ng2_file_upload_ng2_file_upload__["FileSelectDirective"],
            __WEBPACK_IMPORTED_MODULE_19_ng2_file_upload_ng2_file_upload__["FileDropDirective"],
            __WEBPACK_IMPORTED_MODULE_20__fileupload_fileupload_component__["a" /* FileuploadComponent */],
            __WEBPACK_IMPORTED_MODULE_23__directives_ma_directive_directive__["a" /* MaDirectiveDirective */],
            __WEBPACK_IMPORTED_MODULE_24__coffrefort_coffrefort_component__["a" /* CoffrefortComponent */],
            __WEBPACK_IMPORTED_MODULE_25__moncompte_moncompte_component__["a" /* MoncompteComponent */],
            __WEBPACK_IMPORTED_MODULE_26__formulaire_inscription_formulaire_inscription_component__["a" /* FormulaireInscriptionComponent */],
            __WEBPACK_IMPORTED_MODULE_27__tableau_de_bord_tableau_de_bord_component__["a" /* TableauDeBordComponent */],
            __WEBPACK_IMPORTED_MODULE_28__produit_produit_component__["a" /* ProduitComponent */],
            __WEBPACK_IMPORTED_MODULE_29__informations_produit_informations_produit_component__["a" /* InformationsProduitComponent */],
            __WEBPACK_IMPORTED_MODULE_30__validation_validation_component__["a" /* ValidationComponent */],
            __WEBPACK_IMPORTED_MODULE_32__justificatifs_justificatifs_component__["a" /* JustificatifsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_10_ng2_page_scroll_ng2_page_scroll__["a" /* Ng2PageScrollModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12_ng2_responsive__["ResponsiveModule"],
            __WEBPACK_IMPORTED_MODULE_15__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_16__routes_app_routing__["a" /* ROUTES */]),
            __WEBPACK_IMPORTED_MODULE_21_ng2_semantic_ui__["a" /* SuiModule */],
            __WEBPACK_IMPORTED_MODULE_21_ng2_semantic_ui__["b" /* SuiProgressModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_14__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_17__signup_signup_service__["a" /* SignupService */], __WEBPACK_IMPORTED_MODULE_22__fileupload_uploads_service__["a" /* UploadsService */], __WEBPACK_IMPORTED_MODULE_31__monservice_service__["a" /* MonserviceService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_animations__ = __webpack_require__(177);
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

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaDirectiveDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MaDirectiveDirective = (function () {
    function MaDirectiveDirective(el) {
        this.el = el;
    }
    MaDirectiveDirective.prototype.onMouseEnter = function () {
        this.highlight('black');
    };
    MaDirectiveDirective.prototype.onMouseOut = function () {
        this.highlight(null);
    };
    MaDirectiveDirective.prototype.highlight = function (color) {
        this.el.nativeElement.style.color = color;
    };
    return MaDirectiveDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MaDirectiveDirective.prototype, "onMouseEnter", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseout'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MaDirectiveDirective.prototype, "onMouseOut", null);
MaDirectiveDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[MaDirective]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], MaDirectiveDirective);

var _a;
//# sourceMappingURL=ma-directive.directive.js.map

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
    FooterComponent.prototype.onScroll = function (event) {
        var yLeftToGo = document.body.scrollHeight - (window.pageYOffset + window.innerHeight);
        console.log(yLeftToGo);
        /*if (yLeftToGo === 0) {
          this.openSidebar();
        } else {
          this.closeSidebar();
        }*/
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

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return objet; });
var objet = (function () {
    function objet() {
    }
    return objet;
}());

//# sourceMappingURL=objet.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signup_signup_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__testngsem_testngsem_component__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fileupload_fileupload_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__coffrefort_coffrefort_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__moncompte_moncompte_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__formulaire_inscription_formulaire_inscription_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tableau_de_bord_tableau_de_bord_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__produit_produit_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__informations_produit_informations_produit_component__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__justificatifs_justificatifs_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__validation_validation_component__ = __webpack_require__(468);
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
    },
    { path: 'coffrefort', component: __WEBPACK_IMPORTED_MODULE_4__coffrefort_coffrefort_component__["a" /* CoffrefortComponent */] },
    { path: 'moncompte', component: __WEBPACK_IMPORTED_MODULE_5__moncompte_moncompte_component__["a" /* MoncompteComponent */] },
    { path: 'inscription', component: __WEBPACK_IMPORTED_MODULE_6__formulaire_inscription_formulaire_inscription_component__["a" /* FormulaireInscriptionComponent */] },
    { path: 'board', component: __WEBPACK_IMPORTED_MODULE_7__tableau_de_bord_tableau_de_bord_component__["a" /* TableauDeBordComponent */] },
    { path: 'ajoutProduit', component: __WEBPACK_IMPORTED_MODULE_8__produit_produit_component__["a" /* ProduitComponent */] },
    { path: 'informationsProduit', component: __WEBPACK_IMPORTED_MODULE_9__informations_produit_informations_produit_component__["a" /* InformationsProduitComponent */] },
    { path: 'justificatifs', component: __WEBPACK_IMPORTED_MODULE_10__justificatifs_justificatifs_component__["a" /* JustificatifsComponent */] },
    { path: 'validationProduit', component: __WEBPACK_IMPORTED_MODULE_11__validation_validation_component__["a" /* ValidationComponent */] }
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
exports.push([module.i, ".section_before_footer{\r\n  height : 200px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.example-icon {\r\n  padding: 0 14px;\r\n}\r\n\r\n.example-spacer {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n.ui.top.fixed.menu {\r\n  -webkit-transition: all 0.8s;\r\n  transition: all 0.8s;\r\n  -webkit-transition-timing-function: ease-in;\r\n          transition-timing-function: ease-in;\r\n}\r\n\r\n.ui.dropdown a:hover {\r\n  text-decoration: none;\r\n}\r\n\r\n\r\n", ""]);

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

/***/ 779:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".ui.tabular.menu{\r\n  margin-top:68px;\r\n}\r\n\r\n.ui.icon.header{\r\n  margin-top:100px;\r\n}\r\n\r\nimg {\r\n    width:70px;\r\n}\r\n\r\n.boutonajout{\r\n    text-align: center;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.actionscoffre{\r\n\r\n    display:-webkit-box;\r\n\r\n    display:-ms-flexbox;\r\n\r\n    display:flex;\r\n    -webkit-box-pack: end;\r\n        -ms-flex-pack: end;\r\n            justify-content: flex-end;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.description{\r\n\r\n    margin-bottom: 14px;\r\n}\r\n\r\n.cards{\r\n    margin-top:10px;\r\n}\r\n\r\n.eltlist{\r\n\r\n    color:black;\r\n}\r\n\r\n.buttonAction{\r\n\r\n    position:fixed;\r\n    bottom: 30px;\r\n    right:30px;\r\n    z-index:10;\r\n}\r\n\r\n.Actions{\r\n\r\n    padding-top: 5px;\r\n}\r\n\r\n.actionsContainer{\r\n\r\n    position:fixed;\r\n    bottom: 90px;\r\n    right:34px;\r\n    z-index:10;\r\n\r\n}\r\n\r\n\r\n", ""]);

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
exports.push([module.i, ".ui.segment {\r\n  box-shadow: -5px -5px 5px #008080;\r\n  -webkit-transition: all 2s;\r\n  transition: all 2s;\r\n  -webkit-transition-timing-function: ease-in;\r\n          transition-timing-function: ease-in;\r\n}\r\n\r\n.heightmodif {\r\n  height : 200px;\r\n}\r\n\r\n.get_started {\r\n  margin: auto;\r\n}\r\n\r\n.get_started:hover {\r\n  color : purple;\r\n}\r\n\r\n.chevron.up {\r\n  margin-top:50px;\r\n}\r\n\r\nbody {\r\n  height : 95px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 782:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "\r\n.spacer{\r\n\r\n    height: 50px; \r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 783:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".spacer{\r\n\r\n    height: 50px; \r\n    \r\n}\r\n\r\n.section{\r\n\r\n    padding-top: 3px;\r\n}\r\n\r\n.sectionDisplay{\r\n\r\n    padding-top: 3px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 784:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "", ""]);

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

/***/ 786:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 787:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".spacer{\r\n    margin-top: 100px;\r\n}\r\n\r\n.label_photo{\r\n  margin-top:20px;\r\n}\r\n\r\n.add_photo_label{\r\n  margin-top: 20px;\r\n}\r\n\r\n.section{\r\n    padding-top: 3px;\r\n}\r\n\r\n.sectionDisplay{\r\n    padding-top: 3px;\r\n}\r\n\r\nh5{\r\n  color:black;\r\n}\r\n\r\n.button_next{\r\n  margin-top:20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 788:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".ui.text.container {\r\n  margin-top:150px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 789:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "\r\n.spacer{\r\n\r\n    height: 55px; \r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 790:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".header-img-container {\r\n  height : 600px;\r\n  width : 100%;\r\n  margin:0 auto;\r\n  padding:0;\r\n}\r\n\r\n.header-img-container h1 {\r\n padding-top : 0px;\r\n}\r\n\r\n.header-img-container img {\r\n padding-top : 175px;\r\n}\r\n\r\n.header-img-container h1 .library{\r\n font-size: 1.3em;\r\n}\r\n\r\n.header-img-container h1 .tagline{\r\n font-size: 1.1em;\r\n  font-weight: normal;\r\n}\r\n\r\n.get_started {\r\n  margin-top : 90px;\r\n  color : white;\r\n}\r\n\r\n.get_started:hover {\r\n  color : purple;\r\n}\r\n\r\n#here{\r\n  height:50px;\r\n}\r\n.content_section{\r\n  padding-top: 50px;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.content_section .ui.huge.header {\r\n  margin-top : 10px;\r\n}\r\n\r\n.content_section2{\r\n  padding-top: 50px;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.content_section2 .container{\r\n  margin-top:50px;\r\n}\r\n\r\n.content_section2 .ui.huge.header {\r\n  margin-top : 10px;\r\n}\r\n\r\n.bosch {\r\n  box-shadow: 5px 5px 12px #555;\r\n}\r\n\r\n.easy {\r\n  position : relative;\r\n}\r\n\r\n.easy p,.list {\r\n  color : #7e8890;\r\n  font-style: normal;\r\n  -webkit-font-variant-ligatures: normal;\r\n          font-variant-ligatures: normal;\r\n  font-variant-caps: normal;\r\n  font-variant-numeric: normal;\r\n  font-weight: 400;\r\n  font-stretch: normal;\r\n  font-size: 15px;\r\n  font-family: \"Open Sans\", open-sans, sans-serif;\r\n}\r\n\r\n.easy .huge.header{\r\n  color : #333c4e;\r\n\r\n  font-style: normal;\r\n  -webkit-font-variant-ligatures: normal;\r\n          font-variant-ligatures: normal;\r\n  font-variant-caps: normal;\r\n  font-variant-numeric: normal;\r\n  font-weight: 400;\r\n  font-stretch: normal;\r\n  font-size: 30px;\r\n  line-height: 52px;\r\n  font-family: \"Open Sans\", open-sans, sans-serif;\r\n}\r\n\r\n.easy .bulleted.list {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.ui.info.message {\r\n  margin-top : 50px;\r\n  margin-bottom : 40px;\r\n}\r\n\r\n.landscape{\r\n  width:100%;\r\n  height: 600px;\r\n  background-image: url(" + __webpack_require__(1114) + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-attachment: fixed;\r\n}\r\n\r\n.bottom_segment .ui.piled.segment{\r\n  margin-top:50px;\r\n}\r\n\r\ni{\r\n  color: #4d4d4d;\r\n}\r\n\r\n.devices{\r\n  margin-top:30px;\r\n}\r\n\r\n.ui.attached.segment.middle{\r\n  margin-top : 30px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 791:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 846:
/***/ (function(module, exports) {

module.exports = " <div class=\"ui right vertical sidebar labeled icon menu\">\r\n\r\n  <a class=\"item\" routerLink=\"/board\" routerLinkActive=\"active\" (click)=\"closeSidenav()\">\r\n    <i class=\"teal dashboard icon\"></i>\r\n    Tableau de bord\r\n  </a>\r\n\r\n  <a class=\"item\" routerLink=\"/moncompte\" routerLinkActive=\"active\" (click)=\"closeSidenav()\">\r\n    <i class=\"teal user icon\"></i>\r\n    Mon compte\r\n  </a>\r\n\r\n  <a class=\" item\" routerLink=\"/coffrefort\" routerLinkActive=\"active\" (click)=\"closeSidenav()\">\r\n    <i class=\"teal lock icon\"></i>\r\n    Mon coffre-fort\r\n  </a>\r\n\r\n  <a *ngIf=\"!user\" class=\"item\" (click)=\"closeSidenav(); toggleLogin()\">\r\n    <i class=\"teal power icon\"></i>\r\n       Se connecter\r\n  </a>\r\n\r\n   <a *ngIf=\"user\" class=\"item\" (click)=\"closeSidenav()\">\r\n    <i class=\"teal user icon\"></i>\r\n       {{user.user_mail}}\r\n   </a>\r\n\r\n\r\n  <a routerLink=\"/signup\" *ngIf=\"!user\" class=\"item\" (click)=\"closeSidenav()\">\r\n      <i class=\"teal road icon\"></i>\r\n       S'inscrire\r\n  </a>\r\n\r\n   <a *ngIf=\"user\" class=\"item\" (click)=\"closeSidenav(); logout()\">\r\n      <i class=\"teal power icon\"></i>\r\n       Deconnexion\r\n  </a>\r\n\r\n</div>\r\n\r\n  <div class=\"pusher\">\r\n    <div tracking-scroll (scrolled)=\"onScroll($event.value, 50)\" class=\"ui top fixed menu secondary \" [ngClass]= \"{'five item' : isScrolled_50}\">\r\n\r\n    <a href=\"/\" class=\"item active\">\r\n      <img class=\"ui tiny image\" src=\"./assets/images/brand_logo.png\">\r\n    </a>\r\n    <a *hideItSizes=\"{min:0,max:500}\" class=\"item\">\r\n      <i class=\"help circle outline large icon\"></i>\r\n      Comment ça marche\r\n    </a>\r\n    <a *hideItSizes=\"{min:0,max:500}\" class=\"item\">\r\n      FAQ\r\n    </a>\r\n\r\n      <div class=\"ui dropdown item\" >\r\n        <div *hideItSizes=\"{min:0,max:500}\" class=\"text\">Services</div>\r\n        <div class=\"menu\">\r\n          <!--<div routerLink=\"/fileupload\" class=\"item\"><i class=\"cloud upload icon\"></i>\r\n              File Upload\r\n          </div>-->\r\n          <div routerLink=\"/coffrefort\" routerLinkActive=\"active\" class=\"item\"><i class=\"protect icon\"></i>Coffre fort</div>\r\n          <div routerLink=\"/board\" class=\"item\"><i class=\"dashboard icon\"></i>Dashboard</div>\r\n        </div>\r\n      </div>\r\n\r\n    <div class=\"right menu\">\r\n      <div *ngIf=\"!user && !isScrolled_50\" class=\"item\">\r\n        <a (click)=\"toggleLogin()\" *hideItSizes=\"{min:0,max:768}\" class=\"item\">\r\n        Se connecter\r\n      </a>\r\n      </div>\r\n\r\n      <div *ngIf=\"user && !isScrolled_50\" class=\"item\">\r\n        <a *hideItSizes=\"{min:0,max:768}\" class=\"ui small basic button teal\">\r\n        <i class=\"icon user\"></i>\r\n          {{user.user_mail}}\r\n      </a>\r\n      </div>\r\n\r\n      <div *hideItSizes=\"{min:0,max:768}\"  class=\"item\">\r\n          <a routerLink=\"/signup\" *ngIf=\"!user && !isScrolled_50\" class=\"ui small button teal\" >S'inscrire</a>\r\n          <a  (click)=\"logout()\" *ngIf=\"user && !isScrolled_50\" class=\"ui small button teal\" >Deconnexion</a>\r\n      </div>\r\n      <a *showItSizes=\"{min:0,max:768}\" (click)=\"toggleSidebar()\" class=\"item\"><i class=\"icon sidebar\"></i> </a>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"ui main \">\r\n\r\n    <router-outlet></router-outlet>\r\n    <!--<p *ngIf=\"!user\">Not logged in</p>\r\n    <p>{{message}}</p>-->\r\n  </div>\r\n\r\n     <!--<div class=\"section_before_footer\">\r\n\r\n     </div>-->\r\n    <div class=\"ui page dimmer uno\">\r\n      <div class=\"content \">\r\n        <div class=\"center\">\r\n          <div class=\"ui text container\">\r\n            <app-login (notify)=\"onNotify($event)\"></app-login>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui container fluid\">\r\n      <app-footer></app-footer>\r\n    </div>\r\n\r\n  </div>\r\n"

/***/ }),

/***/ 847:
/***/ (function(module, exports) {

module.exports = "<div class=\"container ui grid\">\n          <div class=\"column test1\">\n            <a (click)=\"showPrevFriend()\">\n              <i [@scaleOut]=\"SCALED[0]\" (mouseenter)=\"scaleIn(0)\" (mouseleave)=\"scaleOut(0)\" class=\"big icon chevron left\"></i></a>\n          </div>\n\n  <div class=\"fourteen wide column test2\">\n    <template ngFor let-friend [ngForOf]=\"[ selectedFriend ]\">\n                <div [@friendAnimation]=\"orientation\" class=\"friend\">\n                  <h2 class=\"ui icon header\">\n                    <i class=\"{{friend.img}} icon\"></i>\n                    <div class=\"content\">\n                      {{friend.title}}\n                      <div class=\"sub header\">{{friend.description}}</div>\n                    </div>\n                  </h2>\n                </div>\n            </template>\n  </div>\n\n          <div class=\"column test3\">\n            <a (click)=\"showNextFriend()\">\n              <i [@scaleOut]=\"SCALED[1]\" (mouseenter)=\"scaleIn(1)\" (mouseleave)=\"scaleOut(1)\" class=\"big icon chevron right\"></i></a>\n          </div>\n\n</div>\n\n\n"

/***/ }),

/***/ 848:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui tabular menu\">\r\n  <a class=\"item active\">\r\n    Multimédia\r\n  </a>\r\n</div>\r\n\r\n\r\n <div class=\"ui four link doubling stackable special cards container\">\r\n\r\n     <div class=\"card\" *ngFor=\"let bien of biens; let i = index\">\r\n\r\n      <div class=\"blurring dimmable image\">\r\n\r\n       <div class=\"ui inverted dimmer\">\r\n           <div class=\"content\">\r\n          <div class=\"center\">\r\n\r\n            <div class=\"ui buttons\">\r\n\r\n            <div class=\"ui teal button\" data-tooltip=\"Modifier\">\r\n\r\n              <i class=\"material-icons\"> create </i>\r\n\r\n              </div>\r\n\r\n              <div class=\"ui teal button\" data-tooltip=\"Justificatifs\">\r\n\r\n              <i class=\"material-icons\">insert_drive_file</i>\r\n\r\n              </div>\r\n\r\n              <div class=\"ui teal button\" data-tooltip=\"Supprimer\" (click) =\"deleteObject(bien.id); deleteOnView(i);\">\r\n\r\n              <i class=\"material-icons\">delete</i>\r\n\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </div>\r\n           </div>\r\n        </div>\r\n\r\n      <img src=\"./uploads/{{bien.imageurl}}\">\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"content\">\r\n\r\n    <a class=\"header\" MaDirective>{{bien.description}}</a>\r\n\r\n    <div class=\"meta\">\r\n\r\n    </div>\r\n\r\n    <div class=\"description\">\r\n\r\n      <div class=\"ui left aligned animated list\">\r\n\r\n        <div class=\"item\">\r\n           <a class=\"eltlist\"> <i class=\"calendar icon\"></i>Date d'achat: {{bien.dateachat}} </a>\r\n        </div>\r\n\r\n        <div class=\"item\">\r\n\r\n         <a class=\"eltlist\"> <i class=\"euro icon\"></i>Prix d'achat: {{bien.prixachat}} € </a>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n   </div>\r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n   <button class=\"ui button\" (click)=\"showModal()\">\r\n\r\n       <i class=\"plus icon\"></i>\r\n\r\n    </button>\r\n\r\n </div>\r\n\r\n </div>\r\n\r\n<div class=\"ui page dimmer dos\">\r\n      <div class=\"content \">\r\n        <div class=\"center\">\r\n          <div class=\"ui text container\" [@modal]=\"statebis\">\r\n            <div class=\"ui attached message\">\r\n  <div class=\"header\">\r\n    Welcome to our site!\r\n  </div>\r\n  <p>Fill out the form below to sign-up for a new account</p>\r\n</div>\r\n<form class=\"ui form attached fluid segment\">\r\n  <div class=\"two fields\">\r\n    <div class=\"field\">\r\n      <label>First Name</label>\r\n      <input placeholder=\"First Name\" type=\"text\">\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Last Name</label>\r\n      <input placeholder=\"Last Name\" type=\"text\">\r\n    </div>\r\n  </div>\r\n  <div class=\"field\">\r\n    <label>Username</label>\r\n    <input placeholder=\"Username\" type=\"text\">\r\n  </div>\r\n  <div class=\"field\">\r\n    <label>Password</label>\r\n    <input type=\"password\">\r\n  </div>\r\n  <div class=\"inline field\">\r\n    <div class=\"ui checkbox\">\r\n      <input type=\"checkbox\" id=\"terms\">\r\n      <label for=\"terms\">I agree to the terms and conditions</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui blue submit button\">Submit</div>\r\n</form>\r\n<div class=\"ui bottom attached warning message\">\r\n  <i class=\"icon help\"></i>\r\n  Already signed up? <a href=\"#\">Login here</a> instead.\r\n</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n</div>\r\n\r\n<div class=\"buttonAction\">\r\n\r\n  <div class=\"ui circular large teal icon button\" [@focusInput]='state'  (click)=\"toggleMove()\">\r\n\r\n       <i class=\"add large icon\"></i>\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n<div class=\"actionsContainer\">\r\n\r\n\r\n<div class=\"Actions\">\r\n\r\n  <div class=\"ui circular large icon button\"  data-tooltip=\"Ajouter un bien\" data-position=\"left center\" [@showAction3]='state'  routerLink=\"/ajoutProduit\" routerLinkActive=\"active\" >\r\n\r\n     <i class=\"add square  icon\"></i>\r\n\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n\r\n\r\n<div class=\"Actions\">\r\n\r\n  <div class=\"ui circular large icon button\"  data-tooltip=\"Supprimer des biens\" data-position=\"left center\" [@showAction2]='state'>\r\n\r\n     <i class=\"trash  icon\"></i>\r\n\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"Actions\">\r\n\r\n  <div class=\"ui circular large icon button\"  data-tooltip=\"Voir mes justificatifs\" data-position=\"left center\"[@showAction1]='state'>\r\n\r\n  <i class=\"file pdf outline  icon\"></i>\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 849:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui container\">\r\n  <div class=\"ui inverted segment\">\r\n    <h2>FileUpload Component</h2>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"ui container\">\r\n  <div class=\"ui grid\">\r\n    <div class=\"row\">\r\n      <div class=\"five wide column\">\r\n        <form class=\"ui form\">\r\n          <div class=\"field\">\r\n            <label>Multiple Files Upload</label>\r\n            <input type=\"file\" name=\"multiple\" ng2FileSelect [uploader]=\"uploader\" multiple >\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n      <div class=\"eleven wide column\">\r\n        <h3>File Upload with Angular 2 and Node</h3>\r\n        Queue length: {{ uploader?.queue?.length }}\r\n\r\n        <table class=\"ui basic table\">\r\n          <thead>\r\n            <tr>\r\n              <th>Name</th>\r\n              <th>Size</th>\r\n              <th>Progress</th>\r\n              <th>Status</th>\r\n              <th>Actions</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let item of uploader.queue\">\r\n              <td><strong>{{ item.file.name }}</strong></td>\r\n              <td nowrap>{{ item.file.size/1024/1024 | number:'.2' }} MB</td>\r\n              <td>\r\n                <sui-progress [value]=\"item.progress\" [progress]=\"false\">\r\n                </sui-progress>\r\n              </td>\r\n              <td>\r\n                <span *ngIf=\"item.isSuccess\"><i class=\"checkmark icon\"></i></span>\r\n                <span *ngIf=\"item.isCancel\"><i class=\"minus circle icon\"></i></span>\r\n                <span *ngIf=\"item.isError\"><i class=\"remove icon\"></i></span>\r\n              </td>\r\n              <td nowrap>\r\n                <button type=\"button\" class=\"mini ui green button\"\r\n                        (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\r\n                  <i class=\"upload icon\"></i> Upload\r\n                </button>\r\n                <button type=\"button\" class=\"mini ui orange button\"\r\n                (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\r\n                  <i class=\"ben icon\"></i> Cancel\r\n                </button>\r\n                <button type=\"button\" class=\"mini ui red button\" (click)=\"item.remove()\" >\r\n                  <i class=\"trash icon\"></i> Remove\r\n                </button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n        <div>\r\n          <div>Queue progress:\r\n            <sui-progress [value]=\"uploader.progress\" [progress]=\"false\">\r\n            </sui-progress>\r\n          </div>\r\n          <button type=\"button\" class=\"ui green button\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\r\n            <i class=\"upload icon\"></i> Upload all\r\n          </button>\r\n          <button type=\"button\" class=\"ui orange button\" (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\r\n            <i class=\"ban icon\"></i> Cancel all\r\n          </button>\r\n          <button type=\"button\" class=\"ui red button\" (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\r\n            <i class=\"trash icon\"></i> Remove all\r\n          </button>\r\n        </div>\r\n\r\n        <div *ngFor=\"let upload of uploads\">\r\n          <img class=\"ui medium image\" src=\"./uploads/{{upload.url}}\">\r\n          <button (click)=\"deleteUpload(upload.id)\" type=\"button\" class=\"ui red button\">\r\n            <i class=\"trash icon\"></i> Delete\r\n          </button>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 850:
/***/ (function(module, exports) {

module.exports = "<body tracking-scroll (scrolled)=\"onScroll($event.value)\">\r\n\r\n <div class=\"ui bottom sidebar inverted\">\r\n    <div class=\"ui segment teal heightmodif\">\r\n      <div class=\"ui grid\">\r\n        <div class=\" centered row\">\r\n          <a (click)=\"closeSidebar()\"><i class=\" large chevron down link icon get_started\"></i></a>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"four wide column\">\r\n            <img class=\"ui tiny image\" src=\"assets/images/brand_logo.png\">\r\n          </div>\r\n\r\n          <div class=\"four wide column\">\r\n            <h4>Contact</h4>\r\n            <div class=\"ui link list\">\r\n              <div class=\"active item\">Home</div>\r\n              <a class=\"item\">About</a>\r\n              <a class=\"item\">Jobs</a>\r\n              <a class=\"item\">Team</a>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"four wide column\">\r\n            <h4>Contact</h4>\r\n            <div class=\"ui link list\">\r\n              <div class=\"active item\">Home</div>\r\n              <a class=\"item\">About</a>\r\n              <a class=\"item\">Jobs</a>\r\n              <a class=\"item\">Team</a>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"four wide column\">\r\n            <h4>Contact</h4>\r\n            <div class=\"ui link list\">\r\n              <div class=\"active item\">Home</div>\r\n              <a class=\"item\">About</a>\r\n              <a class=\"item\">Jobs</a>\r\n              <a class=\"item\">Team</a>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"pusher\">\r\n    <div class=\"ui centered grid\">\r\n      <div class=\"row\">\r\n        <a >\r\n            <i (click)=\"openSidebar()\" class=\"large chevron up link icon get_started\"></i>\r\n        </a>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</body>\r\n\r\n"

/***/ }),

/***/ 851:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div class=\"spacer\">\r\n</div>\r\n\r\n<div class=\"ui header\">\r\n\r\n   Créer un compte\r\n  \r\n</div>\r\n\r\n<div class=\"ui positive  message\" *ngIf=\"submitted\">\r\n\r\n  <div class=\"header\">\r\n    Votre inscription a bien été prise en compte, un mail de confirmation vient de vous être envoyé à l'adresse suivante : {{email}}\r\n  </div>\r\n\r\n  \r\n</div>\r\n\r\n\r\n<div class=\"ui column stackable center aligned page grid\" *ngIf=\"!submitted\">\r\n\r\n<div class=\"column eight wide\">\r\n\r\n<div class=\"container\">\r\n\r\n<form (ngSubmit)=\"onSubmit(form.value)\" #form=\"ngForm\"> \r\n\r\n<div class=\"ui form\">\r\n\r\n  <div class=\"field\">\r\n\r\n    <div class=\"ui left icon input\">\r\n          \r\n          <input type=\"email\" placeholder= \"Email\"\r\n            required\r\n            name=\"ClientEmail\"\r\n            [(ngModel)]=\"email\"\r\n\r\n            >\r\n\r\n          <i class=\"at icon\"></i>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\" field\">\r\n \r\n <div class=\"ui left icon input\">\r\n\r\n          <input type=\"password\" placeholder=\"Mot de passe\"  \r\n          required\r\n          minlength=\"8\"\r\n          name=\"ClientMotDePasse\"\r\n          [(ngModel)]=\"password\"\r\n          \r\n          #mdp='ngModel'\r\n\r\n          >\r\n\r\n          <i class=\"lock icon\"></i>\r\n  </div>\r\n\r\n  </div>\r\n\r\n\r\n   <div class=\" field\">\r\n  <div class=\"ui left icon input\">\r\n          <input type=\"password\" placeholder=\"Vérification du mot de passe\"\r\n\r\n           name=\"MotDePasseCheck\"\r\n           [(ngModel)]=\"passwordbis\"\r\n           #mdpbis='ngModel' \r\n          >\r\n\r\n          <i class=\"lock icon\"></i>\r\n  </div>\r\n\r\n    \r\n\r\n    <div class=\"ui negative message\" *ngIf=\"samePasswords\" >\r\n\r\n  <div class=\"header\">\r\n\r\n     Les deux mots de passe ne correspondent pas ! \r\n  </div>\r\n    \r\n    </div>\r\n\r\n     <div class=\"ui negative message\" *ngIf=\"mdp.invalid && mdp.touched\">\r\n      \r\n  <div class=\"header\">\r\n     Votre mot de passe doit contenir au moins 8 caractères\r\n  </div>\r\n    \r\n    </div>\r\n\r\n   </div>\r\n\r\n\r\n  <div class=\"field\">\r\n\r\n  <button class=\"ui big teal button\" type=\"submit\" (click)=\"comparePasswords()\"> S'inscrire </button>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n</form>\r\n\r\n\r\n</div>\r\n\r\n\r\n</div>\r\n\r\n\r\n</div>\r\n\r\n \r\n"

/***/ }),

/***/ 852:
/***/ (function(module, exports) {

module.exports = "<div class=\"spacer\">\r\n</div>\r\n\r\n\r\n<div class=\"ui ordered fluid steps\">\r\n<div class=\"completed step\">\r\n    <div class=\"content\">\r\n      <div class=\"title\">Votre bien</div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"active step\">\r\n    <div class=\"content\">\r\n      <div class=\"title\">Informations sur votre bien </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"step\">\r\n    <div class=\"content\">\r\n      <div class=\"title\"> Vos justificatifs </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"step\">\r\n    <div class=\"content\">\r\n      <div class=\"title\"> Validation </div>\r\n    </div>\r\n</div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ 853:
/***/ (function(module, exports) {

module.exports = "<p>\n  justificatifs works!\n</p>\n"

/***/ }),

/***/ 854:
/***/ (function(module, exports) {

module.exports = "  <form #loginForm (ngSubmit)=\"loginUser(user);loginForm.reset()\" class=\"ui inverted form\">\r\n\r\n    <div class=\" field\">\r\n      <input type=\"email\" id=\"email\" [(ngModel)]=\"user.user_mail\" name=\"email\" placeholder=\"Email\" required>\r\n    </div>\r\n\r\n    <div class=\" field\">\r\n      <input type=\"password\" id=\"password\" [(ngModel)]=\"user.user_password\" placeholder=\"Password\" name=\"password\" required>\r\n    </div>\r\n\r\n    <button type=\"submit\" class=\"ui button teal\">Connexion</button>\r\n  </form>\r\n\r\n  <div *ngIf=\"message\" class=\"ui warning message\">\r\n    <i class=\"warning icon\"></i>\r\n    {{message}}\r\n  </div>\r\n"

/***/ }),

/***/ 855:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n"

/***/ }),

/***/ 856:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"spacer\">\r\n</div>\r\n\r\n\r\n<div class=\"ui ordered fluid stackable steps\">\r\n<div class=\"active step\">\r\n    <div class=\"content\">\r\n      <div class=\"title\">Votre bien</div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"step\">\r\n    <div class=\"content\">\r\n      <div class=\"title\"> Vos justificatifs </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"step\">\r\n    <div class=\"content\">\r\n      <div class=\"title\"> Validation </div>\r\n    </div>\r\n</div>\r\n\r\n</div>\r\n\r\n<div class=\"ui link doubling stackable centered cards container\">\r\n\r\n  <div class=\"card\" (click)=changeChoixPhoto()>\r\n    <div class=\"content\">\r\n      <i class=\" big teal photo icon \"></i>\r\n      <div class=\"description\">\r\n        Reconnaissance via photographie\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card\">\r\n    <div class=\"content\">\r\n      <i class=\" big teal barcode icon \"></i>\r\n      <div class=\"description\">\r\n        Scan du code barre\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card\">\r\n    <div class=\"content\">\r\n      <i class=\" big teal search icon \"></i>\r\n      <div class=\"description\">\r\n        Moteur de recherche intelligent\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  </div>\r\n\r\n\r\n<div class=\"ui column stackable center aligned page grid\">\r\n\r\n<div class=\"container\">\r\n\r\n<form>\r\n\r\n<div class=\"ui form\">\r\n\r\n<div class=\"section\">\r\n\r\n  <div class=\"field\" *ngIf=\"!choixPhoto\">\r\n    <div class=\"ui grid\">\r\n\r\n      <div class=\"centered row\" *ngIf=\"uploader?.queue?.length == 0\">\r\n          <div class=\"ui text container\">\r\n            <label for=\"multiple\" class=\"ui right labeled icon button add_photo_label\" (click)=\"fileUploadWindow=true;\">\r\n              Ajoutez une photo de votre bien\r\n              <i class=\" download icon\"></i>\r\n            </label>\r\n          </div>\r\n      </div>\r\n\r\n    <div class=\"centered row\" *ngIf=\"fileUploadWindow\">\r\n        <form class=\"ui form\">\r\n          <div class=\"field\">\r\n            <input type=\"file\" name=\"multiple\" id=\"multiple\" ng2FileSelect [uploader]=\"uploader\" required style=\"display:none\">\r\n          </div>\r\n        </form>\r\n\r\n      <h5>Fichiers en attente: {{ uploader?.queue?.length }}</h5>\r\n\r\n        <table class=\"ui basic table\">\r\n          <thead>\r\n            <tr>\r\n              <th>Nom</th>\r\n              <th>Taille</th>\r\n              <th>Progression</th>\r\n              <th>Statut</th>\r\n              <th>Actions</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let item of uploader.queue\">\r\n              <td><strong>{{ item.file.name }}</strong></td>\r\n              <td nowrap>{{ item.file.size/1024/1024 | number:'.2' }} MB</td>\r\n              <td>\r\n                <sui-progress [value]=\"item.progress\" [progress]=\"false\">\r\n                </sui-progress>\r\n              </td>\r\n              <td>\r\n                <span *ngIf=\"item.isSuccess\"><i class=\"checkmark icon\"></i></span>\r\n                <span *ngIf=\"item.isCancel\"><i class=\"minus circle icon\"></i></span>\r\n                <span *ngIf=\"item.isError\"><i class=\"remove icon\"></i></span>\r\n              </td>\r\n              <td nowrap>\r\n                <button type=\"button\" class=\"mini ui green button\"\r\n                        (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\r\n                  <i class=\"upload icon\"></i> Ajouter\r\n                </button>\r\n                <button type=\"button\" class=\"mini ui orange button\"\r\n                (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\r\n                  <i class=\"ban icon\"></i> Annuler\r\n                </button>\r\n                <button type=\"button\" class=\"mini ui red button\" (click)=\"item.remove()\" >\r\n                  <i class=\"trash icon\"></i> Supprimer\r\n                </button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n        <!--<div>\r\n          <div>Progression:\r\n            <sui-progress [value]=\"uploader.progress\" [progress]=\"false\">\r\n            </sui-progress>\r\n          </div>\r\n          <button type=\"button\" class=\"ui green button\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\r\n            <i class=\"upload icon\"></i> Upload all\r\n          </button>\r\n          <button type=\"button\" class=\"ui orange button\" (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\r\n            <i class=\"ban icon\"></i> Cancel all\r\n          </button>\r\n          <button type=\"button\" class=\"ui red button\" (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\r\n            <i class=\"trash icon\"></i> Remove all\r\n          </button>\r\n        </div>\r\n\r\n        <div *ngFor=\"let upload of uploads\">\r\n          <img class=\"ui medium image\" src=\"./uploads/{{upload.imageurl}}\">\r\n          <button (click)=\"deleteUpload(upload.id)\" type=\"button\" class=\"ui red button\">\r\n            <i class=\"trash icon\"></i> Delete\r\n          </button>\r\n        </div>-->\r\n\r\n    </div>\r\n\r\n      <div class=\"centered row\" [@fadeInOut] *ngIf=\"predicting\">\r\n        <div class=\"ui icon message\">\r\n          <i *ngIf=\"!predicted\" class=\"notched circle loading icon\"></i>\r\n          <i *ngIf=\"predicted\" class=\"checkmark green icon\"></i>\r\n\r\n          <div class=\"content\" *ngIf=\"!predicted\">\r\n            <div class=\"header\">\r\n              Veuillez patienter\r\n            </div>\r\n            <p>La recherche de votre appareil est en cours</p>\r\n          </div>\r\n\r\n\r\n          <div class=\"content\" *ngIf=\"predicted\">\r\n            <div class=\"header\">\r\n              {{itemPrediction}}\r\n            </div>\r\n            <p>Est-ce bien votre appareil ?</p>\r\n            <button class=\"ui primary button\" (click)=\"acceptPrediction()\">\r\n              Oui\r\n            </button>\r\n            <button class=\"ui button\" (click)=\"refusePrediction()\">\r\n              Non\r\n            </button>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"centered row\" *ngIf=\"predictionAnswered && !choixPhoto\" [@fadeInOut]>\r\n        <div class=\"ui text container\">\r\n\r\n          <div class=\"section\">\r\n            <div class=\"field\" [ngClass]=\"{'disabled': predictionAccepted}\">\r\n              <div class=\"ui left icon input\">\r\n                <input type=\"text\" placeholder= \"Description du bien\" required name=\"description\" [(ngModel)]=\"myObjet.description\">\r\n                <i class=\"info icon\"></i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"section\">\r\n            <div class=\"field\">\r\n              <div class=\"ui left icon input\">\r\n                <input type=\"date\" placeholder= \"Date d'achat\" required name=\"dateAchatBien\" [(ngModel)]=\"myObjet.dateachat\">\r\n                <i class=\"calendar icon\"></i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"section\">\r\n            <div class=\"field\">\r\n              <div class=\"ui left icon input\">\r\n                <input type=\"number\" placeholder= \"Prix d'achat\" required name=\"prixAchatBien\" [(ngModel)]=\"myObjet.prixachat\">\r\n                <i class=\"euro icon\"></i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"section button_next\" *ngIf=\"myObjet.dateachat !== undefined && myObjet.imageurl !== undefined\r\n          && myObjet.prixachat !== undefined && myObjet.description !== undefined\"\r\n               [@fadeInOut]>\r\n            <div class=\"field\">\r\n              <button class=\"big ui primary animated fade button\" (click)=\"validateObject()\">\r\n                <div class=\"visible content\">Suivant</div>\r\n                <div class=\"hidden content\"><i class=\"chevron right icon\"></i></div>\r\n              </button>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"centered row\">\r\n\r\n      </div>\r\n\r\n      <div class=\"centered row\">\r\n\r\n      </div>\r\n\r\n  </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n  </div>\r\n\r\n</form>\r\n\r\n\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 857:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui text container\">\r\n\r\n  <form class=\"ui form\" (ngSubmit)=\"registerUser(user)\">\r\n\r\n    <div class=\"field\">\r\n      <label for=\"email\">Email</label>\r\n      <input type=\"email\" id=\"email\" [(ngModel)]=\"user.user_mail\" name=\"email\" required placeholder=\"Email\">\r\n    </div>\r\n\r\n    <div class=\"field\">\r\n      <label for=\"password\">Password</label>\r\n      <input type=\"password\" id=\"password\" [(ngModel)]=\"user.user_password\" name=\"password\" required placeholder=\"Password\">\r\n    </div>\r\n\r\n    <button type=\"submit\" class=\"ui button\">S'inscrire</button>\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 858:
/***/ (function(module, exports) {

module.exports = "<div class=\"spacer\">\r\n</div>\r\n\r\n\r\n<div class=\"monHeader\">\r\n\r\n<h2 class=\"ui medium icon header\">\r\n\r\n  <i class=\"teal dashboard icon\"></i>\r\n  \r\n   Mon tableau de bord  \r\n\r\n</h2>\r\n\r\n <h4 class=\"ui divider\">\r\n\r\n </h4>\r\n\r\n </div>\r\n\r\n  <div class=\"ui four doubling stackable cards container\">\r\n\r\n    <div class=\"card\" >\r\n\r\n        <div class=\"content\"> \r\n\r\n          <div class=\"left floated header\">\r\n            Mon patrimoine \r\n          </div>\r\n\r\n            <div class=\"right floated description\">\r\n            \r\n              <div class=\"ui tiny teal statistics\">\r\n\r\n                <div class=\"statistic\">\r\n\r\n                   <div class=\"value\">\r\n                      \r\n                         {{patrimoine.prixachat}}\r\n                 \r\n                       <i class=\"circular teal inverted euro icon\"></i> \r\n\r\n                      </div>\r\n                    \r\n                 </div>\r\n\r\n              </div>\r\n\r\n\r\n     \r\n           </div>\r\n\r\n\r\n          \r\n        </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"card\">\r\n\r\n      <div class=\"content\">\r\n\r\n          <div class=\"left floated header\">\r\n            Mes contrats en cours  \r\n          </div>\r\n\r\n          \r\n        </div>\r\n\r\n\r\n    </div>\r\n\r\n     <div class=\"card\">\r\n\r\n       <div class=\"content\">\r\n\r\n\r\n          <div class=\"left floated header\">\r\n            Mes prochains prélèvements\r\n          </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n     <div class=\"card\">\r\n\r\n       <div class=\"content\">\r\n\r\n          <div class=\"left floated header\">\r\n            Evolution de mon patrimoine   \r\n          </div>\r\n\r\n          \r\n        </div>\r\n\r\n    </div>\r\n\r\n     <div class=\"card\">\r\n\r\n       <div class=\"content\">\r\n\r\n          <div class=\"left floated header\">\r\n            Analyse de mon patrimoine   \r\n          </div>\r\n\r\n          \r\n        </div>\r\n\r\n    </div>\r\n\r\n     <div class=\"card\">\r\n\r\n       <div class=\"content\">\r\n\r\n         <div class=\"left floated header\">\r\n          \r\n          Documents / contrats \r\n\r\n          </div>\r\n          \r\n        </div>\r\n\r\n    </div>\r\n\r\n     <div class=\"card\">\r\n\r\n       <div class=\"content\">\r\n\r\n         <div class=\"left floated header\">\r\n          \r\n              Mes ajouts récents  \r\n\r\n          </div>\r\n\r\n          \r\n        </div>\r\n\r\n    </div>\r\n\r\n     <div class=\"card\">\r\n        \r\n        <div class=\"content\">\r\n\r\n          \r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n"

/***/ }),

/***/ 859:
/***/ (function(module, exports) {

module.exports = "  <div class=\"header-img-container\" [@changeBngColor]=\"bngChanged\" [@changeBngColorr]>\r\n    <div class=\"ui centered grid\">\r\n      <div class=\"row\">\r\n        <div class=\"ui container\">\r\n          <img class=\"ui centered image\" src=\"./assets/images/brand_logo_3.png\" >\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <h1 class=\"ui inverted header\" >\r\n          <span class=\"tagline\">L'assurance sur-mesure à portée de main</span>\r\n        </h1>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <a pageScroll href=\"#here\"><i class=\" large chevron down icon get_started\"></i> </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"here\"></div>\r\n\r\n<div tracking-scroll (scrolled)=\"onScrolll($event.value, 300, 0)\" class=\"content_section section_top\">\r\n  <div class=\"ui stackable grid container\">\r\n    <div class=\"row\">\r\n      <div class=\"left floated eight wide column\">\r\n        <img class=\" ui image large rounded bosch\" src=\"./assets/images/iPhonecapture3.png\"\r\n             [@scaleOut]=\"SCALED[0]\" (mouseenter)=\"scaleIn(0)\" (mouseleave)=\"scaleOut(0)\" [@fadeInOut] *ngIf=\"APPEARED[0]\">\r\n      </div>\r\n      <div class=\"right floated eight wide column easy\"  [@flyInOrOutRight] *ngIf=\"APPEARED[0]\">\r\n        <div class=\"ui piled segment\">\r\n        <div class=\"ui huge header\">Facile</div>\r\n        <p>Avec Assur+ constituez en un clin d’œil votre coffre-fort de biens assurables.\r\n          Choisissez, parmi les nombreux modes d’ajout, celui qui vous convient le mieux.\r\n          Découvrez le mode photo, basé sur un algorithme de reconnaissance d’images,\r\n          qui vous fera gagner un temps colossal dans la constitution de votre panier de biens.</p>\r\n        <h2 class=\"ui huge header\">Avec Assur+, fini la paperasse !</h2>\r\n        <div class=\"ui bulleted list\">\r\n          <div class=\"item\">Votre bien est automatiquement identifié parmi de nombreux produits.</div>\r\n          <div class=\"item\">Sa valeur est immédiatement estimée.</div>\r\n          <div class=\"item\">Signez votre contrat d’assurance en un clic.</div>\r\n        </div>\r\n             <app-carousel></app-carousel>\r\n        <div class=\"ui info message\">\r\n            <div class=\"header\">\r\n              Information :\r\n            </div>\r\n            <ul class=\"list\">\r\n              Vous pourrez être en mesure d'ajouter les informations qui vous semblent pertinentes après avoir enregistré votre produit.\r\n            </ul>\r\n          </div>\r\n      </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div tracking-scroll (scrolled)=\"onScrolll($event.value, 1100, 1)\" class=\"content_section2\" >\r\n\r\n  <div class=\"landscape\" [@fadeInOut] *ngIf=\"APPEARED[1]\">\r\n  </div>\r\n\r\n  <div class=\"ui stackable grid container\">\r\n    <div class=\"row here easy\" [@flyInOrOutLeft] *ngIf=\"APPEARED[1]\">\r\n        <div class=\"ui piled segment\">\r\n        <div class=\"ui huge header\">Sécurisé</div>\r\n        <p>Soyez protégés en cas de sinistre, vos biens précieux restent à l’abri dans votre coffre-fort. </p>\r\n        <h2 class=\"ui huge header\">Sécurisez vos données</h2>\r\n        <p>Avec Assur+ les données contenues dans votre coffre-fort sont protégées par une méthode de chiffrement.\r\n        Vos données personnelles ne sont jamais transmises à un tiers sans votre accord préalable</p>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"ui divider\"></div>\r\n\r\n<div tracking-scroll (scrolled)=\"onScrolll($event.value, 1700, 2)\" class=\"content_section\">\r\n  <div class=\"ui stackable grid container\">\r\n    <div class=\"row\">\r\n      <div class=\"left floated eight wide column\">\r\n        <img class=\" ui image fluid\" src=\"./assets/images/ipadmini2.png\"\r\n        [@scaleOut]=\"SCALED[2]\" (mouseenter)=\"scaleIn(2)\" (mouseleave)=\"scaleOut(2)\"\r\n        [@fadeInOut] *ngIf=\"APPEARED[2]\">\r\n      </div>\r\n     <div class=\"right floated seven wide column here easy bottom_segment\" [@flyInOrOutRight] *ngIf=\"APPEARED[2]\">\r\n        <div class=\"ui piled segment\">\r\n        <div class=\"ui huge header\">Flexible</div>\r\n        <p>Soyez protégés en cas de sinistre, vos biens précieux restent à l’abri dans votre coffre-fort. </p>\r\n        <h2 class=\"ui huge header\">Sécurisez vos données</h2>\r\n        <p>Avec Assur+ les données contenues dans votre coffre-fort sont protégées par une méthode de chiffrement.\r\n        Vos données personnelles ne sont jamais transmises à un tiers sans votre accord préalable</p>\r\n\r\n      </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n  <div class=\"ui divider\"></div>\r\n\r\n  <div class=\"ui center aligned container\">\r\n    <img class=\"ui image fluid\" src=\"../../assets/images/respo3.png\">\r\n    <h2 class=\"ui center aligned header\">\r\n      Retrouvez le contenu intégral de notre service sur une multitude d'appareils différents.\r\n    </h2>\r\n    <div class=\"ui centered grid devices\">\r\n      <div class=\"ui text container \">\r\n        <div class=\"centered row\">\r\n          <div class=\"ui attached center aligned segment\">\r\n            <i class=\" big android link icon popup \" data-content=\"Android\" data-variation=\"mini\"></i>\r\n            <i class=\" big apple link icon popup \" data-content=\"iOS\" data-variation=\"mini\"></i>\r\n            <i class=\" big windows link icon popup \" data-content=\"Windows Phone\" data-variation=\"mini\"></i>\r\n          </div>\r\n          <h4 class=\"ui bottom attached center aligned header\">\r\n            Appareils Mobiles\r\n          </h4>\r\n        </div>\r\n        <div class=\"centered row\">\r\n          <div class=\"ui attached center aligned segment middle\">\r\n            <i class=\" big google chrome link icon popup \" data-content=\"Google Chrome\" data-variation=\"mini\"></i>\r\n            <i class=\" big safari link icon popup \" data-content=\"Safari\" data-variation=\"mini\"></i>\r\n            <i class=\" big firefox link icon popup \" data-content=\"Firefox\" data-variation=\"mini\"></i>\r\n            <i class=\" big internet explorer link icon popup \" data-content=\"Internet Explorer\" data-variation=\"mini\"></i>\r\n            <i class=\" big microsoft edge link icon popup \" data-content=\"Microsoft Edge\" data-variation=\"mini\"></i>\r\n          </div>\r\n          <h4 class=\"ui bottom attached center aligned header\">\r\n            Navigateurs Web\r\n          </h4>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ 860:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  validation works!\r\n</p>\r\n"

/***/ })

},[1116]);
//# sourceMappingURL=main.bundle.js.map