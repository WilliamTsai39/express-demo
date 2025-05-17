const express = require('express');
const path = require('path');
require('dotenv').config();

const apiRoutes = require('./routes/api');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// 🔁 RESTful 路由對應靜態 HTML 檔案
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.get('/swap', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'swap.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'about.html'));
});

//debug
//console.log('送出的檔案路徑:', path.join(__dirname, '..', 'public', 'about.html'));


// API 路由
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
