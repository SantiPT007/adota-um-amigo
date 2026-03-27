import { useState } from 'react';
import animais from '../dados/animais.js';
import CartaoAnimal from '../componentes/CartaoAnimal';

// Tipos de animais disponíveis para filtrar
const TIPOS = ['Todos', 'Cão', 'Gato', 'Coelho', 'Pássaro'];

// Página inicial com listagem, pesquisa e filtros de animais
function Inicio() {
  const [pesquisa, setPesquisa] = useState('');
  const [tipoActivo, setTipoActivo] = useState('Todos');

  // Filtra os animais com base na pesquisa e no tipo seleccionado
  const animaisFiltrados = animais.filter((animal) => {
    const termoPesquisa = pesquisa.toLowerCase();
    const correspondeTexto =
      animal.nome.toLowerCase().includes(termoPesquisa) ||
      animal.tipo.toLowerCase().includes(termoPesquisa) ||
      animal.localizacao.toLowerCase().includes(termoPesquisa);
    const correspondeTipo = tipoActivo === 'Todos' || animal.tipo === tipoActivo;
    return correspondeTexto && correspondeTipo;
  });

  // Conta os tipos únicos de animais para as estatísticas
  const totalCidades = [...new Set(animais.map((a) => a.localizacao))].length;

  return (
    <main className="pagina-inicio">
      {/* Secção hero */}
      <section className="hero">
        <div className="hero-conteudo">
          <p className="hero-badge">🐾 Portugal · Adoção responsável</p>
          <h1 className="hero-titulo">
            Animais à espera<br />de uma família
          </h1>
          <p className="hero-subtitulo">
            Encontra o teu companheiro ideal e dá-lhe uma segunda oportunidade.
            Cada adopção salva uma vida.
          </p>

          {/* Estatísticas rápidas */}
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-numero">{animais.length}</span>
              <span className="hero-stat-label">Animais</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-numero">{totalCidades}</span>
              <span className="hero-stat-label">Cidades</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-numero">{TIPOS.length - 1}</span>
              <span className="hero-stat-label">Tipos</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Barra de pesquisa com ícone */}
        <div className="pesquisa-wrapper">
          <span className="pesquisa-icone">🔍</span>
          <input
            type="text"
            className="barra-pesquisa"
            placeholder="Pesquisar por nome, tipo ou localização..."
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
          />
        </div>

        {/* Botões de filtro por tipo */}
        <div className="filtros">
          {TIPOS.map((tipo) => (
            <button
              key={tipo}
              className={`botao-filtro ${tipoActivo === tipo ? 'activo' : ''}`}
              onClick={() => setTipoActivo(tipo)}
            >
              {tipo}
            </button>
          ))}
        </div>

        {/* Renderização condicional: grelha ou mensagem de sem resultados */}
        {animaisFiltrados.length > 0 ? (
          <div className="grelha-animais">
            {animaisFiltrados.map((animal) => (
              <CartaoAnimal key={animal.id} animal={animal} />
            ))}
          </div>
        ) : (
          <p className="sem-resultados">
            Nenhum animal encontrado. Tenta outra pesquisa.
          </p>
        )}
      </div>
    </main>
  );
}

export default Inicio;
