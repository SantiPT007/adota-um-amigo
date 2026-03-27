// Página sobre o projecto Adota um Amigo
function Sobre() {
  return (
    <main>
      {/* Hero da página Sobre */}
      <section className="sobre-hero">
        <div className="sobre-hero-conteudo">
          <h1 className="sobre-titulo">Sobre o Adota um Amigo</h1>
          <p className="sobre-subtitulo">
            Uma plataforma criada com amor para ligar animais abandonados
            a famílias que os possam amar.
          </p>
        </div>
      </section>

      <div className="sobre-pagina container">

        {/* Secção de missão */}
        <section className="sobre-missao">
          <p>
            O <strong>Adota um Amigo</strong> nasceu da vontade de aproximar animais
            abandonados de famílias que os possam amar. Acreditamos que cada animal
            merece uma segunda oportunidade e que a adopção responsável é a melhor
            forma de combater o abandono e o sofrimento animal em Portugal.
          </p>
          <p>
            A nossa plataforma liga canis, gatis e centros de acolhimento a pessoas
            dispostas a abrir as suas casas e corações. Trabalhamos em parceria com
            associações de protecção animal em todo o país para garantir que cada
            adopção seja feita de forma responsável, segura e amorosa.
          </p>
        </section>

        {/* Secção "Como funciona?" */}
        <section className="sobre-como-funciona">
          <h2 className="sobre-secção-titulo">Como funciona?</h2>
          <div className="passos">
            <div className="passo" data-step="1">
              <span className="passo-icone">🔍</span>
              <h3>Pesquisa</h3>
              <p>
                Explora os animais disponíveis e filtra por tipo, localização ou
                nome até encontrares o teu companheiro ideal.
              </p>
            </div>
            <div className="passo" data-step="2">
              <span className="passo-icone">❤️</span>
              <h3>Escolhe</h3>
              <p>
                Lê a história de cada animal, conhece a sua personalidade e decide
                qual é aquele que melhor se adapta ao teu estilo de vida.
              </p>
            </div>
            <div className="passo" data-step="3">
              <span className="passo-icone">🏠</span>
              <h3>Adopta</h3>
              <p>
                Clica em "Quero Adotar" e a nossa equipa entrará em contacto para
                tratar de todos os detalhes do processo de adopção.
              </p>
            </div>
          </div>
        </section>

        {/* Secção de contacto */}
        <section className="sobre-contacto">
          <h2>Fala connosco</h2>
          <p>Tens dúvidas ou queres saber mais sobre o processo de adopção?</p>
          <ul className="contacto-lista">
            <li><a href="mailto:geral@adotaumamigo.pt">📧 geral@adotaumamigo.pt</a></li>
            <li><a href="tel:+351210000000">📞 +351 210 000 000</a></li>
          </ul>
        </section>

      </div>
    </main>
  );
}

export default Sobre;
