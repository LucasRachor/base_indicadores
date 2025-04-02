
import React, { useState, useEffect } from 'react';
import {
  Box, Typography, TextField, Button, MenuItem, Grid, Paper
} from '@mui/material';
import api from '../services/api';

const CadastroItem = () => {
  const [setores, setSetores] = useState([]);
  const [form, setForm] = useState({
    nome: '',
    detalhes: '',
    setorId: '',
    ano: new Date().getFullYear(),
    mes: '',
    valorFieam: '',
    valorSesi: '',
    valorSenai: '',
    valorIel: '',
    totalGeral: 0
  });

  const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const anos = [2025, 2024, 2023, 2022, 2021];

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchSetores = async () => {
      try {
        const res = await api.get('/setores', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setSetores(res.data);
      } catch (err) {
        console.error('Erro ao carregar setores', err);
      }
    };
    fetchSetores();
  }, [token]);

  useEffect(() => {
    const fieam = parseFloat(form.valorFieam) || 0;
    const sesi = parseFloat(form.valorSesi) || 0;
    const senai = parseFloat(form.valorSenai) || 0;
    const iel = parseFloat(form.valorIel) || 0;
    setForm((prev) => ({ ...prev, totalGeral: fieam + sesi + senai + iel }));
  }, [form.valorFieam, form.valorSesi, form.valorSenai, form.valorIel]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      await api.post('/itens', form, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Item cadastrado com sucesso!');
      setForm({ nome: '', detalhes: '', setorId: '', ano: new Date().getFullYear(), mes: '', valorFieam: '', valorSesi: '', valorSenai: '', valorIel: '', totalGeral: 0 });
    } catch (error) {
      console.error('Erro ao cadastrar item:', error);
    }
  };

  return (
    <Box p={3}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" mb={2}>Cadastro de Item</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="Nome do Item" name="nome" fullWidth value={form.nome} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Detalhes" name="detalhes" fullWidth value={form.detalhes} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField select label="Setor" name="setorId" fullWidth value={form.setorId} onChange={handleChange}>
              {setores.map((setor) => (
                <MenuItem key={setor.id} value={setor.id}>{setor.nome}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField select label="Ano" name="ano" fullWidth value={form.ano} onChange={handleChange}>
              {anos.map((ano) => (
                <MenuItem key={ano} value={ano}>{ano}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField select label="Mês" name="mes" fullWidth value={form.mes} onChange={handleChange}>
              {meses.map((mes) => (
                <MenuItem key={mes} value={mes}>{mes}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField label="Valor FIEAM" name="valorFieam" type="number" fullWidth value={form.valorFieam} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField label="Valor SESI" name="valorSesi" type="number" fullWidth value={form.valorSesi} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField label="Valor SENAI" name="valorSenai" type="number" fullWidth value={form.valorSenai} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField label="Valor IEL" name="valorIel" type="number" fullWidth value={form.valorIel} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField label="Total Geral" name="totalGeral" type="number" fullWidth value={form.totalGeral} disabled />
          </Grid>
        </Grid>
        <Box mt={3}>
          <Button variant="contained" onClick={handleSubmit}>Cadastrar</Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default CadastroItem;
