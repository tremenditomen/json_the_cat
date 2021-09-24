const {fetchBreedDesciprtion} = require('./breedFetcher');
const breedName=process.argv.slice(2).join('')

fetchBreedDesciprtion (breedName,(error,description)=>{
if(error){
    console.log('Error get details', error)
}else {
    console.log(description)
};
});
module.exports = { fetchBreedDescription };