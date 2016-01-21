// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

(function() {


var app = angular.module('starter', ['ionic', 'leaflet-directive']);

app.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider.state('map', {
    url: '/map',
    views: {
      'tab-map': {
        templateUrl: 'templates/map.html'
      }
    }  
  });

  $stateProvider.state('details', {
    url: '/details',
    views: {
      'tab-menu': {
        templateUrl: 'templates/details.html'
      }
    }
  });

  $stateProvider.state('menu', {
    url: '/menu',
    views: {
      'tab-menu': {
        templateUrl: 'templates/menu.html'
      }
    }
  });

    $urlRouterProvider.otherwise('/map');

});

app.controller('MapController', function($scope) {
    $scope.map = {
        defaults: {
            tileLayer: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            maxZoom: 18,
            zoomControlPosition: 'bottomleft'
        },
        center: {
            lat: 51.505,
            lng: -0.09,
            zoom: 14
        }
    };

//     angular.extend($scope, {
//     center: {
//         lat: 51.505,
//         lng: -0.09,
//         zoom: 14
//     }
// });

});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

}());