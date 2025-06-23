import React from 'react';
import TabelaDados from '../../components/TabelaDados';

class ListagemPets extends React.Component<any, any> {
  state = {};

  constructor(props: any) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.navegarCadastro = this.navegarCadastro.bind(this);
  }

  colunas = [
    { key: 'nome', label: 'Nome' },
    { key: 'tipo', label: 'Tipo' },
    { key: 'raca', label: 'Raça' },
    { key: 'genero', label: 'Gênero' },
    { key: 'proprietario', label: 'Cliente' }
  ];

  pets = [
    { nome: 'Cacau', tipo: 'Cão', raca: 'Pinscher', genero: 'F', proprietario: 'João Silva' },
    { nome: 'Ada', tipo: 'Gato', raca: 'Persa', genero: 'F', proprietario: 'Maria Santos' },
    { nome: 'Thor', tipo: 'Cão', raca: 'Pastor Alemão', genero: 'M', proprietario: 'Pedro Oliveira' },
  ];

  handleEdit(pet: any) {
    window.location.hash = `#/pets/editar/${pet.nome}`;
  }

  navegarCadastro() {
    window.location.hash = '#/pets/cadastrar';
  }

  render() {
    return (
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="h2 fw-bold text-success m-0">Pets</h1>
          <button
            type="button"
            className="btn btn-success d-flex align-items-center gap-2"
            onClick={this.navegarCadastro}
          >
            <span className="fw-bold">Novo Pet</span>
          </button>
        </div>
        <TabelaDados
          colunas={this.colunas}
          dados={this.pets}
          onEdit={this.handleEdit}
          onDelete={() => alert('Pet removido! (simulado)')}
        />
      </div>
    );
  }
}

export default ListagemPets;
