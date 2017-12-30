//for navbar
$(window).on('scroll',function()
{
    if($(window).scrollTop() > 550)
    {
        $('#my-navbar').addClass('menu-bg');
    }
    else
    {
        $('#my-navbar').removeClass('menu-bg');
    }
});