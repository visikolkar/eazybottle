angular.module('eazybottle', ['ui.router'])

    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider

            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            })

            .state('terms', {
                url: '/terms',
                templateUrl: 'templates/terms.html',
                //controller: 'HomeCtrl'
            })

            .state('privacy', {
                url: '/privacy',
                templateUrl: 'templates/privacy.html',
                //controller: 'HomeCtrl'
            })

            .state('refund', {
                url: '/refund',
                templateUrl: 'templates/refund.html',
                //controller: 'HomeCtrl'
            })

            .state('jobs', {
                url: '/jobs',
                templateUrl: 'templates/jobs.html',
                //controller: 'HomeCtrl'
            })

            .state('details', {
                url: '/details',
                templateUrl: 'templates/details.html',
                //controller: 'HomeCtrl'
            })

    })

    .controller('HomeCtrl', function ($state, $scope) {

        $scope.mobileHeight = window.innerHeight - 300;
        $scope.mobileWidth = ($scope.mobileHeight * 64) / 100; 
        //$scope.viewport = {height: window.innerHeight + 'px'};
        $scope.viewport = {width: window.innerwidth + 'px'};
        $scope.phoneHeight = { width: $scope.mobileWidth + 'px' };
        window.requestAnimFrame = (function () {
            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
        })();

        var num = 425,
            rad = 20;

        var s = [1.2, 1, 0.8, 0.5, 0.3];

        function _S() {
            var curr = s.length;
            var cur_ = Math.floor(Math.random() * curr);
            return s[cur_];
        }

        function FizzBuzz(c) {
            this.c = c;
            this.$ = c.getContext('2d');
            this.b = {};
            this.go();
        }

        FizzBuzz.prototype.go = function () {
            this.x = this.b.x = Math.random() * (this.c.width - rad);
            this.y = this.b.y = Math.random() * (this.c.width - rad);
            this.radi = _S();
            //this.radi = 2;
            this.xPos = Math.random() * 9;

            this.draw();
        };

        FizzBuzz.prototype.draw = function () {
            this.$.globalCompositeOperation = 'source-over';
            this.$.fillStyle = "#00FFFF";
            this.$.globalCompositeOperation = 'lighter';
            this.$.save();
            this.$.beginPath();
            this.$.arc(this.x, this.y, this.radi, 0, Math.PI * 2, false);
            this.$.fill();
            this.$.restore();
        };

        FizzBuzz.prototype.disp = function () {
            this.x = (Math.sin(this.xPos -= 0.35) * this.radi * 0.16 + 6) + this.b.x;
            this.y -= this.radi * 0.33;
            if (this.y <= -100) {
                this.y = this.c.height + rad;
            }
            this.draw();
        };

        function Fizz(c) {
            this.c = c;
            this.$ = c.getContext('2d');
            this.arr = [];
        }

        Fizz.prototype.add = function (buzz) {
            this.arr.push(buzz);
        };

        Fizz.prototype.upd = function () {
            this.$.clearRect(0, 0, this.c.width, this.c.height);

            for (var i in this.arr) {
                this.arr[i].disp();
            }
        };

        //handle resize() event 

        //resize() event finish here

        (function () {
            var c = document.getElementById('bg-particles');
            var $ = c.getContext('2d');
            var w = c.width = window.innerWidth;
            var h = c.height = window.innerHeight;

            var fb = new Fizz(c);
            for (var i = 0, u = num; i < u; i++) {
                var buzz = new FizzBuzz(c);
                fb.add(buzz);
            }
            _t();

            function _t() {
                fb.upd();
                window.requestAnimFrame(_t);
            }
            loadCarousel();
        })();

        (function($) {
            "use strict";
        
            // manual carousel controls
            $('.next').click(function(){ $('.carousel').carousel('next');return false; });
            $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });
            
        })(jQuery);

        $scope.reviews = [{
            name:"Ranjith Reddy",
            ratings:5,
            review:"Nice  App , water delivery and quality is good",
        }, {
            name:"Krishnarao Bhatraju",
            ratings:5,
            review:"Very happy with the service. Place an order and forget about it. Without any followup ...bottle would be delivered.",
        }, {
            name:"Chandrika M.R",
            ratings:5,
            review:"Initially I had problems with giving delivery address, and raised the issue with the concerned team and they were very responsive and got the issue resolved within 24 hours. Felt amazing for their sense of commitment and the app works great and very convenient to order a can on fingertips now! Kudos to the team.. :)",
        }, {
            name:"rk reddy",
            ratings:5,
            review:"Very good  service provider and trusted quality water.",
        }, {
            name:"Satheesh Yadav",
            ratings:5,
            review:"Good service eazy bottle team hope u will provide better service in future also all the best for taking good initiative in water service...",
        }, {
            name:"raghu raman",
            ratings:5,
            review:"Over all Excellent service.appreciated",
        }, {
            name:"John Emmatty",
            ratings:5,
            review:"Prompt delivery and neat bottles",
        }, {
            name:"Bhabani Shankar Mishra",
            ratings:5,
            review:"Need some improvement. If I need to change my phone number and address there is no option in account settings to change. Which is essentially required. So Plz add those options in next update. Which ll be very convenient and User-friendly. Otherwise the app is good.",
        }, {
            name:"Dinesh Pahi",
            ratings:5,
            review:"Very good app, need to improve little bit Performance ,Because some time it's hanging in mine.",
        }, {
            name:"Kavishka somani",
            ratings:5,
            review:"Excellent services, clean water and bottles. On time, fast and quick.",
        },];
    })