// --------------Memory section--------------\\
document
  .getElementById("memory-card-sixteenGB")
  .addEventListener("click", function () {
    const memoryCardPrice = document.getElementById("memory-card-price");
    memoryCardPrice.innerText = 180;
    finalPrice();
    netTotal();
  });
document
  .getElementById("memory-card-eightGB")
  .addEventListener("click", function () {
    const ssdCardPrice = document.getElementById("memory-card-price");
    ssdCardPrice.innerText = 0;
    finalPrice();
    netTotal();
  });
// -----------Storage section------------\\
document.getElementById("ssd-card-one").addEventListener("click", function () {
  const ssdCardPrice = document.getElementById("ssd-card-price");
  ssdCardPrice.innerText = 0;
  finalPrice();
  netTotal();
});
document.getElementById("ssd-card-two").addEventListener("click", function () {
  const ssdCardPrice = document.getElementById("ssd-card-price");
  ssdCardPrice.innerText = 100;
  finalPrice();
  netTotal();
});
document
  .getElementById("ssd-card-three")
  .addEventListener("click", function () {
    const ssdCardPrice = document.getElementById("ssd-card-price");
    ssdCardPrice.innerText = 180;
    finalPrice();
    netTotal();
  });
// -----------delivery charge---------------\\
document.getElementById("delivery-free").addEventListener("click", function () {
  const deliveryCharge = document.getElementById("delivery-charge-amount");
  deliveryCharge.innerText = 0;
  finalPrice();
  netTotal();
});
document
  .getElementById("delivery-charge")
  .addEventListener("click", function () {
    const deliveryCharge = document.getElementById("delivery-charge-amount");
    deliveryCharge.innerText = 20;
    finalPrice();
    netTotal();
  });
// ---------------Invoice function-------------\\
function netTotal() {
  let updateSSD = document.getElementById("ssd-card-price").innerText;
  let updateMemory = document.getElementById("memory-card-price").innerText;
  let updateDelivery = document.getElementById(
    "delivery-charge-amount"
  ).innerText;
  sumTotal =
    1299 +
    parseInt(updateSSD) +
    parseInt(updateMemory) +
    parseInt(updateDelivery);
  let totalPrice = document.getElementById("total-price");
  return (totalPrice.innerText = sumTotal);
}

// --------------Final Price section-------------\\
function finalPrice() {
  let finalPrice = document.getElementById("final-price");
  return (finalPrice.innerText = netTotal());
}
document.getElementById("coupon-button").addEventListener("click", function () {
  let couponName = document.getElementById("coupon-name").value;
  if (couponName == "stevekaku") {
    let withoutDiscount = document.getElementById("total-price").innerText;
    let discountPrice = document.getElementById("final-price");
    let withDiscount = (withoutDiscount / 100) * 20;
    withDiscount = withoutDiscount - withDiscount;
    discountPrice.innerText = withDiscount;
  }else{
   finalPrice();
  }
});
