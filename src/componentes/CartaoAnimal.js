import { useNavigate } from 'react-router-dom';
import useImagemAnimal from '../hooks/useImagemAnimal';

// Componente de cartão individual para cada animal na listagem
function CartaoAnimal({ animal }) {
  const navigate = useNavigate();

  // Usa o hook personalizado para ir buscar a imagem à API
  const { imagem, carregando } = useImagemAnimal(animal.tipo, animal.imagem);

  const idadeFormatada = animal.idade === 1 ? '1 ano' : `${animal.idade} anos`;

  return (
    <div className="cartao">
      {/* Renderização condicional: mostra esqueleto enquanto carrega */}
      {carregando ? (
        <div className="cartao-imagem-skeleton" aria-label="A carregar imagem..." />
      ) : (
        <img
          src={imagem}
          alt={animal.nome}
          className="cartao-imagem"
        />
      )}

      <div className="cartao-conteudo">
        <h2 className="cartao-nome">{animal.nome}</h2>
        <p className="cartao-tipo">{animal.tipo} · {animal.raca}</p>
        <p className="cartao-localizacao">📍 {animal.localizacao}</p>
        <p className="cartao-idade">{idadeFormatada}</p>
        <button
          className="botao-ver-mais"
          onClick={() => navigate(`/animal/${animal.id}`)}
        >
          Ver mais
        </button>
      </div>
    </div>
  );
}

export default CartaoAnimal;
