const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Server!' });
});

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
})