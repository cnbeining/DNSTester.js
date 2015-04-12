# DNSTester.js

Yet another most easy but powerful DNS tester  http://www.cnbeining.com/  

USE WITH YOUR OWN RISK!

THIS SCRIPT IS SOLELY INTENDED TO TEST THE PACKAGE OF ```jQuery```!

Also check https://github.com/cnbeining/DNSTester !

Example: https://cnbeining.github.io/DNSTester.js/Example.html

一个用来测试权威DNS鲁棒性的JS脚本。

基于GFW对Github的攻击而被启发。

请看https://github.com/cnbeining/DNSTester 。

演示: https://cnbeining.github.io/DNSTester.js/Example.html

Usage
------

Simple.

    Include this file and jQuery in your head:
    文件头带上本文件和jQuery：
    
    <head>
    <script src='./dnstester-min.js' type="text/javascript"></script> 
    <script src='./jquery-latest.js' type="text/javascript"></script> 
    </head>
    
    My host on Cloudflare with Github Pages as backend is avalable at the very end of this page.
    我有一个Cloudflare做前端Github Pages做后端的host版本，页面最下面。
    
    And call with:
    这么用：
    
    <script  type="text/javascript">
        var DOMAIN = ".baidu.com/"; // Change to this form
        var MAX_COUNT = 5000; // Max time of hit
        var TPS = 50; // Frequency
        timegap = 1 / TPS; // Reciprocal, in case you have not finish grade 6
        r_send(timegap);
    </script>
    
    死活看不懂？看Example.html .



License
-----

GPLv2 license.

This program is provided **as is**, with absolutely no warranty.

jQuery is included in DNSTester.js. Check http://jquery.com/ for more details.

未经允许，禁止转载到大陆服务。


History
----

0.0.35: Remove builtin jQuery, you need to refer your own one(A sample copy avalable here solely for testing); Able to pause; Rewrite timer

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
