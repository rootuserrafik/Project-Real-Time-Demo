const fetch = require('node-fetch');

const url ='https://google.com';
const headers = {
  "Content-Type": "application/json",
  "client_id": "1001125",
  "client_secret": "876JHG76UKFJYGVHf867rFUTFGHCJ8JHV"
}
const data = {
  "name": "Wade Wilson",
  "occupation": "Murderer",
  "age": "30 (forever)"
}

fetch(url, { method: 'POST', headers: headers, body: data})
  .then((res) => {
     return res.json()
})
.then((json) => {
   // Do something with the returned data.
  console.log(json);

});