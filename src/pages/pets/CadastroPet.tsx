import React from 'react';
import FormularioPadrao from '../../components/FormularioPadrao';

class CadastroPet extends React.Component {
  campos = [
    { nome: 'nome', rotulo: 'Nome do Pet', tipo: 'text', valor: '', placeholder: 'Digite o nome do pet', obrigatorio: true },
    { nome: 'raca', rotulo: 'Raça', tipo: 'text', valor: '', placeholder: 'Digite a raça', obrigatorio: true },
    { nome: 'genero', rotulo: 'Gênero', tipo: 'text', valor: '', placeholder: 'M/F', obrigatorio: true },
    { nome: 'tipo', rotulo: 'Tipo', tipo: 'text', valor: '', placeholder: 'Cão, Gato, etc.', obrigatorio: true },
    { nome: 'cpfResponsavel', rotulo: 'CPF do Responsável', tipo: 'text', valor: '', placeholder: '000.000.000-00', obrigatorio: true }
  ];

  constructor(props) {
    super(props);
    this.aoEnviar = this.aoEnviar.bind(this);
    this.aoCancelar = this.aoCancelar.bind(this);
  }

  aoEnviar(dados) {
    alert('Pet cadastrado! (simulado)');
    window.location.hash = '#/pets';
  }

  aoCancelar() {
    window.location.hash = '#/pets';
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
              titulo="Cadastrar Pet"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CadastroPet;
