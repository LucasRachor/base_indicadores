import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Paper,
  Typography,
  Box
} from '@mui/material';

const Geral = () => {
  const [totalAbril, setTotalAbril] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3010/api/propostas/abril-2025')
      .then(response => setTotalAbril(response.data.total_abril_2025))
      .catch(error => console.error('Erro ao buscar dados:', error));
  }, []);

  return (
    <Paper sx={{ padding: 4, marginTop: 4 }}>
      <Typography variant="h6" align="center" gutterBottom>
        Total de Propostas em Abril/2025
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center" height={100}>
        <Typography variant="h4" color="primary">
          {totalAbril !== null ? `R$ ${totalAbril.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}` : 'Carregando...'}
        </Typography>
      </Box>
    </Paper>
  );
};

export default Geral;
