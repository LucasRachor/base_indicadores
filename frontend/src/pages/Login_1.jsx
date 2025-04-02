
import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';




const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Enviando login:', { email, senha });
  
    try {
      const response = await api.post('/auth/login', { email, senha });
      const { token, usuario } = response.data;
      console.log('Login OK:', usuario);
      localStorage.setItem('token', token);
      localStorage.setItem('usuario', JSON.stringify(usuario));
      alert('Login realizado com sucesso!');
      localStorage.setItem('perfil', usuario.perfil);
      navigate('/menu');
    } catch (error) {
      console.error('Erro ao logar:', error);
      setErro(error.response?.data?.erro || 'Erro no login');
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Paper elevation={3} sx={{ padding: 4, width: 360 }}>
        <Typography variant="h5" mb={2}>Login</Typography>
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
            type="password"
            fullWidth
            margin="normal"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          {erro && <Typography color="error">{erro}</Typography>}
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Entrar
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;