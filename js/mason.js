$(document).ready(function(){
    "use strict"
    /*
    Database ✓
    Admin ✓
    South ✓
    Django Debug Toolbar ✓
    Fabric ✓
    Sentry ✓
    Parsley ✓
    Travis ✓
    Merchant
    Nose
    Piston
    Tastypie
    Rest-framework
    Userena
    Guardian
    Django-CMS
    Fein-CMS
    Mezzanine
    Disqus ✓
    Django-Extensions
    Grapelli ✓
    uni-form
    crispy-forms ✓
    */


    var allApps = [
            ["common", ["Database", "Admin", "South"]],
            ["forms", ["crispy-forms", "parsley", "uni-form"]],
            ["testing", ["nose", "coverage", "milkman"]],
            ["deployment", ["farbic", "salt", "ainsible"]],
            ["build", ["jenkins", "travis", "circle-ci"]],
            ["admin", ["Grapelli", "admin2"]],
            ["debug", ["ipdb", "debug_toolbar", "sentry", "django_extensions"]],
            ["api", ["piston", "tastypie", "rest_framework"]],
            ["auth", ["guardian", "userena", "secure_login"]]

        ]

    var appTypes = ["common", "forms", "testing", "deployment", "build"]

    //This gets us django style vars in _.js templates
    _.templateSettings = {
      interpolate : /\{\{(.+?)\}\}/g
    };
    var appTmpl = _.template('<label class="checkbox"><input checked="checked" type="checkbox" value="{{ appName }}">{{ appName }}</label>')
    var linkTmpl = _.template('<li><a href="#{{ appType }}" class="btn"><i class="icon-chevron-right"></i>{{ appType }}</a></li>');
    var appTypeTmpl = _.template('<h2>{{ appType }}</h2><section id="{{ appType }}" class="row"><a name="#{{ appType }}"></a></section>');

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
