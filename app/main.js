/**
 * Created by donghoon on 2016. 7. 11..
 */

(function (app) {
    document.addEventListener('DOMContentLoaded', function () {
        ng.platformBrowserDynamic.bootstrap(app.AppComponent);
    });
})(window.app || (window.app = {}));
