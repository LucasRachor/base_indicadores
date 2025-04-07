import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
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
    <AppBar position="static" sx={{ width: '100%' }}>
      <Container maxWidth={false} disableGutters>
        <Toolbar sx={{ px: 4, display: 'flex', justifyContent: 'space-between' }}>
          {/* Logo FIEAM */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={fieam} alt="Logo FIEAM" style={{ maxWidth: "60px", height: "auto" }} />
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
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
