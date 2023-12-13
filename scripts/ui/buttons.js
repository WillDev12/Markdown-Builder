// Code for navigation buttons && default ui

$("#textbtn, #imgbtn, #typobtn, #synbtn").click(function () {
  var btntype = $(this).html();
  if (btntype == "Text") {
    $("#newText").removeClass("hidden");
  } else if (btntype == "Image") {
    $("#addImg").removeClass("hidden");
  } else if (btntype == "Typography") {
    $("#Typ").removeClass("hidden");
  } else if (btntype == "Syntax") {
    $("#synbox").removeClass("hidden");
  }
});

$("nav button").click(function () {
  var btntype = $(this).html();
  if (btntype == "Github") {
    window.open("https://github.com/WillDev12/Markdown-Builder", "_blank");
  } else if (btntype == "Support") {
    alert("Coming soon!");
  } else if (btntype == "Follow") {
    window.open("https://github.com/WillDev12", "_blank");
  } else if ($(this).attr("name") == "export") {
    generate(true);
  } else {
    window.open("https://github.com/WillDev12/Markdown-Builder/stargazers");
  }
});

$(`nav img[name="avatar"]`).click(function () {
  $(this).animate({
    opacity: 0,
  });
});

$("nav button").click(function () {
  var btntype = $(this).html();
  if (btntype == "Github") {
    window.open("https://github.com/WillDev12/Markdown-Builder", "_blank");
  } else if (btntype == "Support") {
    window.open("https://google.com", "_blank");
  } else if (btntype == "Follow") {
    window.open("https://github.com/WillDev12", "_blank");
  } else if ($(this).attr("name") == "export") {
    generate(true);
  } else {
    window.open("https://github.com/WillDev12/Markdown-Builder/stargazers");
  }
});
