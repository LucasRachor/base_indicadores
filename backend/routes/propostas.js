const express = require('express');
const router = express.Router();
const { sql, poolConnect } = require('../db');

router.get('/', async (req, res) => {
  try {
    await poolConnect; // aguarda conexão
    const request = new sql.Request();
    const result = await request.query('SELECT TOP 100 * FROM crm.d_proposta');
    res.json(result.recordset);
  } catch (err) {
    console.error('Erro ao consultar banco:', err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
