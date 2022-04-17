var 클릭 = 0;

$(".button-close").click(function () {
  $(".container-login-modal").fadeOut();
});

$(".checkbox").click(function () {
  클릭 += 1;
  if (클릭 % 2 == 1) {
    $(".checkbox").attr("src", "img/check2-box.png");
  } else {
    $(".checkbox").attr("src", "img/check-box.png");
  }
});

$("#user-id").click(function () {
  $(".input-user-id").css("display", "block");
});

$(".button-original").click(function () {
  $(".warning-login").css("display", "block");
});
