import React from 'react';
import TabelaDados from '../../components/TabelaDados';

class ListagemClientes extends React.Component<any, any> {
  state = {
    modalAberto: false,
    clienteSelecionado: null
  };

  constructor(props: any) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.fecharModal = this.fecharModal.bind(this);
    this.navegarCadastro = this.navegarCadastro.bind(this);
  }

  colunas = [
    { key: 'nome', label: 'Nome' },
    { key: 'nomeSocial', label: 'Nome Social' },
    { key: 'cpf', label: 'CPF' }
  ];

  clientes = [
    { nome: 'João Silva', nomeSocial: 'Jão', cpf: '123.456.789-00' },
    { nome: 'Maria Santos', nomeSocial: 'Mari', cpf: '123.456.789-00' },
    { nome: 'Pedro Oliveira', nomeSocial: 'Pedrinho', cpf: '123.456.789-00' },
  ];

  handleEdit(cliente: any) {
    window.location.hash = `#/clientes/editar/${cliente.cpf}`;
  }

  handleDelete(cliente: any) {
    alert('Cliente removido! (simulado)');
  }

  fecharModal() {
    this.setState({ modalAberto: false, clienteSelecionado: null });
  }

  navegarCadastro() {
    window.location.hash = '#/clientes/cadastrar';
  }

  render() {
    const { modalAberto } = this.state;
    return (
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="h2 fw-bold text-success m-0">Clientes</h1>
          <button
            type="button"
            className="btn btn-success d-flex align-items-center gap-2"
            onClick={this.navegarCadastro}
          >
            <span className="fw-bold">Novo Cliente</span>
          </button>
        </div>
        <TabelaDados
          colunas={this.colunas}
          dados={this.clientes}
          onEdit={this.handleEdit}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default ListagemClientes;
