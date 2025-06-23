import React from 'react';
import TabelaDados from '../../components/TabelaDados';

class ListagemProdutos extends React.Component {
  colunas = [
    { key: 'id', label: 'ID' },
    { key: 'nome', label: 'Nome' },
    { key: 'preco', label: 'Preço (R$)' }
  ];

  produtos = [
    { id: 1, nome: 'Ração Premium', preco: '85.00' },
    { id: 2, nome: 'Brinquedo', preco: '450.00' },
    { id: 3, nome: 'Coleira', preco: '25.00' },
  ];

  handleEdit = (produto: any) => {
    window.location.hash = `#/produtos/editar/${produto.id}`;
  };

  handleDelete = (produto: any) => {
    alert(`Produto removido! (simulado)`);
  };

  navegarCadastro = () => {
    window.location.hash = '#/produtos/cadastrar';
  };

  render() {
    return (
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="h2 fw-bold text-success m-0">Produtos</h1>
          <button
            type="button"
            className="btn btn-success d-flex align-items-center gap-2"
            onClick={this.navegarCadastro}
          >
            <span className="fw-bold">Novo Produto</span>
          </button>
        </div>
        <TabelaDados
          colunas={this.colunas}
          dados={this.produtos}
          onEdit={this.handleEdit}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default ListagemProdutos;
