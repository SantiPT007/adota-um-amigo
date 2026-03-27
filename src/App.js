import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BarraNavegacao from './componentes/BarraNavegacao';
import Inicio from './paginas/Inicio';
import Detalhe from './paginas/Detalhe';
import Sobre from './paginas/Sobre';

// Componente principal da aplicação com roteamento
function App() {
  return (
    <Router>
      <BarraNavegacao />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/animal/:id" element={<Detalhe />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Router>
  );
}

export default App;
