import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CatalogoActions } from "../../store/ducks/catalogo";
import { Creators as CadastroActions } from "../../store/ducks/cadastro";
import Footer from "../../components/footer";
import HeaderCadastro from "../../components/headerCadastro";
import Categorias from "./categorias";
import Relacionados from "./relacionados";

class Produto extends Component {

  state = {
    quantidade: 1
  }

  static propTypes = {
    catalogoProdutoRequest: PropTypes.func.isRequired
  }

  componentDidMount(){
    document.title = "Detalhes do Produto";
    const { catalogoProdutoRequest } = this.props;
    const usuario = 0;
    catalogoProdutoRequest(usuario);
  }

  redirecionarCarrinho = e => {
    e.preventDefault();
    this.props.history.push("/carrinho");
  }

  adicionar = e => {
    let atual = parseInt(this.state.quantidade) + 1;
    this.setState({quantidade: atual });
  };

  remover = e => {
    let atual = parseInt(this.state.quantidade) - 1;
    if (parseInt(atual) > 0){
      this.setState({quantidade: atual });
    }
  };

  render() {
    const { catalogo } = this.props;
    const produto = catalogo.produto;
    const usuario = parseInt(this.props.cadastro.cliente);
    return (
      <div>
        <HeaderCadastro usuario={usuario} exibirCarrinho={true} />
        <section id="content">
          <div className="content-wrap">
            <div className="container clearfix">
              <div className="single-product">
                <div className="product">
                  <div className="col_one_fifth col_last">
                    <Categorias />
                  </div>
                  <div className="col_two_fifth">
                    {/* Product Single - Gallery
								============================================= */}
                    <div className="product-image">
                      <img src={produto.imagem} alt={produto.produto} />
                    </div>
                    {/* Product Single - Gallery End */}
                  </div>
                  <div className="col_two_fifth product-desc">
                    <h3>{produto.produto}</h3>
                    {/* Product Single - Price
								============================================= */}
                    <div className="product-price">
                      <del>{produto.pontos_desconto}</del> <ins>{produto.pontos}</ins>
                    </div>
                    {/* Product Single - Price End */}
                    <p>&nbsp;</p>
                    {/* Product Single - Short Description
								============================================= */}
                    <p>
                    {produto.descricao}
                    </p>
                    <ul className="iconlist">
                      <li>
                        <i className="icon-caret-right" /> Dynamic Color Options
                      </li>
                      <li>
                        <i className="icon-caret-right" /> Lots of Size Options
                      </li>
                      <li>
                        <i className="icon-caret-right" /> 30-Day Return Policy
                      </li>
                    </ul>
                    {/* Product Single - Short Description End */}
                    {/* Product Single - Meta
								============================================= */}
                    <div className="card product-meta">
                      <div className="card-body">
                        <span itemProp="productID" className="sku_wrapper">
                          SKU: <span className="sku">8465415</span>
                        </span>
                        <span className="posted_in">
                          Categoria:
                          <Link
                    to={{
                      pathname: "/catalogo",
                      search: "?cat=" + produto.codigo_categoria
                    }}
                  >
                          {produto.categoria}
                          </Link>
                          .
                        </span>
                        <span className="tagged_as">
                          Tags:{" "}
                          <a href="/" rel="tag">
                            Pink
                          </a>
                          ,{" "}
                          <a href="/" rel="tag">
                            Short
                          </a>
                          ,{" "}
                          <a href="/" rel="tag">
                            Dress
                          </a>
                          ,{" "}
                          <a href="/" rel="tag">
                            Printed
                          </a>
                          .
                        </span>
                      </div>
                    </div>
                    {/* Product Single - Meta End */}
                    <p>&nbsp;</p>
                    {/* Product Single - Quantity & Cart Button
								============================================= */}
                    <form
                      className="cart nobottommargin clearfix"
                    >
                      <div className="quantity clearfix">
                        <input
                          type="button"
                          defaultValue="-"
                          className="minus"
                          onClick={this.remover}
                        />
                        <input
                          type="text"
                          step={1}
                          min={1}
                          name="quantity"
                          value={this.state.quantidade}
                          title="Qty"
                          className="qty"
                          readOnly
                          size={4}
                        />
                        <input
                          type="button"
                          defaultValue="+"
                          className="plus"
                          onClick={this.adicionar}
                        />
                      </div>
                      <Link
                    to={{
                      pathname: "/carrinho"
                    }}
                  >
                   <div className="add-to-cart button nomargin">Adicionar ao Carrinho</div>
                  </Link>
                    </form>
                    {/* Product Single - Quantity & Cart Button End */}
                    <div className="clear" />
                    <div className="line" />
                  </div>
                </div>
              </div>
              <div className="clear" />
              <div className="line" />
              <Relacionados />
            </div>
          </div>
        </section>
        {/* #content end */}
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
  bindActionCreators({...CatalogoActions, ...CadastroActions}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Produto);
