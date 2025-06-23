import React from 'react';
import FormularioPadrao from '../../components/FormularioPadrao';

class AtualizarCliente extends React.Component {
  cliente = {
    nome: 'João Silva',
    nomeSocial: 'Joãozinho',
    cpf: '123.456.789-00'
  };

  campos = [
    { nome: 'novoNome', rotulo: 'Novo Nome', tipo: 'text', valor: '', placeholder: 'Deixe em branco para manter', obrigatorio: false },
    { nome: 'novoNomeSocial', rotulo: 'Novo Nome Social', tipo: 'text', valor: '', placeholder: 'Deixe em branco para manter', obrigatorio: false }
  ];

  constructor(props) {
    super(props);
    this.aoEnviar = this.aoEnviar.bind(this);
    this.aoCancelar = this.aoCancelar.bind(this);
  }

  aoEnviar(dados) {
    const nome = dados.novoNome || this.cliente.nome;
    const nomeSocial = dados.novoNomeSocial || this.cliente.nomeSocial;
    alert(`Cliente atualizado!\nNome: ${nome}\nNome Social: ${nomeSocial}`);
    window.location.hash = '#/clientes';
  }

  aoCancelar() {
    window.location.hash = '#/clientes';
  }

  render() {
    return (
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <FormularioPadrao
              campos={this.campos}
              aoEnviar={this.aoEnviar}
              aoCancelar={this.aoCancelar}
              titulo="Atualizar Cliente"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AtualizarCliente;
