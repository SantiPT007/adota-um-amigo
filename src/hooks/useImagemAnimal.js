import { useState, useEffect } from 'react';

// Hook personalizado que vai buscar uma imagem real à API consoante o tipo de animal
function useImagemAnimal(tipo, imagemFallback) {
  const [imagem, setImagem] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    // Variável de controlo para evitar actualizar state após o componente desmontar
    let cancelado = false;

    async function buscarImagem() {
      setCarregando(true);
      setErro(null);

      try {
        let urlImagem;

        if (tipo === 'Cão') {
          // API pública de imagens de cães — não requer chave
          const resposta = await fetch('https://dog.ceo/api/breeds/image/random');
          const dados = await resposta.json();
          urlImagem = dados.message;

        } else if (tipo === 'Gato') {
          // API pública de imagens de gatos — não requer chave
          const resposta = await fetch('https://api.thecatapi.com/v1/images/search');
          const dados = await resposta.json();
          urlImagem = dados[0].url;

        } else {
          // Para outros tipos (Coelho, Pássaro, etc.) usa a imagem local
          urlImagem = imagemFallback;
        }

        if (!cancelado) {
          setImagem(urlImagem);
        }

      } catch (e) {
        // Em caso de erro de rede, usa a imagem de substituição
        if (!cancelado) {
          setErro('Não foi possível carregar a imagem.');
          setImagem(imagemFallback);
        }

      } finally {
        if (!cancelado) {
          setCarregando(false);
        }
      }
    }

    buscarImagem();

    // Função de limpeza executada quando o componente desmonta
    return () => {
      cancelado = true;
    };
  }, [tipo, imagemFallback]);

  return { imagem, carregando, erro };
}

export default useImagemAnimal;
