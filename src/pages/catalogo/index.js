import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CatalogoActions } from "../../store/ducks/catalogo";
import { Creators as CadastroActions } from "../../store/ducks/cadastro";
import Footer from "../../components/footer";
import HeaderCadastro from "../../components/headerCadastro";
import FiltroCatalogo from "../../components/filtroCatalogo";
import Listagem from "./listagem";
import Paginacao from "./paginacao";

class Catalogo extends Component {
  componentDidMount() {
    document.title = "Catálogo de Prêmios";
  }
  render() {
    const usuario = parseInt(this.props.cadastro.cliente);
    return (
      <div>
        <HeaderCadastro usuario={usuario} exibirCarrinho={true} />
        <section id="content">
          <div className="content-wrap">
            <div className="container clearfix">
              <div className="postcontent nobottommargin col_last">
                <Listagem />
                <Paginacao />
              </div>
              <FiltroCatalogo exibirFiltros={true} />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  catalogo: state.catalogo,
  cadastro: state.cadastro
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...CatalogoActions, ...CadastroActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Catalogo);
