// This is the boilerplate code given for you
// You can modify this code
// Product data
let data = []
sessionStorage.setItem("cart", JSON.stringify(data))

const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
    { id: 4, name: "Product 4", price: 40 },
    { id: 5, name: "Product 5", price: 50 },
  ];
  
  // DOM elements
  const productList = document.getElementById("product-list");

  // Render product list
  function renderProducts() {
    products.forEach((product) => {
      const li = document.createElement("li");
      li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
      productList.appendChild(li);
    });
    let btn = document.querySelectorAll('[data-id]')
    btn.forEach((ele) => {
        ele.addEventListener("click", () => {
             addToCart(ele.dataset.id)
        })
    })
  }
  
  // Render cart list
  function renderCart() {
    const cart = document.getElementById("cart-list")
    cart.innerHTML = ""
    let data = JSON.parse(sessionStorage.getItem("cart"))
    data.forEach((ele, ind) => {
        const li = document.createElement("li");
        li.innerHTML = `${ele.name} - $${ele.price}`
        let btn = document.createElement("button")
        btn.innerHTML = "Remove"
        btn.setAttribute = ("id", ind)
        btn.addEventListener("click", () => {
            removeFromCart(btn.id)
        })
        li.appendChild(btn)
        cart.appendChild(li)
    })
  }
  
  // Add item to cart
  function addToCart(productId) {
    products.forEach((ele) => {
        if(ele.id == productId){
            data.push(ele)
        }
    })
    sessionStorage.setItem("cart", JSON.stringify(data))
    renderCart(data)
  }
  
  // Remove item from cart
  function removeFromCart(productId) {
    data = data.filter((ele, ind) => {
        return ind != productId
    })
    sessionStorage.setItem("cart", JSON.stringify(data))
    renderCart(data)
  }
  
  // Clear cart
  function clearCart() {
    const cart = document.getElementById("cart-list")
    cart.innerHTML = ""
    data = []
    sessionStorage.setItem("cart", JSON.stringify(data))
  }

  const clearBtn = document.getElementById("clear-cart-btn")
  clearBtn.addEventListener("click", clearCart)
  // Initial render
  renderProducts();
  renderCart();
  