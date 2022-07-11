const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../build')));

app.get('/health', function (req, res) {
  res.json({ status: 'UP' });
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

const port = process.env.PORT ?? 3000;
app.listen(port, function() {
    console.info(`Server listening on http://localhost:${port}`);
});
