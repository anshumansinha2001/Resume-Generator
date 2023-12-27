function addNewWEField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("weField");
  newNode.style.marginTop = "10px";
  newNode.setAttribute("placeholder", "Enter here");
  //   newNode.setAttribute("rows", 4);

  let weAddButtonOb = document.getElementById("weAddButton");
  let weOb = document.getElementById("we");

  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("aqField");
  newNode.style.marginTop = "10px";
  newNode.setAttribute("placeholder", "Enter here");

  let aqAddButtonOb = document.getElementById("aqAddButton");
  let aqOb = document.getElementById("aq");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}
