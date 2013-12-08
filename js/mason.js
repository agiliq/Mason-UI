$(document).ready(function(){
    "use strict";

    var allApps = [
            ["common", [{name: "Database"},
                        {name: "Admin"},
                        {name: "South"}]],
            ["forms", [{name: "crispy-forms"},
                       {name: "parsley"},
                       {name: "uni-form"}]],
            ["testing", [{name: "nose"},
                        {name: "coverage"},
                        {name: "milkman"}]],
            ["deployment", [{name: "farbic"},
                            {name: "salt"},
                            {name: "ainsible"}]],
            ["build", [{name: "jenkins"},
                       {name: "travis"},
                       {name: "circle-ci"}]],
            ["admin", [{name: "Grapelli"},
                       {name: "admin2"}]],
            ["debug", [{name: "ipdb"},
                      {name: "debug_toolbar"},
                      {name: "sentry"},
                      {name: "django_extensions"}]],
            ["api", [{name: "piston"},
                    {name: "tastypie"},
                    {name: "rest_framework"}]],
            ["auth", [{name: "guardian"},
                      {name: "userena"},
                      {name: "secure_login"},
                      {name: "social_auth"}]],
            ["cms", [{name: "django_cms"},
                     {name: "fein_cms"},
                     {name: "mezzanine"}]],
            ["misc", [{name: "merchant"},
                      {name: "disqus"},]],

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
        _(apps).each(function(app){
            $("#"+appType).append(appTmpl({app: app}));
        });
    });
    $(document).foundation().foundation('topbar');;

});
