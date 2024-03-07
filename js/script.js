$(document).ready(function () {
  $(".aphabet-item").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  $(".menu").click(function () {
    $(".nav_main").toggleClass("active");
    $("body").toggleClass("active");
  });

  $(".filter_btn").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  $(".filter-btn").click(function () {
    $(".filters").toggle();
  });

  $(".filters button").click(function () {
    const filter = $(this).data("filter");
    applyFilter(filter);
  });

  function applyFilter(filter) {
    // Add your logic to apply the selected filter
    console.log(`Filter Applied: ${filter}`);
  }

  $("#forminput").focus(function () {
    $(".header_form_result").slideDown();
  });
  $("#forminput").blur(function () {
    $(".header_form_result").slideUp();
  });
  $("#searchInput")
    .focus(function () {
      $(".search_result_main").slideToggle();
    })
    .blur(function () {
      $(".search_result_main").slideUp();
    });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 30) {
      $("#scrollBtn").fadeIn();
    } else {
      $("#scrollBtn").fadeOut();
    }
  });

  $("#scrollBtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
});
