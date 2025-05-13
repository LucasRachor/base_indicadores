const express = require('express');
const router = express.Router();
const { sql, poolConnect, pool } = require('../db');

// GET /api/propostas
router.get('/', async (req, res) => {
  try {
    await poolConnect; // Garante que a pool está conectada
    const result = await pool.request().query("SELECT * FROM crm.d_proposta");
    res.json(result.recordset); // Retorna os dados
  } catch (err) {
    console.error("Erro ao consultar banco:", err);
    res.status(500).send("Erro ao consultar banco");
  }
});

router.get('/abril-2025', async (req, res) => {
  try {
    await poolConnect; // Garante conexão ativa
    const result = await pool.request().query(`
      SELECT 
        SUM(CAST(REPLACE(totalamount, ',', '.') AS FLOAT)) AS total_abril_2025
      FROM crm.d_proposta
      WHERE createdon >= '2025-04-01' AND createdon < '2025-05-01'
    `);
    res.json(result.recordset[0]); // Retorna só o valor
  } catch (err) {
    console.error("Erro ao consultar banco:", err);
    res.status(500).send("Erro ao consultar banco");
  }
});


module.exports = router;
