// Output interaction code

$(".output").on(
  "click",
  "h1, h2, h3, h4, h5, h6, p > p:not(:has(code))",
  function () {
    if (typ != "") {
      selected = $(this);
      openTypUI(typ, $(this).html());
    } else {
      if (n) {
        $("#changeText").removeClass("hidden");
        $("#replacement").val($(this).html());
        selected = $(this);
      } else {
        $("#replacement").val($(this).html());
        selected = $(this);
      }
    }
  },
);

$(".output").on(
  "contextmenu",
  "h1, h2, h3, h4, h5, h6, p, img, ul",
  function () {
    $(this).remove();
    generate(false);
    return false;
  },
);

$(".output").on("contextmenu", "td, th", function () {
  $(this).parent().parent().remove();
});

$(".output p").hover(
  function () {
    $(this).css({
      border: "solid 2px #0d6efd",
      "border-radius": "0.2rem",
      cursor: "pointer",
    });
  },
  function () {
    $(this).css({
      border: "none",
      "border-radius": "0",
      cursor: "auto",
    });
  },
);

$(".output").on("click", "img", function () {
  $("#changeImg").removeClass("hidden");
  $("#replacementsrc").val($(this).attr("src"));
  selected = $(this);
});

$(".output").on("click", "td", function () {
  $("#changeText").removeClass("hidden");
  $("#replacement").val($(this).html());
  selected = $(this);
});

$(".output").on("click", "th", function () {
  $("#changeText").removeClass("hidden");
  $("#replacement").val($(this).html());
  selected = $(this);
});

$(".output").on("click", ".delete", function () {
  $(this).parent().remove();
  generate(false);
});

$(".output").sortable({
  stop: function () {
    generate(false);
  },
});
