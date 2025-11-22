"use client";

/********f************

	Project 4 Javascript - Checkout
	Name: Adrianna Samonte
	Date: April 20, 2025
	Description: Checkout JS

*********************/

// global variables
let orderItems = []; // eslint-disable-line no-unused-vars
//const TAX_RATE = 0.05; // 5% tax rate
//const FREE_SHIPPING_THRESHOLD = 100; // free shipping for orders over $100
//const SHIPPING_COST = 10; // $10 shipping cost for orders under threshold

// handles the submit event of the checkout form
function validate(e) {
  // hides all error elements on the page
  hideErrors();

  // determine if the form has errors
  if (formHasErrors()) {
    // prevents the form from submitting
    e.preventDefault();

    return false;
  }

  // form is valid, show thank you message and redirect
  e.preventDefault();
  processOrder();
  return false;
}

/*
 * Handles the reset event for the form.
 *
 * param e  A reference to the event object
 * return   True allows the reset to happen; False prevents
 *          the browser from resetting the form.
 */
// Commented out because it is currently unused, but kept for reference
/*
function resetForm(e) {
  // eslint-disable-next-line no-restricted-globals
  if (confirm("Clear checkout information?")) {
    // ensure all error fields are hidden
    hideErrors();

    // set focus to the first text field on the page
    document.getElementById("fullname").focus();

    return true;
  }

  // Prevents the form from resetting
  e.preventDefault();

  return false;
}
*/

/*
 * Does all the error checking for the form.
 *
 * return   True if an error was found; False if no errors were found
 */
function formHasErrors() {
  let errorFlag = false;

  // Check required fields
  const requiredFields = [
    "fullname",
    "email",
    "phone",
    "address",
    "city",
    "postal",
    "cardname",
    "cardnumber",
    "cvv",
  ];

  for (let i = 0; i < requiredFields.length; i++) {
    const textField = document.getElementById(requiredFields[i]);
    if (!formFieldHasInput(textField)) {
      document.getElementById(requiredFields[i] + "_error").style.display =
        "block";

      if (!errorFlag) {
        textField.focus();
        textField.select();
      }
      errorFlag = true;
    }
  }

  // Validate postal code format (Canadian: A1A 1A1)
  const regexPostal = new RegExp(/^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/);
  const postalCode = document.getElementById("postal").value;

  if (postalCode !== "" && !regexPostal.test(postalCode)) {
    document.getElementById("postalformat_error").style.display = "block";

    if (!errorFlag) {
      document.getElementById("postal").focus();
      document.getElementById("postal").select();
    }
    errorFlag = true;
  }

  // Validate email format
  const regexEmail = new RegExp(/^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/);
  const email = document.getElementById("email").value;

  if (email !== "" && !regexEmail.test(email)) {
    document.getElementById("emailformat_error").style.display = "block";

    if (!errorFlag) {
      document.getElementById("email").focus();
      document.getElementById("email").select();
    }
    errorFlag = true;
  }

  // Validate phone number format
  const regexPhone = new RegExp(/^(\d{3})(\d{3})(\d{4})$/);
  const phone = document.getElementById("phone").value;

  if (phone !== "" && !regexPhone.test(phone)) {
    document.getElementById("phoneformat_error").style.display = "block";

    if (!errorFlag) {
      document.getElementById("phone").focus();
      document.getElementById("phone").select();
    }
    errorFlag = true;
  }

  // Check if a card type is selected
  const cardTypes = ["visa", "mastercard", "amex"];
  let cardSelected = false;

  for (let i = 0; i < cardTypes.length && !cardSelected; i++) {
    if (document.getElementById(cardTypes[i]).checked) {
      cardSelected = true;
    }
  }

  if (!cardSelected) {
    document.getElementById("cardtype_error").style.display = "block";
    errorFlag = true;
  }

  // Validate card number (10 digits)
  const regexCard = new RegExp(/^\d{10}$/);
  const cardNumber = document.getElementById("cardnumber").value;

  if (cardNumber !== "" && !regexCard.test(cardNumber)) {
    document.getElementById("cardnumberformat_error").style.display = "block";

    if (!errorFlag) {
      document.getElementById("cardnumber").focus();
      document.getElementById("cardnumber").select();
    }
    errorFlag = true;
  } else if (cardNumber !== "") {
    // Validate card number using check digit algorithm
    const checkFactors = [4, 3, 2, 7, 6, 5, 4, 3, 2];
    let sum = 0;

    for (let i = 0; i < 9; i++) {
      sum += Number.parseInt(cardNumber[i]) * checkFactors[i];
    }

    const remainder = sum % 11;
    const digit = 11 - remainder;
    const lastDigit = Number.parseInt(cardNumber[9]);

    if (digit !== lastDigit) {
      document.getElementById("invalidcard_error").style.display = "block";

      if (!errorFlag) {
        document.getElementById("cardnumber").focus();
        document.getElementById("cardnumber").select();
      }
      errorFlag = true;
    }
  }

  // Validate CVV (3-4 digits)
  const regexCVV = new RegExp(/^\d{3,4}$/);
  const cvv = document.getElementById("cvv").value;

  if (cvv !== "" && !regexCVV.test(cvv)) {
    document.getElementById("cvvformat_error").style.display = "block";

    if (!errorFlag) {
      document.getElementById("cvv").focus();
      document.getElementById("cvv").select();
    }
    errorFlag = true;
  }

  // Validate expiry date
  const month = document.getElementById("month");
  const year = document.getElementById("year");

  if (month.value === "") {
    document.getElementById("month_error").style.display = "block";

    if (!errorFlag) {
      month.focus();
    }
    errorFlag = true;
  }

  if (year.value === "") {
    document.getElementById("year_error").style.display = "block";

    if (!errorFlag && month.value !== "") {
      year.focus();
    }
    errorFlag = true;
  }

  if (month.value !== "" && year.value !== "") {
    const monthValue = Number.parseInt(month.value);
    const yearValue = Number.parseInt(year.value);

    const expiryDate = new Date(yearValue, monthValue, 0);
    const today = new Date();

    if (expiryDate < today) {
      document.getElementById("expiry_error").style.display = "block";

      if (!errorFlag) {
        month.focus();
      }
      errorFlag = true;
    }
  }

  return errorFlag;
}

