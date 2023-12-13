// Function library for opening/closing dialogs etc.
// Also used for generation code as seen below

function generate(n) {
  output = "";
  $(".output")
    .children()
    .each(function () {
      if ($(this).is("h1")) {
        output += "\n\n# " + $(this).html();
      } else if ($(this).is("h2")) {
        output += "\n\n## " + $(this).html();
      } else if ($(this).is("h3")) {
        output += "\n\n### " + $(this).html();
      } else if ($(this).is("h4")) {
        output += "\n\n#### " + $(this).html();
      } else if ($(this).is("h5")) {
        output += "\n\n##### " + $(this).html();
      } else if ($(this).is("h6")) {
        output += "\n\n###### " + $(this).html();
      } else if ($(this).is("p")) {
        output += "\n<p>" + $(this).html() + "</p>";
      } else if ($(this).is("blockquote")) {
        output += "\n> " + $(this).children("p").html();
      } else if ($(this).is("img")) {
        output += `\n ![](` + $(this).attr("src") + `)`;
      } else if ($(this).is("table")) {
        output += "\n\n";
        let i = 0;
        var count = 0;
        const sides = [];
        $(this)
          .children()
          .each(function () {
            if (count < 1) {
              $(this)
                .children("tr")
                .children()
                .each(function () {
                  output += "| " + $(this).html() + " ";
                  sides.push($(this).attr("align"));
                });
              output += "|\n";
              while (i < sides.length) {
                if (sides[i] == "left") {
                  output += "| :--- ";
                } else if (sides[i] == "right") {
                  output += "| ---: ";
                } else {
                  output += "| :---: ";
                }
                i++;
              }
              output += "|";
              count++;
            } else {
              $(this)
                .children("tr")
                .each(function () {
                  output += "\n";
                  $(this)
                    .children("td")
                    .each(function () {
                      output += "| " + $(this).html() + " ";
                    });
                  output += "|";
                });
            }
          });
      } else if ($(this).is("pre")) {
        if ($(this).has("code")) {
          output += "\n\n";
          output += `\`\`\`\n${$(this).children("code").html()}\n\`\`\``;
        }
      } else if ($(this).is("ul")) {
        output += "\n\n";
        $(this)
          .children("li")
          .each(function () {
            output += `\n* ${$(this).html()}`;
          });
      }
    });
  $(".output").html(marked.parse(output));
  if (n) {
    navigator.clipboard.writeText(output);
    ealert("Code copied to clipboard");
  }
}

function ealert(message, argument) {
  $(".feedback p").html(message);
  $(".feedback").css({
    opacity: "1",
    transform: "translateY(-1rem)",
  });
}

function model(ui) {
  if (ui == "newBlock") {
    if (blocktype == 1) {
      $("#newBlock h2").html("Insert Blockquote");
    } else if (blocktype == 2) {
      $("#newBlock h2").html("Insert Dropdown");
    }
  }

  $(`#${ui}`).removeClass("hidden");
  $(".model").css({
    display: "block",
  });
  setTimeout(() => {
    $(".modelbody").css({
      margin: "3rem auto",
      opacity: "1",
    });
  }, 1);
}

function addTable() {
  var out = "";
  var count = 0;
  const rows = document.getElementById("modeltable");
  out += "<table><thead>";
  for (const child of rows.children) {
    for (const row of child.children) {
      out += "<tr>";
      for (const col of row.children) {
        if (count == 0) {
          out += "<th>Your text here</th>";
        } else {
          out += "<td>Your text here</td>";
        }
      }
      out += "</tr>";
      if (count == 0) {
        out += "</thead><tbody>";
      }
      count++;
    }
  }
  out += "</tbody></table>";
  $(".output").append(out);
  generate(false);
}

function openTypUI(query, tex) {
  $("#Typ sup").addClass("hidden");
  if (query == "bold") {
    $("#Typs").removeClass("hidden");
    $("#Typs h4").html("Bold");
    $(`#Typs button[name="sel"]`).html("Bold");
    $("#Typs textarea").val(tex);
  } else if (query == "italic") {
    $("#Typs").removeClass("hidden");
    $("#Typs h4").html("Italicize");
    $(`#Typs button[name="sel"]`).html("Italicize");
    $("#Typs textarea").val(tex);
  } else if (query == "underline") {
    $("#Typs").removeClass("hidden");
    $("#Typs h4").html("Underline");
    $(`#Typs button[name="sel"]`).html("Underline");
    $("#Typs textarea").val(tex);
  } else if (query == "clear") {
    $(selected).html(
      $(selected)
        .html()
        .replace("<strong>", "")
        .replace("</strong>", "")
        .replace("<ins>", "")
        .replace("</ins>", "")
        .replace("<em>", "")
        .replace("</em>", ""),
    );
    generate(false);
    typ = "";
  }
}
