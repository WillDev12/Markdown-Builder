// Code for sending and receiving data to the model dialog

$(".modelbody span").click(function () {
  $(".modelbody").css({
    opacity: "0",
    margin: "1rem auto",
  });
  setTimeout(() => {
    $(".model").css({
      display: "none",
    });
    setTimeout(() => {
      $(".modelbody")
        .children("div")
        .each(function () {
          $(this).addClass("hidden");
        });
    }, 100);
  }, 100);
});

$("#tbox button").click(function () {
  var s = $(this).html();
  if (s == "Insert") {
    addTable();
  } else if (s == "Add row") {
    var cols = document.getElementById("modeltable").rows[0];
    var out = "";
    for (let cell of cols.cells) {
      out += "<td></td>\n";
    }
    $("#modeltable").append(`<tr>${out}</tr>`);
    trc++;
    if (trc > 0) {
      $("#rrbtn").prop("disabled", false);
    }
  } else if (s == "Add column") {
    Array.from(document.querySelectorAll("#modeltable tr")).forEach((tr) => {
      if (tr.querySelector("td"))
        tr.insertAdjacentHTML("beforeend", "<td></td>");
    });
    tcc++;
    if (tcc > 0) {
      $("#rcbtn").prop("disabled", false);
    }
  } else if (s == "Remove row") {
    if (trc >= 1) {
      var table = document.getElementById("modeltable");
      var rowCount = table.rows.length;
      table.deleteRow(rowCount - 1);
      trc--;
      if (trc == 0) {
        $(this).prop("disabled", true);
      }
    }
  } else if (s == "Remove column") {
    if (tcc >= 1) {
      var allRows = document.getElementById("modeltable").rows;
      for (var i = 0; i < allRows.length; i++) {
        allRows[i].deleteCell(-1);
      }
      tcc--;
      if (tcc == 0) {
        $("#rcbtn").prop("disabled", true);
      }
    }
  }
});

$(".feedback span").click(function () {
  $(this).parent().parent().css({
    opacity: "0",
    transform: "translateY(1rem)",
  });
});

$("#newList button").click(function () {
  if ($(this).html() == "Add row") {
    $("#newList ul").append(`<li><input type="text"></li>`);
  } else if ($(this).html() == "Remove row") {
    var lastrow = document.getElementById("selectul").children.length - 1;
    if (lastrow != 0) {
      document.getElementById("selectul").children[lastrow].remove();
    }
  } else if ($(this).html() == "Insert") {
    var out = `\n`;
    for (
      var i = 0;
      i < document.getElementById("selectul").children.length;
      i++
    ) {
      var ltext =
        document.getElementById("selectul").children[i].children[0].value;
      if (ltext != "") {
        out += `* ${ltext}\n`;
      }
    }
    $(".output").append(marked.parse(out));
    generate(false);
    $(".modelbody span").trigger("click");
  }
});

$("#newCode button").click(function () {
  if ($("#newCode textarea").val() != "") {
    $(".output").append(
      `<pre><code>${$("#newCode textarea").val()}</code></pre>`,
    );
    $(".modelbody span").trigger("click");
  }
  generate(false);
});

$("#newBlock button").click(function () {
  if (blocktype == 1) {
    $(".output").append(marked.parse(`> ${$("#quotetext").val()}`));
  } else if (blocktype == 2) {
    $(".output").append(
      marked.parse(`<select>${$("#quotetext").val()}</select>`),
    );
  }
});