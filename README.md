# DNSTester.js
========

Yet another most easy but powerful DNS tester  http://www.cnbeining.com/  

USE WITH YOUR OWN RISK!

THIS SCRIPT IS SOLELY INTENDED TO TEST THE PACKAGE OF ```jQuery```!

Also check https://github.com/cnbeining/DNSTester !

一个用来测试根DNS鲁棒性的JS脚本。

基于GFW对Github的攻击而被启发。

请看https://github.com/cnbeining/DNSTester 。

Usage
------

Simple.

    Include this file in your head:
    
    <head>
        <script src='***' type="text/javascript"></script> 
    </head>
    
    My host on Cloudflare with Github Pages as backend is avalable at the very end of this page.
    
    And call with:
    
    <script  type="text/javascript">
        var DOMAIN = ".baidu.com/"; // Change to this form
        var MAX_COUNT = 5000; // Max time of hit
        var TPS = 50; // Frequency
        timegap = 1 / TPS; // Reciprocal, in case you have not finish grade 6
        setTimeout("r_send()", timegap);
    </script>



License
-----

GPLv2 license.

This program is provided **as is**, with absolutely no warranty.

jQuery is included in DNSTester.js. Check http://jquery.com/ for more details.


History
----

0.0.3: Rewrite name generate; Add time control; Rewrite callback; Update Address

0.0.2: Fix load with HTTPS

0.0.1: The start of this.

Misc
-----

欢迎提供托管。

Github:

    https://cnbeining.github.io/DNSTester.js/javascripts/dnstester.js
    https://cnbeining.github.io/DNSTester.js/javascripts/dnstester-min.js

Cloudflare(Github Pages as backend):

    https://gfwsuckmydick.science/javascripts/dnstester.js
    https://gfwsuckmydick.science/javascripts/dnstester-min.js

    legal disclaimer: Usage of DNSTester.js for attacking targets without prior mutual consent
    is illegal. It is the end user's responsibility to obey all applicable local, state and
    federal laws. Developers assume no liability and are not responsible for any misuse or
    damage caused by this program
    
    ONLY USE IF YOU KNOW WHAT YOU ARE DOING.
