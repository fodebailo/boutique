webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".menu{\r\n    color: blue;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    text-decoration: underline;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <header class=\"page-header\">\n    <nav class=\"navbar navbar-inverse\">\n      <ul class=\"nav navbar-nav\">\n        <li>\n          <a routerLink=\"/login\" *ngIf=\"isConnect(); else deconnect\" class=\"clickable\">\n            Se Deconnecter\n          </a>\n          <ng-template #deconnect>\n            <a routerLink=\"/login\" class=\"clickable\">Se Connecter</a>\n          </ng-template>\n        </li>\n        <li class=\"dropdown\" *ngIf=\"isConnect()\">\n          <a data-toggle=\"dropdown\" class=\"clickable\">\n            Operations <span class=\"caret\"></span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li>\n              <a routerLink=\"/new-produit\">Ajouter Produit </a>\n            </li>\n            <li>\n              <a routerLink=\"/new-categorie\">Ajouter Categorie</a>\n            </li>\n          </ul>\n        </li>\n        <li class=\"dropdown\" *ngIf=\"isConnect()\">\n          <a data-toggle=\"dropdown\" class=\"clickable\">\n            Voir <span class=\"caret\"></span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li>\n              <a routerLink=\"/produits\">Liste Produit</a>\n            </li>\n            <li>\n              <a routerLink=\"/categories\">Liste Categorie</a>\n            </li>\n          </ul>\n        </li>\n        <li *ngIf=\"! isConnect()\">\n          <a routerLink=\"/register\">Register</a>\n        </li>\n      </ul>\n    </nav>\n  </header>\n  <section class=\"row\">\n    <article class=\"col-md-8 col-md-offset-2\">\n        <aside *ngIf=\"isConnect()\">\n          <h2 class=\"menu\">Bienvenue sur La Boutique Officielle</h2>\n        </aside>\n      <router-outlet></router-outlet>\n    </article>\n  </section>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentifier_service__ = __webpack_require__("./src/services/authentifier.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'app';
    }
    AppComponent.prototype.isConnect = function () {
        if (this.auth.getJwtToken() != null) {
            return true;
        }
        return false;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentifier_service__["a" /* AuthentificationService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_produit_new_produit_component__ = __webpack_require__("./src/app/new-produit/new-produit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_categorie_new_categorie_component__ = __webpack_require__("./src/app/new-categorie/new-categorie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__produits_produits_component__ = __webpack_require__("./src/app/produits/produits.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__categories_categories_component__ = __webpack_require__("./src/app/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__edit_produit_edit_produit_component__ = __webpack_require__("./src/app/edit-produit/edit-produit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__edit_categorie_edit_categorie_component__ = __webpack_require__("./src/app/edit-categorie/edit-categorie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_authentifier_service__ = __webpack_require__("./src/services/authentifier.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing_module__ = __webpack_require__("./src/app/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_produit_service__ = __webpack_require__("./src/services/produit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_categorie_service__ = __webpack_require__("./src/services/categorie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_register_service__ = __webpack_require__("./src/services/register.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_4__new_produit_new_produit_component__["a" /* NewProduitComponent */],
                __WEBPACK_IMPORTED_MODULE_5__new_categorie_new_categorie_component__["a" /* NewCategorieComponent */],
                __WEBPACK_IMPORTED_MODULE_6__produits_produits_component__["a" /* ProduitsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__categories_categories_component__["a" /* CategoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__edit_produit_edit_produit_component__["a" /* EditProduitComponent */],
                __WEBPACK_IMPORTED_MODULE_9__edit_categorie_edit_categorie_component__["a" /* EditCategorieComponent */],
                __WEBPACK_IMPORTED_MODULE_10__register_register_component__["a" /* RegisterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_13__app_routing_module__["a" /* RoutingModule */], __WEBPACK_IMPORTED_MODULE_14__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_authentifier_service__["a" /* AuthentificationService */], __WEBPACK_IMPORTED_MODULE_15__services_produit_service__["a" /* ProduitService */], __WEBPACK_IMPORTED_MODULE_16__services_categorie_service__["a" /* CategorieService */], __WEBPACK_IMPORTED_MODULE_17__services_register_service__["a" /* RegisterService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_produit_new_produit_component__ = __webpack_require__("./src/app/new-produit/new-produit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_categorie_new_categorie_component__ = __webpack_require__("./src/app/new-categorie/new-categorie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_produit_edit_produit_component__ = __webpack_require__("./src/app/edit-produit/edit-produit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_categorie_edit_categorie_component__ = __webpack_require__("./src/app/edit-categorie/edit-categorie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__produits_produits_component__ = __webpack_require__("./src/app/produits/produits.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__categories_categories_component__ = __webpack_require__("./src/app/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: "new-produit", component: __WEBPACK_IMPORTED_MODULE_3__new_produit_new_produit_component__["a" /* NewProduitComponent */] },
    { path: "new-categorie", component: __WEBPACK_IMPORTED_MODULE_4__new_categorie_new_categorie_component__["a" /* NewCategorieComponent */] },
    { path: "edit-produit/:id", component: __WEBPACK_IMPORTED_MODULE_5__edit_produit_edit_produit_component__["a" /* EditProduitComponent */] },
    { path: "edit-categorie/:id", component: __WEBPACK_IMPORTED_MODULE_6__edit_categorie_edit_categorie_component__["a" /* EditCategorieComponent */] },
    { path: "produits", component: __WEBPACK_IMPORTED_MODULE_7__produits_produits_component__["a" /* ProduitsComponent */] },
    { path: "categories", component: __WEBPACK_IMPORTED_MODULE_8__categories_categories_component__["a" /* CategoriesComponent */] },
    { path: "register", component: __WEBPACK_IMPORTED_MODULE_9__register_register_component__["a" /* RegisterComponent */] },
    { path: "", redirectTo: "/login", pathMatch: "full" }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/categories/categories.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\" *ngIf=\"categorieService.isConnect(); else noConnect\">\n    <div class=\"panel-heading\">\n      <h5 class=\"titre\">Liste Categorie</h5>\n    </div>\n    <div class=\"panel-body\">\n      <table class=\"table table-bordered table-condensed table-striped\">\n        <tr>\n          <th>ID</th>\n          <th>LIBELLE</th>\n        </tr>\n        <tr *ngFor=\"let c of categories?.content\">\n          <td> {{c.id}} </td>\n          <td> {{c.libelle}} </td>\n          <td *ngIf=\"categorieService.isAdmin()\"> <a (click)=\"modifier(c.id)\" class=\"clickable\">Modifier</a> </td>\n          <td *ngIf=\"categorieService.isAdmin()\"> <a (click)=\"supprimer(c.id)\" class=\"clickable\">Supprimer</a> </td>\n        </tr>\n      </table>\n      <ul class=\"nav nav-pills\">\n        <li [ngClass]=\"{active:i==page}\" *ngFor=\"let p of pages; let i = index\"> \n          <a class=\"clickable\" (click)=\"nextPage(i)\">{{i+1}}</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <ng-template #noConnect>\n    <p>Veuillez Vous connecter SVP </p>\n  </ng-template>\n"

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_categorie_service__ = __webpack_require__("./src/services/categorie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(categorieService, router) {
        this.categorieService = categorieService;
        this.router = router;
        this.page = 0;
        this.taille = 7;
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    CategoriesComponent.prototype.loadData = function () {
        var _this = this;
        this.categorieService.getAllCategoriePage(this.page, this.taille).subscribe(function (donnees) {
            _this.categories = donnees;
            _this.pages = new Array(_this.categories.totalPages);
        }, function (error) {
            console.error("Erreur de connexion !");
        });
    };
    CategoriesComponent.prototype.modifier = function (id) {
        this.router.navigateByUrl("/edit-categorie/" + id);
    };
    CategoriesComponent.prototype.nextPage = function (idPage) {
        this.page = idPage;
        this.loadData();
    };
    CategoriesComponent.prototype.supprimer = function (id) {
        if (confirm('Voulez-vous vraiment supprimer ')) {
            this.categorieService.deleteCategorie(id).subscribe();
            this.loadData();
        }
    };
    CategoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__("./src/app/categories/categories.component.html"),
            styles: [__webpack_require__("./src/app/categories/categories.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_categorie_service__["a" /* CategorieService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/edit-categorie/edit-categorie.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-categorie/edit-categorie.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\" *ngIf=\"categorieService.isConnect(); else noConnect\">\n    <div class=\"panel-heading\">\n      <h5 class=\"panel-title\">Modifier Catégorie</h5>\n    </div>\n    <div class=\"panel-body\">\n      <form *ngIf=\"categorie != null\" #f=\"ngForm\" (ngSubmit)=\"editerCategorie(f.value)\" class=\"form-horizontal\">\n        <div class=\"form-group\">\n          <label class=\"col-md-4 control-label\">Libélle</label>\n          <div class=\"col-md-8\">\n            <input type=\"text\" required minlength=\"2\" name=\"libelle\" #libelle=\"ngModel\" [(ngModel)]=\"categorie.libelle\" class=\"form-control\">\n            <span class=\"form-text\" *ngIf=\"!libelle.valid && (libelle.touched || libelle.dirty)\">\n              <span *ngIf=\"libelle.errors.required\">Le Libélle est obligatoire !</span>\n              <span *ngIf=\"libelle.errors.minlength\">Le Libélle doit contenir au moins 2 caractéres !</span>\n            </span>\n          </div>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">EDIT</button>\n      </form>\n      <div class=\"help-block\" *ngIf=\"categorieFinal != null\">\n        <span class=\"label label-success\">Le catégorie a été bien modifié !</span>\n        <ul class=\"list-group\">\n          <li class=\"list-group-item\"> {{categorieFinal.id}} </li>\n          <li class=\"list-group-item\"> {{categorieFinal.libelle}} </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <ng-template #noConnect>\n    <p>Veuillez Vous connecter SVP </p>\n  </ng-template>"

/***/ }),

/***/ "./src/app/edit-categorie/edit-categorie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCategorieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_categorie_service__ = __webpack_require__("./src/services/categorie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_categorie_model__ = __webpack_require__("./src/models/categorie.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditCategorieComponent = /** @class */ (function () {
    function EditCategorieComponent(categorieService, router, activedRoute) {
        this.categorieService = categorieService;
        this.router = router;
        this.activedRoute = activedRoute;
        this.id = activedRoute.snapshot.params['id'];
    }
    EditCategorieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categorieService.getCategorie(this.id).subscribe(function (donnees) {
            try {
                _this.categorie = donnees;
            }
            catch (error) {
            }
        }, function (error) {
            _this.router.navigateByUrl("/new-categorie");
        });
    };
    EditCategorieComponent.prototype.editerCategorie = function () {
        var _this = this;
        this.categorieService.editCategorie(this.id, this.categorie).subscribe(function (donnees) {
            _this.categorieFinal = donnees;
            _this.initialiser();
        }, function (error) {
            console.error("Erreur de connexion !");
        });
    };
    EditCategorieComponent.prototype.initialiser = function () {
        this.categorie = new __WEBPACK_IMPORTED_MODULE_3__models_categorie_model__["a" /* Categorie */]();
    };
    EditCategorieComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-categorie',
            template: __webpack_require__("./src/app/edit-categorie/edit-categorie.component.html"),
            styles: [__webpack_require__("./src/app/edit-categorie/edit-categorie.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_categorie_service__["a" /* CategorieService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], EditCategorieComponent);
    return EditCategorieComponent;
}());



/***/ }),

