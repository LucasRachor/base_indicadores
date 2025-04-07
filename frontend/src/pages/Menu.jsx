import React from 'react';
import { Box, Button, Typography, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DomainIcon from '@mui/icons-material/Domain';
import InventoryIcon from '@mui/icons-material/Inventory';
import HistoryIcon from '@mui/icons-material/History';
import UpdateIcon from '@mui/icons-material/Update';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { motion } from 'framer-motion';

const Menu = () => {
  const navigate = useNavigate();
  const usuario = JSON.parse(localStorage.getItem('usuario'));
  const perfil = usuario?.perfil;

  const isAdmin = perfil === 'Administrador';
  const isLider = perfil === 'Líderes';
  const isEditor = perfil === 'Usuário_Editor';
  const isViewer = perfil === 'Usuário_Visualização';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box p={4}>
        <Typography variant="h4" gutterBottom>Menu Principal</Typography>
        <Stack spacing={2} direction="column" alignItems="flex-start">
          
          {isAdmin && (
            <Button startIcon={<PersonAddIcon />} onClick={() => navigate('/usuarios')}>
              Cadastrar Usuário / Perfil
            </Button>
          )}

          {(isAdmin || isEditor) && (
            <Button startIcon={<DomainIcon />} onClick={() => navigate('/setores')}>
              Cadastrar Setor
            </Button>
          )}

          {(isAdmin || isEditor) && (
            <Button startIcon={<InventoryIcon />} onClick={() => navigate('/itens')}>
              Cadastrar Item
            </Button>
          )}

          {(isAdmin || isEditor || isLider || isViewer) && (
            <Button startIcon={<HistoryIcon />} onClick={() => navigate('/historico')}>
              Visualizar Histórico do Item Atualizado
            </Button>
          )}

          {(isAdmin || isEditor) && (
            <Button startIcon={<UpdateIcon />} onClick={() => navigate('/atualizar')}>
              Atualizar Registro do Item/Setor
            </Button>
          )}

          {(isAdmin || isEditor || isLider || isViewer) && (
            <Button startIcon={<CalendarMonthIcon />} onClick={() => navigate('/dias-uteis')}>
              Tabela com Dias Úteis por Setor
            </Button>
          )}

        </Stack>
      </Box>
    </motion.div>
  );
};

export default Menu;
