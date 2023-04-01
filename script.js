let viewCheck = new Boolean(true); // true = code & false = preview
function addHeader() {
    if (document.getElementById("textarea").value == "") {
        document.getElementById("textarea").value += "<h1>Your text here</h1>";
    } else {
        document.getElementById("textarea").value +=
            "\r\n\r\n<h1>Your text here</h1>";
    }
}

function addImageHeader() {
    document.getElementById("textarea").value +=
        '<p align="center"><img src="[IMAGE URL HERE]" width="200" height="200"></p>\r\n\r\n<h1 align="center">Your text here</h1>\r\n\r\n<p align="center">\r\n<img src="https://img.shields.io/github/followers/[USERNAME]?label=follow%20my%20github&logo=github&style=for-the-badge">\r\n<img src="https://img.shields.io/github/stars/[USERNAME]/[REPONAME]?style=for-the-badge">\r\n<img src="https://img.shields.io/github/forks/[USERNAME]/[REPONAME]?style=for-the-badge">\r\n<img src="https://img.shields.io/github/watchers/[USERNAME]/[REPONAME]?style=for-the-badge">\r\n</p>';
}

function addDivision() {
    document.getElementById("textarea").value += "\r\n\r\n" + "- - -";
}

function addTable() {
    document.getElementById("textarea").value +=
        "\r\n" +
        "\r\n" +
        "| Title1 | Title2 |" +
        "\r\n" +
        "| :--- | :---: |" +
        "\r\n" +
        "| Text | Text2 |";
}

function addTitle() {
    if (document.getElementById("textarea").value == "") {
        document.getElementById("textarea").value += "<h2>Your text here</h2>";
    } else {
        document.getElementById("textarea").value +=
            "\r\n\r\n<h2>Title text here</h2>";
    }
}

function addParagraph() {
    document.getElementById("textarea").value +=
        "\r\n\r\n<p>Here is your paragraph.  Text will automatically be wrapped when put in this form.  Markdown paragraphs are powerful because they have so many text editing options.</p>";
}

function addBreak() {
    document.getElementById("textarea").value += "\r\n\r\n<br>";
}

function clearText() {
    document.getElementById("textarea").value = "";
}

function addLink() {
    document.getElementById("textarea").value +=
        '<a href="[LINK HERE]">[TEXT HERE]</a>';
}

function addImage() {
    if (document.getElementById("textarea").value == "") {
        document.getElementById("textarea").value += '<img src="[IMAGE LINK]">';
    } else {
        document.getElementById("textarea").value +=
            '\r\n\r\n<img src="[IMAGE LINK]">';
    }
}

function addCodeBox() {
    if (document.getElementById("textarea").value == "") {
        document.getElementById("textarea").value +=
            "``` [LANGUAGE NAME]\r\n\r\n```";
    } else {
        document.getElementById("textarea").value +=
            "\r\n\r\n``` [LANGUAGE NAME]\r\n\r\n```";
    }
}

function copy() {
    navigator.clipboard.writeText(document.getElementById("textarea").value);
}

function addDetailTag() {
    if (document.getElementById("textarea").value == "") {
        document.getElementById("textarea").value +=
            "<details>\r\n<summary>Click to expand</summary>\r\n\r\n</details>";
    } else {
        document.getElementById("textarea").value +=
            "\r\n\r\n<details>\r\n<summary>Click to expand</summary>\r\n\r\n</details>";
    }
}

$("textarea").keydown(function (e) {
    if (e.keyCode === 9) {
        // tab was pressed
        // get caret position/selection
        var start = this.selectionStart;
        end = this.selectionEnd;

        var $this = $(this);

        // set textarea value to: text before caret + tab + text after caret
        $this.val(
            $this.val().substring(0, start) + "\t" + $this.val().substring(end)
        );

        // put caret at right position again
        this.selectionStart = this.selectionEnd = start + 1;

        // prevent the focus lose
        return false;
    }
});


function changeView() {
  
    if (viewCheck == true) {
      
      var markdownText = document.getElementById('textarea').value;
      document.getElementById('preview').innerHTML = marked.parse(markdownText);
      
      document.getElementById('source').style.display = "none";
      document.getElementById('preview').style.display = "block";
      
    } else {
      
      document.getElementById('preview').style.display = "none";
      document.getElementById('source').style.display = "block";
      
    }
  
  viewCheck = !viewCheck;

}