/***/ "./src/app/edit-produit/edit-produit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-produit/edit-produit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\" *ngIf=\"produitService.isConnect(); else noConnect\">\n    <div class=\"panel-heading\">\n      <h5 class=\"panel-title\">Modifier Produit</h5>\n    </div>\n    <div class=\"panel-body\">\n      <form *ngIf=\"produit != null\" #f=\"ngForm\" (ngSubmit)=\"editerProduit(f.value)\" class=\"form-horizontal\">\n        <div class=\"form-group\">\n          <label class=\"col-md-4 control-label\">Désignation</label>\n          <div class=\"col-md-8\">\n            <input type=\"text\" required minlength=\"2\" name=\"designation\" #designation=\"ngModel\" [(ngModel)]=\"produit.designation\" class=\"form-control\">\n            <span class=\"form-text\" *ngIf=\"!designation.valid && (designation.touched || designation.dirty)\">\n              <span *ngIf=\"designation.errors.required\">La désignation est obligatoire !</span>\n              <span *ngIf=\"designation.errors.minlength\">La désignation doit contenir au moins 2 caractéres !</span>\n            </span>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-md-4 control-label\">Prix</label>\n          <div class=\"col-md-8\">\n            <input type=\"text\" pattern=\"[0-9]{3,6}\" required minlength=\"3\" maxlength=\"6\" name=\"prix\" #prix=\"ngModel\" [(ngModel)]=\"produit.prix\" class=\"form-control\">\n            <span class=\"form-text\" *ngIf=\"!prix.valid && (prix.touched || prix.dirty)\">\n              <span *ngIf=\"prix.errors.required\">Le prix est obligatoire !</span>\n              <span *ngIf=\"prix.errors.minlength\">Le prix doit contenir au moins 3 caractéres !</span>\n              <span *ngIf=\"prix.errors.maxlength\">Le prix doit contenir au moins 6 caractéres !</span>\n              <span *ngIf=\"prix.errors.pattern\">Le prix doit contenir uniquement des chiffres !</span>\n            </span>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-md-4 control-label\">Quantité</label>\n          <div class=\"col-md-8\">\n            <input type=\"number\" required min=\"2\" max=\"20\" name=\"quantite\" #quantite=\"ngModel\" [(ngModel)]=\"produit.quantite\" class=\"form-control\">\n            <span class=\"form-text\" *ngIf=\"!quantite.valid && (quantite.touched || quantite.dirty)\">\n              <span *ngIf=\"quantite.errors.required\">La Quantité est obligatoire !</span>\n            </span>\n          </div>\n        </div>\n        <button type=\"submit\" [disabled]=\"!f.valid\" class=\"btn btn-primary\">EDIT</button>\n      </form>\n      <div class=\"help-block\" *ngIf=\"produitFinal != null\">\n        <span class=\"label label-success\">Le produit a été bien modifié !</span>\n        <ul class=\"list-group\">\n          <li class=\"list-group-item\"> {{produitFinal.id}} </li>\n          <li class=\"list-group-item\"> {{produitFinal.designation}} </li>\n          <li class=\"list-group-item\"> {{produitFinal.prix}} </li>\n          <li class=\"list-group-item\"> {{produitFinal.quantite}} </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <ng-template #noConnect>\n    <p>Veuillez Vous connecter SVP </p>\n  </ng-template>"

