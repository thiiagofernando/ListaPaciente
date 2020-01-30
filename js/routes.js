angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('pacientes', {
    url: '/page1',
    templateUrl: 'templates/pacientes.html',
    controller: 'pacientesCtrl'
  })

  .state('amandaBeatriz', {
    url: '/page2',
    templateUrl: 'templates/amandaBeatriz.html',
    controller: 'amandaBeatrizCtrl'
  })

  .state('brunoHenrique', {
    url: '/page13',
    templateUrl: 'templates/brunoHenrique.html',
    controller: 'brunoHenriqueCtrl'
  })

  .state('anaAlice', {
    url: '/page10',
    templateUrl: 'templates/anaAlice.html',
    controller: 'anaAliceCtrl'
  })

  .state('marcosVinCius', {
    url: '/page15',
    templateUrl: 'templates/marcosVinCius.html',
    controller: 'marcosVinCiusCtrl'
  })

  .state('ingridMaria', {
    url: '/page12',
    templateUrl: 'templates/ingridMaria.html',
    controller: 'ingridMariaCtrl'
  })

  .state('caioAugusto', {
    url: '/page14',
    templateUrl: 'templates/caioAugusto.html',
    controller: 'caioAugustoCtrl'
  })

  .state('login', {
    url: '/page8',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('registrar', {
    url: '/page9',
    templateUrl: 'templates/registrar.html',
    controller: 'registrarCtrl'
  })

  .state('informaEsDoSistema', {
    url: '/page11',
    templateUrl: 'templates/informaEsDoSistema.html',
    controller: 'informaEsDoSistemaCtrl'
  })

$urlRouterProvider.otherwise('/page8')


});