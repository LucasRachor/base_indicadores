import React, { useEffect, useState } from 'react';
import {
  Box, Typography, Paper, Button, IconButton, Table, TableHead, TableBody,
  TableRow, TableCell, Dialog, DialogTitle, DialogContent, DialogActions, TextField, MenuItem, Select, InputLabel, FormControl
} from '@mui/material';
import { Edit, Refresh } from '@mui/icons-material';
import api from '../services/api';

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [setores, setSetores] = useState([]);
  const [perfis, setPerfis] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    setorIds: [],
    perfilId: '',
    jornadaTrabalho: '',
    statusSenha: false
  });
  const [editingId, setEditingId] = useState(null);

  const fetchUsuarios = async () => {
    const token = localStorage.getItem('token');
    try {
      const res = await api.get('/usuarios', { headers: { Authorization: `Bearer ${token}` } });
      setUsuarios(res.data);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
  };

  const fetchSetoresPerfis = async () => {
    const token = localStorage.getItem('token');
    try {
      const [resSetores, resPerfis] = await Promise.all([
        api.get('/setores', { headers: { Authorization: `Bearer ${token}` } }),
        api.get('/perfis', { headers: { Authorization: `Bearer ${token}` } })
      ]);
      setSetores(resSetores.data);
      setPerfis(resPerfis.data);
    } catch (error) {
      console.error('Erro ao buscar setores ou perfis:', error);
    }
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem('token');
    try {
      if (editingId) {
        await api.put(`/usuarios/${editingId}`, form, { headers: { Authorization: `Bearer ${token}` } });
      } else {
        await api.post('/usuarios', form, { headers: { Authorization: `Bearer ${token}` } });
      }
      setOpenDialog(false);
      setForm({ nome: '', email: '', senha: '', setorIds: [], perfilId: '', jornadaTrabalho: '', statusSenha: false });
      setEditingId(null);
      fetchUsuarios();
    } catch (error) {
      console.error('Erro ao salvar usuário:', error);
    }
  };

  const handleResetSenha = async (id) => {
    const token = localStorage.getItem('token');
    try {
      await api.patch(`/usuarios/${id}/reset-senha`, {}, { headers: { Authorization: `Bearer ${token}` } });
      fetchUsuarios();
    } catch (error) {
      console.error('Erro ao resetar senha:', error);
    }
  };

  const handleEdit = (usuario) => {
    setForm({
      nome: usuario.nome,
      email: usuario.email,
      senha: '',
      setorIds: usuario.setorIds || [],
      perfilId: usuario.perfilId,
      jornadaTrabalho: usuario.jornadaTrabalho,
      statusSenha: usuario.statusSenha
    });
    setEditingId(usuario.id);
    setOpenDialog(true);
  };

  useEffect(() => {
    fetchUsuarios();
    fetchSetoresPerfis();
  }, []);

  return (
    <Box p={3}>
      <Typography variant="h5">Usuários</Typography>
      <Button onClick={() => setOpenDialog(true)} variant="contained" sx={{ mt: 2 }}>Novo Usuário</Button>

      <Table sx={{ mt: 3 }}>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Status da Senha</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usuarios.map((u) => (
            <TableRow key={u.id}>
              <TableCell>{u.nome}</TableCell>
              <TableCell>{u.email}</TableCell>
              <TableCell>{u.statusSenha ? 'Alterada' : 'Inicial'}</TableCell>
              <TableCell>
                <IconButton onClick={() => handleEdit(u)}><Edit /></IconButton>
                <IconButton onClick={() => handleResetSenha(u.id)}><Refresh /></IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>{editingId ? 'Editar Usuário' : 'Novo Usuário'}</DialogTitle>
        <DialogContent>
          <TextField label="Nome" fullWidth margin="dense" value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} />
          <TextField label="Email" fullWidth margin="dense" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <TextField label="Senha" type="password" fullWidth margin="dense" value={form.senha} onChange={(e) => setForm({ ...form, senha: e.target.value })} />

          <FormControl fullWidth margin="dense">
            <InputLabel>Setores</InputLabel>
            <Select
              multiple
              value={form.setorIds}
              label="Setores"
              onChange={(e) => setForm({ ...form, setorIds: e.target.value })}
            >
              {setores.map((setor) => (
                <MenuItem key={setor.id} value={setor.id}>{setor.nome}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth margin="dense">
            <InputLabel>Perfil</InputLabel>
            <Select value={form.perfilId} label="Perfil" onChange={(e) => setForm({ ...form, perfilId: e.target.value })}>
              {perfis.map((perfil) => (
                <MenuItem key={perfil.id} value={perfil.id}>{perfil.nome}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField label="Jornada de Trabalho (ex: 08:00)" fullWidth margin="dense" value={form.jornadaTrabalho} onChange={(e) => setForm({ ...form, jornadaTrabalho: e.target.value })} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancelar</Button>
          <Button onClick={handleSubmit} variant="contained">Salvar</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Usuarios;
