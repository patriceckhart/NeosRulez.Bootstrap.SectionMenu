$(document).ready(function(){

    $('.sectionmenunavigation-item span').click(function(e) {
        section_identifier = $(this).parent().attr('data-identifier');
        $('html, body').animate({ scrollTop: $('#' + section_identifier).offset().top }, 500);
    });

});