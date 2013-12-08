$(document).ready(function(){
    "use strict";

    var allApps = [
            ["common", ["Database", "Admin", "South"]],
            ["forms", ["crispy-forms", "parsley", "uni-form"]],
            ["testing", ["nose", "coverage", "milkman"]],
            ["deployment", ["farbic", "salt", "ainsible"]],
            ["build", ["jenkins", "travis", "circle-ci"]],
            ["admin", ["Grapelli", "admin2"]],
            ["debug", ["ipdb", "debug_toolbar", "sentry", "django_extensions"]],
            ["api", ["piston", "tastypie", "rest_framework"]],
            ["auth", ["guardian", "userena", "secure_login", "social_auth"]],
            ["cms", ["django_cms", "fein_cms", "mezzanine"]],
            ["misc", ["merchant", "disqus",]],

        ];

    //This gets us django style vars in _.js templates
    _.templateSettings = {
      interpolate : /\{\{(.+?)\}\}/g
    };
    var appTmpl = _.template($("#appTmpl").html());
    var linkTmpl = _.template($("#linkTmpl").html());
    var appTypeTmpl = _.template($("#appTypeTmpl").html());

    _(allApps).each(function(appList){
        var appType = appList[0],
            apps = appList[1];
        $("#top-nav").append(linkTmpl({appType: appType}));
        $("#mason-form").append(appTypeTmpl({appType: appType}));
        _(apps).each(function(appName){
            $("#"+appType).append(appTmpl({appName: appName}));
        });
    });

});
