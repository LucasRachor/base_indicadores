// src/pages/Menu.jsx
import React from 'react';
import { Box, Button, Typography, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

  const Menu = () => {
      const navigate = useNavigate();
      const perfil = localStorage.getItem('perfil');
  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>Menu Principal</Typography>
      <Stack spacing={2} direction="column" alignItems="flex-start">
      {perfil === 'Administrador' && (
      <Button onClick={() => navigate('/usuarios')}>Cadastrar Usuário / Perfil</Button>
)}
      <Button onClick={() => navigate('/setores')}>Cadastrar Setor</Button>
      <Button onClick={() => navigate('/itens')}>Cadastrar Item</Button>
      <Button onClick={() => navigate('/historico')}>Visualizar Histórico do Item Atualizado</Button>
      <Button onClick={() => navigate('/atualizar')}>Atualizar Registro do Item/Setor</Button>
      <Button onClick={() => navigate('/dias-uteis')}>Tabela com Dias Úteis por Setor</Button>
      </Stack>
    </Box>
  );
};

export default Menu;
