$(function () {
    $('.nav_active').hover(function () {
        $(this).children('div').show();
        $(this).children('dl').show();
        // $(this).css('border-bottom','1px solid #fff')
    }, function () {
        $(this).children('div').hide();
        $(this).children('dl').hide();
        // $(this).css('border-bottom','1px solid #ddd')
    })

    $('.map').hover(function () {
        $(this).children('.special_0').show()
        $(this).css('border-bottom', '1px solid #fff')
    }, function () {
        $(this).children('.special_0').hide()
        $(this).css('border-bottom', '1px solid #ddd')
    })


    $('.flash_pic').hover(function () {
        // $(this).addClass('flash_pic_1')
        $('.flash_pic_1').fadeIn(300)
        $('.flash_pic_2').delay(1500).fadeIn(500)
        $('.flash_pic').addClass('flash_11')
    }, function () {
        var that = this
        $('.flash_pic').removeClass('flash_11')
        setTimeout(function () {
            $('.flash_pic_2').fadeOut(1000)
            $('.flash_pic_1').fadeOut(1000)
        }, 1000)
    })
})