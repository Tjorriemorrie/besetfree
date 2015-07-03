app.directive('hypnotherapy', function () {
    var hypnotherapy = {
        restrict: 'C',
        link: function (scope, element, attrs) {
            console.info('hypnotherapy link');
            // expanding
            $('.frame-alpha').click(function (e) {
                console.log('main-alpha clicked', e);
                $(this).siblings().addClass('hide');
                $(element).find('.back').removeClass('hide');
                $(element).find('.frame')
                    .addClass('bg-cover')
                    .removeClass('darkened');
            });
            $('.frame-beta').click(function (e) {
                console.log('main-beta clicked', e);
                $(this).siblings().addClass('hide');
            });
            $('.frame-charlie').click(function (e) {
                console.log('main-charlie clicked', e);
                $(this).siblings().addClass('hide');
            });
            // back
            $(element).find('.back').click(function (e) {
                console.log(e);
                $(element).find('div')
                    .removeClass('hide')
                    .removeClass('bg-cover');
                $(element).find('.frame').addClass('darkened');
                $(element).find('.back').addClass('hide');
                console.info('back clicked');
            });
        }
    };
    console.info('hypnotherapy directive', hypnotherapy);
    return hypnotherapy;
});