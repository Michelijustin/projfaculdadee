import React from "react";
import "./servicos.css";

function Servicos() {
  const servicosFicticios = [
    {
      nome: "Juliana",
      servico: "Manicure",
      contato: "5551999639270",
      imagens: ["/img/manicure1.jpg", "/img/manicure2.jpg"], // 2 imagens
    },
    {
      nome: "Rodrigo Magnus Lopes",
      servico: "Pedreiro",
      contato: "5551996043761",
      imagens: [], // 1 imagem
    },
    {
      nome: "Eduardo Gomes Lopes",
      servico: "Ajudante de Serviços gerais",
      contato: "5551981286538",
      imagens: [], // sem imagem
    },
     {
      nome: "Larissa Gomes Lopes",
      servico: "Bolos e doces",
      contato: "5551981577192",
      imagens: [], // sem imagem
    },
  ];

  return (
    <div className="page-container">
      <h2 className="titulo-pagina">Serviços Disponíveis</h2>
      <p className="subtitulo">
        Confira alguns dos profissionais cadastrados e entre em contato direto
        pelo WhatsApp.
      </p>

      <div className="servicos-list">
        {servicosFicticios.map((s, i) => (
          <div
            key={i}
            className={`servico-card ${
              s.imagens.length === 0 ? "sem-imagem" : ""
            }`}
          >
            {/* Mostra imagens se existirem */}
            {s.imagens.length > 0 && (
              <div className="servico-imagens">
                {s.imagens.map((img, index) => (
                  <img key={index} src={img} alt={s.servico} />
                ))}
              </div>
            )}

            <div className="servico-info">
              <h3>{s.servico}</h3>
              <p><strong>👤 Nome:</strong> {s.nome}</p>
              <p>
                <strong>📞 WhatsApp:</strong>{" "}
                <a
                  href={`https://wa.me/${s.contato}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Enviar mensagem
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Servicos;
