(function() {

    var app = angular.module('tmc', ['ngRoute'])

    .config(function($routeProvider) {


        $routeProvider.when('/', {
            templateUrl: 'views/home.html',
            controller: ''
        });
        $routeProvider.when('/about-us', {
            templateUrl: 'views/aboutUs.html',
            controller: ''
        });
        $routeProvider.when('/building-maintenance', {
            templateUrl: 'views/building.html',
            controller: ''
        });
        $routeProvider.when('/contact-us', {
            templateUrl: 'views/contactUs.html',
            controller: ''
        });
        $routeProvider.when('/janitorial', {
            templateUrl: 'views/janitorial.html',
            controller: ''
        });

        $routeProvider.when('/plant-sanitation', {
            templateUrl: 'views/plantSanitation.html',
            controller: ''
        });
        $routeProvider.when('/our-services', {
            templateUrl: 'views/services.html',
            controller: ''
        });
        $routeProvider.when('/why-tmc', {
            templateUrl: 'views/whyTmc.html',
            controller: ''
        });
    });




}());


// $(document).ready(function() {
// // Navigation open and close
//     $('#toggle, nav a').click(function() {
//         $('#toggle, nav a').toggleClass('active');
//         $('#overlay').toggleClass('open');
//     });

// // Back to top button
//     $('.scrollToTop').click(function() {
//         $('html, body').animate({ scrollTop: 0 }, 2200);
//         return false;
//     });

// });


