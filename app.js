const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/send-data', (req, res) => {
  const receivedData = req.body;
  console.log('Received data:', receivedData);
  res.json({ message: 'Data received successfully' });
});

app.get('/api/get-data', (req, res) => {
  const dummyData = { name: 'Alice', age: 25, city: 'Wonderland' };
  res.json(dummyData);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
