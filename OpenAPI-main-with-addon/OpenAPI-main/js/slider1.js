$(function () {
          var slider_bgc = ["#e4f1d3", "#fff294", "#a8daff", "#daecf0", "#f8f4d7", "#fbeaf0"];
          var slider1 = $("#slider1 > div");

          $("#slider_btn > ul > li").mouseover(function () {
            $("#slider").css("background-color", slider_bgc[$(this).index()]);
            slider1.stop().hide();
            slider1.eq($(this).index()).stop().show();

            $("#slider_btn > ul > li").removeClass("slider_btn_hover");
            $(this).addClass("slider_btn_hover");
          }).mouseleave(function () {
            $("#slider_btn > ul > li").removeClass("slider_btn_hover");
            $(this).addClass("slider_btn_hover");
          });

          var i = 0;
          function slider_loop() {
            i++;
            if (i > $("#slider1 > div:last").index()) {
              i = 0;
            }
            $("#slider").css("background-color", slider_bgc[i]);
            slider1.stop().hide();
            slider1.eq(i).stop().show();
            $("#slider_btn > ul > li").removeClass("slider_btn_hover");
            $("#slider_btn > ul > li").eq(i).addClass("slider_btn_hover");
          }
          setInterval(slider_loop, 3000);
        });