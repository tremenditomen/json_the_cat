const request = require("request");

const breedFetcher = () => {
  // a function that takes a cat breed
  //ping the cat website to serch for the breed
  //recieve the cat breed from server
  const argument = process.argv.slice(2).join("");
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${argument}`,
    (error, response, body) => {
      if (error) {
        console.log("Error please check the cat breed you want");
        return "Error please check the cat breed you want";
      } else {
        const catObject = JSON.parse(body);
        if (catObject.length === 0) {
          console.log("breed not found");
          return "breed not found";
        } else {
          console.log(catObject[0]["description"]);
          return catObject[0]["description"];
        }
      }
    }
  );
};
breedFetcher();
module.exports = {breedFetcher};