/***/ }),

/***/ "./src/app/edit-produit/edit-produit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProduitComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_produit_service__ = __webpack_require__("./src/services/produit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_produit_model__ = __webpack_require__("./src/models/produit.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditProduitComponent = /** @class */ (function () {
    function EditProduitComponent(produitService, router, activedRoute) {
        var _this = this;
        this.produitService = produitService;
        this.router = router;
        this.activedRoute = activedRoute;
        this.id = activedRoute.snapshot.params['id'];
        this.produitService.getProduit(this.id).subscribe(function (donnees) {
            try {
                _this.produit = donnees;
            }
            catch (error) {
            }
        }, function (error) {
            console.error("Erreur !");
            _this.router.navigateByUrl("/new-produit");
        });
    }
    EditProduitComponent.prototype.ngOnInit = function () {
    };
    EditProduitComponent.prototype.editerProduit = function () {
        var _this = this;
        this.produitService.editProduit(this.id, this.produit).subscribe(function (donnees) {
            _this.produitFinal = donnees;
            _this.initialiser();
        }, function (error) {
            console.error("Réessayer plus tard !");
        });
    };
    EditProduitComponent.prototype.initialiser = function () {
        this.produit = new __WEBPACK_IMPORTED_MODULE_3__models_produit_model__["a" /* Produit */]();
    };
    EditProduitComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-produit',
            template: __webpack_require__("./src/app/edit-produit/edit-produit.component.html"),
            styles: [__webpack_require__("./src/app/edit-produit/edit-produit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_produit_service__["a" /* ProduitService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], EditProduitComponent);
    return EditProduitComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n\n  <div class=\"panel-heading\">\n    <h5 class=\"panel-title\">Authentifier</h5>\n  </div>\n\n  <div class=\"panel-body\">\n    <form #f=\"ngForm\" class=\"form-horizontal\" (ngSubmit)=\"authentifier(f.value)\">\n      <div class=\"form-group\">\n        <label class=\"control-label col-md-4\">Login</label>\n        <div class=\"col-md-8\">\n          <input type=\"text\" required minlength=\"3\" name=\"username\" #username=\"ngModel\" [(ngModel)]=\"user.username\" class=\"form-control\">\n          <span class=\"form-text\" *ngIf=\"!username.valid && (username.touched || username.dirty)\">\n            <span *ngIf=\"username.errors.required\">Le login est obligatoire !</span>\n            <span *ngIf=\"username.errors.minlength\">Le login doit avoir au moins 3 caractéres !</span>\n          </span>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-md-4\">Mot de passe</label>\n        <div class=\"col-md-8\">\n          <input type=\"password\" required minlength=\"3\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"user.password\" class=\"form-control\">\n          <span class=\"form-text\" *ngIf=\"!password.valid && (password.touched || password.dirty)\">\n            <span *ngIf=\"password.errors.required\">Le mot de passe est obligatoire !</span>\n            <span *ngIf=\"password.errors.minlength\">Le mot de passe doit avoir au moins 3 caractéres !</span>\n          </span>\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!f.valid\">Se Connecter</button>\n    </form>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model__ = __webpack_require__("./src/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentifier_service__ = __webpack_require__("./src/services/authentifier.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* User */]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.auth.viderToken();
    };
    LoginComponent.prototype.authentifier = function () {
        var _this = this;
        this.auth.login(this.user).subscribe(function (donnees) {
            _this.auth.saveToken(donnees.headers.get("Authorization"));
            _this.router.navigateByUrl("/new-produit");
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_authentifier_service__["a" /* AuthentificationService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/new-categorie/new-categorie.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new-categorie/new-categorie.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\" *ngIf=\"categorieService.isConnect(); else noConnect\">\n    <div class=\"panel-heading\">\n      <h5 class=\"panel-title\">Ajout Catégorie</h5>\n    </div>\n    <div class=\"panel-body\">\n      <form #f=\"ngForm\" (ngSubmit)=\"addCategorie(f.value)\" class=\"form-horizontal\">\n        <div class=\"form-group\">\n          <label class=\"col-md-4 control-label\">Libélle</label>\n          <div class=\"col-md-8\">\n            <input type=\"text\" required minlength=\"2\" name=\"libelle\" #libelle=\"ngModel\" [(ngModel)]=\"categorie.libelle\" class=\"form-control\">\n            <span class=\"form-text\" *ngIf=\"!libelle.valid && (libelle.touched || libelle.dirty)\">\n              <span *ngIf=\"libelle.errors.required\">Le Libélle est obligatoire !</span>\n              <span *ngIf=\"libelle.errors.minlength\">Le Libélle doit contenir au moins 2 caractéres !</span>\n            </span>\n          </div>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">ADD</button>\n      </form>\n      <div class=\"help-block\" *ngIf=\"categorieFinal != null\">\n        <span class=\"label label-success\">Le catégorie a été bien ajouté !</span>\n        <ul class=\"list-group\">\n          <li class=\"list-group-item\"> {{categorieFinal.id}} </li>\n          <li class=\"list-group-item\"> {{categorieFinal.libelle}} </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <ng-template #noConnect>\n    <p>Veuillez Vous connecter SVP </p>\n  </ng-template>"

/***/ }),

/***/ "./src/app/new-categorie/new-categorie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewCategorieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_categorie_service__ = __webpack_require__("./src/services/categorie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_categorie_model__ = __webpack_require__("./src/models/categorie.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewCategorieComponent = /** @class */ (function () {
    function NewCategorieComponent(categorieService) {
        this.categorieService = categorieService;
        this.categorie = new __WEBPACK_IMPORTED_MODULE_2__models_categorie_model__["a" /* Categorie */]();
    }
    NewCategorieComponent.prototype.ngOnInit = function () {
    };
    NewCategorieComponent.prototype.addCategorie = function () {
        var _this = this;
        this.categorieService.saveCategorie(this.categorie).subscribe(function (donnees) {
            _this.categorieFinal = donnees;
            _this.initialiser();
        }, function (error) {
            console.error("Réessayer plus tard !");
        });
    };
    NewCategorieComponent.prototype.initialiser = function () {
        this.categorie = new __WEBPACK_IMPORTED_MODULE_2__models_categorie_model__["a" /* Categorie */]();
    };
    NewCategorieComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-categorie',
            template: __webpack_require__("./src/app/new-categorie/new-categorie.component.html"),
            styles: [__webpack_require__("./src/app/new-categorie/new-categorie.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_categorie_service__["a" /* CategorieService */]])
    ], NewCategorieComponent);
    return NewCategorieComponent;
}());



/***/ }),

/***/ "./src/app/new-produit/new-produit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new-produit/new-produit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\" *ngIf=\"produitService.isConnect(); else noConnect\">\n  <div class=\"panel-heading\">\n    <h5 class=\"panel-title\">Ajout Produit</h5>\n  </div>\n  <div class=\"panel-body\">\n    <form #f=\"ngForm\" (ngSubmit)=\"addProduit(f.value)\" class=\"form-horizontal\">\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\">Désignation</label>\n        <div class=\"col-md-8\">\n          <input type=\"text\" required minlength=\"2\" name=\"designation\" #designation=\"ngModel\" [(ngModel)]=\"produit.designation\" class=\"form-control\">\n          <span class=\"form-text\" *ngIf=\"!designation.valid && (designation.touched || designation.dirty)\">\n            <span *ngIf=\"designation.errors.required\">La désignation est obligatoire !</span>\n            <span *ngIf=\"designation.errors.minlength\">La désignation doit contenir au moins 2 caractéres !</span>\n          </span>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\">Prix</label>\n        <div class=\"col-md-8\">\n          <input type=\"text\" pattern=\"[0-9]{3,6}\" required minlength=\"3\" maxlength=\"6\" name=\"prix\" #prix=\"ngModel\" [(ngModel)]=\"produit.prix\" class=\"form-control\">\n          <span class=\"form-text\" *ngIf=\"!prix.valid && (prix.touched || prix.dirty)\">\n            <span *ngIf=\"prix.errors.required\">Le prix est obligatoire !</span>\n            <span *ngIf=\"prix.errors.minlength\">Le prix doit contenir au moins 3 caractéres !</span>\n            <span *ngIf=\"prix.errors.maxlength\">Le prix doit contenir au moins 6 caractéres !</span>\n            <span *ngIf=\"prix.errors.pattern\">Le prix doit contenir uniquement des chiffres !</span>\n          </span>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\">Quantité</label>\n        <div class=\"col-md-8\">\n          <input type=\"number\" required min=\"2\" max=\"20\" name=\"quantite\" #quantite=\"ngModel\" [(ngModel)]=\"produit.quantite\" class=\"form-control\">\n          <span class=\"form-text\" *ngIf=\"!quantite.valid && (quantite.touched || quantite.dirty)\">\n            <span *ngIf=\"quantite.errors.required\">La Quantité est obligatoire !</span>\n          </span>\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">ADD</button>\n    </form>\n    <div class=\"help-block\" *ngIf=\"produitFinal != null\">\n      <span class=\"label label-success\">Le produit a été bien ajouté !</span>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\"> {{produitFinal.id}} </li>\n        <li class=\"list-group-item\"> {{produitFinal.designation}} </li>\n        <li class=\"list-group-item\"> {{produitFinal.prix}} </li>\n        <li class=\"list-group-item\"> {{produitFinal.quantite}} </li>\n      </ul>\n    </div>\n  </div>\n</div>\n<ng-template #noConnect>\n  <p>Veuillez Vous connecter SVP </p>\n</ng-template>"

/***/ }),

