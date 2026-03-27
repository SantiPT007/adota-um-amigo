import { useNavigate } from 'react-router-dom';
import useImagemAnimal from '../hooks/useImagemAnimal';

// Emojis por tipo de animal para o badge
const EMOJI_TIPO = {
  'Cão':     '🐶',
  'Gato':    '🐱',
  'Coelho':  '🐰',
  'Pássaro': '🐦',
};

// Componente de cartão individual para cada animal na listagem
function CartaoAnimal({ animal }) {
  const navigate = useNavigate();
  const { imagem, carregando } = useImagemAnimal(animal.tipo, animal.imagem);

  const idadeFormatada = animal.idade === 1 ? '1 ano' : `${animal.idade} anos`;
  const emoji = EMOJI_TIPO[animal.tipo] ?? '🐾';

  return (
    <div className="cartao">
      {/* Imagem com badge de tipo sobreposto */}
      <div className="cartao-imagem-container">
        {carregando ? (
          <div className="cartao-imagem-skeleton" aria-label="A carregar imagem..." />
        ) : (
          <img src={imagem} alt={animal.nome} className="cartao-imagem" />
        )}
        <span className="cartao-badge">{emoji} {animal.tipo}</span>
      </div>

      <div className="cartao-conteudo">
        <h2 className="cartao-nome">{animal.nome}</h2>
        <p className="cartao-tipo">{animal.raca}</p>

        {/* Localização e idade em linha */}
        <div className="cartao-meta">
          <span className="cartao-localizacao">📍 {animal.localizacao}</span>
          <span className="cartao-idade">🕐 {idadeFormatada}</span>
        </div>

        <button
          className="botao-ver-mais"
          onClick={() => navigate(`/animal/${animal.id}`)}
        >
          Ver mais →
        </button>
      </div>
    </div>
  );
}

export default CartaoAnimal;
