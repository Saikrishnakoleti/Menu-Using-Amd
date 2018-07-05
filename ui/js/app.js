requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
        "app": "../app",
        "jquery": "../../scripts/vendor/jquery/3.3.1/jquery",
        "bootstrap": "../../scripts/vendor/bootstrap/4.0.0/bootstrap.bundle",
        "popper": "../../scripts/vendor/popper/umd/popper",
        "backbone": "../../scripts/vendor/backbone/backbone-min",
        "underscore": "../../scripts/vendor/underscore/underscore-min",
        "requirejs-text": "../../scripts/vendor/requirejs-text/text"
    },
    "shim": {
        "bootstrap": ["jquery", "popper"]
    }
});

requirejs(["app/main"]);