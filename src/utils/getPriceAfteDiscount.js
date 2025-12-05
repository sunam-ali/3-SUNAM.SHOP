export function getPriceAfterDiscount(discountPercentage = 0, price = 0) {
  if (typeof discountPercentage !== "number" || typeof price !== "number") {
    console.error("discountPercentage and price must be numbers");
    return price;
  }
  const discount = (discountPercentage / 100) * price;
  const finalPrice = price - discount;

  return Number(finalPrice.toFixed(2));
}
