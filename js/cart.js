// code for cart slider
let cart = document.querySelector("#cart");
let cartBar = document.createElement("div");
let cartBox = document.createElement("div");
let header = document.querySelector("header");

cartBar.classList.add("cart-bar");
header.insertAdjacentElement("beforebegin", cartBar);
cartBar.insertAdjacentElement("afterbegin", cartBox);
cartBox.classList.add("cart-box");

let p1 = document.createElement("p");
p1.innerText = "YOUR CART (0)";
p1.classList.add("cart-text");
cartBox.insertAdjacentElement("afterbegin", p1);

let cancleIcon = document.createElement("i");
cancleIcon.classList.add("fa-solid");
cancleIcon.classList.add("fa-x");
cancleIcon.classList.add("cart-text");
cartBox.insertAdjacentElement("beforeend", cancleIcon);
cancleIcon.style.cursor = "pointer";

let cartIcon = document.createElement("i");
cartIcon.classList.add("fa-solid");
cartIcon.classList.add("fa-bag-shopping");
cartIcon.classList.add("cart-text");
cartBar.insertAdjacentElement("beforeend", cartIcon);
cartIcon.classList.add("cart-icon");

let emptyCartMsg = document.createElement("p");
emptyCartMsg.innerText = "You don't have any item's in cart yet.";
cartIcon.insertAdjacentElement("afterend", emptyCartMsg);
emptyCartMsg.style.textAlign = "center";
emptyCartMsg.style.paddingTop = "10px";

let shoppingBtn = document.createElement("button");
shoppingBtn.innerText = "continue shopping";
shoppingBtn.style.textTransform = "uppercase";
shoppingBtn.classList.add("cart-shopping-btn");
emptyCartMsg.insertAdjacentElement("afterend", shoppingBtn);

shoppingBtn.onclick = function () {
  location.assign("/page/product.html");
};

// event listener for close cartbar
cancleIcon.addEventListener("click", () => {
  cartBar.style.transform = `translateX(800px)`;
});
// event listener for oper cartbar
cart.addEventListener("click", () => {
  cartBar.style.display = "block";
  cartBar.style.transform = `translateX(0px)`;
});

let addedProduct = document.createElement("div");
addedProduct.innerHTML = `<div class="cart-delevery-msg">
        <i></i> <span>You have got <strong>FREE SHIPPING</strong></span>
    </div>
    <div class="cart-added-box">
        <!-- flex -column -->
        <div class="added-product">
            <div class="add-p-img">
                <img src="/asset/blog-images/blocg-img-1.jpg" alt="Err">
            </div>
            <div class="added-p-info">
                <div class="added-p-name-remove">
                    <p>inerbloom puffer jacket</p>
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <div class="added-p-qontity-price">
                    <p class="quentity-box">
                        <span>-</span>
                        <span>2</span>
                        <span>+</span>
                    </p>
                    <p class="price"> $500</p>
                </div>
            </div>
        </div>
    </div>
`;

shoppingBtn.insertAdjacentElement("afterend", addedProduct);

let productHoverOpt = document.createElement("div");
productHoverOpt.classList.add("hover-product-navigaiton");

let newInButton = document.querySelector("#new-in");

newInButton.addEventListener("mouseover", () => {
  let afterNavBar = document.querySelector("#nav-bar");
  afterNavBar.insertAdjacentElement("afterend", productHoverOpt);
});
productHoverOpt.addEventListener("click", () => {
  let afterNavBar = document.querySelector("#nav-bar");
  productHoverOpt.remove();
});

let listOptBox = document.createElement("div");
listOptBox.classList.add("list-opt-Box");

productHoverOpt.insertAdjacentElement("afterbegin", listOptBox);

// list of items will add here
let listOfItem = document.createElement("ul");
listOfItem.classList.add("list-of-itme");
listOfItem.innerHTML = `
<li> Woman</li>
<li> Men's</li>
<li>Kid's</li>
<li> Accessories</li>
<li>Beauty </li>
`;

