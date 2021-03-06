import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PontuacaoActions } from "../../store/ducks/pontuacao";

class PontuacaoManual extends Component {

  state = {
    tipo: "",
    motivo: ""
  };

  static propTypes = {
    transacaoAdicionarRequest: PropTypes.func.isRequired
  }

  componentDidMount(){
    document.title = "Pontuação Manual";
  }

  salvar = e => {
    e.preventDefault();

    const { tipo, pontos, motivo } = this.state;
    const { transacaoAdicionarRequest } = this.props;
    let continuar = true;

    if (tipo === "" || pontos === "" || motivo === "") {
      alert("Por favor preencha todos os dados");
      continuar = false;
    } else {
      if (tipo === "") {
        alert("Por favor selecione o tipo de pontuação");
        continuar = false;
      }
      if (pontos === "") {
        alert("Por favor informe o valor da pontuação");
        continuar = false;
      }
      if (motivo === "") {
        alert("Por favor informe o motivo da pontuação");
        continuar = false;
      }
    }
    if (continuar) {
      const dados = {
        codigo_entidade: 0,
        codigo_usuario: 0,
        tipo: tipo,
        pontos: pontos,
        motivo: motivo
      }
      transacaoAdicionarRequest(dados);
    }
  };

  alterar = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <section id="content">
        <div className="container clearfix">
          <h3>Pontuação Manual</h3>
          <form onSubmit={this.salvar}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Valor</label>
                <input
                  type="text"
                  className="form-control"
                  id="pontos"
                  placeholder={"00"}
                  name="pontos"
                  onChange={this.alterar}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputState">Tipo de Pontuação</label>
                <select name="tipo" id="tipo" className="form-control"  onChange={this.alterar}>
                  <option value="">Selecione...</option>
                  <option value="1">Pontos Creditos</option>
                  <option value="2">Bônus Creditados</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <label htmlFor="exampleFormControlTextarea1">
                Motivo desta pontuação
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                defaultValue={""}
                name="motivo"
                onChange={this.alterar}
              />
            </div>
            <br />
            <button type="submit" className="btn btn-primary">
              Gerar Pontuação
            </button>
          </form>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  pontuacao: state.pontuacao
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PontuacaoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PontuacaoManual);
