import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as EnderecoActions } from "../../store/ducks/endereco";

class Endereco extends Component {
  static propTypes = {
    enderecoAdicionarRequest: PropTypes.func.isRequired
  };
  state = {
    tipo: "",
    endereco_novo: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    CEP: "",
  };
  componentDidMount(){
    document.title = "Endereço";
    const { enderecoTipoRequest } = this.props;
    enderecoTipoRequest();
  }
  salvar = e => {
    e.preventDefault();

    const {  tipo, endereco_novo, numero, complemento, bairro, cidade, estado, CEP} = this.state;
    const { enderecoAdicionarRequest } = this.props;
    let continuar = true;
    let mensagem = "";

    //if (tipo === "" || endereco_novo === "" || numero === "" || bairro === "" || cidade === "" || estado === "" || CEP){
    //  alert("Por favor preencha os dados do endereço");
    //  continuar = false;
    //} else {
      if (tipo === "") {
        mensagem += 'Por favor selecione o tipo de endereço\n';
        continuar = false;
      }
      if (endereco_novo === "") {
        mensagem += 'Por favor informe o endereço\n';
        continuar = false;
      }
      if (numero === "") {
        mensagem += 'Por favor informe o número\n';
        continuar = false;
      }
      if (bairro === "") {
        mensagem += 'Por favor informe o bairro\n';
        continuar = false;
      }
      if (cidade === "") {
        mensagem += 'Por favor informe a cidade\n';
        continuar = false;
      }
      if (estado === "") {
        mensagem += 'Por favor informe o estado\n';
        continuar = false;
      }
      if (CEP === "") {
        mensagem += 'Por favor informe o CEP\n';
        continuar = false;
      }
    //}
    if (continuar) {
      const dados = {
        codigo_entidade: 0,
        codigo_usuario: 0,
        tipo: tipo,
        endereco: endereco_novo,
        numero: numero,
        complemento: complemento,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
        CEP: estado,
      }
      enderecoAdicionarRequest(dados);
    } else {
      alert(mensagem);
    }
  };

  alterar = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const {  endereco_novo, numero, complemento, bairro, cidade,  CEP} = this.state;
    const { endereco } = this.props;
    return (
      <section id="content">
        <div className="container clearfix">
          <h3>Adicionar Endereço</h3>
          <form onSubmit={this.salvar}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputState">Tipo de Endereco</label>
                <select name="tipo" id="inputState" className="form-control"  onChange={this.alterar}>
                  <option value="">Selecione...</option>
                  {endereco.tipo.map(item => (
                    <option key={item.codigo} value={item.codigo}>{item.titulo}</option>
                    ))}
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">CEP</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder={"00000000"}
                  name="CEP"
                  value={CEP}
                  onChange={this.alterar}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Endereço</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Rua X"
                  name="endereco_novo"
                  value={endereco_novo}
                  onChange={this.alterar}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Número</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder={"00"}
                  name="numero"
                  value={numero}
                  onChange={this.alterar}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Complemento</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Apto, casa"
                  name="complemento"
                  value={complemento}
                  onChange={this.alterar}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Bairro</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Bairro Y"
                  name="bairro"
                  value={bairro}
                  onChange={this.alterar}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Cidade</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Apto, casa"
                  name="cidade"
                  value={cidade}
                  onChange={this.alterar}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputState">Estado</label>
                <select name="estado" id="inputState" className="form-control"  onChange={this.alterar}>
                  <option >Selecione...</option>
                  <option>São Paulo</option>
                  <option>Rio de Janeiro</option>
                  <option>Minas Gerais</option>
                </select>
              </div>
            </div>
            <br />
            <button type="submit" className="btn btn-primary">
              Salvar
            </button>
          </form>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  endereco: state.endereco
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(EnderecoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Endereco);
