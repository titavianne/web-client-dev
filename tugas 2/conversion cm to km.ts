// 2. Konversi cm ke km atau sebaliknya
function convertLength(value: number, unit: "cm" | "km"): string {
  return unit === "cm" ? `${value / 100000} km` : `${value * 100000} cm`;
}
console.log(convertLength(100000, "cm")); // Output: "1 km"