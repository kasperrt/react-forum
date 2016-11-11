"use strict";
var PostsService = (function () {
    function PostsService() {
    }
    PostsService.prototype.getPosts = function () {
        return [
            { heading: "somepost", content: "somecontent" },
            { heading: "somepost2", content: "somecontent2" },
            { heading: "somepost3", content: "somecontent3" },
            { heading: "somepost4", content: "somecontent4" },
            { heading: "somepost5", content: "somecontent5" },
            { heading: "somepost6", content: "somecontent6" }
        ];
    };
    return PostsService;
}());
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map