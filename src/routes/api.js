// src/routes/api.js
const express = require('express');
const router = express.Router();
const { getETHBalance } = require('../services/uniswapService');

router.get('/eth-balance/:address', async (req, res) => {
  const balance = await getETHBalance(req.params.address);
  res.json({ balance });
});

// src/app.js 或 src/routes/api.js

  

module.exports = router;