/***/ "./src/app/new-produit/new-produit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewProduitComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_produit_service__ = __webpack_require__("./src/services/produit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_produit_model__ = __webpack_require__("./src/models/produit.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewProduitComponent = /** @class */ (function () {
    function NewProduitComponent(produitService) {
        this.produitService = produitService;
        this.produit = new __WEBPACK_IMPORTED_MODULE_2__models_produit_model__["a" /* Produit */]();
    }
    NewProduitComponent.prototype.ngOnInit = function () {
    };
    NewProduitComponent.prototype.addProduit = function () {
        var _this = this;
        this.produitService.saveProduit(this.produit).subscribe(function (donnees) {
            _this.produitFinal = donnees;
            _this.initialiser();
        });
    };
    NewProduitComponent.prototype.initialiser = function () {
        this.produit = new __WEBPACK_IMPORTED_MODULE_2__models_produit_model__["a" /* Produit */]();
    };
    NewProduitComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-produit',
            template: __webpack_require__("./src/app/new-produit/new-produit.component.html"),
            styles: [__webpack_require__("./src/app/new-produit/new-produit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_produit_service__["a" /* ProduitService */]])
    ], NewProduitComponent);
    return NewProduitComponent;
}());



/***/ }),

/***/ "./src/app/produits/produits.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/produits/produits.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\" *ngIf=\"produitService.isConnect(); else isConnect\">\n  <div class=\"panel-heading\">\n    <h5 class=\"titre\">Liste Produit</h5>\n  </div>\n  <div class=\"panel-body\">\n    <table class=\"table table-bordered table-condensed table-striped\">\n      <tr>\n        <th>ID</th>\n        <th>DESIGNATION</th>\n        <th>PRIX</th>\n        <th>QUANTITE</th>\n      </tr>\n      <tr *ngFor=\"let p of produits?.content\">\n        <td> {{p.id}} </td>\n        <td> {{p.designation}} </td>\n        <td> {{p.prix}} </td>\n        <td> {{p.quantite}} </td>\n        <td *ngIf=\"produitService.isAdmin()\"> \n          <a (click)=\"modifier(p.id)\" class=\"clickable\">Modifier</a> \n        </td>\n        <td *ngIf=\"produitService.isAdmin()\"> \n          <a (click)=\"supprimer(p.id)\" class=\"clickable\">Supprimer</a> \n        </td>\n      </tr>\n    </table>\n    <ul class=\"nav nav-pills\">\n      <li [ngClass]=\"{active:i==page}\" *ngFor=\"let p of pages; let i = index\"> \n        <a class=\"clickable\" (click)=\"nextPage(i)\">{{i+1}}</a>\n      </li>\n    </ul>\n  </div>\n</div>\n<ng-template #noConnect>\n  <p>Veuillez Vous connecter SVP </p>\n</ng-template>"

