import React from 'react';
import TabelaDados from '../../components/TabelaDados';

class ListagemServicos extends React.Component {
  colunas = [
    { key: 'id', label: 'ID' },
    { key: 'nome', label: 'Nome' },
    { key: 'preco', label: 'Preço (R$)' }
  ];

  servicos = [
    { id: 1, nome: 'Banho e Tosa', preco: '60.00' },
    { id: 2, nome: 'Consulta Veterinária', preco: '120.00' },
    { id: 3, nome: 'Vacinação', preco: '80.00' },
    { id: 4, nome: 'Adoção', preco: '00.00' },
  ];

  handleEdit = (servico: any) => {
    window.location.hash = `#/servicos/editar/${servico.id}`;
  };

  handleDelete = (servico: any) => {
    alert(`Serviço removido! (simulado)`);
  };

  navegarCadastro = () => {
    window.location.hash = '#/servicos/cadastrar';
  };

  render() {
    return (
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="h2 fw-bold text-success m-0">Serviços</h1>
          <button
            type="button"
            className="btn btn-success d-flex align-items-center gap-2"
            onClick={this.navegarCadastro}
          >
            <span className="fw-bold">Novo Serviço</span>
          </button>
        </div>
        <TabelaDados
          colunas={this.colunas}
          dados={this.servicos}
          onEdit={this.handleEdit}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default ListagemServicos;
