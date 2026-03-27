import { NavLink } from 'react-router-dom';

// Barra de navegação principal da aplicação
function BarraNavegacao() {
  // Estilo base dos links de navegação
  const estiloLink = {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '1rem',
    padding: '6px 12px',
    borderRadius: '6px',
    transition: 'background 0.2s',
  };

  // Estilo aplicado ao link activo (página actual)
  const estiloActivo = {
    ...estiloLink,
    background: 'rgba(255, 255, 255, 0.2)',
    fontWeight: '600',
  };

  return (
    <nav
      style={{
        background: '#2c3e50',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 32px',
        height: '60px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      }}
    >
      {/* Logótipo e nome da aplicação */}
      <NavLink
        to="/"
        style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
      >
        <span style={{ fontSize: '1.5rem' }}>🐾</span>
        <span style={{ color: '#ffffff', fontWeight: '700', fontSize: '1.2rem' }}>
          Adota um Amigo
        </span>
      </NavLink>

      {/* Links de navegação */}
      <div style={{ display: 'flex', gap: '8px' }}>
        <NavLink
          to="/"
          end
          style={({ isActive }) => (isActive ? estiloActivo : estiloLink)}
        >
          Início
        </NavLink>
        <NavLink
          to="/sobre"
          style={({ isActive }) => (isActive ? estiloActivo : estiloLink)}
        >
          Sobre
        </NavLink>
      </div>
    </nav>
  );
}

export default BarraNavegacao;
