angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('fOODJOURNAL', {
    url: '/page6',
    templateUrl: 'templates/fOODJOURNAL.html',
    controller: 'fOODJOURNALCtrl'
  })

  .state('fOODJOURNAL2', {
    url: '/page7',
    templateUrl: 'templates/fOODJOURNAL2.html',
    controller: 'fOODJOURNAL2Ctrl'
  })

$urlRouterProvider.otherwise('/page6')

  

});