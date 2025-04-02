import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login_1';
import SetoresPerfis from './pages/SetoresPerfis';
import Menu from './pages/Menu';
import Usuarios from './pages/Usuarios';
import CadastroItem from './pages/CadastroItem';
import AtualizacaoItem from './pages/AtualizacaoItem';
import HistoricoAlteracoes from './pages/HistoricoAlteracoes';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
   
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<PrivateRoute><Menu /></PrivateRoute>} />
        <Route path="/usuarios" element={<PrivateRoute><Usuarios /></PrivateRoute>} />
        <Route path="/setores" element={<PrivateRoute><SetoresPerfis /></PrivateRoute>} />
        <Route path="/itens" element={<CadastroItem />} />
        <Route path="/atualizar" element={<AtualizacaoItem />} />
        <Route path="/historico" element={<HistoricoAlteracoes />} />
        {/* Adicione outras rotas abaixo */}
      </Routes>
    </Router>
  );
}

export default App;


