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
    var appTmpl = _.template('<div><input checked="checked" type="checkbox" value="{{ appName }}" name="app" id="id_{{ appName }}"><label class="checkbox" for="id_{{ appName }}">{{ appName }}</label></div>');
    var linkTmpl = _.template('<li><a href="#{{ appType }}" class="btn"><i class="icon-chevron-right"></i>{{ appType }}</a></li>');
    var appTypeTmpl = _.template('<section id="{{ appType }}" class="row"><h2>{{ appType }}</h2><a name="#{{ appType }}"></a></section>');

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
