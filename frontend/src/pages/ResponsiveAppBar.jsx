import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import fieam from "../assets/fieam.png";

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const usuario = JSON.parse(localStorage.getItem('usuario'));
  const nomeUsuario = usuario?.nome ?? 'Usuário';

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    navigate('/login');
  };

  return (
    <AppBar position="fixed" sx={{ width: '100%', zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: "#19c1d2" }}> 
      <Toolbar
        sx={{
          px: 4,
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%'
        }}
      >
        {/* Logo FIEAM */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button component={RouterLink} to="/menu" sx={{ p: 0 }}>
            <img src={fieam} alt="Logo FIEAM" style={{ maxWidth: "60px", height: "auto" }} />
          </Button>
        </Box>

        {/* Nome do usuário + logout */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Tooltip title="Abrir menu">
            <Button onClick={handleOpenUserMenu} sx={{ color: 'white', fontWeight: 'bold' }}>
              {nomeUsuario}
            </Button>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem onClick={handleLogout}>
              <LogoutIcon fontSize="small" sx={{ mr: 1 }} />
              <Typography>Sair</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
