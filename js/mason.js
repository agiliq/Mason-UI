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

    var common = ["Database", "Admin", "South"],
        forms = ["crispy-forms", "parsley", "uni-form"],
        testing = ["nose", "coverage", "milkman"],
        deployment = ["farbic", "salt", "ainsible"],
        build = ["jenkins", "travis", "circle-ci"];
    _.templateSettings = {
      interpolate : /\{\{(.+?)\}\}/g
    };
    var appTmpl = _.template('<label class="checkbox"><input checked="checked" type="checkbox" value="{{ appName }}">{{ appName }}</label>')

    _(common).each(function(appName){
        $("#common").append(appTmpl({appName: appName}));
    });

    _(forms).each(function(appName){
        $("#forms").append(appTmpl({appName: appName}));
    });

    _(testing).each(function(appName){
        $("#testing").append(appTmpl({appName: appName}));
    });

    _(deployment).each(function(appName){
        $("#deployment").append(appTmpl({appName: appName}));
    });

    _(build).each(function(appName){
        $("#build").append(appTmpl({appName: appName}));
    });


});