import React from 'react';
import FormularioPadrao from '../../components/FormularioPadrao';

class AtualizarProduto extends React.Component {
  produto = {
    id: '1',
    nome: 'Ração Premium',
    preco: '85.00'
  };

  campos = [
    { nome: 'novoNome', rotulo: 'Novo Nome do Produto', tipo: 'text', valor: '', placeholder: 'Deixe em branco para manter', obrigatorio: false },
    { nome: 'novoPreco', rotulo: 'Novo Preço (R$)', tipo: 'number', valor: '', placeholder: 'Deixe em branco para manter', obrigatorio: false }
  ];

  constructor(props) {
    super(props);
    this.aoEnviar = this.aoEnviar.bind(this);
    this.aoCancelar = this.aoCancelar.bind(this);
  }

  aoEnviar(dados) {
    const nome = dados.novoNome || this.produto.nome;
    const preco = dados.novoPreco || this.produto.preco;
    alert(`Produto atualizado!\nNome: ${nome}\nPreço: R$ ${preco}`);
    window.location.hash = '#/produtos';
  }

  aoCancelar() {
    window.location.hash = '#/produtos';
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
              titulo="Atualizar Produto"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AtualizarProduto;
