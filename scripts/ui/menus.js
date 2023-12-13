// Code for little menu widgets

$(".info span").click(function () {
  $(this).parent("div").addClass("hidden");
  $("#Typ sup").addClass("hidden");
  typ = "";
});

$("#imgupdate").click(function () {
  $(selected).attr("src", $("#replacementsrc").val());
  generate(false);
});

$("#textupdate").click(function () {
  if ($(selected).is("th")) {
    $(selected).html($("#replacement").val());
  }
  $(selected).text($("#replacement").val());
  generate(false);
});

$("#insertbtn").click(function () {
  $(".output").append(
    `<${$("#textType").val()}>${$("#text").val()}</${$("#textType").val()}>`,
  );
  generate(false);
});

$("#addimg").click(function () {
  $(".output").append(`<img src="${$("#newsrc").val()}"></img>`);
});

// Syntax widgets below

$("#synbox button").click(function () {
  $(".modelbody")
    .children("div")
    .each(function () {
      $(this).addClass("hidden");
    });
  if ($(this).html() == "Table") {
    model("newTable");
  } else if ($(this).html() == "Codebox") {
    model("newCode");
  } else if ($(this).html() == "List") {
    model("newList");
  } else if ($(this).html() == "Blockquote") {
    blocktype = 1;
    model("newBlock");
  } else if ($(this).html() == "Select tag") {
    blocktype = 2;
    model("newBlock");
  }
});

$(`button[name="sav"]`).click(function () {
  $(selected).html($("#slc").val());
  generate(false);
  typ = "";
});

$("#Typ button").click(function () {
  $("#Typ sup").removeClass("hidden");
  if ($(this).text() == "Bold") {
    typ = "bold";
  } else if ($(this).text() == "Italic") {
    typ = "italic";
  } else if ($(this).text() == "Underline") {
    typ = "underline";
  } else if ($(this).text() == "Clear formatting") {
    typ = "clear";
  }
});

$(`button[name="sel"]`).click(function () {
  let txt = document.getElementById("slc");
  const before = txt.value.substring(0, txt.selectionStart);
  const sel = txt.value.substring(txt.selectionStart, txt.selectionEnd);
  const after = txt.value.substring(txt.selectionEnd);
  if (typ == "bold") {
    txt.value = `${before}<strong>${sel}</strong>${after}`;
  } else if (typ == "italic") {
    txt.value = `${before}<em>${sel}</em>${after}`;
  } else if (typ == "underline") {
    txt.value = `${before}<ins>${sel}</ins>${after}`;
  }
});