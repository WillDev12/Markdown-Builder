var txt = document.getElementById('textarea');

function addHeader() {if (txt.value == "") {document.getElementById('textarea').value += '<h1>Your text here</h1>';} else {document.getElementById('textarea').value += '\r\n\r\n<h1>Your text here</h1>';}}

function addImageHeader() {txt.value += '<p align="center"><img src="[IMAGE URL HERE]" width="200" height="200"></p>\r\n\r\n<h1 align="center">Your text here</h1>\r\n\r\n<p align="center">\r\n<img src="https://img.shields.io/github/followers/[USERNAME]?label=follow%20my%20github&logo=github&style=for-the-badge">\r\n<img src="https://img.shields.io/github/stars/[USERNAME]/[REPONAME]?style=for-the-badge">\r\n<img src="https://img.shields.io/github/forks/[USERNAME]/[REPONAME]?style=for-the-badge">\r\n<img src="https://img.shields.io/github/watchers/[USERNAME]/[REPONAME]?style=for-the-badge">\r\n</p>'}

function addDivision() {document.getElementById('textarea').value += '\r\n\r\n' + '- - -';}

function addTable() {document.getElementById('textarea').value += '\r\n' + '\r\n' + '| Title1 | Title2 |' + '\r\n' + '| :--- | :---: |' + '\r\n' + '| Text | Text2 |';}

function addTitle() {if (txt.value == "") {txt.value += "<h2>Your text here</h2>"} else {txt.value += '\r\n\r\n<h2>Title text here</h2>';}}

function addParagraph() {txt.value += "\r\n\r\n<p>Here is your paragraph.  Text will automatically be wrapped when put in this form.  Markdown paragraphs are powerful because they have so many text editing options.</p>"}

function addBreak() {txt.value += "\r\n\r\n<br>";}

function clearText() {txt.value = "";}

function addLink() {txt.value += '<a href="[LINK HERE]">[TEXT HERE]</a>';}

function addImage() {if (txt.value == "") {txt.value += '<img src="[IMAGE LINK]">';} else {txt.value += '\r\n\r\n<img src="[IMAGE LINK]">';}}

function copy() {
  
  navigator.clipboard.writeText(txt.value);
  
}