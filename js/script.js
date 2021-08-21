const amount = [...document.querySelectorAll("span.amount")];
const toggleSwitch = document.querySelector('input[type="checkbox"]');

//Monthly Subscription plan
let monthlySub = [{ basic: 19.99 }, { professional: 24.99 }, { master: 39.99 }];

//Annually Subscription plan
let annuallySub = [{ basic: 199.99 }, { professional: 249.99 }, { master: 399.99 }];

//Toggle amount from monthly to annually and vice-versa
toggleSwitch.addEventListener("change", (evt) => {
  //Loop all the amount field and replace it with corresponding data
  amount.forEach((amt, idx) => {
    amt.textContent = Boolean(evt.target.checked)
      ? [...Object.values(annuallySub[idx])]
      : [...Object.values(monthlySub[idx])];
  });
});
