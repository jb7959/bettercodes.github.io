/**
 * Created by donghoon on 2016. 7. 11..
 */

(function (app) {
    app.AppComponent =
        ng.core.Component({
            selector: 'my-app',
            templateUrl: "bettercode_index.html"
        })
            .Class({
                constructor: function () {
                }
            });
})(window.app || (window.app = {}));