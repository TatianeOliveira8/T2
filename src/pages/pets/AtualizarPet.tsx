import React from 'react';
import FormularioPadrao from '../../components/FormularioPadrao';

class AtualizarPet extends React.Component {
  pet = {
    nomeResponsavel: 'João Silva',
    nome: 'cacau',
    raca: 'Pincher',
    genero: 'M',
    tipo: 'Cão'
  };

  campos = [
    { nome: 'novoNome', rotulo: 'Novo Nome do Pet', tipo: 'text', valor: '', placeholder: 'Deixe em branco para manter', obrigatorio: false },
    { nome: 'novaRaca', rotulo: 'Nova Raça', tipo: 'text', valor: '', placeholder: 'Deixe em branco para manter', obrigatorio: false },
    { nome: 'novoGenero', rotulo: 'Novo Gênero (M/F)', tipo: 'text', valor: '', placeholder: 'Deixe em branco para manter', obrigatorio: false },
    { nome: 'novoTipo', rotulo: 'Novo Tipo do Pet', tipo: 'text', valor: '', placeholder: 'Deixe em branco para manter', obrigatorio: false }
  ];

  constructor(props) {
    super(props);
    this.aoEnviar = this.aoEnviar.bind(this);
    this.aoCancelar = this.aoCancelar.bind(this);
  }

  aoEnviar(dados) {
    const nome = dados.novoNome || this.pet.nome;
    const novaRaca = dados.novaRaca || this.pet.raca;
    const novoGenero = dados.novoGenero || this.pet.genero;
    const novoTipo = dados.novoTipo || this.pet.tipo;
    alert(`Pet atualizado!\nNome: ${nome}\nRaça: ${novaRaca}\nGênero: ${novoGenero}\nTipo: ${novoTipo}`);
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
              titulo="Atualizar Pet"
            />
            <div className="text-muted mt-3 small">Nome do Responsável: {this.pet.nomeResponsavel}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AtualizarPet;
