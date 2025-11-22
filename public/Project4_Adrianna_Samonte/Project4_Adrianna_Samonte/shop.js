/********f************
    
	Project 4 Javascript - Checkout
	Name: Adrianna Samonte
	Date: April 20, 2025
	Description: Side Cart JS

*********************/

// I GOT THIS FROM THE HELP OF YOUTUBE!!!

let cartItems = [];
const TAX_RATE = 0.05; // 5% tax rate
const FREE_SHIPPING_THRESHOLD = 100; // Free shipping for orders over $100
const SHIPPING_COST = 10; // $10 shipping cost for orders under threshold

/*
 * Handles the load event of the document.
 */
function load() {
  // DOM elements
  const cartIcon = document.getElementById("cart-icon");
  const sideCart = document.getElementById("side-cart");
  const closeCartBtn = document.getElementById("close-cart");
  const cartOverlay = document.getElementById("cart-overlay");
  const continueShoppingBtn = document.getElementById("continue-shopping");
  const sideCartItems = document.getElementById("side-cart-items");
  const sideCartEmpty = document.getElementById("side-cart-empty");
  const cartCount = document.getElementById("cart-count");
  const checkoutBtn = document.getElementById("checkout-btn");

  // Get all add to cart buttons
  const addToCartBtns = [];
  for (let i = 1; i <= 9; i++) {
    const btn = document.getElementById(`add-to-cart-${i}`);
    if (btn) {
      addToCartBtns.push(btn);
    }
  }

  // Initialize cart
  initCart();

  // Event listeners
  cartIcon.addEventListener("click", openCart);
  closeCartBtn.addEventListener("click", closeCart);
  cartOverlay.addEventListener("click", closeCart);
  continueShoppingBtn.addEventListener("click", closeCart);

  addToCartBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const productId = this.getAttribute("data-id");
      const productName = this.getAttribute("data-name");
      const productPrice = Number.parseFloat(this.getAttribute("data-price"));
      const productImage = this.getAttribute("data-image");

      addToCart(productId, productName, productPrice, productImage);

      // Add animation class
      this.classList.add("added");
      setTimeout(() => {
        this.classList.remove("added");
      }, 500);

      // Open cart after adding item
      openCart();
    });
  });

  // Add event listener to checkout button
  checkoutBtn.addEventListener("click", (e) => {
    if (cartItems.length === 0) {
      e.preventDefault();
      alert("Your cart is empty. Add some items before checkout.");
    } else {
      prepareCheckout();
    }
  });
}

/*
 * Initialize cart: load from localStorage
 */
function initCart() {
  // Load cart from localStorage
  const savedCart = localStorage.getItem("heavenScentCart");
  if (savedCart) {
    cartItems = JSON.parse(savedCart);
    updateCartCount();
    renderSideCart();
  }
}

/*
 * Save cart to localStorage
 */
function saveCart() {
  localStorage.setItem("heavenScentCart", JSON.stringify(cartItems));
}

/*
 * Add item to cart
 *
 * param id       The product ID
 * param name     The product name
 * param price    The product price
 * param image    The product image URL
 */
function addToCart(id, name, price, image) {
  // Check if product already exists in cart
  const existingItemIndex = cartItems.findIndex((item) => item.id === id);

  if (existingItemIndex !== -1) {
    // Increment quantity if product already in cart
    cartItems[existingItemIndex].quantity += 1;
  } else {
    // Add new product to cart
    cartItems.push({
      id: id,
      name: name,
      price: price,
      image: image,
      quantity: 1,
    });
  }

  // Save updated cart to localStorage
  saveCart();

  // Update cart UI
  updateCartCount();
  renderSideCart();
}

/*
 * Update cart count
 */
function updateCartCount() {
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  document.getElementById("cart-count").textContent = totalItems;

  // Enable/disable checkout button
  if (totalItems > 0) {
    document.getElementById("checkout-btn").classList.remove("disabled");
  } else {
    document.getElementById("checkout-btn").classList.add("disabled");
  }
}

/*
 * Render side cart
 */
function renderSideCart() {
  // Clear existing cart items
  const sideCartItems = document.getElementById("side-cart-items");
  sideCartItems.innerHTML = "";

  if (cartItems.length === 0) {
    // Show empty cart message
    document.getElementById("side-cart-empty").style.display = "block";
  } else {
    // Hide empty cart message
    document.getElementById("side-cart-empty").style.display = "none";

    // Add cart items
    cartItems.forEach((item, index) => {
      const cartItemElement = createSideCartItemElement(item, index);
      sideCartItems.appendChild(cartItemElement);
    });
  }

  // Update summary
  updateCartSummary();
}

