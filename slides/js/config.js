var presentationConfig = {
	"dependencies": [
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": true,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n</head>\n\n<body>\n\t\n\t\t<script type=\"text/javascript\" src=\"//www.google.com/trends/embed.js?hl=en-US&q=angularjs,+backbone.js,+knockout.js,+ember.js&date=1/2010+56m&cmpt=q&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=1000&h=600\"></script>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n</head>\n\n<body>\n\t\n\t\t<!DOCTYPE html>\n<html ng-app>\n    <!-- script tags etc -->\n<body>\n    2 + 2 = {{2 + 2}}\n\n    {{no.errors.here}}\n</body>\n</html>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n</head>\n\n<body>\n\t\n\t\t<!DOCTYPE html>\n<html ng-app>\n    <!-- script tags etc -->\n<body ng-init=\"user.name = 'Steve Rogers'\">\n    First Avenger: {{user.name}}\n</body>\n</html>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": false
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n</head>\n\n<body>\n\t\n\t\t<input id=\"name\" type=\"text\" />\nYour name: <span id=\"result\"></span>\n\t\n\t\t<script>document.addEventListener('DOMContentLoaded', function() {\n    var name = document.getElementById('name'),\n        result = document.getElementById('result');\n\n    name.addEventListener('keyup', function() {\n        result.textContent = name.value;\n    });\n});</script>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n</head>\n\n<body>\n\t\n\t\t<input id=\"name\" type=\"text\" />\nYour name: <span id=\"result\"></span>\n\t\n\t\t<script>$(function() {\n    var $name = $(\"#name\"),\n        $result = $(\"#result\");\n\n    $name.on(\"keyup\", function() {\n        $result.text(this.value);\n    });\n});</script>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n</head>\n\n<body>\n\t\n\t\t<!DOCTYPE html>\n<html ng-app>\n    <!-- script tags etc -->\n<body>\n    <input type=\"text\" ng-model=\"user.name\" />\n    Your Name: {{user.name}}\n</body>\n</html>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n</head>\n\n<body>\n\t\n\t\t<!DOCTYPE html>\n<html ng-app>\n    <!-- script tags etc -->\n<body ng-init=\"user.name = 'jonathan'\">\n    <input type=\"text\" ng-model=\"user.name\" />\n    Your Name: {{user.name}}\n</body>\n</html>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": false
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app>\n    <form>\n        <input type=\"text\" ng-model=\"user.name\" placeholder=\"Name\" />\n        <input type=\"text\" ng-model=\"user.email\" placeholder=\"Email\" />\n        <select ng-model=\"user.emailType\">\n            <option>Work</option>\n            <option>Home</option>    \n        </select>\n        <textarea ng-model=\"user.comment\"></textarea>\n    </form>\n\n    <div>Name: {{user.name}}</div>\n    <div>Email: {{user.email}}</div>\n    <div>Type: {{user.emailType}}</div>\n    <div>Comment: {{user.comment}}</div>\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": true,
			"visual": false,
			"autorun": true,
			"inline": true,
			"html": "<!doctype html>\n<html>\n<head>\n  <script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n  \n    <script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n  \n    \n  \n  \n  <style>\n    #countdown {\n      font-family: arial, helvetica, sans-serif;\n      font-size: 96px;\n      font-weight: bold;\n      text-shadow: 5px 5px 10px #000;\n      color: #ffffff;\n      display:block;\n      text-align: center;\n    }\n    \n    #time {\n      color: #fff;\n      font-family: arial, helvetica, sans-serif;\n      text-align: center;\n    }\n  </style>\n</head>\n\n<body>\n  \n  <div id=\"time\">\n    How long is this break?<br>\n      <button>5</button> \n    <button>10</button>\n    <button>15</button>\n    <button>20</button>\n    <button>25</button>\n    <button>30</button>\n    <button>35</button>\n    <button>40</button>\n    <button>45</button>\n    <button>50</button>\n    <button>55</button>\n    <button>60</button>\n  </div>\n    <div id=\"countdown\" hidden></div>\n    <script type=\"text/javascript\">\n\n        function countdown(element, minutes, seconds) {\n            var time = minutes*60 + seconds;\n            var interval = setInterval(function() {\n                var el = document.getElementById(element);\n                if(time == 0) {\n                    el.innerHTML = \"We're about to start!\";    \n                    clearInterval(interval);\n                    return;\n                }\n                var minutes = Math.floor( time / 60 );\n                if (minutes < 10) minutes = \"0\" + minutes;\n                var seconds = time % 60;\n                if (seconds < 10) seconds = \"0\" + seconds; \n                var text = minutes + ':' + seconds;\n                el.innerHTML = text;\n                time--;\n            }, 1000);\n        }\n\n        $( document ).on( \"click\", \"#time button\", function( e ){\n            var time = $(e.currentTarget).text();\n\n            console.log(time + \" minute break starts now\");\n\n            $(e.currentTarget)\n                .closest(\"#time\")\n                .hide()\n                .nextUntil( \"div\" )\n                    .removeAttr(\"hidden\");\n\n\n            countdown(\"countdown\", parseInt(time), 0);\n        });\n        \n    </script>\n  \n  \n</body>\n</html>\n"
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<script>angular.module('introToAngularApp', [])\n    .controller('MainCtrl', function ($scope) {\n        $scope.title = 'Home';\n    });</script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"introToAngularApp\">\n    <div ng-controller=\"MainCtrl\">\n        {{title}}\n    </div>\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<script>angular.module('introToAngularApp', [])\n    .controller('MainCtrl', function ($scope) {\n        $scope.title = 'Home';\n    });</script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body> --$rootScope\n    <div ng-controller=\"MainCtrl\"> --Child Scope \n    </div>\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": false
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<script>angular.module('introToAngularApp', [])\n\t.controller('ContactCtrl', function($scope) {\n\t\t$scope.user = {\n\t\t\tname: \"\",\n\t\t\temail: \"\",\n\t\t\tcomment: \"\"\n\t\t};\n\n        $scope.send = function(name, email, comment) {\n\t\t\tconsole.log(\"mail sent to: \" + name + \" at \" + email);\n        };\n    });</script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"introToAngularApp\">\n    <div ng-controller=\"ContactCtrl\">\n        <input type=\"text\" ng-model=\"user.name\" placeholder=\"Name\" />\n        <input type=\"email\" ng-model=\"user.email\" placeholder=\"Email\" />\n        <textarea ng-model=\"user.comment\" placeholder=\"Name\"></textarea>\n        <button ng-click=\"send(user.name, user.email, user.comment)\">Send</button>\n    </div>\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<script>angular.module('introToAngularApp', [])\n\t.controller('ContactCtrl', function($scope) {\n\t\t$scope.user = {\n\t\t\tname: \"\",\n\t\t\temail: \"\",\n\t\t\tcomment: \"\"\n\t\t};\n\n        $scope.send = function(name, email, comment) {\n\t\t\tconsole.log(\"mail sent to: \" + name + \" at \" + email);\n        };\n    });</script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"introToAngularApp\">\n    <div ng-controller=\"ContactCtrl\">\n        <input type=\"text\" ng-model=\"user.name\" placeholder=\"Name\" />\n        <input type=\"email\" ng-model=\"user.email\" placeholder=\"Email\" />\n        <textarea ng-model=\"user.comment\" placeholder=\"Name\"></textarea>\n        <button ng-click=\"send()\">Send</button>\n    </div>\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<script>angular.module('introToAngularApp', [])\n    .controller('MainCtrl', function ($scope) {\n        $scope.title = 'Home';\n    });</script>\n\t\n\t\t<script>angular.module('introToAngularApp', [])\n    .controller('MainCtrl', function ($scope) {\n        // $scope.title = 'Home';\n    });</script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"introToAngularApp\" ng-init=\"title = 'in the root'\">\n    <div ng-controller=\"MainCtrl\">\n        {{title}}\n    </div>\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<script>angular.module('introToAngularApp', [])\n    .controller('MainCtrl', function ($scope) {\n        $scope.title = 'Home';\n    });</script>\n\t\n\t\t<script>angular.module('introToAngularApp', [])\n    .controller('MainCtrl', function ($scope) {\n        $scope.title = 'Home';\n    });</script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"introToAngularApp\" ng-init=\"title = 'in the root'\">\n    {{title}}\n    <div ng-controller=\"MainCtrl\">\n        {{title}}\n    </div>\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<script>angular.module('introToAngularApp', [])\n    .controller('MainCtrl', function ($scope) {\n        $scope.title = 'Home';\n    });</script>\n\t\n\t\t<script>angular.module('introToAngularApp', [])\n    .controller('MainCtrl', function ($scope) {\n        $scope.page.title = 'Home';\n    });</script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"introToAngularApp\" ng-init=\"page.title = 'in the root'\">\n    {{page.title}}\n    <div ng-controller=\"MainCtrl\">\n        {{page.title}}\n    </div>\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<script>angular.module('introToAngularApp', [])\n    .controller('MainCtrl', function ($scope) {\n        $scope.title = 'Home';\n    });</script>\n\t\n\t\t<script>function Root() {} \nRoot.prototype.name = \"root\";\n\nfunction Child() {}\nChild.prototype = Object.create(Root);\nChild.prototype.constructor = Child;</script>\n\t\n</head>\n\n<body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": false
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<script>angular.module('introToAngularApp', [])\n    .controller('MainCtrl', function ($scope) {\n        $scope.title = 'Home';\n    });</script>\n\t\n\t\t<script>function Root() {} \nRoot.prototype.name = \"root\";\n\nfunction Child() {}\nChild.prototype = Object.create(Root.prototype);\nChild.prototype.constructor = Child;\n\nChild.prototype.name = \"child\";\n\nvar root = new Root();\nvar child = new Child();\nconsole.log(root.name, child.name); // \"child\"</script>\n\t\n</head>\n\n<body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<script>angular.module('introToAngularApp', [])\n\t.controller('ContactCtrl', function($scope) {\n\t\t$scope.user = {\n\t\t\tname: \"\",\n\t\t\temail: \"\",\n\t\t\tcomment: \"\"\n\t\t};\n\n        $scope.send = function(name, email, comment) {\n\t\t\tconsole.log(\"mail sent to: \" + name + \" at \" + email);\n        };\n    });</script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"introToAngularApp\">\n    <div ng-controller=\"ContactCtrl as vm\">\n        <input type=\"text\" ng-model=\"vm.user.name\" placeholder=\"Name\" />\n        <input type=\"email\" ng-model=\"vm.user.email\" placeholder=\"Email\" />\n        <textarea ng-model=\"vm.user.comment\" placeholder=\"Name\"></textarea>\n        <button ng-click=\"send(vm.user.name, vm.user.email, vm.user.comment)\">Send</button>\n    </div>\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"introToAngularApp\">\n    <div ng-controller=\"FirstCtrl as first\">\n        <div ng-controller=\"SecondCtrl as second\">\n            {{first.user.name}}\n            {{second.profile.age}}            \n        </div>\n    </div>\n</body>\n\t\n\t\t<script>angular.module('introToAngularApp', [])\n    .controller('FirstCtrl', function() {\n        this.user = { name: 'jonathan' };\n    })\n    .controller('SecondCtrl', function() {\n        this.profile = { age: 26 };\n    });</script>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"introToAngularApp\">\n    <div ng-controller=\"FirstCtrl\">\n        <div ng-controller=\"SecondCtrl\">\n            {{user.name}}\n            {{profile.age}}            \n        </div>\n    </div>\n</body>\n\t\n\t\t<script>angular.module('introToAngularApp', [])\n    .controller('FirstCtrl', function($scope) {\n        $scope.user = { name: 'jonathan' };\n    })\n    .controller('SecondCtrl', function($scope) {\n        $scope.profile = { age: 26 };\n    });</script>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"EventsDemo\">\n    <div ng-controller=\"EventsCtrl as vm\">\n        <input ng-model=\"vm.user.name\"\n            ng-blur=\"vm.blur()\"\n            ng-focus=\"vm.focus()\"\n            ng-change=\"vm.change()\"/>\n    </div>\n</body>\n\t\n\t\t<script>angular.module('EventsDemo', [])\n    .controller('EventsCtrl', function() {\n        this.blur = function() { console.log('blur'); };\n        this.change = function() { console.log('change'); };\n        this.focus = function() { console.log('focus'); };        \n    });</script>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"DirectivesDemo\">\n    <div ng-controller=\"DirectivesCtrl as vm\">\n        <div ng-class=\"{ selected: vm.isSelected() }\">ohhai</div>\n    </div>\n</body>\n\t\n\t\t<script>angular.module('DirectivesDemo', [])\n    .controller('DirectivesCtrl', function() {\n        this.isSelected = function() {\n            return true;\n        };\n    });</script>\n\t\n\t\t<style>.selected { outline: 1px solid red; }</style>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"DirectivesDemo\">\n    <div ng-controller=\"DirectivesCtrl as vm\">\n        <div ng-if=\"vm.user.name === 'jonathan'\">shows</div>\n        <div ng-if=\"vm.user.name != 'jonathan'\">no show</div>\n    </div>\n</body>\n\t\n\t\t<script>angular.module('DirectivesDemo', [])\n    .controller('DirectivesCtrl', function() {\n        this.user = { name: 'jonathan' };\n    });</script>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app>\n    Click me: <input type=\"checkbox\" ng-model=\"checked\" ng-init=\"checked=true\" /><br/>\n    Show when checked:\n    <span ng-if=\"checked\" class=\"animate-if\">\n      I'm removed when the checkbox is unchecked.\n    </span>\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app>\n    Click me: <input type=\"checkbox\" ng-model=\"checked\" ng-init=\"checked=true\" /><br/>\n    Show when checked:\n    <span ng-show=\"checked\">\n      I'm removed when the checkbox is unchecked.\n    </span>\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app>\n    Click me: <input type=\"checkbox\" ng-model=\"checked\" ng-init=\"checked=true\" /><br/>\n    Show when unchecked:\n    <span ng-hide=\"checked\">\n      I'm removed when the checkbox is unchecked.\n    </span>\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app>\n    Click me: <input type=\"checkbox\" ng-model=\"checked\" ng-init=\"checked=true\" /><br/>\n    Toggles this: <input type=\"checkbox\" ng-checked=\"checked\" />\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"Demo\">\n    <div ng-controller=\"DemoCtrl as vm\">\n    <div ng-bind-html=\"vm.html\"></div>\n    </div>\n</body>\n\t\n\t\t<script>angular.module('Demo', [])\n    .controller('DemoCtrl', function($sce) {\n        this.html = $sce.trustAsHtml('<code>angular</code>')\n    });</script>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<style>[ng\\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {\n  display: none !important;\n}</style>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-cloack>\n    {{user.name}}\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"introToAngularApp\">\n    <ul ng-controller=\"MenuCtrl as vm\">\n        <li ng-repeat=\"item in vm.list\">\n            {{item}}\n        </li>\n    </ul>\n</body>\n\t\n\t\t<script>angular.module('introToAngularApp', [])\n    .controller('MenuCtrl', function() {\n        this.list = ['pizza', 'stromboli', 'lasagna'];\n    });</script>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": false
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"introToAngularApp\">\n    <ul ng-controller=\"MenuCtrl as vm\">\n        <li ng-repeat=\"item in vm.list\">\n            {{$index}}: {{item}}\n        </li>\n    </ul>\n</body>\n\t\n\t\t<script>angular.module('introToAngularApp', [])\n    .controller('MenuCtrl', function() {\n        this.list = ['pizza', 'stromboli', 'lasagna'];\n    });</script>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"FormDemo\">\n    <form ng-controller=\"FormCtrl as vm\" ng-submit=\"vm.send(vm.user.name)\">\n        <input type=\"text\" ng-model=\"vm.user.name\" />\n        <input type=\"submit\" value=\"Send\" />\n    </form>\n</body>\n\t\n\t\t<script>angular.module('FormDemo', [])\n    .controller('FormCtrl', function() {\n        this.send = function(name) {\n            console.log('sending to: ' + name);\n        };\n    });</script>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<script>angular.module('introToAngularApp', [])\n\t.controller('NavCtrl', function($scope, $location) {\n\t\t$scope.items = [{ url: '/', title: 'home'}, { url: '/about', title: 'about'}];\n\n\t\t$scope.selectedNavItem = $scope.items[0]\n\n\t\t$scope.goTo = function(url) { console.log(url); /* $location.path(url) */ };\n\t});</script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"introToAngularApp\">\n\t<div ng-controller=\"NavCtrl\">\n\t\t<select class=\"form-control\" \n\t\t\tng-options=\"item.title for item in items\"\n\t\t\tng-change=\"goTo(selectedNavItem.url)\" \n\t\t\tng-model=\"selectedNavItem\">\n\t\t</select> \n\t</div>\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": true,
			"visual": false,
			"autorun": true,
			"inline": true,
			"html": "<!doctype html>\n<html>\n<head>\n  <script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n  \n    <script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n  \n    \n  \n  \n  <style>\n    #countdown {\n      font-family: arial, helvetica, sans-serif;\n      font-size: 96px;\n      font-weight: bold;\n      text-shadow: 5px 5px 10px #000;\n      color: #ffffff;\n      display:block;\n      text-align: center;\n    }\n    \n    #time {\n      color: #fff;\n      font-family: arial, helvetica, sans-serif;\n      text-align: center;\n    }\n  </style>\n</head>\n\n<body>\n  \n  <div id=\"time\">\n    How long is this break?<br>\n      <button>5</button> \n    <button>10</button>\n    <button>15</button>\n    <button>20</button>\n    <button>25</button>\n    <button>30</button>\n    <button>35</button>\n    <button>40</button>\n    <button>45</button>\n    <button>50</button>\n    <button>55</button>\n    <button>60</button>\n  </div>\n    <div id=\"countdown\" hidden></div>\n    <script type=\"text/javascript\">\n\n        function countdown(element, minutes, seconds) {\n            var time = minutes*60 + seconds;\n            var interval = setInterval(function() {\n                var el = document.getElementById(element);\n                if(time == 0) {\n                    el.innerHTML = \"We're about to start!\";    \n                    clearInterval(interval);\n                    return;\n                }\n                var minutes = Math.floor( time / 60 );\n                if (minutes < 10) minutes = \"0\" + minutes;\n                var seconds = time % 60;\n                if (seconds < 10) seconds = \"0\" + seconds; \n                var text = minutes + ':' + seconds;\n                el.innerHTML = text;\n                time--;\n            }, 1000);\n        }\n\n        $( document ).on( \"click\", \"#time button\", function( e ){\n            var time = $(e.currentTarget).text();\n\n            console.log(time + \" minute break starts now\");\n\n            $(e.currentTarget)\n                .closest(\"#time\")\n                .hide()\n                .nextUntil( \"div\" )\n                    .removeAttr(\"hidden\");\n\n\n            countdown(\"countdown\", parseInt(time), 0);\n        });\n        \n    </script>\n  \n  \n</body>\n</html>\n"
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app>\n    {{12345 | currency}}\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"DateDemo\">\n    <div ng-controller=\"DateCtrl\">\n        {{ date | date: 'medium' }}\n    </div>\n</body>\n\t\n\t\t<script>angular.module('DateDemo', [])\n    .controller('DateCtrl', function($scope) {\n        $scope.date = new Date();\n    });</script>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"FilterDemo\">\n    <div ng-controller=\"FilterCtrl as vm\">\n        <input type=\"text\" ng-model=\"vm.query\" />\n        <ul>\n            <li ng-repeat=\"item in vm.list | filter: vm.query\">\n                {{item.name}}\n            </li>\n        </ul>\n    </div>\n</body>\n\t\n\t\t<script>angular.module('FilterDemo', [])\n    .controller('FilterCtrl', function() {\n        this.list = [{ name: 'spaghetti' }, { name: 'lasagna' }, { name: 'canoli' }]\n    });</script>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": false
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"FilterDemo\">\n    <div ng-controller=\"FilterCtrl as vm\">\n        <input type=\"text\" ng-model=\"vm.query.name\" />\n        <ul>\n            <li ng-repeat=\"item in vm.list | filter: vm.query\">\n                {{item.name}}\n            </li>\n        </ul>\n    </div>\n</body>\n\t\n\t\t<script>angular.module('FilterDemo', [])\n    .controller('FilterCtrl', function() {\n        this.list = [{ name: 'spaghetti' }, { name: 'lasagna' }, { name: 'canoli' }]\n    });</script>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app>\n    <pre>{{ { foo: 'bar' } | json }}</pre>\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app ng-init=\"list = [1,2,3,4,5,6]\">\n    {{ list | limitTo: 3 }}\n    {{ list | limitTo: -3 }}    \n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app>\n    {{ 'MAY THE FORCE be with you' | lowercase }}\n    {{ 'may the force BE WITH YOU' | uppercase }}\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"NumberDemo\">\n    <div ng-controller=\"NumberCtrl as vm\">\n        {{vm.val | number}} <br />\n        {{vm.val | number: 0 }} <br />\n        {{vm.val | number: 2 }} <br />\n    </div>\n</body>\n\t\n\t\t<script>angular.module('NumberDemo', [])\n    .controller('NumberCtrl', function() {\n        this.val = \"1234.56789\";\n    });</script>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"NumberDemo\">\n    <div ng-controller=\"NumberCtrl as vm\">\n        {{vm.list | orderBy: 'age'}}\n    </div>\n</body>\n\t\n\t\t<script>angular.module('NumberDemo', [])\n    .controller('NumberCtrl', function() {\n        this.list = [{ age: 50 }, { age: 26 }, { age: 48 }, { age: 24 }];\n    });</script>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"NumberDemo\">\n    <div ng-controller=\"NumberCtrl as vm\">\n        {{vm.list | orderBy: '-age'}}\n    </div>\n</body>\n\t\n\t\t<script>angular.module('NumberDemo', [])\n    .controller('NumberCtrl', function() {\n        this.list = [{ age: 50 }, { age: 26 }, { age: 48 }, { age: 24 }];\n    });</script>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": false
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<script>angular.module('introToAngularApp', [])\n    .filter('phone', function() {\n        return function(input, options) {\n            var area = input.substr(0, 3),\n                middle = input.substr(2, 3),\n                end = input.substr(6, 4);\n\n            return [area, middle, end].join(\"-\"); \n        };\n    });</script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"introToAngularApp\">\n    {{ '6155551234' | phone }}\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<link href='css/jquery-ui_e00c4a186ee7af6cdedba6b178dca5583773451b.css' rel='stylesheet' />\n\t\n\t\t<script src='js/jquery-ui.min_fac7528299905bf566985b8539ae0bf0dc421fc1.js'></script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"introToAngularApp\">\n    <input type=\"text\" ng-model=\"date\" a2-date-picker placeholder=\"Date\"/>\n    Your Date: {{date}}\n</body>\n\t\n\t\t<script>angular.module('introToAngularApp', [])\n    .directive('a2DatePicker', function() {\n        return {\n            restrict: 'A',\n            link: function(scope, $el, attrs) {\n                $el.datepicker({\n                    onSelect: function(date) {\n                        scope.date = date;\n                        scope.$apply();\n                    }\n                });\n            }\n        };\n    });</script>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<script>angular.module('Demo', [])\n    .directive('a2H1', function() {\n        return {\n            restrict: 'AE',\n            template: '<h1>hello world</h1>'\n        };\n    });</script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"Demo\">\n    <a2-h1></a2-h1>\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<script>angular.module('Demo', [])\n    .directive('a2H1', function() {\n        return {\n            restrict: 'AE',\n            transclude: true,\n            template: '<h1>hello <span ng-transclude></span></h1>'\n        };\n    });</script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"Demo\">\n    <a2-h1>jonathan</a2-h1>\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<script>angular.module('Demo', [])\n    .directive('a2Header', function() {\n        return {\n            restrict: 'AE',\n            transclude: true,\n            template: '<header ng-transclude></header>'\n        };\n    });</script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"Demo\">\n    <a2-header>\n        <a href=\"#/home\">Home</a>\n    </a2-header>\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<script>angular.module('Demo', [])\n    .controller('DemoCtrl', function($scope) {\n        $scope.user = { name: 'Han' };\n    })\n    .directive('a2Header', function() {\n        return {\n            restrict: 'E',\n            scope: {\n\n            },\n            link: function(scope, element, attrs) {\n                console.log(scope.user.name); // undefined\n            }\n        };\n    });</script>\n\t\n</head>\n\n<body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": false
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<script>angular.module('Demo', [])\n\t.controller('DemoCtrl', function($scope) {\n\t\t$scope.user = { name: 'Han' };\n\t})\n\t.directive('a2Header', function() {\n\t\treturn {\n\t\t\trestrict: 'E',\n\t\t\tscope: {\n\t\t\t\tuser: '='\n\t\t\t},\n\t\t\tlink: function(scope, element, attrs) {\n\t\t\t\tconsole.log(scope.user.name); // \"han\"\n\t\t\t}\n\t\t};\n\t});</script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"Demo\">\n    <div ng-controller=\"DemoCtrl\">\n        <a2-header user=\"user\"></a2-header>\n    </div>\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<script>angular.module('Demo', [])\n\t.controller('DemoCtrl', function($scope) {\n\t\t$scope.user = { name: 'Han' };\n\t})\n\t.directive('a2Header', function() {\n\t\treturn {\n\t\t\trestrict: 'E',\n\t\t\tscope: {\n\t\t\t\tuser: '='\n\t\t\t},\n\t\t\tlink: function(scope, element, attrs) {\n\t\t\t\tconsole.log(scope.user.name); // \"han\"\n\t\t\t}\n\t\t};\n\t});</script>\n\t\n</head>\n\n<body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<script>angular.module('Demo', [])\n\t.controller('DemoCtrl', function($scope) {\n\t\t$scope.user = { name: 'Han' };\n\t})\n\t.directive('a2Header', function() {\n\t\treturn {\n\t\t\trestrict: 'E',\n\t\t\tscope: {\n\t\t\t\tuser: '='\n\t\t\t},\n\t\t\tlink: function(scope, element, attrs) {\n\t\t\t\tconsole.log(scope.user.name); // \"han\"\n\t\t\t}\n\t\t};\n\t});</script>\n\t\n\t\t<script>scope: {\n    user: '=' // or '=attr' if you want to change how it's used on the element\n}</script>\n\t\n</head>\n\n<body>\n\t\n\t\t<a2-header user=\"user\"></a2-header>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<script>angular.module('Demo', [])\n\t.controller('DemoCtrl', function($scope) {\n\t\t$scope.user = { name: 'Han' };\n\t})\n\t.directive('a2Header', function() {\n\t\treturn {\n\t\t\trestrict: 'E',\n\t\t\tscope: {\n\t\t\t\tuser: '=myUser'\n\t\t\t},\n\t\t\tlink: function(scope, element, attrs) {\n\t\t\t\tconsole.log(scope.user.name); // \"han\"\n\t\t\t}\n\t\t};\n\t});</script>\n\t\n\t\t<script>scope: {\n    user: '=myUser'\n}</script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"Demo\">\n    <div ng-controller=\"DemoCtrl\">\n        <a2-header my-user=\"user\"></a2-header>\n    </div>\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<script>angular.module('Demo', [])\n\t.controller('DemoCtrl', function($scope) {\n\t\t$scope.user = { name: 'Han' };\n\t})\n\t.directive('a2Header', function() {\n\t\treturn {\n\t\t\trestrict: 'E',\n\t\t\tscope: {\n\t\t\t\tuser: '=',\n\t\t\t\tage: '@'\n\t\t\t},\n\t\t\tlink: function(scope, element, attrs) {\n\t\t\t\tconsole.log(scope.user.name);\n\t\t\t\tconsole.log(scope.age);\n\t\t\t}\n\t\t};\n\t});</script>\n\t\n\t\t<script>scope: {\n    user: '=',\n    age: '@'\n}</script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"Demo\">\n    <div ng-controller=\"DemoCtrl\">\n        <a2-header user=\"user\" age=\"72\"></a2-header>\n    </div>\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<script>angular.module('Demo', [])\n\t.controller('DemoCtrl', function($scope) {\n\t\t$scope.user = { name: 'Han' };\n\t})\n\t.directive('a2Header', function() {\n\t\treturn {\n\t\t\trestrict: 'E',\n\t\t\tscope: {\n\t\t\t\tuser: '=',\n\t\t\t\tage: '@'\n\t\t\t},\n\t\t\tlink: function(scope, element, attrs) {\n\t\t\t\tconsole.log(scope.user.name);\n\t\t\t\tconsole.log(scope.age);\n\t\t\t}\n\t\t};\n\t});</script>\n\t\n\t\t<script>scope: {\n    user: '=',\n    age: '@'\n}</script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"Demo\">\n    <div ng-controller=\"DemoCtrl\">\n        <a2-header user=\"user\" age=\"{{user.name}} is 72\"></a2-header>\n    </div>\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": false
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<script>angular.module('Demo', [])\n\t.controller('DemoCtrl', function($scope) {\n\t\t$scope.user = { name: 'Han' };\n\t})\n\t.directive('a2Header', function() {\n\t\treturn {\n\t\t\trestrict: 'E',\n\t\t\tscope: {\n\t\t\t\tuser: '=',\n\t\t\t\tage: '@'\n\t\t\t},\n\t\t\tlink: function(scope, element, attrs) {\n\t\t\t\tconsole.log(scope.user.name);\n\t\t\t\tconsole.log(scope.age);\n\t\t\t}\n\t\t};\n\t});</script>\n\t\n\t\t<script>angular.module(\"Demo\", [])\n  .directive(\"foo\", function() {\n    return {\n      scope: {\n        localFn: \"&expr\"\n      },\n      template: \"{{localFn()}}\"\n    };\n  });</script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"Demo\">\n    <foo expr=\"2 + 2\"></foo>\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": false
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<script>angular.module('introToAngularApp', [])\n    .controller('OrderCtrl', function() {\n        this.items = ['pizza', 'spaghetti', 'calzone']\n        this.order = function(item) { console.log(\"order: \" + item ); }\n    });</script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"introToAngularApp\">\n    <div ng-controller=\"OrderCtrl as vm\">\n        <ul>\n            <li ng-repeat=\"item in vm.items\">\n                <a2-order process=\"vm.order(item)\" item=\"item\"></a2-order>\n            </li>\n        </ul>\n    </div>\n</body>\n\t\n\t\t<script>angular.module('introToAngularApp')\n\t.directive('a2Order', function() {\n\t\treturn {\n\t\t\trestrict: 'E',\n\t\t\tscope: {\n\t\t\t\tprocess: '&',\n\t\t\t\tdata: '='\n\t\t\t},\n\t\t\ttemplate: '<button ng-click=\"process({ item: processed })\">{{processed}}</button>',\n\t\t\tlink: function(el, scope) {\n\t\t\t\t// Process the data some how\n\t\t\t\tscope.processed = data;\n\t\t\t}\n\t\t};\n\t});</script>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<script>angular.module('DirectiveCommunication', [])\n\t.directive('myFirst', function() {\n\t\treturn {\n\t\t\tcontroller: function() {\n\t\t\t\tthis.name = \"myFirst controller\";\n\t\t\t}\n\t\t};\n\t})\n\t.directive('mySecond', function() {\n\t\treturn {\n\t\t\trestrict: 'E',\n\t\t\trequire: 'myFirst',\n\t\t\tlink: function(scope, element, attrs, ctrls) {\n\t\t\t\tconsole.log(ctrls);\n\t\t\t}\n\t\t};\n\t});</script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"DirectiveCommunication\">\n    <my-second my-first></my-second>\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<script>angular.module('DirectiveCommunication', [])\n\t.directive('myFirst', function() {\n\t\treturn {\n\t\t\tcontroller: function() {\n\t\t\t\tthis.name = \"myFirst controller\";\n\t\t\t}\n\t\t};\n\t})\n\t.directive('mySecond', function() {\n\t\treturn {\n\t\t\trestrict: 'E',\n\t\t\trequire: '?myFirst',\n\t\t\tlink: function(scope, element, attrs, ctrls) {\n\t\t\t\tconsole.log(ctrls);\n\t\t\t}\n\t\t};\n\t});</script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"DirectiveCommunication\">\n    <my-second></my-second>\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<script>angular.module('DirectiveCommunication', [])\n\t.directive('myFirst', function() {\n\t\treturn {\n\t\t\tcontroller: function() {\n\t\t\t\tthis.name = \"myFirst controller\";\n\t\t\t}\n\t\t};\n\t})\n\t.directive('mySecond', function() {\n\t\treturn {\n\t\t\trestrict: 'E',\n\t\t\trequire: '?^myFirst',\n\t\t\tlink: function(scope, element, attrs, ctrls) {\n\t\t\t\tconsole.log(ctrls);\n\t\t\t}\n\t\t};\n\t});</script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"DirectiveCommunication\">\n    <div my-first>\n        <my-second></my-second>\n    </div>\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": true,
			"visual": false,
			"autorun": true,
			"inline": true,
			"html": "<!doctype html>\n<html>\n<head>\n  <script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n  \n    <script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n  \n    \n  \n  \n  <style>\n    #countdown {\n      font-family: arial, helvetica, sans-serif;\n      font-size: 96px;\n      font-weight: bold;\n      text-shadow: 5px 5px 10px #000;\n      color: #ffffff;\n      display:block;\n      text-align: center;\n    }\n    \n    #time {\n      color: #fff;\n      font-family: arial, helvetica, sans-serif;\n      text-align: center;\n    }\n  </style>\n</head>\n\n<body>\n  \n  <div id=\"time\">\n    How long is this break?<br>\n      <button>5</button> \n    <button>10</button>\n    <button>15</button>\n    <button>20</button>\n    <button>25</button>\n    <button>30</button>\n    <button>35</button>\n    <button>40</button>\n    <button>45</button>\n    <button>50</button>\n    <button>55</button>\n    <button>60</button>\n  </div>\n    <div id=\"countdown\" hidden></div>\n    <script type=\"text/javascript\">\n\n        function countdown(element, minutes, seconds) {\n            var time = minutes*60 + seconds;\n            var interval = setInterval(function() {\n                var el = document.getElementById(element);\n                if(time == 0) {\n                    el.innerHTML = \"We're about to start!\";    \n                    clearInterval(interval);\n                    return;\n                }\n                var minutes = Math.floor( time / 60 );\n                if (minutes < 10) minutes = \"0\" + minutes;\n                var seconds = time % 60;\n                if (seconds < 10) seconds = \"0\" + seconds; \n                var text = minutes + ':' + seconds;\n                el.innerHTML = text;\n                time--;\n            }, 1000);\n        }\n\n        $( document ).on( \"click\", \"#time button\", function( e ){\n            var time = $(e.currentTarget).text();\n\n            console.log(time + \" minute break starts now\");\n\n            $(e.currentTarget)\n                .closest(\"#time\")\n                .hide()\n                .nextUntil( \"div\" )\n                    .removeAttr(\"hidden\");\n\n\n            countdown(\"countdown\", parseInt(time), 0);\n        });\n        \n    </script>\n  \n  \n</body>\n</html>\n"
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<script>angular.module('introToAngularApp', [])\n    .controller('CartCtrl', function($scope) {\n        $scope.totalItems = 0;\n        $scope.$on('cart:add', function() {\n            $scope.totalItems += 1;\n        });\n    })\n    .controller('ProductCtrl', function($rootScope, $scope) {\n        $scope.add = function() {\n            $rootScope.$broadcast('cart:add');\n        };\n    });</script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"introToAngularApp\">\n    <div ng-controller=\"CartCtrl\">{{totalItems}}</div>\n    <div ng-controller=\"ProductCtrl\">\n        <button ng-click=\"add()\">Add</button>\n    </div>\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<script>angular.module('introToAngularApp', [])\n    .controller('CartCtrl', function($scope, Product) {\n        $scope.totalItems = 0;\n        $scope.$on('cart:add', function() {\n            $scope.totalItems += 1;\n        });\n\n        $scope.add = function() { Product.addProduct() };\n    })\n    .factory('Product', function($rootScope) {\n        return {\n            addProduct: function() {\n                $rootScope.$broadcast('cart:add');\n            }\n        };\n    });</script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"introToAngularApp\">\n    <div ng-controller=\"CartCtrl\">\n        {{totalItems}}\n        <button ng-click=\"add()\">Add</button>\n    </div>\n\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": false
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<script>angular.module('introToAngularApp', ['ngRoute'])\n\t.config(function($routeProvider) {\n\t\t$routeProvider.when('/', {\n\t\t\ttemplate: '<h1>Home</h1>'\n\t\t}).when('/about', {\n\t\t\ttemplate: '<h1>About</h1>'\n\t\t})\n\t\t.when('/contact', {\n\t\t\ttemplate: '<h1>Contact</h1>'\n\t\t});\n\t});</script>\n\t\n</head>\n\n<body>\n\t\n\t\t<div ng-app=\"introToAngularApp\">\n    <a href=\"#/\">Home</a> | <a href=\"#/about\">About</a> | <a href=\"#/contact\">Contact</a>\n    <div ng-view></div>\n</div>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<script>angular.module('introToAngularApp', ['ngRoute'])\n\t.config(function($routeProvider) {\n\t\t$routeProvider.when('/', {\n\t\t\ttemplate: '<h1>Home</h1>'\n\t\t}).when('/about', {\n\t\t\ttemplate: '<h1>About</h1>'\n\t\t})\n\t\t.when('/contact', {\n\t\t\ttemplate: '<h1>Contact</h1>'\n\t\t});\n\t});</script>\n\t\n\t\t<script>angular.module('introToAngularApp')\n    .controller('RouteCtrl', function($scope) {\n        $scope.$on('$routeChangeStart', function(event, current, previous) {\n            console.log('Route change start');\n        });\n        $scope.$on('$routeChangeSuccess', function() {\n            console.log('Route change success');\n        });\n    });</script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"introToAngularApp\">\n    <div ng-controller=\"RouteCtrl\">\n        <a href=\"#/\">Home</a> | <a href=\"#/about\">About</a> | <a href=\"#/contact\">Contact</a>\n    </div>\n    <div ng-view></div>\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<script>angular.module('introToAngularApp', ['ngRoute'])\n\t.config(function($routeProvider) {\n\t\t$routeProvider.when('/', {\n\t\t\ttemplate: '<h1>Home</h1>'\n\t\t}).when('/about', {\n\t\t\ttemplate: '<h1>About</h1>'\n\t\t})\n\t\t.when('/contact', {\n\t\t\ttemplate: '<h1>Contact</h1>'\n\t\t});\n\t});</script>\n\t\n\t\t<script>angular.module('introToAngularApp')\n    .controller('RouteCtrl', function($scope) {\n       $scope.$on('$routeChangeStart', function(event, current, previous) {\n            $scope.path = current.originalPath;\n        });\n        $scope.$on('$routeChangeSuccess', function(event, current, prev) {        \n            $scope.path = current.originalPath;\n        });\n    });</script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"introToAngularApp\">\n    <div ng-controller=\"RouteCtrl\">\n        <a href=\"#/\">Home</a> | <a href=\"#/about\">About</a> | <a href=\"#/contact\">Contact</a>\n\n        Path: {{path}}\n    </div>\n    <div ng-view></div>\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": false
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<script>angular.module('introToAngularApp', ['ngRoute'])\n\t.config(function($routeProvider) {\n\t\t$routeProvider.when('/', {\n\t\t\ttemplate: '<h1>Home</h1>'\n\t\t}).when('/about', {\n\t\t\ttemplate: '<h1>About</h1>'\n\t\t})\n\t\t.when('/contact', {\n\t\t\ttemplate: '<h1>Contact</h1>'\n\t\t});\n\t});</script>\n\t\n\t\t<script>angular.module('introToAngularApp')\n    .controller('RouteCtrl', function($scope, $location) {\n        $location.path('/about');\n        $scope.location = $location;\n    });</script>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app=\"introToAngularApp\">\n    <div ng-controller=\"RouteCtrl\">\n        <a href=\"#/\">Home</a> | <a href=\"#/about\">About</a> | <a href=\"#/contact\">Contact</a>\n        <ul>\n            <li>Path [g/s]: {{location.path()}}</li>\n            <li>Url [g/s]: {{location.url()}}</li>        \n            <li>AbsUrl [g]: {{location.absUrl()}}</li>\n            <li>Protocol [g]: {{location.protocol()}}</li>\n            <li>Host [g]: {{location.host()}}</li>    \n            <li>Port [g]: {{location.port()}}</li>        \n            <li>Search [g/s]: {{location.search()}}</li>\n            <li>Hash [g/s]: {{location.hash()}}</li>        \n        </ul>\n    </div>\n\n    <div ng-view></div>\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": false
		},
		{
			"enabled": true,
			"visual": false,
			"autorun": true,
			"inline": true,
			"html": "<!doctype html>\n<html>\n<head>\n  <script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n  \n    <script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n  \n    \n  \n  \n  <style>\n    #countdown {\n      font-family: arial, helvetica, sans-serif;\n      font-size: 96px;\n      font-weight: bold;\n      text-shadow: 5px 5px 10px #000;\n      color: #ffffff;\n      display:block;\n      text-align: center;\n    }\n    \n    #time {\n      color: #fff;\n      font-family: arial, helvetica, sans-serif;\n      text-align: center;\n    }\n  </style>\n</head>\n\n<body>\n  \n  <div id=\"time\">\n    How long is this break?<br>\n      <button>5</button> \n    <button>10</button>\n    <button>15</button>\n    <button>20</button>\n    <button>25</button>\n    <button>30</button>\n    <button>35</button>\n    <button>40</button>\n    <button>45</button>\n    <button>50</button>\n    <button>55</button>\n    <button>60</button>\n  </div>\n    <div id=\"countdown\" hidden></div>\n    <script type=\"text/javascript\">\n\n        function countdown(element, minutes, seconds) {\n            var time = minutes*60 + seconds;\n            var interval = setInterval(function() {\n                var el = document.getElementById(element);\n                if(time == 0) {\n                    el.innerHTML = \"We're about to start!\";    \n                    clearInterval(interval);\n                    return;\n                }\n                var minutes = Math.floor( time / 60 );\n                if (minutes < 10) minutes = \"0\" + minutes;\n                var seconds = time % 60;\n                if (seconds < 10) seconds = \"0\" + seconds; \n                var text = minutes + ':' + seconds;\n                el.innerHTML = text;\n                time--;\n            }, 1000);\n        }\n\n        $( document ).on( \"click\", \"#time button\", function( e ){\n            var time = $(e.currentTarget).text();\n\n            console.log(time + \" minute break starts now\");\n\n            $(e.currentTarget)\n                .closest(\"#time\")\n                .hide()\n                .nextUntil( \"div\" )\n                    .removeAttr(\"hidden\");\n\n\n            countdown(\"countdown\", parseInt(time), 0);\n        });\n        \n    </script>\n  \n  \n</body>\n</html>\n"
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<style>.errors {\n  display: none;\n}\n\n.submitted .errors {\n  display: inline-block;\n}\n\n.submitted .ng-invalid {\n  border: 1px solid red;\n}\n\nbutton {\n  padding: 5px;\n}</style>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app>\n\t<form ng-class=\"{ submitted: contact.$submitted }\" name=\"contact\" novalidate>\n\t\t<input type=\"text\" ng-model=\"user.name\" name=\"name\" required  placeholder=\"Name\" />\n\t\t<span class=\"errors\" ng-show=\"contact.name.$invalid\">\n\t\t\t<span ng-show=\"contact.name.$error.required\">Required</span>\n\t\t</span>\n\t\t<br />\n\t\t<input type=\"email\" ng-model=\"user.email\" name=\"email\" required  placeholder=\"email\" />\n\t\t<span class=\"errors\" ng-show=\"contact.email.$invalid\">\n\t\t\t<span ng-show=\"contact.email.$error.required\">Required</span>\n\t\t\t<span ng-show=\"contact.email.$error.email\">Email invalid</span>\n\t\t</span>\n\t\t<br />\n\t\t<button>Submit</button>\n\t</form>\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<style>.errors {\n  display: none;\n}\n\n.submitted .errors {\n  display: inline-block;\n}\n\n.submitted .ng-invalid {\n  border: 1px solid red;\n}\n\nbutton {\n  padding: 5px;\n}</style>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app>\n\t<form ng-class=\"{ submitted: contact.$submitted }\" name=\"contact\" novalidate>\n\t\t<input type=\"text\" ng-model=\"user.name\" name=\"name\" required  placeholder=\"Name\" />\n\t\t<span class=\"errors\" ng-show=\"contact.name.$invalid\">\n\t\t\t<span ng-show=\"contact.name.$error.required\">Required</span>\n\t\t</span>\n\t\t<br />\n\t\t<input type=\"email\" ng-model=\"user.email\" name=\"email\" required  placeholder=\"email\" />\n\t\t<span class=\"errors\" ng-show=\"contact.email.$invalid\">\n\t\t\t<span ng-show=\"contact.email.$error.required\">Required</span>\n\t\t\t<span ng-show=\"contact.email.$error.email\">Email invalid</span>\n\t\t</span>\n\t\t<br />\n\t\t<button>Submit</button>\n\t</form>\n</body>\n\t\n\t\t<pre>{{contact | json}}</pre>\n<p>\n    {{user.name}}\n    {{user.email}}\n</p>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<style>.errors {\n  display: none;\n}\n\n.submitted .errors {\n  display: inline-block;\n}\n\n.submitted .ng-invalid {\n  border: 1px solid red;\n}\n\nbutton {\n  padding: 5px;\n}</style>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app>\n\t<form ng-class=\"{ submitted: contact.$submitted }\" name=\"contact\" novalidate>\n\t\t<input type=\"text\" ng-model=\"user.name\" name=\"name\" required  placeholder=\"Name\" />\n\t\t<span class=\"errors\" ng-show=\"contact.name.$invalid\">\n\t\t\t<span ng-show=\"contact.name.$error.required\">Required</span>\n\t\t</span>\n\t\t<br />\n\t\t<input type=\"email\" ng-model=\"user.email\" name=\"email\" required  placeholder=\"email\" />\n\t\t<span class=\"errors\" ng-show=\"contact.email.$invalid\">\n\t\t\t<span ng-show=\"contact.email.$error.required\">Required</span>\n\t\t\t<span ng-show=\"contact.email.$error.email\">Email invalid</span>\n\t\t</span>\n\t\t<br />\n\t\t<button>Submit</button>\n\t</form>\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<style>.errors {\n  display: none;\n}\n\n.submitted .errors {\n  display: inline-block;\n}\n\n.submitted .ng-invalid {\n  border: 1px solid red;\n}\n\nbutton {\n  padding: 5px;\n}</style>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app>\n\t<form ng-class=\"{ submitted: contact.$submitted }\" name=\"contact\" novalidate>\n\t\t<input type=\"text\" ng-model=\"user.name\" name=\"name\" required  placeholder=\"Name\" />\n\t\t<span class=\"errors\" ng-show=\"contact.name.$invalid\">\n\t\t\t<span ng-show=\"contact.name.$error.required\">Required</span>\n\t\t</span>\n\t\t<br />\n\t\t<input type=\"email\" ng-model=\"user.email\" name=\"email\" required  placeholder=\"email\" />\n\t\t<span class=\"errors\" ng-show=\"contact.email.$invalid\">\n\t\t\t<span ng-show=\"contact.email.$error.required\">Required</span>\n\t\t\t<span ng-show=\"contact.email.$error.email\">Email invalid</span>\n\t\t</span>\n\t\t<br />\n\t\t<button>Submit</button>\n\t</form>\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<style>.errors {\n  display: none;\n}\n\n.submitted .errors {\n  display: inline-block;\n}\n\n.submitted .ng-invalid {\n  border: 1px solid red;\n}\n\nbutton {\n  padding: 5px;\n}</style>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app>\n\t<form ng-class=\"{ submitted: contact.$submitted }\" name=\"contact\" novalidate>\n\t\t<input type=\"text\" ng-model=\"user.name\" name=\"name\" required  placeholder=\"Name\" />\n\t\t<span class=\"errors\" ng-show=\"contact.name.$invalid\">\n\t\t\t<span ng-show=\"contact.name.$error.required\">Required</span>\n\t\t</span>\n\t\t<br />\n\t\t<input type=\"email\" ng-model=\"user.email\" name=\"email\" required  placeholder=\"email\" />\n\t\t<span class=\"errors\" ng-show=\"contact.email.$invalid\">\n\t\t\t<span ng-show=\"contact.email.$error.required\">Required</span>\n\t\t\t<span ng-show=\"contact.email.$error.email\">Email invalid</span>\n\t\t</span>\n\t\t<br />\n\t\t<button>Submit</button>\n\t</form>\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<style>.errors {\n  display: none;\n}\n\n.submitted .errors {\n  display: inline-block;\n}\n\n.submitted .ng-invalid {\n  border: 1px solid red;\n}\n\nbutton {\n  padding: 5px;\n}</style>\n\t\n</head>\n\n<body>\n\t\n\t\t<body ng-app>\n\t<form ng-class=\"{ submitted: contact.$submitted }\" name=\"contact\" novalidate>\n\t\t<input type=\"text\" ng-model=\"user.name\" name=\"name\" required  placeholder=\"Name\" />\n\t\t<span class=\"errors\" ng-show=\"contact.name.$invalid\">\n\t\t\t<span ng-show=\"contact.name.$error.required\">Required</span>\n\t\t</span>\n\t\t<br />\n\t\t<input type=\"email\" ng-model=\"user.email\" name=\"email\" required  placeholder=\"email\" />\n\t\t<span class=\"errors\" ng-show=\"contact.email.$invalid\">\n\t\t\t<span ng-show=\"contact.email.$error.required\">Required</span>\n\t\t\t<span ng-show=\"contact.email.$error.email\">Email invalid</span>\n\t\t</span>\n\t\t<br />\n\t\t<button>Submit</button>\n\t</form>\n</body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<style>.errors {\n  display: none;\n}\n\n.submitted .errors {\n  display: inline-block;\n}\n\n.submitted .ng-invalid {\n  border: 1px solid red;\n}\n\nbutton {\n  padding: 5px;\n}</style>\n\t\n</head>\n\n<body>\n\t\n\t\t<form>\n    <input type=\"text\" ng-model=\"user.name\" ng-model-options=\"{ updateOn: 'blur' }\" />\n</form>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<style>.errors {\n  display: none;\n}\n\n.submitted .errors {\n  display: inline-block;\n}\n\n.submitted .ng-invalid {\n  border: 1px solid red;\n}\n\nbutton {\n  padding: 5px;\n}</style>\n\t\n</head>\n\n<body>\n\t\n\t\t<form>\n    <input type=\"text\" ng-model=\"user.name\" ng-model-options=\"{ debounce: 1000 }\" />\n</form>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<style>.errors {\n  display: none;\n}\n\n.submitted .errors {\n  display: inline-block;\n}\n\n.submitted .ng-invalid {\n  border: 1px solid red;\n}\n\nbutton {\n  padding: 5px;\n}</style>\n\t\n\t\t<script>var app = angular.module('form-example1', []);\n\nvar INTEGER_REGEXP = /^\\-?\\d+$/;\napp.directive('integer', function() {\n    return {\n        require: 'ngModel',\n        link: function(scope, elm, attrs, ctrl) {\n            ctrl.$parsers.unshift(function(viewValue) {\n\n                if (INTEGER_REGEXP.test(viewValue)) {\n                    ctrl.$setValidity('integer', true);\n                    return viewValue;\n                } else {\n                    ctrl.$setValidity('integer', false);\n                    return undefined;\n                }\n            });\n        }\n    };\n});\n</script>\n\t\n</head>\n\n<body>\n\t\n\t\t<div ng-app=\"form-example1\">\n    <form name=\"custom\">\n        <input type=\"text\" integer ng-model=\"number\" name=\"number\" />\n        <span ng-show=\"custom.number.$dirty && custom.number.$error.integer\">Invalid Integer</span>\n    </form>\n</div>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": false
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<style>.errors {\n  display: none;\n}\n\n.submitted .errors {\n  display: inline-block;\n}\n\n.submitted .ng-invalid {\n  border: 1px solid red;\n}\n\nbutton {\n  padding: 5px;\n}</style>\n\t\n\t\t<script>var app = angular.module('form-example1', []);\n\n$(document).on(\"submit\", \"form\", function(e) {\n\te.preventDefault();\n});\n\nvar INTEGER_REGEXP = /^\\-?\\d+$/;\napp.directive('integer', function() {\n    return {\n        require: 'ngModel',\n        link: function(scope, elm, attrs, ctrl) {\n            ctrl.$validators.integer = function(val) {\n                // Return true/false for valid/invalid\n                // Val is the model value, the user input\n                return INTEGER_REGEXP.test(val);\n            };\n        }\n    };\n});\n</script>\n\t\n</head>\n\n<body>\n\t\n\t\t<div ng-app=\"form-example1\">\n    <form name=\"custom\" action=\"#\">\n        <input type=\"text\" integer ng-model=\"number\" name=\"number\" />\n        <input type=\"submit\" value=\"Send\" />\n\n        <div ng-show=\"custom.$submitted || custom.number.$touched\">\n            <span ng-show=\"custom.number.$dirty && custom.number.$error.integer\">\n                Invalid Integer\n            </span>\n        </div>\n    </form>\n</div>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": true,
			"visual": true,
			"autorun": false,
			"inline": false,
			"html": "<!doctype html>\n<html>\n<head>\n\t<script>\n\tfunction captureLog( type ) {\n\t\treturn function () {\n\t\t\tparent.pipeLog( type, Array.prototype.slice.call( arguments ) );\n\t\t};\n\t}\n\tvar console = {\n\t\tlog:   captureLog( 'log' ),\n\t\tinfo:  captureLog( 'info' ),\n\t\twarn:  captureLog( 'warn' ),\n\t\terror: captureLog( 'error' )\n\t};\n\tvar alert = captureLog( 'alert' );\n</script>\n\n\n\t\n\t\t<script src='js/jquery.min_741c028fa98ab7caa5f63c1ce10f2922dcb0556c.js'></script>\n\t\n\t\t<script src='js/angular_035c40e4cbeea0abd134d03b1df835b819949948.js'></script>\n\t\n\t\t<style>body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}</style>\n\t\n\t\t<script src='js/angular-route.min_5696bd8f1b0edb3a896f645d93de23cbb0babf1d.js'></script>\n\t\n\t\t<link href='css/jasmine_3d404a7d0b63a7139dc41dc3686efce3c75cb231.css' rel='stylesheet' />\n\t\n\t\t<script src='js/jasmine_efc89ba54013fa5b494a7eb8f00a46f00ec24fc7.js'></script>\n\t\n\t\t<script src='js/jasmine-html_f1cc42bcc971cd2e94a65d50ac431c864232e808.js'></script>\n\t\n\t\t<script src='js/boot_12a91d88d5b7c7303b4783175822e161a58c9393.js'></script>\n\t\n\t\t<script src='js/angular-mocks_dd83ee231aac2cef450646d6f83c687cc7619f98.js'></script>\n\t\n\t\t<script>angular.module('introToAngularApp.controllers', [])\n    .controller('MainCtrl', function ($scope) {\n        $scope.title = 'Home';\n    });</script>\n\t\n\t\t<script>describe('app tests', function() {\n    beforeEach(module(\"introToAngularApp.controllers\"));\n\n    it('should have a MainCtrl', inject(function($controller, $rootScope) {\n        var scope = $rootScope.$new();\t\t\n\t\t\n\t\tvar MainCtrl = $controller('MainCtrl', {\n\t\t\t$scope: scope\n\t\t});\n        expect(MainCtrl).toBeDefined();\n    }));\n\t\n\tit('should set the title', inject(function($controller, $rootScope) {\n        var scope = $rootScope.$new();\n\t\t\n\t\tvar MainCtrl = $controller('MainCtrl', {\n\t\t\t$scope: scope\n\t\t});\n\t\t\n        expect(scope.title).toBe('Home');\n    }));\n});</script>\n\t\n</head>\n\n<body>\n\t\n</body>\n</html>\n"
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		},
		{
			"enabled": false
		}
	]
};