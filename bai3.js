$(function () {
  $(" a").on("click", function (event) {
    event.preventDefault();
    let number = $(this).data("chap");
    let pos =  $(".chapter"+number).offset().top;
    $('html,body').animate(
      {
        scrollTop: pos,
      },
      500
    );
  });
});
