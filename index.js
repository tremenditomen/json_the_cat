const { breedFetcher } = require("./breedFetcher");
const breedName = process.argv.slice(2).join("");

breedFetcher(breedName, (error, description) => {
  if (error) {
    console.log("Error get details", error);
  } else {
    console.log(description);
  }
});
module.exports = { breedFetcher};
