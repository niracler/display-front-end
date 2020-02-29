const body = $('body');
const html = $('html');

// {version, layout, navheaderBg, headerBg, sidebarStyle, sidebarBg, sidebarPosition, headerPosition, containerLayout, direction}

function QuixSettings(obj) {
    this.version = obj.version || "light";
    this.layout = obj.layout || "vertical";
    this.navheaderBg = obj.navheaderBg || "color_1";
    this.headerBg = obj.headerBg || "color_1";
    this.sidebarStyle = obj.sidebarStyle || "full";
    this.sidebarBg = obj.sidebarBg || "color_1";
    this.sidebarPosition = obj.sidebarPosition || "static";
    this.headerPosition = obj.headerPosition || "static";
    this.containerLayout = obj.containerLayout || "wide";
    this.direction = obj.direction || "ltr";

    this.manageVersion();
    this.manageLayout();
    this.manageNavHeaderBg();
    this.manageHeaderBg();
    this.manageSidebarStyle();
    this.manageSidebarBg();
    this.manageSidebarPosition();
    this.manageHeaderPosition();
    this.manageContainerLayout();
    this.manageRtlLayout();
    this.manageResponsiveSidebar();

}

QuixSettings.prototype.manageVersion = function () {
    switch (this.version) {
        case "light":
            body.attr("data-theme-version", "light");
            break;
        case "dark":
            body.attr("data-theme-version", "dark");
            break;
        default:
            body.attr("data-theme-version", "light");
    }
};

QuixSettings.prototype.manageLayout = function () {
    switch (this.layout) {
        case "horizontal":
            this.sidebarStyle === "overlay" ? body.attr("data-sidebar-style", "full") : body.attr("data-sidebar-style", this.sidebarStyle);
            body.attr("data-layout", "horizontal");
            break;
        case "vertical":
            body.attr("data-layout", "vertical");
            break;
        default:
            body.attr("data-layout", "vertical");
    }
};

QuixSettings.prototype.manageNavHeaderBg = function () {
    switch (this.navheaderBg) {
        case "color_1":
            body.attr("data-nav-headerbg", "color_1");
            break;
        case "color_2":
            body.attr("data-nav-headerbg", "color_2");
            break;
        case "color_3":
            body.attr("data-nav-headerbg", "color_3");
            break;
        case "color_4":
            body.attr("data-nav-headerbg", "color_4");
            break;
        case "color_5":
            body.attr("data-nav-headerbg", "color_5");
            break;
        case "color_6":
            body.attr("data-nav-headerbg", "color_6");
            break;
        case "color_7":
            body.attr("data-nav-headerbg", "color_7");
            break;
        case "color_8":
            body.attr("data-nav-headerbg", "color_8");
            break;
        case "color_9":
            body.attr("data-nav-headerbg", "color_9");
            break;
        case "color_10":
            body.attr("data-nav-headerbg", "color_10");
            break;
        default:
            body.attr("data-nav-headerbg", "color_1");
    }
};

QuixSettings.prototype.manageHeaderBg = function () {
    switch (this.headerBg) {
        case "color_1":
            body.attr("data-headerbg", "color_1");
            break;
        case "color_2":
            body.attr("data-headerbg", "color_2");
            break;
        case "color_3":
            body.attr("data-headerbg", "color_3");
            break;
        case "color_4":
            body.attr("data-headerbg", "color_4");
            break;
        case "color_5":
            body.attr("data-headerbg", "color_5");
            break;
        case "color_6":
            body.attr("data-headerbg", "color_6");
            break;
        case "color_7":
            body.attr("data-headerbg", "color_7");
            break;
        case "color_8":
            body.attr("data-headerbg", "color_8");
            break;
        case "color_9":
            body.attr("data-headerbg", "color_9");
            break;
        case "color_10":
            body.attr("data-headerbg", "color_10");
            break;
        default:
            body.attr("data-headerbg", "color_1");
    }
};

QuixSettings.prototype.manageSidebarStyle = function () {
    switch (this.sidebarStyle) {
        case "full":
            body.attr("data-sidebar-style", "full");
            break;
        case "mini":
            body.attr("data-sidebar-style", "mini");
            break;
        case "compact":
            body.attr("data-sidebar-style", "compact");
            break;
        case "overlay":
            this.layout === "horizontal" ? body.attr("data-sidebar-style", "full") : body.attr("data-sidebar-style", "overlay");
            break;
        default:
            body.attr("data-sidebar-style", "full");
    }
};

