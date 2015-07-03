app.directive('services', function () {
    var services = {
        restrict: 'C',
        link: function (scope, element, attrs) {
            console.info('services link');
            // expanding
            $(element).find('.flex-child').click(function (e) {
                console.log(e);
                $(this).addClass('bg-cover').removeClass('darkened');
                $(this).siblings('.frame').addClass('hide');
                $(element).find('.back').removeClass('hide');
                console.info('child clicked');
            });
            // back
            $(element).find('.back').click(function (e) {
                console.log(e);
                $(element).find('.frame')
                    .removeClass('hide')
                    .removeClass('bg-cover')
                    .addClass('darkened');
                $(element).find('.back').addClass('hide');
                console.info('back clicked');
            });
        }
    };
    console.info('services directive', services);
    return services;
});