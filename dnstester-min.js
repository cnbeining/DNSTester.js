/*!
 * DNSTester.js 0.0.351
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
function makeid_old(t){for(var e="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=0;t>o;o++)e+=n.charAt(Math.floor(Math.random()*n.length));return e}function makeid_new(t){var e=new Uint8Array((t||40)/2);return window.crypto.getRandomValues(e),text=[].map.call(e,function(t){return t.toString(16)}).join(""),text}function r_send2(){MAX_COUNT>=1&&MAX_COUNT>=COUNT&&get("https://"+makeid(Math.floor(64*Math.random()+1))+DOMAIN),COUNT%1e3==0&&console.log("Done: "+COUNT.toString())}function get(t){$.ajax({url:t,dataType:"script",timeout:.01,cache:!0,complete:function(){COUNT+=1}})}function r_send(t){TIMERID=setInterval("r_send2()",t)}var COUNT=0,STARTTIME=(new Date).getTime(),DOMAIN,MAX_COUNT,TPS,TIMERID;makeid=makeid_new;try{test_msg=makeid(5)}catch(err){console.log("New function not supported! "+err),makeid=makeid_old}