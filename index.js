const priceDisplay = document.getElementById('price');
const priceNormallyDisplay = document.getElementById('price-normally');
const productQuantity = document.getElementById('product-quantity');
const increaseProductQuantityBtn = document.getElementById('increase-product-quantity');
const decreaseProductQuantityBtn = document.getElementById('decrease-product-quantity');
const scrollToTopBtn = document.getElementById('scroll-to-top');

// Weight controller
const largestWeightBtn = document.getElementById('largest-weight-btn');
const middleWeightBtn = document.getElementById('middle-weight-btn');
const lowestWeightBtn = document.getElementById('lowest-weight-btn');

const PRICE_PER_KG_DISCOUNT = Number(
  document.getElementById('kg-price').innerText.split(',').join('.')
);
const PRICE_PER_KG_NORMALLY =
  Number(priceNormallyDisplay.innerText.trim().split(' ')[0].replace(',', '.')) * 2;

function getWeight(element) {
  return +element.innerText.trim().split(' ')[0];
}

function getPricePerWeight(pricePerKG, weight) {
  return ((pricePerKG * weight) / 1000).toFixed(2);
}

function showCalculatedPrice(element) {
  element.preventDefault();
  const weight = getWeight(element.target);
  const price = getPricePerWeight(PRICE_PER_KG_DISCOUNT, weight);
  const priceNormally = getPricePerWeight(PRICE_PER_KG_NORMALLY, weight);
  priceDisplay.innerText = price + ' €';
  priceNormallyDisplay.innerText = priceNormally + ' €';
}

// CONTROLLERS, LISTENERS

increaseProductQuantityBtn.addEventListener('click', () => {
  const quantityValue = Number(productQuantity.innerText);
  productQuantity.innerText = String(quantityValue + 1);
});

decreaseProductQuantityBtn.addEventListener('click', () => {
  const quantityValue = Number(productQuantity.innerText);
  productQuantity.innerText = String(quantityValue - 1);
});

largestWeightBtn.addEventListener('click', showCalculatedPrice);
middleWeightBtn.addEventListener('click', showCalculatedPrice);
lowestWeightBtn.addEventListener('click', showCalculatedPrice);

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Tabs Section
const about = document.querySelector('.about');
about.addEventListener('click', function (e) {
  const btns = document.querySelectorAll('.tab-btn');
  const articles = document.querySelectorAll('.content');

  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove('active');
    });
    e.target.classList.add('active');
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove('active');
    });
    const element = document.getElementById(id);
    element.classList.add('active');
  }
});
