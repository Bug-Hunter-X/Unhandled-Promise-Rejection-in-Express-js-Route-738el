const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation().then(result => {
    res.send(result);
  }).catch(error => {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));
//Simulate Asynchronous operation
function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate a potential error
    const success = Math.random() < 0.5; 
    setTimeout(() => {
      if (success) {
        resolve({ message: 'Success!' });
      } else {
        reject(new Error('Simulated error'));
      }
    }, 1000);
  });
}