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
    setErro('');
    console.log('Enviando login:', { email, senha });

   

    try {
      const response = await api.post('/auth/login', {
        username: email,
        password: senha
      });

      const { token, usuario } = response.data;
      console.log('Login OK:', usuario);

      // Salvar dados no localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('usuario', JSON.stringify(usuario));
      localStorage.setItem('email', email);
      localStorage.setItem('senha', senha); // ⚠️ Só em ambiente controlado!

      alert('Login realizado com sucesso!');

      // Redireciona para o menu
      navigate('/menu');

    } catch (error) {
      console.error('Erro ao logar:', error);
      setErro(error.response?.data?.message || 'Erro ao tentar login');
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
