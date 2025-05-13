const elem = document.getElementById("sample");

alert("" + elem.innerHTML);
alert("" + elem.outerHTML);
alert("" + elem.textContent);

const textNode = elem.firstChild;
alert("" + textNode.nodeValue);




