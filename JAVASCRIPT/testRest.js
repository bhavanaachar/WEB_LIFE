//Using Fetch API
fetch('https://api.restful-api.dev/objects')
  .then(response => response.json())
  .then(data => console.log('GET Response:', data))
  .catch(error => console.error('Error:', error));

// POST request
const fs = require('fs');

fetch('https://api.restful-api.dev/objects', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Apple MacBook Pro 16',
    data: {
      year: 2019,
      price: 1849.99,
      'CPU model': 'Intel Core i9',
      'Hard disk size': '1 TB'
    }
  })
})
  .then(response => response.json())
  .then(data => {
    console.log('POST Response:', data);

    // verify: get the object back using its id
    return fetch('https://api.restful-api.dev/objects/' + data.id);
  })
  .then(response => response.json())
  .then(found => {
    console.log('GET Response:', found);
  });