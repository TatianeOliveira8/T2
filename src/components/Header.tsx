import React from "react";

interface Pagina {
  nome: string;
  rota: string;
}

interface HeaderState {
  menuAberto: boolean;
  rotaAtual: string;
}

class Header extends React.Component<{}, HeaderState> {
  paginas: Pagina[] = [
    { nome: "Dashboard", rota: "/" },
    { nome: "Clientes", rota: "/clientes" },
    { nome: "Pets", rota: "/pets" },
    { nome: "Produtos", rota: "/produtos" },
    { nome: "Serviços", rota: "/servicos" },
    { nome: "Registro de Consumo", rota: "/registro-consumo" },
  ];

  constructor(props: {}) {
    super(props);
    this.state = {
      menuAberto: false,
      rotaAtual: "/",
    };
  }

  mudarPagina = (rota: string) => {
    this.setState({ rotaAtual: rota, menuAberto: false });
    window.location.hash = rota;
  };

  alternarMenu = () => {
    this.setState((prev) => ({ menuAberto: !prev.menuAberto }));
  };

  render() {
    const { menuAberto, rotaAtual } = this.state;
    return (
      <header>
        <div className="container py-4">
          <div className="d-flex justify-content-between align-items-center">
            <a href="#/" className="d-flex align-items-center gap-2 text-decoration-none">
              <div className="p-2 rounded"></div>
              <div>
                <h1 className="h4 fw-bold text-dark m-0">PetsLovers</h1>
              </div>
            </a>
            {/* Menu para telas grandes */}
            <nav className="d-none d-lg-flex align-items-center gap-3">
              {this.paginas.map((pagina) => (
                <a
                  key={pagina.rota}
                  href={`#${pagina.rota}`}
                  onClick={() => this.mudarPagina(pagina.rota)}
                  className={`fw-medium nav-link ${rotaAtual === pagina.rota ? "text-success" : "text-dark"}`}
                  style={{ cursor: "pointer" }}
                >
                  {pagina.nome}
                </a>
              ))}
            </nav>
            {/* Botão do menu */}
            <button
              className="d-lg-none btn btn-outline-success"
              onClick={this.alternarMenu}
              aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuAberto}
              aria-controls="menuCelular"
              type="button"
            >
              {menuAberto ? <span className="h4">X</span> : <span className="h4">☰</span>}
            </button>
          </div>

          {/* Menu em telas pequenas */}
          <div className={`collapse d-lg-none mt-3 border-top pt-3${menuAberto ? " show" : ""}`} id="menuCelular">
            <nav>
              <div className="d-flex flex-column gap-2">
                {this.paginas.map((pagina) => (
                  <a
                    key={pagina.rota}
                    href={`#${pagina.rota}`}
                    onClick={() => this.mudarPagina(pagina.rota)}
                    className={`fw-medium nav-link ${rotaAtual === pagina.rota ? "text-success" : "text-dark"}`}
                    style={{ cursor: "pointer" }}
                  >
                    {pagina.nome}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
