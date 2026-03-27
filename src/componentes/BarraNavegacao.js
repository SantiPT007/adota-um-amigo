import { NavLink } from 'react-router-dom';

// Barra de navegação principal da aplicação
function BarraNavegacao() {
  const estiloBase = {
    color: '#6b7280',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: '600',
    padding: '7px 14px',
    borderRadius: '8px',
    transition: 'all 0.18s ease',
    fontFamily: "'Inter', sans-serif",
    letterSpacing: '0.1px',
  };

  const estiloActivo = {
    ...estiloBase,
    background: '#fff3ee',
    color: '#ff6b35',
  };

  return (
    <nav
      style={{
        background: 'rgba(255,255,255,0.92)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 32px',
        height: '64px',
      }}
    >
      {/* Logótipo */}
      <NavLink
        to="/"
        style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}
      >
        <span
          style={{
            background: 'linear-gradient(135deg, #ff6b35, #e55a24)',
            borderRadius: '10px',
            width: '34px',
            height: '34px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.1rem',
            boxShadow: '0 4px 12px rgba(255,107,53,0.35)',
            flexShrink: 0,
          }}
        >
          🐾
        </span>
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: '800',
            fontSize: '1.05rem',
            color: '#111827',
            letterSpacing: '-0.3px',
          }}
        >
          Adota um Amigo
        </span>
      </NavLink>

      {/* Links de navegação */}
      <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
        <NavLink to="/" end style={({ isActive }) => (isActive ? estiloActivo : estiloBase)}>
          Início
        </NavLink>
        <NavLink to="/sobre" style={({ isActive }) => (isActive ? estiloActivo : estiloBase)}>
          Sobre
        </NavLink>
      </div>
    </nav>
  );
}

export default BarraNavegacao;
