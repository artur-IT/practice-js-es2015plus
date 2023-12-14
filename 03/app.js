import { files } from "./data.js";
let sum = 0;

const dataKB = (number) => number * 1024;

const dataMB = (number) => number * 1024 * 1024;

const dataGB = (number) => number * 1024 * 1024 * 1024;

files.forEach((item) => {
  const { unit, length } = item.size;
  unit == "undefined" || !unit ? (sum += length) : null;
  unit == "KB" ? (sum += dataKB(length)) : null;
  unit == "MB" ? (sum += dataMB(length)) : null;
  unit == "GB" ? (sum += dataGB(length)) : null;
});

console.log("razem:", sum, "Bajtów");
