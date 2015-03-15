;(function(app) {

    function log(value) {
        console.log(nesting.join('') + value);
    }

    function logPass(value) {
        console.log('%c' + nesting.join('') + '\u2713 ' + value, 'color: green');
    }

    function logFail(value) {
        console.log('%c' + nesting.join('') + '\u2717 ' + value, 'color: red');
    }

    function error(value) {
        console.error(nesting.join('') + value);
    }

    tsst.consoleReporter = { 
    	log: log, 
    	error: error,
    	logPass: logPass,
    	logFail: logFail
    };

} (tsst))