/*
 * Create side cart item element
 *
 * param item     The cart item object
 * param index    The index of the item in the cartItems array
 * return         The created DOM element
 */
function createSideCartItemElement(item, index) {
  const cartItem = document.createElement("div");
  cartItem.id = `side-cart-item-${item.id}`;

  cartItem.innerHTML = `
          <div id="side-cart-item-image-${item.id}">
              <img src="${item.image}" alt="${item.name}">
          </div>
          <div id="side-cart-item-details-${item.id}">
              <div id="side-cart-item-name-${item.id}">${item.name}</div>
              <div id="side-cart-item-price-${item.id}">$${item.price.toFixed(2)}</div>
              <div id="side-cart-item-quantity-${item.id}">
                  <button id="side-cart-quantity-btn-decrease-${item.id}" data-index="${index}">-</button>
                  <label for="side-cart-quantity-input-${item.id}" class="sr-only">Quantity: </label>
                  <input type="number" id="side-cart-quantity-input-${item.id}" value="${item.quantity}" min="1" data-index="${index}">
                  <button id="side-cart-quantity-btn-increase-${item.id}" data-index="${index}">+</button>
              </div>
          </div>
          <button id="side-cart-item-remove-${item.id}" data-index="${index}">×</button>
      `;

  // Add event listeners
  const decreaseBtn = cartItem.querySelector(
    `#side-cart-quantity-btn-decrease-${item.id}`,
  );
  const increaseBtn = cartItem.querySelector(
    `#side-cart-quantity-btn-increase-${item.id}`,
  );
  const quantityInput = cartItem.querySelector(
    `#side-cart-quantity-input-${item.id}`,
  );
  const removeBtn = cartItem.querySelector(`#side-cart-item-remove-${item.id}`);

  decreaseBtn.addEventListener("click", () => {
    if (item.quantity > 1) {
      item.quantity--;
      updateCartItem(index);
    }
  });

  increaseBtn.addEventListener("click", () => {
    item.quantity++;
    updateCartItem(index);
  });

  quantityInput.addEventListener("change", () => {
    const newQuantity = Number.parseInt(quantityInput.value);
    if (newQuantity >= 1) {
      item.quantity = newQuantity;
      updateCartItem(index);
    } else {
      quantityInput.value = item.quantity;
    }
  });

  removeBtn.addEventListener("click", () => {
    removeCartItem(index);
  });

  return cartItem;
}

/*
 * Update cart item
 *
 * param index    The index of the item in the cartItems array
 */
function updateCartItem(index) {
  saveCart();
  updateCartCount();
  renderSideCart();
}

/*
 * Remove cart item
 *
 * param index    The index of the item in the cartItems array
 */
function removeCartItem(index) {
  cartItems.splice(index, 1);
  saveCart();
  updateCartCount();
  renderSideCart();
}

/*
 * Update cart summary
 */
function updateCartSummary() {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const tax = subtotal * TAX_RATE;
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const total = subtotal + tax + shipping;

  document.getElementById("side-cart-subtotal").textContent =
    `$${subtotal.toFixed(2)}`;
  document.getElementById("side-cart-tax").textContent = `$${tax.toFixed(2)}`;
  document.getElementById("side-cart-shipping").textContent =
    shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`;
  document.getElementById("side-cart-total").textContent =
    `$${total.toFixed(2)}`;
}

/*
 * Open cart
 */
function openCart() {
  document.getElementById("side-cart").style.right = "0";
  document.getElementById("cart-overlay").style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent scrolling when cart is open
}

/*
 * Close cart
 */
function closeCart() {
  document.getElementById("side-cart").style.right = "-400px";
  document.getElementById("cart-overlay").style.display = "none";
  document.body.style.overflow = ""; // Restore scrolling
}

/*
 * Prepare checkout data
 */
function prepareCheckout() {
  // Store cart data for checkout page
  localStorage.setItem(
    "checkoutData",
    JSON.stringify({
      items: cartItems,
      subtotal: cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      ),
      tax:
        cartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0,
        ) * TAX_RATE,
      shipping:
        cartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0,
        ) >= FREE_SHIPPING_THRESHOLD
          ? 0
          : SHIPPING_COST,
    }),
  );
}

// Add document load event listener
document.addEventListener("DOMContentLoaded", load);
