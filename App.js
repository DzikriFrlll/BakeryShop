// Data produk
const Products = [
  // Product 1
  {
    id: "strawberry_cake_1",
    name: "Strawberry Cake",
    price: 25.090,
    img: "product-1.jpg",
  },

  // Product 2
  {
    id: "bear_bread_1",
    name: "Bear Bread",
    price: 15.999,
    img: "produk2.jpg",
  },

  // Product 3
  {
    id: "tiramisu_donut_1",
    name: "Tiramisu Donut",
    price: 8.990,
    img: "product-3.jpg",
  },

  // Product 4
  {
    id: "rainbow_donut_1", 
    name: "Rainbow Donut",
    price: 7.800,
    img: "product-4.jpg",
  },

  // Product 5
  {
    id: "chocolate_cake_1",
    name: "Chocolate Cake",
    price: 25.990,
    img: "product-5.jpg",
  },

  // Product 6
  {
    id: "soft_pandesal_1",
    name: "Soft Pandesal",
    price: 22.980,
    img: "product-6.jpg",
  },

  // Product 7
  {
    id: "mousse_cake_1",
    name: "Mousse Cake",
    price: 28.980,
    img: "gambarkue.jfif",
  },

  // Product 8
  {
    id: "matcha_cake",
    name: "Matcha Cake",
    price: 30.980,
    img: "gambarkue2.jfif",
  },
];

const productWrapper = document.getElementById("productContainer");
const cartContainer = document.getElementById("cartContainer");

Products.forEach((product, index) => {
  const boxWrapper = document.createElement("div");
  boxWrapper.classList.add("box");

  const imgWrapper = document.createElement("div");
  imgWrapper.classList.add("image");

  const imgElement = document.createElement("img");
  imgElement.src = `./image/${product.img}`;
  imgElement.alt = product.name;

  imgWrapper.appendChild(imgElement);

  const contentWrapper = document.createElement("div");
  contentWrapper.classList.add("content");

  const productName = document.createElement("h3");
  productName.textContent = product.name;

  const starsWrapper = document.createElement("div");
  starsWrapper.classList.add("stars");

  for (let i = 0; i < 5; i++) {
    const stars = document.createElement("i");
    stars.classList.add("fas");
    stars.classList.add("fa-star");
    starsWrapper.appendChild(stars);
  }

  const productPrice = document.createElement("span");
  productPrice.classList.add("price");
  productPrice.textContent = `IDR ${product.price}`;

  const cartBtn = document.createElement("button");
  cartBtn.classList.add("btn");
  cartBtn.textContent = "Add to Cart";

  cartBtn.addEventListener("click", () => {
    const selectedProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.img,
    };
  
    const productKey = product.id;
  
    let productData = JSON.parse(localStorage.getItem(productKey)) || { product: selectedProduct, count: 0 };
  
    productData.count += 1;
  
    localStorage.setItem(productKey, JSON.stringify(productData));
  
    alert("Produk sudah ditambahkan ke dalam Cart");
    location.reload();
  });

  contentWrapper.appendChild(productName);
  contentWrapper.appendChild(starsWrapper);
  contentWrapper.appendChild(productPrice);
  contentWrapper.appendChild(cartBtn);

  boxWrapper.appendChild(imgWrapper);
  boxWrapper.appendChild(contentWrapper);

  productWrapper.appendChild(boxWrapper);
});

const closeCart = document.createElement("div");
closeCart.id = "close-form";
closeCart.classList.add("fas");
closeCart.classList.add("fa-times");
closeCart.addEventListener("click", () => {
  cartContainer.classList.remove("active");
});

const titleCart = document.createElement("h3");
titleCart.classList.add("title");
titleCart.textContent = "Cart";

const btnCheckOut = document.createElement("button");
btnCheckOut.classList.add("btn");
btnCheckOut.textContent = "Check Out";

cartContainer.appendChild(closeCart);
cartContainer.appendChild(titleCart);

const cartProduct = [];

for (let i = 0; i < Products.length; i++) {
  const productKey = Products[i].id;
  const cartItem = JSON.parse(localStorage.getItem(productKey));
  if (cartItem !== null) {
    cartProduct.push(cartItem);
  }
}

cartProduct.forEach((cartItem, index) => {
  const cartItemWrapper = document.createElement("div");
  cartItemWrapper.classList.add("cart-item");

  const deleteBtn = document.createElement("span");
  deleteBtn.classList.add("fas");
  deleteBtn.classList.add("fa-times");
  deleteBtn.addEventListener("click", () => {
    localStorage.removeItem(cartItem.product?.id);
    alert("Produk sudah dihapus dari Cart");
    location.reload();
  });

  const imageProduct = document.createElement("img");
  imageProduct.src = `./image/${cartItem.product?.img}`;
  imageProduct.alt = cartItem.product?.name;

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("content");
  const productName = document.createElement("h3");
  productName.textContent = cartItem.product?.name;
  const countProduct = document.createElement("div");
  countProduct.classList.add("price");
  countProduct.textContent = `Jumlah: ${cartItem.count}`;
  const priceProduct = document.createElement("div");
  priceProduct.classList.add("price");
  priceProduct.textContent = cartItem.product?.price;

  contentDiv.appendChild(productName);
  contentDiv.appendChild(countProduct);
  contentDiv.appendChild(priceProduct);

  cartItemWrapper.appendChild(deleteBtn);
  cartItemWrapper.appendChild(imageProduct);
  cartItemWrapper.appendChild(contentDiv);

  cartContainer.appendChild(cartItemWrapper);
});

cartContainer.appendChild(btnCheckOut);