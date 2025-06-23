import React from 'react';
import FormularioPadrao from '../components/FormularioPadrao';

class RegistroConsumo extends React.Component {
  campos = [
    { nome: 'cpfCliente', rotulo: 'CPF do Cliente', tipo: 'text', valor: '', placeholder: '000.000.000-00', obrigatorio: true },
    { nome: 'codigoItem', rotulo: 'Código do Produto ou Serviço', tipo: 'text', valor: '', placeholder: 'Ex: P1 ou S2', obrigatorio: true }
  ];

  constructor(props) {
    super(props);
    this.aoEnviar = this.aoEnviar.bind(this);
  }

  aoEnviar(dados) {
    alert('Consumo registrado! (simulado)');
    window.location.hash = '#/consumos';
  }

  render() {
    return (
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <FormularioPadrao
              campos={this.campos}
              aoEnviar={this.aoEnviar}
              aoCancelar={undefined}
              titulo="Registrar Consumo"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default RegistroConsumo;
