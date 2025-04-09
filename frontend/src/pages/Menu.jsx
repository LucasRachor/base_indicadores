import React from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, CssBaseline, Typography, Grid, Paper } from '@mui/material';
import { Link as RouterLink, Outlet, useLocation } from 'react-router-dom';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DomainIcon from '@mui/icons-material/Domain';
import InventoryIcon from '@mui/icons-material/Inventory';
import HistoryIcon from '@mui/icons-material/History';
import UpdateIcon from '@mui/icons-material/Update';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HomeIcon from '@mui/icons-material/Home';
import { motion } from 'framer-motion';
import ResponsiveAppBar from './ResponsiveAppBar';

const drawerWidth = 240;
const MotionListItem = motion(ListItem);

const setores = [
  { nome: 'Comercial', url: 'https://www.fieam.com.br/indicadores/setor/Comercial' },
  { nome: 'Call Center', url: 'https://www.fieam.com.br/indicadores/setor/CallCenter' },
  { nome: 'Marketing', url: 'https://www.fieam.com.br/indicadores/setor/Marketing' },
  { nome: 'Administração', url: 'https://www.fieam.com.br/indicadores/setor/Administracao' },
  { nome: 'Mercado', url: 'https://www.fieam.com.br/indicadores/setor/Mercado' },
  { nome: 'Design', url: 'https://www.fieam.com.br/indicadores/setor/Design' },
  { nome: 'Redes Sociais', url: 'https://www.fieam.com.br/indicadores/setor/RedesSociais' },
  { nome: 'Promoções', url: 'https://www.fieam.com.br/indicadores/setor/Promocoes' }
];

const LayoutBase = () => {
  const location = useLocation();
  const usuario = JSON.parse(localStorage.getItem('usuario'));
  const perfil = usuario?.perfil;

  const isAdmin = perfil === 'Administrador';
  const isLider = perfil === 'Líderes';
  const isEditor = perfil === 'Usuário_Editor';
  const isViewer = perfil === 'Usuário_Visualização';

  const isMenuPage = location.pathname === '/menu';

  return (
    <Box sx={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <CssBaseline />

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#1976d2',
            color: 'white',
            '& .MuiListItemText-primary': { color: 'white' }
          }
        }}
      >
        <Toolbar />
        <List>
          <MotionListItem button component={RouterLink} to="/menu" whileHover={{ scale: 1.05 }}>
            <ListItemIcon sx={{ color: 'white' }}><HomeIcon /></ListItemIcon>
            <ListItemText primary="Menu Principal" />
          </MotionListItem>

          {isAdmin && (
            <MotionListItem button component={RouterLink} to="/usuarios" whileHover={{ scale: 1.05 }}>
              <ListItemIcon sx={{ color: 'white' }}><PersonAddIcon /></ListItemIcon>
              <ListItemText primary="Cadastrar Usuário" />
            </MotionListItem>
          )}
          {(isAdmin || isEditor) && (
            <MotionListItem button component={RouterLink} to="/setores" whileHover={{ scale: 1.05 }}>
              <ListItemIcon sx={{ color: 'white' }}><DomainIcon /></ListItemIcon>
              <ListItemText primary="Cadastrar Setor" />
            </MotionListItem>
          )}
          {(isAdmin || isEditor) && (
            <MotionListItem button component={RouterLink} to="/itens" whileHover={{ scale: 1.05 }}>
              <ListItemIcon sx={{ color: 'white' }}><InventoryIcon /></ListItemIcon>
              <ListItemText primary="Cadastrar Item" />
            </MotionListItem>
          )}
          {(isAdmin || isEditor || isLider || isViewer) && (
            <MotionListItem button component={RouterLink} to="/historico" whileHover={{ scale: 1.05 }}>
              <ListItemIcon sx={{ color: 'white' }}><HistoryIcon /></ListItemIcon>
              <ListItemText primary="Histórico de Itens" />
            </MotionListItem>
          )}
          {(isAdmin || isEditor) && (
            <MotionListItem button component={RouterLink} to="/atualizar" whileHover={{ scale: 1.05 }}>
              <ListItemIcon sx={{ color: 'white' }}><UpdateIcon /></ListItemIcon>
              <ListItemText primary="Atualizar Itens" />
            </MotionListItem>
          )}
          {(isAdmin || isEditor || isLider || isViewer) && (
            <MotionListItem button component={RouterLink} to="/dias-uteis" whileHover={{ scale: 1.05 }}>
              <ListItemIcon sx={{ color: 'white' }}><CalendarMonthIcon /></ListItemIcon>
              <ListItemText primary="Dias Úteis por Setor" />
            </MotionListItem>
          )}
        </List>
      </Drawer>

      {/* Conteúdo principal */}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', width: '100%', height: '100vh', overflow: 'hidden' }}>
        <Box sx={{ flexShrink: 0, bgcolor: '#1976d2', px: 2 }}>
          <Box sx={{ backgroundColor: 'white', borderRadius: 2, px: 2, py: 1, display: 'inline-block', mt: 1, mb: 1 }}>
            <ResponsiveAppBar />
          </Box>
        </Box>

        <Box component="main" sx={{ flexGrow: 1, overflowY: 'auto', p: 3 }}>
          <Toolbar />
          {isMenuPage ? (
            <>
              <Typography variant="h5" gutterBottom>Informações Gerais</Typography>
              <Grid container spacing={3}>
                {setores.map((setor) => (
                  <Grid item xs={12} sm={6} md={3} key={setor.nome}>
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Paper
                        component="a"
                        href={setor.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          p: 2,
                          textAlign: 'center',
                          cursor: 'pointer',
                          textDecoration: 'none',
                          backgroundColor: '#e3f2fd',
                          color: '#0d47a1'
                        }}
                      >
                        <Typography variant="h6">{setor.nome}</Typography>
                      </Paper>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </>
          ) : (
            <Outlet />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default LayoutBase;
