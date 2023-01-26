var shopList = [];

function handleKeyPress(e) {
        var key = e.keyCode || e.which;
        if (key === 13) {
          document.getElementById("addButton").click();
        }
      }

function addToList() {
  let item = document.getElementById("item").value;
  if (item == "") {
    alert('To add an item, type its name into the box');
  }
  else {
    shopList.push(item);
    document.getElementById("item").value = "";
    updateList();
  }
}

function updateList() {
  let list = document.getElementById("list");
  list.innerHTML = "";
  for (let i = 0; i < shopList.length; i++) {
    let listItem = document.createElement("li");
    listItem.innerHTML = shopList[i];
    listItem.innerHTML += ' <button onclick="moveUp(' + i + ')">Up</button>';
    listItem.innerHTML += ' <button onclick="moveDown(' + i + ')">Down</button>';
    listItem.innerHTML += ' <button onclick="remove(' + i + ')">Remove</button>';
    listItem.innerHTML += ' <p class = "pricing">Click Your Favorite Store To Check The Item Price: <a href="https://www.target.com/s?searchTerm='+shopList[i]+'" target="_blank">Target</a> | <a href="https://www.wholefoodsmarket.com/search?text='+shopList[i]+'" target="_blank">Whole Foods</a> | <a href="https://www.walmart.com/search?q='+shopList[i]+'" target="_blank">Walmart</a></p>';
    list.appendChild(listItem);
    list.innerHTML += "<hr>";
  }
}

function moveUp(index) {
  if (index > 0) {
    let temp = shopList[index];
    shopList[index] = shopList[index - 1];
    shopList[index - 1] = temp;
    updateList();
  }
}
function moveDown(index) {
  if (index < shopList.length - 1) {
    let temp = shopList[index];
    shopList[index] = shopList[index + 1];
    shopList[index + 1] = temp;
    updateList();
  }
}

function remove(index) {
shopList.splice(index, 1);
  updateList();
}