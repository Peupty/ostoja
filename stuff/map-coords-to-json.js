const path = require("path")
const fs = require("fs")

const coordsArr = fs.readFileSync(__dirname + "/działki.txt", "utf-8")

const areas = fs
  .readFileSync(__dirname + "/asd.txt", "utf-8")
  .split("\n")
  .map(str => str.trim().replace(/\"/g, ""))

const arr = coordsArr.split("\n").map((coords, index) => ({
  id: index + 529,
  area: areas[index],
  price: areas[index] * 27,
  coords: coords.trim().replace(/\"/g, ""),
}))

fs.writeFileSync(__dirname + "/plots.json", JSON.stringify(arr))
