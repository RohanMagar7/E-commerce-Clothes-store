const mostPopPorducts = document.querySelector(".most-popular-products");

const jsonFile = "./products.json";

fetch(jsonFile)
	.then((respone) => {
		return respone.json();
	})
	.then((data) => {
		data.map((product) => {
			const { id, name, price, images } = product;
			mostPopPorducts.innerHTML += `
        <div class="product-card" data-product-id="${id}">
					<div class="product-card__container">
						<div class="product-card__btn cart" data-tooltip="add to cart"><span class="fa-solid  fa-shopping-bag"></span></div>
						<div class="product-card__btn fav" data-tooltip="add to wishlist"><span class="fa-regular fa-heart"></span></div>
						<div class="product-card__img">
							<img src="${images[0].url}" alt="${name}" />
						</div>
					</div>
					<div class="product-card__description">
						<div class="product-card__text">${name}</div>
						<div class="product-card__price">${price}</div>
					</div>
					<div class="product-card__color">
                    ${images
                        .map((image) => {
                            const { url, color } = image;

                            return `<button class="product-card__btn-radio" data-img="${url}">
                                        <span style="background-color: ${color};"></span>
                                     </button>`;
                        })
                        .join("")}
						
					</div>
				</div>
        `;
		});

		
		const radioBtns = document.querySelectorAll(".product-card__btn-radio");
		document.querySelectorAll(".product-card__color").forEach((pcc) => pcc.firstElementChild.classList.add("selected"));
		radioBtns.forEach((radioBtn) => {
			radioBtn.addEventListener("click", () => {
				let productCard = radioBtn.parentElement.parentElement,
					productImg = productCard.querySelector(".product-card__img > img"),
					proRadioBtns = productCard.querySelectorAll(".product-card__btn-radio");
				if (radioBtn.parentElement.parentElement === productCard) {
					proRadioBtns.forEach((radioBtn) => radioBtn.classList.remove("selected"));
					radioBtn.classList.add("selected");
					productImg.src = radioBtn.dataset.img;
				}
			});
		});
	});

	
	let minValue = document.getElementById("min-value");
	let maxValue = document.getElementById("max-value");
	
	const rangeFill = document.querySelector(".range-fill");
	
	// Function to validate range and update the fill color on slider
	function validateRange() {
	  let minPrice = parseInt(inputElements[0].value);
	  let maxPrice = parseInt(inputElements[1].value);
	
	  // Swap the values if minPrice is greater than maxPrice
	  if (minPrice > maxPrice) {
		let tempValue = maxPrice;
		maxPrice = minPrice;
		minPrice = tempValue;
	  }
	
	  // Calculate the percentage position for min and max values
	  const minPercentage = ((minPrice - 10) / 490) * 100;
	  const maxPercentage = ((maxPrice - 10) / 490) * 100;
	
	  // Set the position and width of the fill color element to represent the selected range
	  rangeFill.style.left = minPercentage + "%";
	  rangeFill.style.width = maxPercentage - minPercentage + "%";
	
	  // Update the displayed min and max values
	  minValue.innerHTML = "$" + minPrice;
	  maxValue.innerHTML = "$" + maxPrice;
	}
	
	// Get references to the input elements
	const inputElements = document.querySelectorAll("input");
	
	// Add an event listener to each input element
	inputElements.forEach((element) => {
	  element.addEventListener("input", validateRange);
	});
	
	// Initial call to validateRange
	validateRange();

