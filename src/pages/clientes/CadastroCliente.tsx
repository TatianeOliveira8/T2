import React from 'react';
import FormularioPadrao from '../../components/FormularioPadrao';

class CadastroCliente extends React.Component {
  campos = [
    { nome: 'nome', rotulo: 'Nome Completo', tipo: 'text', valor: '', placeholder: 'Digite o nome completo', obrigatorio: true },
    { nome: 'nomeSocial', rotulo: 'Nome Social', tipo: 'text', valor: '', placeholder: 'Digite o nome social', obrigatorio: false },
    { nome: 'cpf', rotulo: 'CPF', tipo: 'text', valor: '', placeholder: '000.000.000-00', obrigatorio: true },
    { nome: 'dataEmissaoCpf', rotulo: 'Data de Emissão do CPF', tipo: 'date', valor: '', placeholder: '', obrigatorio: true },
    { nome: 'ddd', rotulo: 'DDD', tipo: 'text', valor: '', placeholder: '00', obrigatorio: true },
    { nome: 'numeroTelefone', rotulo: 'Telefone', tipo: 'text', valor: '', placeholder: '00000-0000', obrigatorio: true }
  ];

  constructor(props) {
    super(props);
    this.aoEnviar = this.aoEnviar.bind(this);
    this.aoCancelar = this.aoCancelar.bind(this);
  }

  aoEnviar(dados) {
    alert('Cliente cadastrado! (simulado)');
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
              titulo="Cadastrar Cliente"

              campos={this.campos}
              aoEnviar={this.aoEnviar}
              aoCancelar={this.aoCancelar}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CadastroCliente;
