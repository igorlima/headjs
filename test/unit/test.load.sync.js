module('head.load.sync.js');

var isAsync = head.isAsync;
function toggleAsync() {
    if (isAsync === head.isAsync) {
        head.isAsync = function () {
            return false;
        };
    } else {
        head.isAsync = isAsync;
    }
}

asyncTest("leaflet, intro.js (trigger via callback)", function() {
    expect(2);

    toggleAsync();
    head.js(
        "http://cdn.leafletjs.com/leaflet-0.5.1/leaflet.js",
        "https://raw.github.com/usablica/intro.js/v0.2.1/intro.js",


        function() {

            ok(!!L, "Callback: leaflet");
            ok(!!introJs, "Callback: introJs");

            start();
        }
    );
    toggleAsync();

});
