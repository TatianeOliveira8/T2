import React from 'react';
import FormularioPadrao from '../../components/FormularioPadrao';

class CadastroServico extends React.Component {
  campos = [
    { nome: 'nome', rotulo: 'Nome do Serviço', tipo: 'text', valor: '', placeholder: 'Digite o nome do serviço', obrigatorio: true },
    { nome: 'preco', rotulo: 'Preço (R$)', tipo: 'number', valor: '', placeholder: '0.00', obrigatorio: true }
  ];

  constructor(props) {
    super(props);
    this.aoEnviar = this.aoEnviar.bind(this);
    this.aoCancelar = this.aoCancelar.bind(this);
  }

  aoEnviar(dados) {
    alert('Serviço cadastrado! (simulado)');
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
              titulo="Cadastrar Serviço"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CadastroServico;
