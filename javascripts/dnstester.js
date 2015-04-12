/*!
 * DNSTester.js 0.0.35
 * https://github.com/cnbeining/DNSTester.js
 * http://www.cnbeining.com/
 *
 * Includes jQuery
 * http://jquery.com/
 * 
 * Copyright 2015 Beining
 * Released under the GNU GENERAL PUBLIC LICENSE Version 2
 * https://github.com/cnbeining/DNSTester.js/blob/master/LICENSE
 *
 */
var COUNT = 0;
var STARTTIME = (new Date).getTime();
var DOMAIN = ".baidu.com/"; //Change me in caller
var MAX_COUNT = 50000;  //Change me in caller
var TPS = 100;  //Change me in caller
var TIMERID = 0; //To stop the test
function makeid_old(length)
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < length; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}
function makeid_new(len) {
    //Only avalable in new browsers
    var arr = new Uint8Array((len || 40) / 2);
    window.crypto.getRandomValues(arr);
    text = [].map.call(arr, function(n) { return n.toString(16); }).join("");
    return text;
}
makeid = makeid_new; //asserting
try {
    test_msg = makeid(5)
}
catch(err) {
    console.log("New function not supported! " + err);
    makeid = makeid_old;
}
function r_send2() {
    if ((MAX_COUNT < 1 || COUNT >= MAX_COUNT) != true) {
          get("https://" + makeid(Math.floor((Math.random() * 64) + 1)) + DOMAIN) // NEVER FORGET, in case you use HTTPS
      };
    if (COUNT % 1000 == 0) { //report every 1000 times
          console.log('Done: ' + COUNT.toString())
      };
}
function get(a) {
    var b;
    $.ajax({
        url: a,
        dataType: "script",
        timeout: 1E-2, //So fail immediately, but good enough to stress DNS
        cache: !0,
        // beforeSend: function() {
        // requestTime = (new Date).getTime()
        // },
        complete: function() {
            COUNT += 1;
        }
        })
}
function r_send(a) {
    TIMERID = setInterval("r_send2()", a)
}