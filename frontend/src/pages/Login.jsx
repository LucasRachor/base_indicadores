import React, { useState } from 'react';
import {
  TextField, Button, Box, Typography, Paper, InputAdornment, IconButton
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

import logo from "../assets/fieam.png"; // OK para logo

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro('');

    try {
      const response = await api.post('/auth/login', {
        username: email,
        password: senha
      });

      const { token, usuario } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('usuario', JSON.stringify(usuario));
      localStorage.setItem('email', email);
      localStorage.setItem('senha', senha);

      alert('Login realizado com sucesso!');
      navigate('/menu');
    } catch (error) {
      console.error('Erro ao logar:', error);
      setErro(error.response?.data?.message || 'Erro ao tentar login');
    }
  };

  return (
    <Box
  sx={{
    minHeight: '100vh',
    width: '100vw', // importante para preencher largura
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url("/logo.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    animation: 'wave 10s infinite ease-in-out'
  }}
>
  <Paper elevation={6} sx={{
    p: 4,
    width: 400,
    borderRadius: 3,
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(255,255,255,0.9)'
  }}>
    <Typography variant="h5" mb={2} align="center">SISTEMA INDICADORES DCM</Typography>

    <form onSubmit={handleSubmit}>
      <TextField
        label="Email"
        type="email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        label="Senha"
        type={mostrarSenha ? 'text' : 'password'}
        fullWidth
        margin="normal"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setMostrarSenha(!mostrarSenha)} edge="end">
                {mostrarSenha ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />

      {erro && (
        <Typography color="error" mt={1}>{erro}</Typography>
      )}

      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{
          mt: 2,
          transition: '0.3s',
          ':hover': {
            transform: 'scale(1.05)',
            backgroundColor: 'primary.dark'
          }
        }}
      >
        Entrar
      </Button>
    </form>

    <Box textAlign="center" mt={4}>
      <img src={logo} alt="Logo" width={100} style={{ marginBottom: 8 }} />
      <br></br>
      <Typography variant="caption" color="text.secondary">
        © 2025 Superintendência Corporativa (SUCOR)
      </Typography>
    </Box>
  </Paper>

  <style>
    {`
      @keyframes wave {
        0% { background-position: 50% 50%; }
        50% { background-position: 52% 48%; }
        100% { background-position: 50% 50%; }
      }
    `}
  </style>
</Box>
  );
};

export default Login;
