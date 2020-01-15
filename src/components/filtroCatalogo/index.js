import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CatalogoActions } from "../../store/ducks/catalogo";

class FiltroCatalogo extends Component {
  static propTypes = {
    catalogoCategoriasRequest: PropTypes.func.isRequired,
    catalogo: PropTypes.shape({
      categorias: PropTypes.arrayOf(
        PropTypes.shape({
          codigo:  PropTypes.number,
          titulo: PropTypes.string
        }),
      ),
    })
  };

  componentDidMount() {
    const { catalogoCategoriasRequest } = this.props;
    const usuario = 0;
    catalogoCategoriasRequest(usuario);
  }

  render() {
    const { catalogo } = this.props;
    return (
      <div className="sidebar nobottommargin">
        <div className="sidebar-widgets-wrap">
          <div className="widget widget-filter-links clearfix">
            <h4>Categorias</h4>
            <ul
              className="custom-filter"
              data-container="#shop"
              data-active-class="active-filter"
            >
              <li className="widget-filter-reset active-filter">
                <a href="/" data-filter="*">
                  Clear
                </a>
              </li>

              {!catalogo.categorias.length && <p>Não existem categorias</p>}
              {catalogo.categorias.map(categoria => (
                <li key={categoria.codigo}>
                  <Link
                    to={{
                      pathname: "/catalogo",
                      search: "?cat=" + categoria.codigo
                    }}
                  >
                    {categoria.titulo}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {this.props.exibirFiltros ? (
            <div className="widget widget-filter-links clearfix">
              <h4>Filtrar por</h4>
              <ul className="shop-sorting">
                <li className="widget-filter-reset active-filter">
                  <a href="/" data-sort-by="original-order">
                    Clear
                  </a>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: "/catalogo",
                      search: "?pon=1"
                    }}
                  >
                    Até 10.000 pontos
                  </Link>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: "/catalogo",
                      search: "?pon=2"
                    }}
                  >
                    10.001 a 50.000 pontos
                  </Link>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: "/catalogo",
                      search: "?pon=3"
                    }}
                  >
                    50.001 a 250.000 pontos
                  </Link>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: "/catalogo",
                      search: "?pon=4"
                    }}
                  >
                    Acima de 250.000 pontos
                  </Link>
                </li>
              </ul>
            </div>
          ) : null}
          {this.props.exibirFiltros ? (
            <div className="widget widget-filter-links clearfix">
              <h4>Ordenar por</h4>
              <ul className="shop-sorting">
                <li className="widget-filter-reset active-filter">
                  <a href="/" data-sort-by="original-order">
                    Clear
                  </a>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: "/catalogo",
                      search: "?ord=1"
                    }}
                  >
                    Nome
                  </Link>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: "/catalogo",
                      search: "?ord=2"
                    }}
                  >
                    Valor mais baixo
                  </Link>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: "/catalogo",
                      search: "?ord=3"
                    }}
                  >
                    Valor mais alto
                  </Link>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  catalogo: state.catalogo
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CatalogoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltroCatalogo);
