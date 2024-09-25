
let bagItems;
let itemsContainerElement = document.querySelector(".items-container");

onLoad();

function onLoad() {
  let bagItemStr = localStorage.getItem("bagItems");
  bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];
  displayItemsOnHomePage();
  displayBagIcon();
}

function displayItemsOnHomePage() {
  let innerHtml = "";
  if (!itemsContainerElement) {
    return;
  }
  items.forEach((item) => {
    innerHtml =
      innerHtml +
      `
    <div class="item-container">
    <img class="item-image" src="${item.image}" alt="" srcset="">
    <div class="rating">${item.rating.stars}⭐ | ${item.rating.count}</div>
    <div class="company-name">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">Rs ${item.original_price}</span>
        <span class="discount">Rs (${item.discount_percentage}% off)</span>
    </div>
    <button class="btn-add-bag" onclick="addToBag(${item.id})">Add To Bag</button>
    </div>`;
  });
  itemsContainerElement.innerHTML = innerHtml;
}
function addToBag(item) {
  bagItems.push(item);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon() {
  let bagItemCountElement = document.querySelector(".bag-item-count");
  if (bagItems.length > 0) {
    bagItemCountElement.innerText = bagItems.length;
    bagItemCountElement.style.visibility = "visible";
  } else {
    bagItemCountElement.style.visibility = "hidden";
  }
}


