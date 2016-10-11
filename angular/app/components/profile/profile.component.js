"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
//import { profile } from './mockdata.js';
var ProfileComponent = (function () {
    function ProfileComponent() {
        // Typescript can't read this object, so it has to be rewritten somehow
        this.userprofile = [
            "name", "Brukernavn",
            "image_src", "http://i.imgur.com/izzpeRb.jpg",
            "created_date", "01.10.2016",
            "num_posts", "10",
            "num_comments", "15",
            "posts", {
                "heading": "Randompost",
                "content": "randompost content",
            }
        ];
    }
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'profile',
            template: "\n\t  <div *ngIf='userprofile'>\n      <div class='top'>\n        <h2> Min side! </h2>\n        <a routerLink=\"\" class=\"logOutButton\">Logg ut</a>\n      </div>\n      <div class='row'>\n        <img src={{userprofile.image_src}} alt='profile image'/>\n        <div class='profileInfo'>\n          Navn: {{userprofile.name}}\n          Bruker opprettet: {{userprofile.created_date}}\n          <br>\n          Antall innlegg skrevet: {{userprofile.num_posts}}\n          Antall kommentarer skrevet: {{userprofile.num_comments}}\n        </div>\n      </div>\n      <div class='row'>\n        <div class='profileInfo'>\n          <h2> Siste innlegg </h2>\n          <div *ngFor='let post of userprofile.posts'>\n          {{post.heading}}\n          </div>\n        </div>\n        <div class='profileInfo'>\n          <h2> Bidrag per m\u00E5ned </h2>\n          Graf\n        </div>\n      </div>\n    </div>\n    \n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map