const express = require ("express")
const app  = express()
const router = express.Router();
const axios = require("axios");
const port = 4000


app.get("/people", async (req, res) => {

    let nextPage = `https://swapi.dev/api/people/`;
    let people = [];
    while (nextPage) {
    let nextres = await axios(nextPage)
    const { next, results } = await nextres.data;
    nextPage = next
    people = [...people, ...results]
    } 
    res.send(people);
  });
  
  module.exports = router;


app.listen(port, () => { console.log(`Server on port ${port}`)})