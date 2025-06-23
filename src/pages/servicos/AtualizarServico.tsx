import React from 'react';
import FormularioPadrao from '../../components/FormularioPadrao';

class AtualizarServico extends React.Component {
  servico = {
    nome: 'Banho e Tosa',
    preco: '60.00',
  };

  campos = [
    { nome: 'novoNome', rotulo: 'Novo Nome do Serviço', tipo: 'text', valor: '', placeholder: 'Deixe em branco para manter', obrigatorio: false },
    { nome: 'novoPreco', rotulo: 'Novo Preço (R$)', tipo: 'number', valor: '', placeholder: 'Deixe em branco para manter', obrigatorio: false }
  ];

  constructor(props) {
    super(props);
    this.aoEnviar = this.aoEnviar.bind(this);
    this.aoCancelar = this.aoCancelar.bind(this);
  }

  aoEnviar(dados) {
    const nome = dados.novoNome || this.servico.nome;
    const preco = dados.novoPreco || this.servico.preco;
    alert(`Serviço atualizado!\nNome: ${nome}\nPreço: R$ ${preco}`);
    window.location.hash = '#/servicos';
  }

  aoCancelar() {
    window.location.hash = '#/servicos';
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
              titulo="Atualizar Serviço"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AtualizarServico;
