// API base URL
const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

// Select elements
const dropdowns = document.querySelectorAll("select");
const fromSelect = document.querySelector("select[name='from']");
const toSelect = document.querySelector("select[name='to']");
const msg = document.querySelector(".message");
const form = document.querySelector("form");


// 1. Populate dropdowns

for (let select of dropdowns) {
  for (let currCode in countryList) {
    let option = document.createElement("option");

    option.value = currCode;
    option.innerText = currCode;

    // default selection
    if (select.name === "from" && currCode === "USD") {
      option.selected = true;
    } else if (select.name === "to" && currCode === "NPR") {
      option.selected = true;
    }

    select.appendChild(option);
  }

  // update flag on change
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}


// 2. Update flag

function updateFlag(element) {
  let currCode = element.value;
  let countryCode = countryList[currCode];

  let img = element.parentElement.querySelector("img");

  if (countryCode) {
    img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
  }
}


// 3. Initialize flags

window.addEventListener("load", () => {
  updateFlag(fromSelect);
  updateFlag(toSelect);
});


// 4. Exchange rate logic

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let amount = document.querySelector("#amount").value;
  let from = fromSelect.value;
  let to = toSelect.value;

  // handle empty input
  if (amount === "" || amount < 1) {
    amount = 1;
    document.querySelector("#amount").value = "1";
  }

  // fetch API
  const res = await fetch(`${BASE_URL}/${from.toLowerCase()}.json`);
  const data = await res.json();

  const rate = data[from.toLowerCase()][to.toLowerCase()];
  const finalAmount = amount * rate;

  msg.innerText = `${amount} ${from} = ${finalAmount.toFixed(2)} ${to}`;
});