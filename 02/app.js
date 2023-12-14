const allInputs = document.getElementsByClassName("cart__quantity");
const button = document.querySelector("button");
const check = document.querySelector("span");

const test = Array.from(allInputs);

sum = () => {
  let sumPrice = (product = price = 0);
  test.forEach((element) => {
    price = parseInt(element.dataset.price);
    product = parseInt(element.value);
    sumPrice = product * price;
  });
  check.textContent = sumPrice;
};

button.addEventListener("click", () => sum());
