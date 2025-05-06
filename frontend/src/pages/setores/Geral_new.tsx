import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Table, TableHead, TableBody, TableRow, TableCell,
  Paper, TableContainer, Typography
} from '@mui/material';

const Geral = () => {
  const [propostas, setPropostas] = useState([]);

/*   useEffect(() => {
    axios.get('http://localhost:3010/api/propostas')
      .then(response => setPropostas(response.data))
      .catch(error => console.error('Erro ao buscar dados:', error));
  }, []); */

  return (
    <TableContainer component={Paper} sx={{ marginTop: 4 }}>
      <Typography variant="h6" align="center" sx={{ m: 2 }}>
        Lista de Propostas (crm.d_proposta)
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            {propostas[0] && Object.keys(propostas[0]).map((col, i) => (
              <TableCell key={i}>{col}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {propostas.map((row, i) => (
            <TableRow key={i}>
              {Object.values(row).map((val, j) => (
                <TableCell key={j}>{String(val)}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Geral;