/*
 * Hides all of the error elements.
 */
function hideErrors() {
  const errorFields = document.getElementsByTagName("p");
  for (let i = 0; i < errorFields.length; i++) {
    if (errorFields[i].id && errorFields[i].id.indexOf("_error") !== -1) {
      errorFields[i].style.display = "none";
    }
  }
}

/*
 * Determines if a text field element has input
 */
function formFieldHasInput(fieldElement) {
  if (fieldElement.value === null || fieldElement.value.trim() === "") {
    return false;
  }
  return true;
}

/*
 * Formats a number as currency
 */
function formatCurrency(number) {
  return "$" + number.toFixed(2);
}
window.formatCurrency = formatCurrency; // mark as used for ESLint

/*
 * Loads order data from localStorage and populates the order summary
 */
function loadOrderData() {
  const checkoutData = localStorage.getItem("checkoutData");

  if (checkoutData) {
    const data = JSON.parse(checkoutData);
    // orderItems = data.items; // eslint-disable-line no-unused-vars

    // Update order summary
    document.getElementById("order-subtotal").textContent = formatCurrency(
      data.subtotal,
    );
    document.getElementById("order-tax").textContent = formatCurrency(data.tax);
    document.getElementById("order-shipping").textContent =
      data.shipping === 0 ? "FREE" : formatCurrency(data.shipping);
    document.getElementById("order-total").textContent = formatCurrency(
      data.subtotal + data.tax + data.shipping,
    );

    const orderSummaryItems = document.getElementById("order-summary-items");
    orderSummaryItems.innerHTML = "";

    data.items.forEach((item, index) => {
      const itemElement = document.createElement("div");
      itemElement.id = `order-item-${item.id}`;
      itemElement.style.display = "flex";
      itemElement.style.alignItems = "center";
      itemElement.style.padding = "15px 0";
      itemElement.style.borderBottom = "1px solid #eee";

      if (index === data.items.length - 1) {
        itemElement.style.borderBottom = "none";
      }

      const itemTotal = item.price * item.quantity;

      const imageContainer = document.createElement("div");
      imageContainer.id = `order-item-image-${item.id}`;
      imageContainer.style.width = "60px";
      imageContainer.style.height = "60px";
      imageContainer.style.borderRadius = "5px";
      imageContainer.style.overflow = "hidden";
      imageContainer.style.marginRight = "15px";

      const image = document.createElement("img");
      image.src = item.image;
      image.alt = item.name;
      image.style.width = "100%";
      image.style.height = "100%";
      image.style.objectFit = "cover";

      imageContainer.appendChild(image);

      const detailsContainer = document.createElement("div");
      detailsContainer.id = `order-item-details-${item.id}`;
      detailsContainer.style.flex = "1";

      const nameElement = document.createElement("div");
      nameElement.id = `order-item-name-${item.id}`;
      nameElement.textContent = item.name;
      nameElement.style.fontWeight = "bold";
      nameElement.style.color = "#5414a1";
      nameElement.style.marginBottom = "5px";

      const priceElement = document.createElement("div");
      priceElement.id = `order-item-price-${item.id}`;
      priceElement.textContent = `$${item.price.toFixed(2)} x ${item.quantity}`;
      priceElement.style.color = "#666";
      priceElement.style.fontSize = "0.9rem";

      detailsContainer.appendChild(nameElement);
      detailsContainer.appendChild(priceElement);

      const subtotalElement = document.createElement("div");
      subtotalElement.id = `order-item-subtotal-${item.id}`;
      subtotalElement.textContent = `$${itemTotal.toFixed(2)}`;
      subtotalElement.style.fontWeight = "bold";
      subtotalElement.style.color = "#333";

      itemElement.appendChild(imageContainer);
      itemElement.appendChild(detailsContainer);
      itemElement.appendChild(subtotalElement);

      orderSummaryItems.appendChild(itemElement);
    });
  } else {
    window.location.href = "shop.html";
  }
}

/*
 * Processes the order after successful validation
 */
function processOrder() {
  alert("Thank you for your purchase! Your order has been received.");
  localStorage.removeItem("heavenScentCart");
  localStorage.removeItem("checkoutData");
  window.location.href = "index.html";
}

/*
 * Handles the load event of the document.
 */
function load() {
  hideErrors();
  loadOrderData();

  const year = document.getElementById("year");
  const currentDate = new Date();

  while (year.options.length > 1) {
    year.remove(1);
  }

  for (let i = 0; i < 7; i++) {
    const newYearOption = document.createElement("option");
    newYearOption.value = currentDate.getFullYear() + i;
    newYearOption.innerHTML = currentDate.getFullYear() + i;
    year.appendChild(newYearOption);
  }

  document.getElementById("checkoutForm").addEventListener("submit", validate);
  document.getElementById("fullname").focus();
}

document.addEventListener("DOMContentLoaded", load);
