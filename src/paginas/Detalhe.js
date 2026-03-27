import { useParams, useNavigate } from 'react-router-dom';
import animais from '../dados/animais.js';
import useImagemAnimal from '../hooks/useImagemAnimal';

// Página de detalhe de um animal específico
function Detalhe() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Procura o animal pelo id convertido para número
  const animal = animais.find((a) => a.id === Number(id));

  // Hook chamado antes de qualquer return condicional (regra dos hooks)
  const { imagem, carregando } = useImagemAnimal(
    animal?.tipo ?? '',
    animal?.imagem ?? ''
  );

  // Renderização condicional: animal não encontrado
  if (!animal) {
    return (
      <div className="container detalhe-erro">
        <p style={{ marginBottom: '16px', color: '#6b7280' }}>Animal não encontrado.</p>
        <button className="botao-voltar" onClick={() => navigate(-1)}>
          ← Voltar
        </button>
      </div>
    );
  }

  const idadeFormatada = animal.idade === 1 ? '1 ano' : `${animal.idade} anos`;

  const handleAdotar = () => {
    alert(
      `Obrigado pelo teu interesse em adotar o/a ${animal.nome}! Em breve entraremos em contacto.`
    );
  };

  return (
    <main className="container detalhe-pagina">
      <button className="botao-voltar" onClick={() => navigate(-1)}>
        ← Voltar
      </button>

      {/* Layout em duas colunas */}
      <div className="detalhe-grelha">

        {/* Coluna da imagem (sticky) */}
        <div className="detalhe-imagem-wrapper">
          {carregando ? (
            <div className="detalhe-imagem-skeleton" aria-label="A carregar imagem..." />
          ) : (
            <img src={imagem} alt={animal.nome} className="detalhe-imagem" />
          )}
        </div>

        {/* Coluna da informação */}
        <div className="detalhe-info">
          <h1 className="detalhe-nome">{animal.nome}</h1>

          <div className="detalhe-etiquetas">
            <span className="etiqueta">{animal.tipo}</span>
            <span className="etiqueta">{animal.raca}</span>
          </div>

          <ul className="detalhe-lista">
            <li>
              <span className="detalhe-label">Idade</span>
              <span style={{ fontWeight: '600', color: '#111827' }}>{idadeFormatada}</span>
            </li>
            <li>
              <span className="detalhe-label">Localização</span>
              <span style={{ fontWeight: '600', color: '#111827' }}>📍 {animal.localizacao}</span>
            </li>
          </ul>

          <p className="detalhe-descricao">{animal.descricao}</p>

          <button className="botao-adotar" onClick={handleAdotar}>
            💛 Quero Adotar
          </button>
        </div>
      </div>
    </main>
  );
}

export default Detalhe;
