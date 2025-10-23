import React, { useState } from "react";
import "./cadastrarServico.css"; // arquivo CSS separado para estilo

function CadastrarServico() {
  const [nome, setNome] = useState("");
  const [servico, setServico] = useState("");
  const [contato, setContato] = useState("");

  // 👉 SEU número de WhatsApp (quem recebe as mensagens)
  const numeroAdm = "5551995386241"; // troque pelo seu número real

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !servico || !contato) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    const mensagem = 
`📋 *Novo cadastro de serviço!*

👤 Nome: ${nome}
💼 Serviço: ${servico}
📞 WhatsApp do prestador: https://wa.me/${contato}

📸 O prestador pode enviar imagens do seu trabalho para cadastro no site.`;

    const url = `https://api.whatsapp.com/send?phone=${numeroAdm}&text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");

    setNome("");
    setServico("");
    setContato("");
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-card">
        <h2>📋 Cadastrar Seu Serviço</h2>
        <p className="descricao">
          Preencha seus dados abaixo para divulgar o seu trabalho. <br />
          Você também pode enviar <strong>imagens do seu serviço</strong> pelo WhatsApp,
          para que possamos cadastrar no site.
        </p>

        <form onSubmit={handleSubmit} className="form-container">
          <input
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Serviço (ex: Manicure, Pedreiro)"
            value={servico}
            onChange={(e) => setServico(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Seu número do WhatsApp (ex: 5511999999999)"
            value={contato}
            onChange={(e) => setContato(e.target.value)}
            required
          />

          <button type="submit">📨 Enviar para WhatsApp</button>
        </form>

        <p className="info-extra">
          Caso não consiga enviar por aqui, clique no link abaixo e fale diretamente comigo no WhatsApp:
        </p>
        <a
          href={`https://api.whatsapp.com/send?phone=${numeroAdm}&text=${encodeURIComponent(
            "Olá! Quero cadastrar meu serviço no site."
          )}`}
          className="link-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          💬 Falar diretamente no WhatsApp
        </a>
      </div>
    </div>
  );
}

export default CadastrarServico;

