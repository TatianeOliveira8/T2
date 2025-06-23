import React from 'react';

interface Campo {
  nome: string;
  rotulo: string;
  tipo: string;
  valor: string;
  placeholder?: string;
  obrigatorio?: boolean;
}

interface PropsFormulario {
  campos: Campo[];
  aoEnviar: (dados: Record<string, string>) => void;
  aoCancelar?: () => void;
  titulo: string;
}

interface FormularioPadraoState {
  dados: Record<string, string>;
}

class FormularioPadrao extends React.Component<PropsFormulario, FormularioPadraoState> {
  constructor(props: PropsFormulario) {
    super(props);
    const iniciais: Record<string, string> = {};
    props.campos.forEach(campo => {
      iniciais[campo.nome] = campo.valor || '';
    });
    this.state = {
      dados: iniciais,
    };
  }

  componentDidUpdate(prevProps: PropsFormulario) {
    if (prevProps.campos !== this.props.campos) {
      const iniciais: Record<string, string> = {};
      this.props.campos.forEach(campo => {
        iniciais[campo.nome] = campo.valor || '';
      });
      this.setState({ dados: iniciais });
    }
  }

  aoMudar = (nome: string, valor: string) => {
    this.setState(prevState => ({ dados: { ...prevState.dados, [nome]: valor } }));
  };

  aoSubmeter = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.aoEnviar(this.state.dados);
  };

  render() {
    const { campos, aoCancelar, titulo } = this.props;
    const { dados } = this.state;
    return (
      <div className="shadow-sm p-4 mx-auto" style={{ maxWidth: 600 }}>
        <h2 className="h4 fw-bold mb-4">{titulo}</h2>
        <form onSubmit={this.aoSubmeter}>
          {campos.map(campo => (
            <div key={campo.nome} className="mb-3">
              <label htmlFor={campo.nome} className="form-label">{campo.rotulo}</label>
              <input
                id={campo.nome}
                type={campo.tipo}
                value={dados[campo.nome] || ''}
                onChange={e => this.aoMudar(campo.nome, (e.target as HTMLInputElement).value)}
                placeholder={campo.placeholder}
                required={campo.obrigatorio}
                className="form-control"
              />
            </div>
          ))}
          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-success">Salvar</button>
            {aoCancelar && (
              <button type="button" className="btn btn-outline-secondary" onClick={aoCancelar}>Cancelar</button>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default FormularioPadrao;