listOfItem.style.textTransform = "uppercase";
listOptBox.insertAdjacentElement("afterbegin", listOfItem);
for (let i = 0; i < listOfItem.children.length; i++) {
  listOfItem.children[i].addEventListener("mouseover", () => {
    listOfItem.children[i].style.color = "black";
    listOfItem.children[i].style.color = "red";
    if (i == 0) {
      let womanProduct = document.createElement("ul");
      womanProduct.innerHTML = `
      <li class="new-in-product-box-ul-li">crop top </li>
      <li class="new-in-product-box-ul-li">mini dress </li>
      <li class="new-in-product-box-ul-li">long dress </li>
      <li class="new-in-product-box-ul-li">swimsuits</li>
      <li class="new-in-product-box-ul-li"> ethnic wear </li>
      <li class="new-in-product-box-ul-li">trousers </li>
      <li class="new-in-product-box-ul-li">jackets </li>
      <li class="new-in-product-box-ul-li"> shapewear </li>
      <li class="new-in-product-box-ul-li"> lingerie </li>
      <li class="new-in-product-box-ul-li">sweetshirts </li>
      <li class="new-in-product-box-ul-li"> shot dress </li>
      <li class="new-in-product-box-ul-li"> party dress </li>
      <li class="new-in-product-box-ul-li">workwear </li>
      <li class="new-in-product-box-ul-li"> sports wear </li>
      <li class="new-in-product-box-ul-li">multipacks </li>
      <li class="new-in-product-box-ul-li">designer dress </li>
      <li class="new-in-product-box-ul-li">socks &amp; tights</li>
      <li class="new-in-product-box-ul-li">blazers</li>
   `;
      womanProduct.classList.add("new-in-product-box-ul");
      listOptBox.insertAdjacentElement("beforeend", womanProduct);
      listOfItem.children[i].addEventListener("mouseout", () => {
        listOfItem.children[i].style.color = "black";
        womanProduct.remove();
      });
    }

    if (i == 1) {
      let womanProduct = document.createElement("ul");
      womanProduct.innerHTML = `<li class="new-in-product-box-ul-li">Casual Shirts </li>
      <li class="new-in-product-box-ul-li">T-Shirts & Vests </li>
      <li class="new-in-product-box-ul-li">Jackets & Coats </li>
      <li class="new-in-product-box-ul-li">Joggers </li>
      <li class="new-in-product-box-ul-li">jumpers & cardigans </li>
      <li class="new-in-product-box-ul-li">loungewear </li>
      <li class="new-in-product-box-ul-li">underwear </li>
      <li class="new-in-product-box-ul-li">sportswear </li>
      <li class="new-in-product-box-ul-li">smart  shoes </li>
      <li class="new-in-product-box-ul-li"> trousers & tights </li>
      <li class="new-in-product-box-ul-li"> suits & tailoring  multipacks  </li>
      <li class="new-in-product-box-ul-li">designer shirts </li>
      <li class="new-in-product-box-ul-li">trousers & chinous </li>
      <li class="new-in-product-box-ul-li">sliders & flip flops </li>
      <li class="new-in-product-box-ul-li">trousers & tights</li>`;
      womanProduct.classList.add("new-in-product-box-ul");

      listOptBox.insertAdjacentElement("beforeend", womanProduct);
      listOfItem.children[i].addEventListener("mouseout", () => {
        listOfItem.children[i].style.color = "black";
        womanProduct.remove();
      });
    }
    if (i == 2) {
      let womanProduct = document.createElement("ul");
      womanProduct.innerHTML = `<li class="new-in-product-box-ul-li">sets & suit </li>
      <li class="new-in-product-box-ul-li">jeans & trouser </li>
      <li class="new-in-product-box-ul-li">tops and t-shirt </li>
      <li class="new-in-product-box-ul-li">onesides & rompers </li>
      <li class="new-in-product-box-ul-li">ethnic wear </li>
      <li class="new-in-product-box-ul-li">bring the spring </li>
      <li class="new-in-product-box-ul-li">baby essentials </li>
      <li class="new-in-product-box-ul-li">footwear </li>
      <li class="new-in-product-box-ul-li">kids toys </li>
      <li class="new-in-product-box-ul-li">nursery </li>`;
      womanProduct.classList.add("new-in-product-box-ul");
      listOptBox.insertAdjacentElement("beforeend", womanProduct);
      listOfItem.children[i].addEventListener("mouseout", () => {
        listOfItem.children[i].style.color = "black";
        womanProduct.remove();
      });
    }
    if (i == 3) {
      let womanProduct = document.createElement("ul");
      womanProduct.innerHTML = ` <li class="new-in-product-box-ul-li">caps & hats </li>
      <li class="new-in-product-box-ul-li"> face coverings </li>
      <li class="new-in-product-box-ul-li"> hair accessories </li>
      <li class="new-in-product-box-ul-li"> jewellery </li>
      <li class="new-in-product-box-ul-li">socks & tights </li>
      <li class="new-in-product-box-ul-li">watches </li>
      <li class="new-in-product-box-ul-li">bags & purses </li>
      <li class="new-in-product-box-ul-li">footwear </li>
      <li class="new-in-product-box-ul-li">socks & tights  </li>
      <li class="new-in-product-box-ul-li">spring special </li>`;
      womanProduct.classList.add("new-in-product-box-ul");
      listOptBox.insertAdjacentElement("beforeend", womanProduct);
      listOfItem.children[i].addEventListener("mouseout", () => {
        listOfItem.children[i].style.color = "black";
        womanProduct.remove();
      });
    }
    if (i == 4) {
      let womanProduct = document.createElement("ul");
      womanProduct.innerHTML = ` <li class="new-in-product-box-ul-li">body care </li>
      <li class="new-in-product-box-ul-li"> fragrances </li>
      <li class="new-in-product-box-ul-li"> hair care </li>
      <li class="new-in-product-box-ul-li"> makeup </li>
      <li class="new-in-product-box-ul-li">skin care </li>
      <li class="new-in-product-box-ul-li"> suncare & tanning </li>
      <li class="new-in-product-box-ul-li">wellness </li>
      <li class="new-in-product-box-ul-li"> tools & accessories </li>
      <li class="new-in-product-box-ul-li">nailcare </li>
      <li class="new-in-product-box-ul-li">monday Haircare</li>`;
      womanProduct.classList.add("new-in-product-box-ul");
      listOptBox.insertAdjacentElement("beforeend", womanProduct);
      listOfItem.children[i].addEventListener("mouseout", () => {
        listOfItem.children[i].style.color = "black";
        womanProduct.remove();
      });
    }
  });
}

// after hover the product will add here
