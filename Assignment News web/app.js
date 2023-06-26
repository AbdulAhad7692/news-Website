


const APIKEY = '71f7118bb8f84caebf5a0d6408a5acb7'
const url = 'http://newsapi.org/v2/everything?q='

async function fetchdata(query) {
    const res = await fetch(`${url}${query}&apiKey=${APIKEY}`)
    console.log(res)
    const data = await res.json()
    console.log(data);
}
// fetchdata('tesla').then(data => console.log(data))
fetchdata('tesla')