"use strict";
var ProfileService = (function () {
    function ProfileService() {
    }
    ProfileService.prototype.getProfiles = function () {
        return {
            name: "Brukernavn",
            image_src: "http://i.imgur.com/izzpeRb.jpg",
            created_date: "01.10.2016",
            num_posts: "10",
            num_comments: "15",
            posts: [
                { heading: "somepost", content: "somecontent" },
                { heading: "somepost2", content: "somecontent2" }
            ]
        };
    };
    return ProfileService;
}());
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map