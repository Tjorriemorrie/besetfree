app.directive('nav', function () {
    var nav = {
        restrict: 'C',
        templateUrl: 'assets/templates/nav.html',
    };
    console.info('nav directive', nav);
    return nav;
});