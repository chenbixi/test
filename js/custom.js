
$(document).ready(function () {
    //banner自动轮播 
    $("#slider3").responsiveSlides({
        auto: true,
        pager: true,
        nav: true,
        speed: 500,
        namespace: "callbacks",
        before: function () {
            $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
            $('.events').append("<li>after event fired.</li>");
        }
    });


    //产品分类
    $(".c1_yingyong_list a").each(function () {
        $(this).click(function () {
            $(".c1_yingyong_list a").removeClass("cur");
            $(this).addClass("cur");
        });
    });
   
    //材料应用分类切换
    $("#c1_yingyong .item a").each(function () {
        $(this).click(function () {
            $("#c1_yingyong .item a").removeClass("cur");
            $(this).addClass("cur");

            $(".c1_yingyong_2").hide();
            $("#c1_yingyong_" + $(this).attr("data") + "").show();
        });
    });
    //材料应用二级分类切换
    $(".c1_yingyong_2 .item a").each(function () {
        $(this).click(function () {
            $(".c1_yingyong_2 .item a").removeClass("cur");
            $(this).addClass("cur");
        });
    });
});


