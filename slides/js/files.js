var presentationFiles = [
	{
		"_id": "53efbdc37cef8c81290002e8",
		"updatedAt": "2014-08-26T20:44:58.459Z",
		"url": "",
		"content": "<!doctype html>\n<html ng-app>\n\t<!--\n\t\tInsert Angular Reference\n\t-->\n<body>\n\t<div>\n\t\t<label for=\"username\">\n\t\t\tUsername: \n\t\t\t<input type=\"text\" ng-model=\"username\" name=\"username\">\n\t\t</label>\n\t</div>\n\t<div>\n\t\tUsername:{{ username }}\n\t</div>\n</body>\n</html>",
		"mimeType": "text/plain",
		"language": "text/html",
		"folder": false,
		"parent": null,
		"name": "sample.html"
	},
	{
		"_id": "53efbdca7cef8c81290002e9",
		"updatedAt": "2014-08-26T20:44:58.459Z",
		"url": "",
		"content": "",
		"mimeType": "text/plain",
		"language": "",
		"folder": true,
		"parent": null,
		"name": "Introduction"
	},
	{
		"_id": "53efbe927cef8c81290002ea",
		"updatedAt": "2014-08-26T20:44:58.459Z",
		"url": "",
		"content": "body {\n  background-color: #ffffff;\n  font-family: arial, helvetica, sans-serif;\n  font-size: 18px;\n}",
		"mimeType": "text/plain",
		"language": "text/css",
		"folder": false,
		"parent": null,
		"name": "demo-style.css"
	},
	{
		"_id": "53f1636e7cef8c81290002f6",
		"updatedAt": "2014-08-26T20:44:58.459Z",
		"url": "",
		"content": "",
		"mimeType": "text/plain",
		"language": "",
		"folder": true,
		"parent": null,
		"name": "images"
	},
	{
		"_id": "53f163787cef8c81290002f7",
		"updatedAt": "2014-08-26T20:44:58.459Z",
		"url": "https://s3.amazonaws.com/media.training.appendto.com/projects/53efbc747cef8c81290002e2/angularjs-logo-trans_1408328568284.png",
		"content": "",
		"mimeType": "image/png",
		"language": "",
		"folder": false,
		"parent": "53f1636e7cef8c81290002f6",
		"name": "angularjs-logo-trans.png"
	},
	{
		"_id": "53f164117cef8c81290002f8",
		"updatedAt": "2014-08-26T20:44:58.459Z",
		"url": "https://s3.amazonaws.com/media.training.appendto.com/projects/53efbc747cef8c81290002e2/AngularJS-large_1408328721406.png",
		"content": "",
		"mimeType": "image/png",
		"language": "",
		"folder": false,
		"parent": "53f1636e7cef8c81290002f6",
		"name": "AngularJS-large.png"
	},
	{
		"_id": "53f21b7d7cef8c8129000327",
		"updatedAt": "2014-08-26T20:44:58.459Z",
		"url": "https://s3.amazonaws.com/media.training.appendto.com/projects/53efbc747cef8c81290002e2/500px-MVC-Process_1408375677781.png",
		"content": "",
		"mimeType": "image/png",
		"language": "",
		"folder": false,
		"parent": "53f1636e7cef8c81290002f6",
		"name": "500px-MVC-Process.png"
	},
	{
		"_id": "53f264a87cef8c812900032a",
		"updatedAt": "2014-08-26T20:44:58.460Z",
		"url": "",
		"content": "",
		"mimeType": "text/plain",
		"language": "",
		"folder": true,
		"parent": null,
		"name": "routing"
	},
	{
		"_id": "53f264b37cef8c812900032b",
		"updatedAt": "2014-08-26T20:44:58.460Z",
		"url": "",
		"content": "angular.module('introToAngularApp', ['ngRoute'])\n.config(function($routeProvider) {\n\t$routeProvider\n\t\t.when('/', {\n\t\t\tcontroller: 'MainCtrl',\n\t\t\tcontrollerAs: 'vm',\n\t\t\ttemplateUrl: 'partials/main.html'\n\t\t})\n\t\t.when('/contact', {\n\t\t\ttemplateUrl: 'partials/contact.html',\n\t\t\tcontroller: 'ContactCtrl',\n\t\t\tcontrollerAs: 'vm'\n\t\t})\n\t\t.otherwise({\n\t\t\tredirectTo: '/'\n\t\t});\n});",
		"mimeType": "text/plain",
		"language": "text/javascript",
		"folder": false,
		"parent": "53f264a87cef8c812900032a",
		"name": "configuration.js"
	},
	{
		"_id": "53f267c67cef8c8129000331",
		"updatedAt": "2014-08-26T20:44:58.460Z",
		"url": "",
		"content": "",
		"mimeType": "text/plain",
		"language": "text/javascript",
		"folder": false,
		"parent": null,
		"name": "allRouteOptions.js"
	},
	{
		"_id": "53f267d87cef8c8129000332",
		"updatedAt": "2014-08-26T20:44:58.460Z",
		"url": "",
		"content": "angular.module('introToAngularApp')\n\t.config(function($routeProvider) {\n\t\t$routeProvider\n\t\t\t.when('/menu', {\n\t\t\t\tcontroller: 'MenuCtrl',\n\t\t\t\tcontrollerAs: 'vm',\n\t\t\t\ttemplate: '<div>Template {{vm.foo}}</div>',\n\t\t\t\ttemplateUrl: 'partials/menu.html',\n\t\t\t\tresolve: {\n\t\t\t\t\tlist: function(Menu, $q) {\n\t\t\t\t\t\tvar dfd = $q.defer();\n\t\t\t\t\t\t\n\t\t\t\t\t\tMenu.list().success(function(data) {\n\t\t\t\t\t\t\tdfd.resolve(data);\n\t\t\t\t\t\t});\n\n\t\t\t\t\t\treturn dfd.promise;\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\tredirectTo: '/redirect-somewhere',\n\t\t\t\treloadOnSearch: true,\n\t\t\t\tcaseInsensitiveMath: false\n\t\t\t});\n\t});\n\nangular.module('introToAngularApp')\n\t.controller('MainCtrl', function(list) {\n\t\tthis.list = list;\n\t});",
		"mimeType": "text/plain",
		"language": "text/javascript",
		"folder": false,
		"parent": "53f264a87cef8c812900032a",
		"name": "allRouteOptions.js"
	},
	{
		"_id": "53f29b797cef8c8129000339",
		"updatedAt": "2014-08-26T20:44:58.460Z",
		"url": "",
		"content": "<script type=\"text/javascript\" src=\"//www.google.com/trends/embed.js?hl=en-US&q=angularjs,+backbone.js,+knockout.js,+ember.js&date=1/2010+56m&cmpt=q&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=1000&h=600\"></script>",
		"mimeType": "text/plain",
		"language": "text/html",
		"folder": false,
		"parent": "53efbdca7cef8c81290002e9",
		"name": "script-load.html"
	},
	{
		"_id": "53f29c1b7cef8c812900033b",
		"updatedAt": "2014-08-26T20:44:58.460Z",
		"url": "https://s3.amazonaws.com/media.training.appendto.com/projects/53efbc747cef8c81290002e2/fluent-conf-tweet_1408408602847.jpg",
		"content": "",
		"mimeType": "image/jpeg",
		"language": "",
		"folder": false,
		"parent": "53f1636e7cef8c81290002f6",
		"name": "fluent-conf-tweet.jpg"
	},
	{
		"_id": "53f2a0c97cef8c812900033e",
		"updatedAt": "2014-08-26T20:44:58.460Z",
		"url": "https://s3.amazonaws.com/media.training.appendto.com/projects/53efbc747cef8c81290002e2/angular-competitors_1408409801365.png",
		"content": "",
		"mimeType": "image/png",
		"language": "",
		"folder": false,
		"parent": "53f1636e7cef8c81290002f6",
		"name": "angular-competitors.png"
	},
	{
		"_id": "53f2a3347cef8c8129000340",
		"updatedAt": "2014-08-26T20:44:58.460Z",
		"url": "https://s3.amazonaws.com/media.training.appendto.com/projects/53efbc747cef8c81290002e2/check-mark-md_1408410420779.png",
		"content": "",
		"mimeType": "image/png",
		"language": "",
		"folder": false,
		"parent": "53f1636e7cef8c81290002f6",
		"name": "check-mark-md.png"
	},
	{
		"_id": "53f2a7f37cef8c8129000342",
		"updatedAt": "2014-08-26T20:44:58.460Z",
		"url": "https://s3.amazonaws.com/media.training.appendto.com/projects/53efbc747cef8c81290002e2/steep-learning-curve_1408411634931.png",
		"content": "",
		"mimeType": "image/png",
		"language": "",
		"folder": false,
		"parent": "53f1636e7cef8c81290002f6",
		"name": "steep-learning-curve.png"
	},
	{
		"_id": "53f37e097cef8c8129000352",
		"updatedAt": "2014-08-26T20:44:58.460Z",
		"url": "",
		"content": "angular.module('introToAngularApp', ['ngRoute'])\n\t.config(function($routeProvider) {\n\t\t$routeProvider.when('/', {\n\t\t\ttemplate: '<h1>Home</h1>'\n\t\t}).when('/about', {\n\t\t\ttemplate: '<h1>About</h1>'\n\t\t})\n\t\t.when('/contact', {\n\t\t\ttemplate: '<h1>Contact</h1>'\n\t\t});\n\t});",
		"mimeType": "text/plain",
		"language": "text/javascript",
		"folder": false,
		"parent": "53f264a87cef8c812900032a",
		"name": "routingDemo.js"
	},
	{
		"_id": "53f3b0a37cef8c8129000367",
		"updatedAt": "2014-08-26T20:44:58.461Z",
		"url": "",
		"content": "",
		"mimeType": "text/plain",
		"language": "",
		"folder": true,
		"parent": null,
		"name": "forms"
	},
	{
		"_id": "53f3b0b17cef8c8129000368",
		"updatedAt": "2014-08-26T20:44:58.461Z",
		"url": "",
		"content": ".errors {\n  display: none;\n}\n\n.submitted .errors {\n  display: inline-block;\n}\n\n.submitted .ng-invalid {\n  border: 1px solid red;\n}\n\nbutton {\n  padding: 5px;\n}",
		"mimeType": "text/plain",
		"language": "text/css",
		"folder": false,
		"parent": "53f3b0a37cef8c8129000367",
		"name": "validation.css"
	},
	{
		"_id": "53f3b10b7cef8c8129000369",
		"updatedAt": "2014-08-26T20:44:58.461Z",
		"url": "",
		"content": "<body ng-app>\n\t<form ng-class=\"{ submitted: submitted }\" ng-submit=\"submitted = contact.$invalid\" name=\"contact\" novalidate>\n\t\t<input type=\"text\" ng-model=\"user.name\" name=\"name\" required  placeholder=\"Name\" />\n\t\t<span class=\"errors\" ng-show=\"contact.name.$invalid\">\n\t\t\t<span ng-show=\"contact.name.$error.required\">Required</span>\n\t\t</span>\n\t\t<br />\n\t\t<input type=\"email\" ng-model=\"user.email\" name=\"email\" required  placeholder=\"email\" />\n\t\t<span class=\"errors\" ng-show=\"contact.email.$invalid\">\n\t\t\t<span ng-show=\"contact.email.$error.required\">Required</span>\n\t\t\t<span ng-show=\"contact.email.$error.email\">Email invalid</span>\n\t\t</span>\n\t\t<br />\n\t\t<button>Submit</button>\n\t</form>\n</body>",
		"mimeType": "text/plain",
		"language": "text/html",
		"folder": false,
		"parent": "53f3b0a37cef8c8129000367",
		"name": "validation.html"
	},
	{
		"_id": "53f3c6987cef8c8129000378",
		"updatedAt": "2014-08-26T20:44:58.461Z",
		"url": "",
		"content": "var app = angular.module('form-example1', []);\n\nvar INTEGER_REGEXP = /^\\-?\\d+$/;\napp.directive('integer', function() {\n    return {\n        require: 'ngModel',\n        link: function(scope, elm, attrs, ctrl) {\n            ctrl.$parsers.unshift(function(viewValue) {\n\n                if (INTEGER_REGEXP.test(viewValue)) {\n                    ctrl.$setValidity('integer', true);\n                    return viewValue;\n                } else {\n                    ctrl.$setValidity('integer', false);\n                    return undefined;\n                }\n            });\n        }\n    };\n});\n",
		"mimeType": "text/plain",
		"language": "text/javascript",
		"folder": false,
		"parent": "53f3b0a37cef8c8129000367",
		"name": "customValidation.js"
	},
	{
		"_id": "53f49fb67cef8c812900037d",
		"updatedAt": "2014-08-26T20:44:58.461Z",
		"url": "",
		"content": "var app = angular.module('form-example1', []);\n\nvar INTEGER_REGEXP = /^\\-?\\d+$/;\napp.directive('integer', function() {\n    return {\n        require: 'ngModel',\n        link: function(scope, elm, attrs, ctrl) {\n            ctrl.$validators.integer = function(val) {\n                // Return true/false for valid/invalid\n                // Val is the model value, the user input\n                return INTEGER_REGEXP.test(val);\n            };\n        }\n    };\n});\n",
		"mimeType": "text/plain",
		"language": "text/javascript",
		"folder": false,
		"parent": "53f3b0a37cef8c8129000367",
		"name": "customValidationNew.js"
	},
	{
		"_id": "53f4a8687cef8c812900038c",
		"updatedAt": "2014-08-26T20:44:58.461Z",
		"url": "",
		"content": "",
		"mimeType": "text/plain",
		"language": "",
		"folder": true,
		"parent": null,
		"name": "testing"
	},
	{
		"_id": "53f4a8707cef8c812900038d",
		"updatedAt": "2014-08-26T20:44:58.461Z",
		"url": "",
		"content": "angular.module(\"app\", [])\n    .controller(\"FooCtrl\", function() {\n        this.foo = \"bar\";\n    });\n\ndescribe('foo', function() {\n    beforeEach(module(\"app\"));\n\n    it('should foo', inject(function($controller) {\n        var FooCtrl = $controller('FooCtrl');\n        expect(FooCtrl.foo).toBe(\"bar\");\n    }));\n});",
		"mimeType": "text/plain",
		"language": "text/javascript",
		"folder": false,
		"parent": "53f4a8687cef8c812900038c",
		"name": "firstTest.js"
	},
	{
		"_id": "53f4aa017cef8c8129000396",
		"updatedAt": "2014-08-26T20:44:58.461Z",
		"url": "",
		"content": "angular.module('introToAngularApp.controllers', [])\n    .controller('MainCtrl', function ($scope) {\n        $scope.title = 'Home';\n    });",
		"mimeType": "text/plain",
		"language": "text/javascript",
		"folder": false,
		"parent": "53f4a8687cef8c812900038c",
		"name": "mainCtrlForTest.js"
	},
	{
		"_id": "53f4aa107cef8c8129000397",
		"updatedAt": "2014-08-26T20:44:58.462Z",
		"url": "",
		"content": "describe('app tests', function() {\n    beforeEach(module(\"introToAngularApp.controllers\"));\n\n    it('should have a MainCtrl', inject(function($controller, $rootScope) {\n        var scope = $rootScope.$new();\t\t\n\t\t\n\t\tvar MainCtrl = $controller('MainCtrl', {\n\t\t\t$scope: scope\n\t\t});\n        expect(MainCtrl).toBeDefined();\n    }));\n\t\n\tit('should set the title', inject(function($controller, $rootScope) {\n        var scope = $rootScope.$new();\n\t\t\n\t\tvar MainCtrl = $controller('MainCtrl', {\n\t\t\t$scope: scope\n\t\t});\n\t\t\n        expect(scope.title).toBe('Home');\n    }));\n});",
		"mimeType": "text/plain",
		"language": "text/javascript",
		"folder": false,
		"parent": "53f4a8687cef8c812900038c",
		"name": "testWithDependencies.js"
	},
	{
		"_id": "53f5eea97cef8c81290003c4",
		"updatedAt": "2014-08-26T20:44:58.462Z",
		"url": "",
		"content": "",
		"mimeType": "text/plain",
		"language": "",
		"folder": true,
		"parent": null,
		"name": "controllers"
	},
	{
		"_id": "53f5eeb27cef8c81290003c5",
		"updatedAt": "2014-08-26T20:44:58.462Z",
		"url": "",
		"content": "angular.module('introToAngularApp', [])\n    .controller('MainCtrl', function ($scope) {\n        $scope.title = 'Home';\n    });",
		"mimeType": "text/plain",
		"language": "text/javascript",
		"folder": false,
		"parent": "53f5eea97cef8c81290003c4",
		"name": "mainCtrl.js"
	},
	{
		"_id": "53f5f0887cef8c81290003ca",
		"updatedAt": "2014-08-26T20:44:58.462Z",
		"url": "",
		"content": "angular.module('introToAngularApp', [])\n\t.controller('ContactCtrl', function($scope) {\n\t\t$scope.user = {\n\t\t\tname: \"\",\n\t\t\temail: \"\",\n\t\t\tcomment: \"\"\n\t\t};\n\n        $scope.send = function(name, email, comment) {\n\t\t\tconsole.log(\"mail sent to: \" + name + \" at \" + email);\n        };\n    });",
		"mimeType": "text/plain",
		"language": "text/javascript",
		"folder": false,
		"parent": "53f5eea97cef8c81290003c4",
		"name": "controllerWithActions.js"
	},
	{
		"_id": "53f5f3147cef8c81290003ce",
		"updatedAt": "2014-08-26T20:44:58.462Z",
		"url": "",
		"content": "angular.module('introToAngularApp', [])\n\t.controller('ContactCtrl', function() {\n\t\tthis.user = {\n\t\t\tname: \"\",\n\t\t\temail: \"\",\n\t\t\tcomment: \"\"\n\t\t};\n\n        this.send = function(name, email, comment) {\n\t\t\tconsole.log(\"mail sent to: \" + name + \" at \" + email);\n        };\n    });",
		"mimeType": "text/plain",
		"language": "text/javascript",
		"folder": false,
		"parent": "53f5eea97cef8c81290003c4",
		"name": "controllerAsWithActions.js"
	},
	{
		"_id": "53f665a07cef8c81290003fc",
		"updatedAt": "2014-08-26T20:44:58.462Z",
		"url": "",
		"content": "<body ng-app=\"introToAngularApp\">\n\t<div ng-controller=\"NavCtrl\">\n\t\t<select class=\"form-control\" \n\t\t\tng-options=\"item.title for item in items\"\n\t\t\tng-change=\"goTo(selectedNavItem.url)\" \n\t\t\tng-model=\"selectedNavItem\">\n\t\t</select> \n\t</div>\n</body>",
		"mimeType": "text/plain",
		"language": "text/html",
		"folder": false,
		"parent": "53f3b0a37cef8c8129000367",
		"name": "selectNavigation.html"
	},
	{
		"_id": "53f665c37cef8c81290003fd",
		"updatedAt": "2014-08-26T20:44:58.462Z",
		"url": "",
		"content": "angular.module('introToAngularApp', [])\n\t.controller('NavCtrl', function($scope, $location) {\n\t\t$scope.items = [{ url: '/', title: 'home'}, { url: '/about', title: 'about'}];\n\n\t\t$scope.selectedNavItem = $scope.items[0]\n\n\t\t$scope.goTo = function(url) { console.log(url); /* $location.path(url) */ };\n\t});",
		"mimeType": "text/plain",
		"language": "text/javascript",
		"folder": false,
		"parent": "53f3b0a37cef8c8129000367",
		"name": "selectNavigation.js"
	},
	{
		"_id": "53f761c67cef8c8129000434",
		"updatedAt": "2014-08-26T20:44:58.462Z",
		"url": "",
		"content": "",
		"mimeType": "text/plain",
		"language": "",
		"folder": true,
		"parent": null,
		"name": "directives"
	},
	{
		"_id": "53f761d17cef8c8129000435",
		"updatedAt": "2014-08-26T20:44:58.462Z",
		"url": "",
		"content": "angular.module('Demo', [])\n\t.controller('DemoCtrl', function($scope) {\n\t\t$scope.user = { name: 'Han' };\n\t})\n\t.directive('a2Header', function() {\n\t\treturn {\n\t\t\trestrict: 'E',\n\t\t\tscope: {\n\t\t\t\tuser: '='\n\t\t\t},\n\t\t\tlink: function(scope, element, attrs) {\n\t\t\t\tconsole.log(scope.user.name); // \"han\"\n\t\t\t}\n\t\t};\n\t});",
		"mimeType": "text/plain",
		"language": "text/javascript",
		"folder": false,
		"parent": "53f761c67cef8c8129000434",
		"name": "isolateScope.js"
	},
	{
		"_id": "53f7624b7cef8c8129000436",
		"updatedAt": "2014-08-26T20:44:58.462Z",
		"url": "",
		"content": "",
		"mimeType": "text/plain",
		"language": "",
		"folder": true,
		"parent": null,
		"name": "scope"
	},
	{
		"_id": "53f764217cef8c812900043a",
		"updatedAt": "2014-08-26T20:44:58.463Z",
		"url": "",
		"content": "angular.module('Demo', [])\n\t.controller('DemoCtrl', function($scope) {\n\t\t$scope.user = { name: 'Han' };\n\t})\n\t.directive('a2Header', function() {\n\t\treturn {\n\t\t\trestrict: 'E',\n\t\t\tscope: {\n\t\t\t\tuser: '=myUser'\n\t\t\t},\n\t\t\tlink: function(scope, element, attrs) {\n\t\t\t\tconsole.log(scope.user.name); // \"han\"\n\t\t\t}\n\t\t};\n\t});",
		"mimeType": "text/plain",
		"language": "text/javascript",
		"folder": false,
		"parent": "53f761c67cef8c8129000434",
		"name": "isolateScopeDifferentAttr.js"
	},
	{
		"_id": "53f765147cef8c812900043c",
		"updatedAt": "2014-08-26T20:44:58.463Z",
		"url": "",
		"content": "angular.module('Demo', [])\n\t.controller('DemoCtrl', function($scope) {\n\t\t$scope.user = { name: 'Han' };\n\t})\n\t.directive('a2Header', function() {\n\t\treturn {\n\t\t\trestrict: 'E',\n\t\t\tscope: {\n\t\t\t\tuser: '=',\n\t\t\t\tage: '@'\n\t\t\t},\n\t\t\tlink: function(scope, element, attrs) {\n\t\t\t\tconsole.log(scope.user.name);\n\t\t\t\tconsole.log(scope.age);\n\t\t\t}\n\t\t};\n\t});",
		"mimeType": "text/plain",
		"language": "text/javascript",
		"folder": false,
		"parent": "53f761c67cef8c8129000434",
		"name": "isolateScopeInterpolation.js"
	},
	{
		"_id": "53f768057cef8c8129000441",
		"updatedAt": "2014-08-26T20:44:58.463Z",
		"url": "",
		"content": "angular.module('introToAngularApp', [])\n    .controller('OrderCtrl', function() {\n        this.items = ['pizza', 'spaghetti', 'calzone']\n        this.order = function(item) { console.log(\"order: \" + item ); }\n    });",
		"mimeType": "text/plain",
		"language": "text/javascript",
		"folder": false,
		"parent": "53f761c67cef8c8129000434",
		"name": "controllerForItems.js"
	},
	{
		"_id": "53f768217cef8c8129000442",
		"updatedAt": "2014-08-26T20:44:58.463Z",
		"url": "",
		"content": "<body ng-app=\"introToAngularApp\">\n    <div ng-controller=\"OrderCtrl as vm\">\n        <ul>\n            <li ng-repeat=\"item in vm.items\">\n                <a2-order process=\"vm.order(item)\" item=\"item\"></a2-order>\n            </li>\n        </ul>\n    </div>\n</body>",
		"mimeType": "text/plain",
		"language": "text/html",
		"folder": false,
		"parent": "53f761c67cef8c8129000434",
		"name": "itemListOrderTemplate.html"
	},
	{
		"_id": "53f7683a7cef8c8129000443",
		"updatedAt": "2014-08-26T20:44:58.463Z",
		"url": "",
		"content": "angular.module('introToAngularApp')\n\t.directive('a2Order', function() {\n\t\treturn {\n\t\t\trestrict: 'E',\n\t\t\tscope: {\n\t\t\t\tprocess: '&',\n\t\t\t\titem: '='\n\t\t\t},\n\t\t\ttemplate: '<button ng-click=\"process({ foo: item })\">{{item}}</button>'\n\t\t};\n\t});",
		"mimeType": "text/plain",
		"language": "text/javascript",
		"folder": false,
		"parent": "53f761c67cef8c8129000434",
		"name": "orderDirective.js"
	},
	{
		"_id": "53f76c2f7cef8c8129000448",
		"updatedAt": "2014-08-26T20:44:58.463Z",
		"url": "",
		"content": "angular.module('DirectiveCommunication', [])\n\t.directive('myFirst', function() {\n\t\treturn {\n\t\t\tcontroller: function() {\n\t\t\t\tthis.name = \"myFirst controller\";\n\t\t\t}\n\t\t};\n\t})\n\t.directive('mySecond', function() {\n\t\treturn {\n\t\t\trestrict: 'E',\n\t\t\trequire: 'myFirst',\n\t\t\tlink: function(scope, element, attrs, ctrls) {\n\t\t\t\tconsole.log(ctrls);\n\t\t\t}\n\t\t};\n\t});",
		"mimeType": "text/plain",
		"language": "text/javascript",
		"folder": false,
		"parent": "53f761c67cef8c8129000434",
		"name": "communication.js"
	},
	{
		"_id": "53f76e057cef8c812900044b",
		"updatedAt": "2014-08-26T20:44:58.463Z",
		"url": "",
		"content": "angular.module('DirectiveCommunication', [])\n\t.directive('myFirst', function() {\n\t\treturn {\n\t\t\tcontroller: function() {\n\t\t\t\tthis.name = \"myFirst controller\";\n\t\t\t}\n\t\t};\n\t})\n\t.directive('mySecond', function() {\n\t\treturn {\n\t\t\trestrict: 'E',\n\t\t\trequire: '?myFirst',\n\t\t\tlink: function(scope, element, attrs, ctrls) {\n\t\t\t\tconsole.log(ctrls);\n\t\t\t}\n\t\t};\n\t});",
		"mimeType": "text/plain",
		"language": "text/javascript",
		"folder": false,
		"parent": "53f761c67cef8c8129000434",
		"name": "communicationOptional.js"
	},
	{
		"_id": "53f76eb57cef8c812900044d",
		"updatedAt": "2014-08-26T20:44:58.463Z",
		"url": "",
		"content": "angular.module('DirectiveCommunication', [])\n\t.directive('myFirst', function() {\n\t\treturn {\n\t\t\tcontroller: function() {\n\t\t\t\tthis.name = \"myFirst controller\";\n\t\t\t}\n\t\t};\n\t})\n\t.directive('mySecond', function() {\n\t\treturn {\n\t\t\trestrict: 'E',\n\t\t\trequire: '?^myFirst',\n\t\t\tlink: function(scope, element, attrs, ctrls) {\n\t\t\t\tconsole.log(ctrls);\n\t\t\t}\n\t\t};\n\t});",
		"mimeType": "text/plain",
		"language": "text/javascript",
		"folder": false,
		"parent": "53f761c67cef8c8129000434",
		"name": "communicationParent.js"
	},
	{
		"_id": "53f7a0b87cef8c8129000462",
		"updatedAt": "2014-08-26T20:44:58.463Z",
		"url": "",
		"content": "angular.module('introToAngularApp.controllers')\t\n\t.controller('ReservationsCtrl', function(Reservations, $scope, $filter) {\n        var self = this;\n\n        // For create and update\n        this.reservation = {};\n        \n        // Get list\n        this.reservations = Reservations.query();\n\n        // Create a reservation on button click\n        this.createReservation = function() {\n            var date, reservation;\n\n            if (!$scope.reservations.$invalid) {\n                date = new Date(self.reservation.date + \" \" + self.reservation.time);\n\n                if (!self.reservation.id) {\n                        reservation = new Reservations({\n                            time: new Date(date),\n                            qty: self.reservation.qty,\n                            name: self.reservation.name\n                        });\n\n                    reservation.$save().then(function() {\n                        self.reservations = Reservations.query();\n                    });\n                }\n                else {\n                    Reservations.update({\n                        id: self.reservation.id,\n                        time: new Date(date),\n                        qty: self.reservation.qty,\n                        name: self.reservation.name\n                    }, function() {\n                        self.reservations = Reservations.query();\n                    });\n                }\n                \n\n                // Help with validation\n                this.submitted = false;\n\n                this.clear();\n            }\n            else {\n                this.submitted = true;\n            }\n        };\n\n        this.edit = function(id) {\n            Reservations.get({\n                id: id\n            }, function(reservation) {\n                self.reservation.id = reservation.id;\n                self.reservation.name = reservation.name;\n                self.reservation.qty = +reservation.qty;\n                self.reservation.date = $filter('date')(reservation.time, 'shortDate');\n                self.reservation.time = $filter('date')(reservation.time, 'shortTime');\n            });\n        };\n\n        this.remove = function(id) {\n            Reservations.remove({\n                id: id\n            }, function() {\n                self.reservations = Reservations.query();\n\n                self.clear();\n            });\n        };\n\n        this.clear = function() {\n            self.reservation.id = \"\";\n            self.reservation.name = \"\";\n            self.reservation.qty = \"\";\n            self.reservation.time = \"\";\n            self.reservation.date = \"\";\n        };\n    })",
		"mimeType": "text/plain",
		"language": "text/javascript",
		"folder": false,
		"parent": "53f5eea97cef8c81290003c4",
		"name": "reservationsCtrl.js"
	},
	{
		"_id": "53fa8bd37cef8c8129000468",
		"updatedAt": "2014-08-26T20:44:58.463Z",
		"url": "",
		"content": "<!doctype html>\n<html>\n<head>\n  <%= consoleBridge %>\n\n  <%_.each( deps.head, function ( dep ) { %>\n    <%= dep.content %>\n  <% }) %>\n  \n  <style>\n    #countdown {\n      font-family: arial, helvetica, sans-serif;\n      font-size: 96px;\n      font-weight: bold;\n      text-shadow: 5px 5px 10px #000;\n      color: #ffffff;\n      display:block;\n      text-align: center;\n    }\n    \n    #time {\n      color: #fff;\n      font-family: arial, helvetica, sans-serif;\n      text-align: center;\n    }\n  </style>\n</head>\n\n<body>\n  \n  <div id=\"time\">\n    How long is this break?<br>\n      <button>5</button> \n    <button>10</button>\n    <button>15</button>\n    <button>20</button>\n    <button>25</button>\n    <button>30</button>\n    <button>35</button>\n    <button>40</button>\n    <button>45</button>\n    <button>50</button>\n    <button>55</button>\n    <button>60</button>\n  </div>\n    <div id=\"countdown\" hidden></div>\n    <script type=\"text/javascript\">\n\n        function countdown(element, minutes, seconds) {\n            var time = minutes*60 + seconds;\n            var interval = setInterval(function() {\n                var el = document.getElementById(element);\n                if(time == 0) {\n                    el.innerHTML = \"We're about to start!\";    \n                    clearInterval(interval);\n                    return;\n                }\n                var minutes = Math.floor( time / 60 );\n                if (minutes < 10) minutes = \"0\" + minutes;\n                var seconds = time % 60;\n                if (seconds < 10) seconds = \"0\" + seconds; \n                var text = minutes + ':' + seconds;\n                el.innerHTML = text;\n                time--;\n            }, 1000);\n        }\n\n        $( document ).on( \"click\", \"#time button\", function( e ){\n            var time = $(e.currentTarget).text();\n\n            console.log(time + \" minute break starts now\");\n\n            $(e.currentTarget)\n                .closest(\"#time\")\n                .hide()\n                .nextUntil( \"div\" )\n                    .removeAttr(\"hidden\");\n\n\n            countdown(\"countdown\", parseInt(time), 0);\n        });\n        \n    </script>\n  \n  <% _.each( deps.body, function ( dep ) { %>\n    <%= dep.content %>\n  <% }) %>\n</body>\n</html>\n",
		"mimeType": "text/plain",
		"language": "text/x-blazon",
		"folder": false,
		"parent": null,
		"name": "countdown.bdemo"
	}
];