// 1. document.write()
document.write("<p style='color: darkblue;'>Це вставлено через document.write()</p>");

// 2. document.createElement() + createTextNode()
const newDiv = document.createElement("div");
const text = document.createTextNode("📢 Найпопулярнішe останнім часом:");
newDiv.appendChild(text);
newDiv.style.margin = "10px 0";
newDiv.style.color = "green";
document.body.appendChild(newDiv);

// 3. append()
const ul = document.createElement("ul");
ul.id = "menu";
document.body.appendChild(ul);

const li1 = document.createElement("li");
li1.textContent = "🍔 Бургер";
ul.append(li1);

// 4. prepend()
const li0 = document.createElement("li");
li0.textContent = "🥗 Салат";
ul.prepend(li0);

// 5. after()
const message = document.createElement("p");
message.textContent = "Який твій вибір?";
ul.after(message);

// 6. replaceWith()
const newPara = document.createElement("p");
newPara.textContent = "🔁 Технічні проблеми";
const oldH1 = document.querySelector("h1");
if (oldH1) {
    oldH1.replaceWith(newPara);
}

/* 7. remove()
const firstListItem = document.querySelector("#menu li"); // чіткий селектор
if (firstListItem) {
    firstListItem.remove(); // має видалити "🥗 Салат"
} else {
    alert("Елемент для видалення не знайдено.");
}
*/