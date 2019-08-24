let newItem = document.getElementById("addForm");
let items = document.getElementById("items");
let filter = document.getElementById("filter");
newItem.addEventListener("submit", addItem);
items.addEventListener("click", deleteItem);
filter.addEventListener("keyup", filterItem);

function addItem(e) {
  e.preventDefault();

  // create newli without the btn
  let newli = document.createElement("li");
  newli.className = "list-group-item";

  // append newItem.value to newLi
  let value = document.getElementById("newItem").value;
  newli.appendChild(document.createTextNode(value));

  // create the btn for the newli
  let btn = document.createElement("button");
  btn.className = "btn btn-danger btn-sm float-right delete";
  btn.appendChild(document.createTextNode("X"));

  // append btn to newli
  newli.appendChild(btn);

  // append newli to items
  items.appendChild(newli);
}

function deleteItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure you want to delete this item?")) e.target.parentElement.remove();
    // console.log(e.target.parentElement);
  }
}

function filterItem(e) {
  let text = e.target.value.toLowerCase();
  let itemList = items.getElementsByTagName("li");

  Array.from(itemList).forEach(function(item) {
    let itemName = item.firstChild.textContent.toLowerCase();
    if (itemName.indexOf(text) !== -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
  // console.log(itemList);
}