/***/ }),

/***/ "./src/app/produits/produits.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProduitsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_produit_service__ = __webpack_require__("./src/services/produit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProduitsComponent = /** @class */ (function () {
    function ProduitsComponent(produitService, router) {
        this.produitService = produitService;
        this.router = router;
        this.taille = 7;
        this.page = 0;
    }
    ProduitsComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    ProduitsComponent.prototype.loadData = function () {
        var _this = this;
        this.produitService.getAllProduitPage(this.page, this.taille).subscribe(function (donnees) {
            _this.produits = donnees;
            _this.pages = new Array(_this.produits.totalPages);
        }, function (error) {
            console.error(error);
        });
    };
    ProduitsComponent.prototype.modifier = function (id) {
        this.router.navigateByUrl("/edit-produit/" + id);
    };
    ProduitsComponent.prototype.nextPage = function (idPage) {
        this.page = idPage;
        this.loadData();
    };
    ProduitsComponent.prototype.supprimer = function (id) {
        if (confirm('Voulez-vous vraimant supprimer !')) {
            this.produitService.deleteProduit(id).subscribe();
            this.loadData();
        }
    };
    ProduitsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-produits',
            template: __webpack_require__("./src/app/produits/produits.component.html"),
            styles: [__webpack_require__("./src/app/produits/produits.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_produit_service__["a" /* ProduitService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ProduitsComponent);
    return ProduitsComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ".erreur{\r\n    color: red;\r\n    text-align: center;\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">\n      <h5 class=\"panel-title\">Créer un compte</h5>\n    </div>\n    <div class=\"panel-body\">\n      <form #f=\"ngForm\" (ngSubmit)=\"registerUser(f.value)\" class=\"form-horizontal\">\n        <div class=\"form-group\">\n          <label class=\"col-md-4 control-label\">Login</label>\n          <div class=\"col-md-8\">\n            <input type=\"text\" required minlength=\"2\" name=\"username\" #username=\"ngModel\" [(ngModel)]=\"register.username\" class=\"form-control\">\n            <span class=\"form-text\" *ngIf=\"!username.valid && (username.touched || username.dirty)\">\n              <span *ngIf=\"username.errors.required\">Le Login est obligatoire !</span>\n              <span *ngIf=\"username.errors.minlength\">Le login doit contenir au moins 2 caractéres !</span>\n            </span>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-md-4 control-label\">Mot de passe</label>\n          <div class=\"col-md-8\">\n            <input type=\"password\" required minlength=\"3\" maxlength=\"15\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"register.password\" class=\"form-control\">\n            <span class=\"form-text\" *ngIf=\"!password && (password.touched || password.dirty)\">\n              <span *ngIf=\"password.errors.required\">Le mot de passe est obligatoire !</span>\n              <span *ngIf=\"password.errors.minlength\">Le mot de passe doit contenir au moins 3 caractéres !</span>\n              <span *ngIf=\"password.errors.maxlength\">Le mot de passe doit contenir au moins 15 caractéres !</span>\n            </span>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-md-4 control-label\">confirmation mot de passe</label>\n          <div class=\"col-md-8\">\n            <input type=\"password\" required minlength=\"3\" maxlength=\"15\" name=\"password\" #verifPassword=\"ngModel\" [(ngModel)]=\"register.verifPassword\" class=\"form-control\">\n            <span class=\"form-text\" *ngIf=\"!verifPassword && (verifPassword.touched || verifPassword.dirty)\">\n              <span *ngIf=\"verifPassword.errors.required\">Le mot de passe est obligatoire !</span>\n              <span *ngIf=\"verifPassword.errors.minlength\">Le mot de passe doit contenir au moins 3 caractéres !</span>\n              <span *ngIf=\"verifPassword.errors.maxlength\">Le mot de passe doit contenir au moins 15 caractéres !</span>\n            </span>\n          </div>\n        </div>\n        <button type=\"submit\" [disabled]=\"!f.valid\" class=\"btn btn-primary\">ADD</button>\n      </form>\n      <div class=\"help-block\">\n        <p *ngIf=\"registerFinal != null;else erreur\">\n          <span class=\"label label-success\">{{messageSucces}}</span>\n        </p>\n        <ng-template #erreur> \n          <span class=\"erreur\">{{messageErreur}}</span>\n        </ng-template>\n      </div>\n  </div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_register_service__ = __webpack_require__("./src/services/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_register_model__ = __webpack_require__("./src/models/register.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(registerService) {
        this.registerService = registerService;
        this.register = new __WEBPACK_IMPORTED_MODULE_2__models_register_model__["a" /* Register */]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerUser = function () {
        var _this = this;
        this.registerService.register(this.register).subscribe(function (donnees) {
            _this.registerFinal = donnees;
            _this.messageSucces = "L'utilisateur a été bien ajouté !";
        }, function (error) {
            console.error(error.message);
            _this.messageErreur = error.error.message;
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_register_service__["a" /* RegisterService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/models/categorie.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Categorie; });
var Categorie = /** @class */ (function () {
    function Categorie() {
        this.id = 0;
        this.libelle = "";
    }
    return Categorie;
}());



/***/ }),

/***/ "./src/models/produit.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Produit; });
var Produit = /** @class */ (function () {
    function Produit() {
        this.id = 0;
        this.designation = "";
        this.prix = 0;
        this.quantite = 0;
    }
    return Produit;
}());



/***/ }),

/***/ "./src/models/register.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register; });
var Register = /** @class */ (function () {
    function Register() {
        this.username = "";
        this.password = "";
        this.verifPassword = "";
    }
    return Register;
}());



/***/ }),

/***/ "./src/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.username = "";
        this.password = "";
    }
    return User;
}());



