let myLeads = [];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const tabBtn = document.getElementById("tab-btn");
const clearBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");

let leadsArray_fromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if (leadsArray_fromLocalStorage) {
  for (let i = 0; i < leadsArray_fromLocalStorage.length; i++) {
    myLeads.push(leadsArray_fromLocalStorage[i]);
    ulEl.innerHTML +=
      "<li><a target='_blank' href='" +
      leadsArray_fromLocalStorage[i] +
      "'>" +
      leadsArray_fromLocalStorage[i] +
      "</a></li>";
  }
}

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  ulEl.innerHTML +=
    "<li><a target='_blank' href='" +
    myLeads[myLeads.length - 1] +
    "'>" +
    myLeads[myLeads.length - 1] +
    "</a></li>";
});

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));

    ulEl.innerHTML +=
      "<li><a target='_blank' href='" +
      myLeads[myLeads.length - 1] +
      "'>" +
      myLeads[myLeads.length - 1] +
      "</a></li>";
  });
});

clearBtn.addEventListener("click", function () {
  localStorage.removeItem("myLeads");
  ulEl.textContent = "";
  inputEl.value = "";
});