QuixSettings.prototype.manageSidebarBg = function () {
    switch (this.sidebarBg) {
        case "color_1":
            body.attr("data-sibebarbg", "color_1");
            break;
        case "color_2":
            body.attr("data-sibebarbg", "color_2");
            break;
        case "color_3":
            body.attr("data-sibebarbg", "color_3");
            break;
        case "color_4":
            body.attr("data-sibebarbg", "color_4");
            break;
        case "color_5":
            body.attr("data-sibebarbg", "color_5");
            break;
        case "color_6":
            body.attr("data-sibebarbg", "color_6");
            break;
        case "color_7":
            body.attr("data-sibebarbg", "color_7");
            break;
        case "color_8":
            body.attr("data-sibebarbg", "color_8");
            break;
        case "color_9":
            body.attr("data-sibebarbg", "color_9");
            break;
        case "color_10":
            body.attr("data-sibebarbg", "color_10");
            break;
        default:
            body.attr("data-sibebarbg", "color_1");
    }
};

QuixSettings.prototype.manageSidebarPosition = function () {
    switch (this.sidebarPosition) {
        case "fixed":
            this.sidebarStyle === "overlay" && this.layout === "vertical" ? body.attr("data-sidebar-position", "static") : body.attr("data-sidebar-position", "fixed");
            break;
        case "static":
            body.attr("data-sidebar-position", "static");
            break;
        default:
            body.attr("data-sidebar-position", "static");
    }
};

QuixSettings.prototype.manageHeaderPosition = function () {
    switch (this.headerPosition) {
        case "fixed":
            body.attr("data-header-position", "fixed");
            break;
        case "static":
            body.attr("data-header-position", "static");
            break;
        default:
            body.attr("data-header-position", "static");
    }
};

QuixSettings.prototype.manageContainerLayout = function () {
    switch (this.containerLayout) {
        case "boxed":
            if (this.layout === "vertical" && this.sidebarStyle === "full") {
                body.attr("data-sidebar-style", "overlay");
            }
            body.attr("data-container", "boxed");
            break;
        case "wide":
            body.attr("data-container", "wide");
            break;
        default:
            body.attr("data-container", "wide");
    }
};

QuixSettings.prototype.manageRtlLayout = function () {
    switch (this.direction) {
        case "rtl":
            html.attr("dir", "rtl");
            html.addClass('rtl');
            body.attr("direction", "rtl");
            break;
        case "ltr":
            html.attr("dir", "ltr");
            html.removeClass('rtl');
            body.attr("direction", "ltr");
            break;
        default:
            html.attr("dir", "ltr");
            body.attr("direction", "ltr");
    }
};

QuixSettings.prototype.manageResponsiveSidebar = function () {
    const innerWidth = $(window).innerWidth();
    if (innerWidth < 1200) {
        body.attr("data-layout", "vertical");
        body.attr("data-container", "wide");
    }

    if (innerWidth > 767 && innerWidth < 1200) {
        body.attr("data-sidebar-style", "mini");
    }

    if (innerWidth < 768) {
        body.attr("data-sidebar-style", "overlay");
    }
};

(function($) {
    "use strict";

    new QuixSettings({
        version: "light", //2 options "light" and "dark"
        layout: "vertical", //2 options, "vertical" and "horizontal"
        navheaderBg: "color_1", //have 10 options, "color_1" to "color_10"
        headerBg: "color_1", //have 10 options, "color_1" to "color_10"
        sidebarStyle: "vertical", //defines how sidebar should look like, options are: "full", "compact", "mini" and "overlay". If layout is "horizontal", sidebarStyle won't take "overlay" argument anymore, this will turn into "full" automatically!
        sidebarBg: "color_1", //have 10 options, "color_1" to "color_10"
        sidebarPosition: "static", //have two options, "static" and "fixed"
        headerPosition: "static", //have two options, "static" and "fixed"
        containerLayout: "wide",  //"boxed" and  "wide". If layout "vertical" and containerLayout "boxed", sidebarStyle will automatically turn into "overlay".
        direction: "ltr" //"ltr" = Left to Right; "rtl" = Right to Left
    });


})(jQuery);