/***/ }),

/***/ "./src/services/authentifier.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthentificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PREFIX_TOKEN = "Bearer ";
var AuthentificationService = /** @class */ (function () {
    function AuthentificationService(http) {
        this.http = http;
    }
    AuthentificationService.prototype.login = function (user) {
        return this.http.post("http://localhost:8080/login", user, { observe: "response" });
    };
    AuthentificationService.prototype.saveToken = function (jwtToken) {
        localStorage.setItem("token", jwtToken);
        this.roles = new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["JwtHelper"]().decodeToken(jwtToken).roles;
    };
    AuthentificationService.prototype.getJwtToken = function () {
        return localStorage.getItem("token");
    };
    AuthentificationService.prototype.getPrefixToken = function () {
        return PREFIX_TOKEN;
    };
    AuthentificationService.prototype.viderToken = function () {
        localStorage.removeItem("token");
    };
    AuthentificationService.prototype.isAdmin = function () {
        for (var _i = 0, _a = this.roles; _i < _a.length; _i++) {
            var r = _a[_i];
            if (r.authority == "ADMIN")
                return true;
        }
        return false;
    };
    AuthentificationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthentificationService);
    return AuthentificationService;
}());



/***/ }),

/***/ "./src/services/categorie.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategorieService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentifier_service__ = __webpack_require__("./src/services/authentifier.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategorieService = /** @class */ (function () {
    function CategorieService(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    CategorieService.prototype.getAllCategorie = function () {
        return this.http.get("http://localhost:8080/allCategorie", { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': this.auth.getPrefixToken() + this.auth.getJwtToken() }) });
    };
    CategorieService.prototype.getAllCategoriePage = function (page, taille) {
        return this.http.get("http://localhost:8080/allCategoriePage?page=" + page + "&taille=" + taille, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': this.auth.getPrefixToken() + this.auth.getJwtToken() }) });
    };
    CategorieService.prototype.getCategorie = function (id) {
        return this.http.get("http://localhost:8080/findCategorie/" + id, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': this.auth.getPrefixToken() + this.auth.getJwtToken() }) });
    };
    CategorieService.prototype.deleteCategorie = function (id) {
        return this.http.get("http://localhost:8080/deleteCategorie/" + id, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': this.auth.getPrefixToken() + this.auth.getJwtToken() }) });
    };
    CategorieService.prototype.saveCategorie = function (categorie) {
        return this.http.post("http://localhost:8080/addCategorie", categorie, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': this.auth.getPrefixToken() + this.auth.getJwtToken() }) });
    };
    CategorieService.prototype.editCategorie = function (id, categorie) {
        return this.http.post("http://localhost:8080/editCategorie/" + id, categorie, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': this.auth.getPrefixToken() + this.auth.getJwtToken() }) });
    };
    CategorieService.prototype.isAdmin = function () {
        return this.auth.isAdmin();
    };
    CategorieService.prototype.isConnect = function () {
        if (this.auth.getJwtToken() != null) {
            return true;
        }
        return false;
    };
    CategorieService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__authentifier_service__["a" /* AuthentificationService */]])
    ], CategorieService);
    return CategorieService;
}());



/***/ }),

/***/ "./src/services/produit.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProduitService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentifier_service__ = __webpack_require__("./src/services/authentifier.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProduitService = /** @class */ (function () {
    function ProduitService(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    ProduitService.prototype.getAllProduit = function () {
        return this.http.get("http://localhost:8080/allProduit", { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': this.auth.getPrefixToken() + this.auth.getJwtToken() }) });
    };
    ProduitService.prototype.getAllProduitPage = function (page, taille) {
        return this.http.get("http://localhost:8080/allProduitPage?page=" + page + "&taille=" + taille, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': this.auth.getPrefixToken() + this.auth.getJwtToken() }) });
    };
    ProduitService.prototype.saveProduit = function (produit) {
        return this.http.post("http://localhost:8080/addProduit", produit, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': this.auth.getPrefixToken() + this.auth.getJwtToken() }) });
    };
    ProduitService.prototype.getProduit = function (id) {
        return this.http.get("http://localhost:8080/findProduit/" + id, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': this.auth.getPrefixToken() + this.auth.getJwtToken() }) });
    };
    ProduitService.prototype.deleteProduit = function (id) {
        return this.http.get("http://localhost:8080/deleteProduit/" + id, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': this.auth.getPrefixToken() + this.auth.getJwtToken() }) });
    };
    ProduitService.prototype.editProduit = function (id, produit) {
        return this.http.post("http://localhost:8080/editProduit/" + id, produit, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': this.auth.getPrefixToken() + this.auth.getJwtToken() }) });
    };
    ProduitService.prototype.isAdmin = function () {
        return this.auth.isAdmin();
    };
    ProduitService.prototype.isConnect = function () {
        if (this.auth.getJwtToken() != null) {
            return true;
        }
        return false;
    };
    ProduitService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__authentifier_service__["a" /* AuthentificationService */]])
    ], ProduitService);
    return ProduitService;
}());



/***/ }),

/***/ "./src/services/register.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
    }
    RegisterService.prototype.register = function (register) {
        return this.http.post("http://localhost:8080/register", register);
    };
    RegisterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map