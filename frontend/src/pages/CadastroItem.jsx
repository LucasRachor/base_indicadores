import React, { useState, useEffect } from 'react';
import {
  Box, Typography, TextField, Button, MenuItem, Grid, Paper, Chip, IconButton, Table, TableHead, TableRow, TableCell, TableBody
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import api from '../services/api';

const CadastroItem = () => {
  const [setores, setSetores] = useState([]);
  const [itens, setItens] = useState([]);
  const [instituicoes, setInstituicoes] = useState(['FIEAM', 'SESI', 'SENAI', 'IEL']);
  const [novaInstituicao, setNovaInstituicao] = useState('');
  const [editandoId, setEditandoId] = useState(null);

  const [form, setForm] = useState({
    nome: '',
    detalhes: '',
    setorId: '',
    ano: new Date().getFullYear()
  });

  const currentYear = new Date().getFullYear();
  const anos = Array.from({ length: 21 }, (_, i) => currentYear - 10 + i);
  const token = localStorage.getItem('token');

  // Carregar setores e itens
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

    const fetchItens = async () => {
      try {
        const res = await api.get('/itens', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setItens(res.data);
      } catch (err) {
        console.error('Erro ao carregar itens', err);
      }
    };

    fetchSetores();
    fetchItens();
  }, [token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const adicionarInstituicao = () => {
    const nova = novaInstituicao.trim().toUpperCase();
    if (nova !== '' && !instituicoes.includes(nova)) {
      setInstituicoes([...instituicoes, nova]);
      setNovaInstituicao('');
    }
  };

  const removerInstituicao = (nome) => {
    setInstituicoes(instituicoes.filter(inst => inst !== nome));
  };

  const limparFormulario = () => {
    setForm({ nome: '', detalhes: '', setorId: '', ano: currentYear });
    setInstituicoes(['FIEAM', 'SESI', 'SENAI', 'IEL']);
    setEditandoId(null);
  };

  const handleSubmit = async () => {
    try {
      const payload = { ...form, instituicoes };

      if (editandoId) {
        await api.put(`/itens/${editandoId}`, payload, {
          headers: { Authorization: `Bearer ${token}` }
        });
        alert('Item atualizado com sucesso!');
      } else {
        await api.post('/itens', payload, {
          headers: { Authorization: `Bearer ${token}` }
        });
        alert('Item cadastrado com sucesso!');
      }

      limparFormulario();

      const res = await api.get('/itens', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setItens(res.data);
    } catch (error) {
      console.error('Erro ao salvar item:', error);
    }
  };

  const handleEditar = async (item) => {
    setForm({
      nome: item.nome,
      detalhes: item.detalhes,
      setorId: item.setor_id,
      ano: item.ano
    });
    setEditandoId(item.id);
  };

  const handleExcluir = async (id) => {
    try {
      await api.delete(`/itens/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Item excluído com sucesso!');
      setItens(itens.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Erro ao excluir item:', error);
    }
  };

  return (
    <Box p={3}>
      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="h5" mb={2}>
          {editandoId ? 'Editar Item' : 'Cadastro de Item'}
        </Typography>
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
          <Grid item xs={12} sm={6}>
            <TextField select label="Ano" name="ano" fullWidth value={form.ano} onChange={handleChange}>
              {anos.map((ano) => (
                <MenuItem key={ano} value={ano}>{ano}</MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Cadastro de novas instituições */}
          <Grid item xs={12} sm={8}>
            <TextField label="Nova Instituição" value={novaInstituicao} onChange={(e) => setNovaInstituicao(e.target.value)} fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button variant="outlined" fullWidth sx={{ height: '100%' }} onClick={adicionarInstituicao}>
              Adicionar Instituição
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>Instituições Selecionadas:</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {instituicoes.map((inst) => (
                <Chip key={inst} label={inst} onDelete={() => removerInstituicao(inst)} deleteIcon={<DeleteIcon />} />
              ))}
            </Box>
          </Grid>
        </Grid>

        <Box mt={3}>
          <Button variant="contained" onClick={handleSubmit}>
            {editandoId ? 'Atualizar Item' : 'Cadastrar Item'}
          </Button>
          {editandoId && (
            <Button onClick={limparFormulario} sx={{ ml: 2 }}>
              Cancelar
            </Button>
          )}
        </Box>
      </Paper>

      {/* Tabela de Itens */}
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>Itens Cadastrados</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Detalhes</TableCell>
              <TableCell>Setor</TableCell>
              <TableCell>Ano</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {itens.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.nome}</TableCell>
                <TableCell>{item.detalhes}</TableCell>
                <TableCell>{item.setor?.nome || item.setor_nome}</TableCell>
                <TableCell>{item.ano}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleEditar(item)}><EditIcon /></IconButton>
                  <IconButton color="error" onClick={() => handleExcluir(item.id)}><DeleteIcon /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default CadastroItem;
