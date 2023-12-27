function addNewWEField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("weField");
  newNode.style.marginTop = "10px";
  newNode.setAttribute("placeholder", "Kindly Enter the detail here");
  //   newNode.setAttribute("rows", 4);

  let weAddButtonOb = document.getElementById("weAddButton");
  let weOb = document.getElementById("we");

  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("aqField");
  newNode.style.marginTop = "10px";
  newNode.setAttribute("placeholder", "Kindly Enter the detail here");

  let aqAddButtonOb = document.getElementById("aqAddButton");
  let aqOb = document.getElementById("aq");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}

// Generating CV
// Generating CV
function generateCV() {
  var requiredFields = document.getElementsByClassName("requiredField");

  // Loop through each element with the class "requiredField"
  for (var i = 0; i < requiredFields.length; i++) {
    // Check if the required field is empty
    if (requiredFields[i].value.trim() === "") {
      alert("Please fill in the required field.");
      return; // Stop processing further elements if one is empty
    }
  }

  let fNameField = document.getElementById("fNameField").value;
  let lNameField = document.getElementById("lNameField").value;

  let fNameT1 = document.getElementById("fNameT1");
  let lNameT1 = document.getElementById("lNameT1");

  fNameT1.innerHTML = fNameField;
  lNameT1.innerHTML = lNameField;

  // Direct (not going to take more const or let letiable)
  document.getElementById("fNameT2").innerHTML = fNameField;
  document.getElementById("lNameT2").innerHTML = lNameField;

  document.getElementById("emailT").innerHTML =
    document.getElementById("emailField").value;

  document.getElementById("phoneT").innerHTML =
    document.getElementById("phoneField").value;

  // in between comma logic for country & city
  let cityField = document.getElementById("cityField");
  let cityT = document.getElementById("cityT");

  if (cityField.value.trim() !== "") {
    cityT.innerHTML = cityField.value.trim() + ", ";
  } else {
    cityT.innerHTML = "";
  }

  document.getElementById("countryT").innerHTML =
    document.getElementById("countryField").value;

  document.getElementById("addressT").innerHTML =
    document.getElementById("addressField").value;

  // GitHub link
  document
    .getElementById("githubT")
    .setAttribute("href", document.getElementById("githubField").value);

  // Linkedin link
  document
    .getElementById("linkedinT")
    .setAttribute("href", document.getElementById("linkedinField").value);

  // Instagram link
  document
    .getElementById("instaT")
    .setAttribute("href", document.getElementById("instaField").value);

  document.getElementById("summaryT").innerHTML =
    document.getElementById("summaryField").value;

  // work experience logic (wes is WorkExperience's)
  let wes = document.getElementsByClassName("weField");
  let str1 = "";

  for (const i of wes) {
    if (i.value !== "") str1 = str1 + `<li> ${i.value} </li>`;
  }
  document.getElementById("weT").innerHTML = str1;

  // Acedamic Qualification (aqs is AcedamicQualificatione's)
  let aqs = document.getElementsByClassName("aqField");
  let str2 = "";

  for (const i of aqs) {
    if (i.value !== "") str2 = str2 + `<li> ${i.value} </li>`;
  }
  document.getElementById("aqT").innerHTML = str2;

  // Switching modes
  document.getElementById("cv-form").style.display = "none";
  document.querySelector("header").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
}

// Printing CV
function printCV() {
  window.print();
}

// Previous page
function handlePrevClick() {
  document.getElementById("cv-form").style.display = "block";
  document.getElementById("cv-template").style.display = "none";
}
