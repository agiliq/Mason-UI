$(document).ready(function(){
    "use strict";

    var allApps = [
            ["common", [{name: "Database",
                        checked: true},
                        {name: "Admin",
                        checked: true},
                        {name: "South",
                        checked: true}]],
            ["forms", [{name: "crispy-forms",
                        checked: true},
                       {name: "parsley",
                        checked: true},
                       {name: "uni-form"}]],
            ["testing", [{name: "nose",
                          checked: true},
                        {name: "coverage",
                         checked: true},
                        {name: "milkman"}]],
            ["deployment", [{name: "farbic",
                             checked: true},
                            {name: "salt"},
                            {name: "ainsible"}]],
            ["build", [{name: "jenkins"},
                       {name: "travis",
                        checked: true},
                       {name: "circle-ci"}]],
            ["admin", [{name: "Grapelli"},
                       {name: "admin2"}]],
            ["debug", [{name: "ipdb",
                        checked: true},
                      {name: "debug_toolbar",
                       checked: true},
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
      interpolate: /\{\{(.+?)\}\}/g,
      evaluate: /\{\%(.+?)\%\}/g,
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
    $(document).foundation().foundation('topbar');
    $(document).on("click touchstart", "a.select-none", function(e){
        $(this).closest(".row").find("input[type=checkbox]").prop("checked", false);
        e.preventDefault();
    });
    $(document).on("click touchstart", "a.select-all", function(e){
        $(this).closest(".row").find("input[type=checkbox]").prop("checked", true);
        e.preventDefault();
    });

    $(document).on("click touchstart", "a.select-default", function(e){
        var appType = $(this).closest(".row").data("name");
        var apps = _.find(allApps, function(el){
          return el[0]===appType
        });
        $("#"+appType).html("");
        _(apps[1]).each(function(app){
            $("#"+appType).append(appTmpl({app: app}));
        });
        e.preventDefault();
    });

});
