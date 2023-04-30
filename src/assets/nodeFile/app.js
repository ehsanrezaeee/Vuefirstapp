const fs = require("fs");

// read the JSON file and parse it into a JavaScript object
let jsonData = fs.readFileSync("./../assets/ir.json", "utf-8");
let jsonArray = JSON.parse(jsonData);

// loop through each object in the array and replace the values of the properties
for (let i = 0; i < jsonArray.length; i++) {
  let obj = jsonArray[i];
  obj.city = obj.city.replace(/ā/g, "a");
  obj.city = obj.city.replace(/Ā/g, "A");
  obj.city = obj.city.replace(/ī/g, "i");
  obj.city = obj.city.replace(/ş/g, "s");
  obj.city = obj.city.replace(/z̄/g, "z");
  obj.city = obj.city.replace(/ū/g, "u");
  obj.city = obj.city.replace(/Ḩ/g, "H");
  obj.city = obj.city.replace(/ḩ/g, "h");
  obj.city = obj.city.replace(/Z̄/g, "Z");
  obj.city = obj.city.replace(/ẕ/g, "z");
  obj.city = obj.city.replace(/Ţ/g, "T");
  obj.city = obj.city.replace(/Ī/g, "I");
  obj.city = obj.city.replace(/Ş/g, "S");
  obj.city = obj.city.replace(/Ẕ/g, "Z");
}

// convert the modified array back to a JSON string and write it back to the file
let modifiedData = JSON.stringify(jsonArray, null, 2);
fs.writeFileSync("./../assets/ir2.json", modifiedData, "utf-8");
