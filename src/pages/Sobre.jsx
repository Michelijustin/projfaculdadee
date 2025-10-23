import './sobre.css'
import servico from '../img/servico.png';

function Sobre() {
    return(
        <div className="page-container">
            <div className='comeco'>
                <div className='sobre'>
                    <h2 className='h2'>Sobre o Site</h2>
                    <p>
                       Bem-vindo(a) ao espaço da comunidade da Linha Bernardes! Este site foi pensado para facilitar a divulgação de serviços feitos por moradores da região. Aqui você pode conhecer os prestadores locais e entrar em contato com eles diretamente pelo WhatsApp, de forma prática e segura.
                    </p>
                </div>
                <div>
                    <img src={servico} alt=""></img>
                </div>
            </div>

            <div className='objetivo'>
                <h2 className='h2'>Objetivo</h2>
                <ul>
                    <li>Conectar prestadores de serviço a clientes rapidamente.</li>
                    <li>Facilitar a divulgação de contatos via WhatsApp.</li>
                    <li>Criar uma plataforma intuitiva e amigável, mesmo para quem não tem experiência com tecnologia.</li>
                </ul>
            </div>
        </div>
    )
}

export default Sobre;
