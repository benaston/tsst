;(function(app) {

    var nesting = 0,
        DEFAULT_ASYNC_TIMEOUT_MS = 1000;

    app.describe = function describe(name, fn) {
        reporter.log(name, nesting);
        nesting++;
        fn();
        nesting--;
    };

    app.it = function it(name, fn) {
        try {
            if (fn.length === 1) { // Arity indicates whether async.
                var timeoutId;

                timeoutId = setTimeout(function() {
                    throw 'done not called within expected timeframe.';
                }, DEFAULT_ASYNC_TIMEOUT_MS);

                fn(function() {
                    clearTimeout(timeoutId);
                });
            } else {
                fn();
            }
            reporter.pass(name, nesting);
        } catch (e) {
            reporter.fail(name, nesting);
            error(e);
        }
    };

    app.expect = function expect(actual) {
        return {
            toBe: function toBe(expected) {
                if (actual !== expected) {
                    throw 'expected ' + actual + ' to be ' + expected;
                }
            }
        };
    };

}(tsst))
