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
            ["build", ["jenkins", "travis", "circle-ci"]]
        ]

    var appTypes = ["common", "forms", "testing", "deployment", "build"]

    //This gets us django style vars in _.js templates
    _.templateSettings = {
      interpolate : /\{\{(.+?)\}\}/g
    };
    var appTmpl = _.template('<label class="checkbox"><input checked="checked" type="checkbox" value="{{ appName }}">{{ appName }}</label>')
    var linkTmpl = _.template('<li><a href="#{{ appType }}" class="btn"><i class="icon-chevron-right"></i>{{ appType }}</a></li>');

    _(allApps).each(function(appList){
        var appType = appList[0],
            apps = appList[1];
        $("#top-nav").append(linkTmpl({appType: appType}));
        _(apps).each(function(appName){
            $("#"+appType).append(appTmpl({appName: appName}));
        });
    });

});
