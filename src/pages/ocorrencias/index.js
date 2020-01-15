import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as OcorrenciasActions } from "../../store/ducks/ocorrencias";
import Footer from "../../components/footer";
import Header from "../../components/header";

class Ocorrencias extends Component {

  static propTypes = {
    ocorrenciasRequest: PropTypes.func.isRequired,
    ocorrenciasAssuntoRequest: PropTypes.func.isRequired,
    ocorrenciasEncaminhadaRequest: PropTypes.func.isRequired,
    ocorrenciasTotalRequest: PropTypes.func.isRequired,
    ocorrencias: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          numero:  PropTypes.number,
          abertura: PropTypes.string,
          assunto: PropTypes.string,
          aberta_por: PropTypes.string,
          encaminhada_para: PropTypes.string,
          cliente: PropTypes.string,
          codigo_cliente: PropTypes.number,
          CPF: PropTypes.string,
          status: PropTypes.string,
          encerrada: PropTypes.string,
          CNPJ_Loja: PropTypes.string,
          ultima_interacao: PropTypes.string,
          qtde_de_dias: PropTypes.number,
        }),
      ),
      assunto: PropTypes.arrayOf(
        PropTypes.shape({
          codigo:  PropTypes.number,
          titulo: PropTypes.string
        }),
      ),
      status: PropTypes.arrayOf(
        PropTypes.shape({
          codigo:  PropTypes.number,
          titulo: PropTypes.string
        }),
      ),
      encaminhada: PropTypes.arrayOf(
        PropTypes.shape({
          codigo:  PropTypes.number,
          titulo: PropTypes.string
        }),
      ),
      total: PropTypes.shape({
        pendentes:  PropTypes.number,
          total:  PropTypes.number,
          pendentes24h:  PropTypes.number,
          pendentes72h:  PropTypes.number,
          pendentesacima72:  PropTypes.number
        }),
    })
  };

  componentDidMount(){
    const { ocorrenciasRequest, ocorrenciasAssuntoRequest, ocorrenciasStatusRequest, ocorrenciasEncaminhadaRequest, ocorrenciasTotalRequest } = this.props;
    document.title = "Ocorrências";
    const usuario = 0;
    ocorrenciasRequest(usuario);
    ocorrenciasAssuntoRequest(usuario);
    ocorrenciasStatusRequest(usuario);
    ocorrenciasEncaminhadaRequest(usuario);
    ocorrenciasTotalRequest(usuario);
  }

  openOcorrencia = (event, codigo) => {
    event.preventDefault();
    window.open('#/ocorrencia/' + codigo,'','scrollbars=yes,width=800,height=400');
  }

  render() {
    const { ocorrencias } = this.props;
    // const { pendentes, total,  pendentes24h,  pendentes72h, pendentesacima72} = this.props.total;
    return (
      <div>
        <Header/>
      <section id="content">
      <div className="content-wrap">
        <div className="container clearfix">
          <div className="col_one_sixth nobottommargin center">
            <i className="i-plain i-xlarge divcenter nobottommargin icon-tasks" />
            <div className="counter counter-large" style={{color: '#000000'}}><span data-from={100} data-to={32} data-refresh-interval={50} data-speed={2000} /></div>
            <h5>Pendentes</h5>
          </div>
          <div className="col_one_sixth nobottommargin center">
            <i className="i-plain i-xlarge divcenter nobottommargin icon-table" />
            <div className="counter counter-large" style={{color: '#000000'}}><span data-from={100} data-to={165} data-refresh-interval={50} data-speed={2000} /></div>
            <h5>Total</h5>
          </div>
          <div className="col_one_sixth nobottommargin center">
            <i className="i-plain i-xlarge divcenter nobottommargin icon-clock" />
            <div className="counter counter-large" style={{color: '#1abc9c'}}><span data-from={100} data-to={20} data-refresh-interval={50} data-speed={2000} /></div>
            <h5>Pendentes 24h</h5>
          </div>
          <div className="col_one_sixth nobottommargin center">
            <i className="i-plain i-xlarge divcenter nobottommargin icon-clock" />
            <div className="counter counter-large" style={{color: '#FFFF00'}}><span data-from={100} data-to={4} data-refresh-interval={50} data-speed={2000} /></div>
            <h5>Pendentes 72h</h5>
          </div>
          <div className="col_one_sixth nobottommargin center">
            <i className="i-plain i-xlarge divcenter nobottommargin icon-clock" />
            <div className="counter counter-large" style={{color: '#FF0000'}}><span data-from={100} data-to={8} data-refresh-interval={50} data-speed={2000} /></div>
            <h5>Pendentes após 72h</h5>
          </div>
          <div className="line" />
          <form>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="inputEmail4">Data Inicial</label>
                <input type="text" className="form-control" id="data_inicial" placeholder="00/00/0000" autoComplete="off" />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputPassword4">Data Final</label>
                <input type="text" className="form-control" id="data_final" placeholder="00/00/0000" autoComplete="off" />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputPassword4">Numero Ocorrência</label>
                <input type="text" className="form-control" id="inputPassword4" placeholder={0} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="inputState">Assunto</label>
                <select id="inputState" className="form-control">
                  <option>Selecione...</option>
                  {ocorrencias.assunto.map(assunto => (
                  <option key={assunto.codigo} value={assunto.codigo}>{assunto.titulo}</option>
                  ))}
                </select>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputState">Encaminhada para</label>
                <select id="inputState" className="form-control">
                  <option>Selecione...</option>
                  {ocorrencias.encaminhada.map(encaminhada => (
                  <option key={encaminhada.codigo} value={encaminhada.codigo}>{encaminhada.titulo}</option>
                  ))}
                </select>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputState">Status da Ocorrência</label>
                <select id="inputState" className="form-control">
                  <option>Selecione...</option>
                  {ocorrencias.status.map(status => (
                  <option key={status.codigo} value={status.codigo}>{status.titulo}</option>
                  ))}
                </select>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Localizar</button>
          </form>
          <table id="datatable1" className="table table-striped table-bordered" cellSpacing={0} width="100%">
            <thead>
              <tr>
                <th>No</th>
                <th>Abertura</th>
                <th>Assunto</th>
                <th>Aberta por</th>
                <th>Encaminhada para</th>
                <th>Cliente</th>
                <th>CPF</th>
                <th>Status</th>
                <th>Encerrada</th>
                <th>CNPJ Loja</th>
                <th>Ultima Interação</th>
                <th>Qtde de Dias</th>
              </tr>
            </thead>
            <tbody>
            {!ocorrencias.data.length && <tr><td colSpan="3" align="center">Nenhuma ocorrência pendente</td></tr>}
            {ocorrencias.data.map((ocorrencia, index) => (
                        <tr key={index}>
                          <td> {ocorrencia.numero} </td>
                          <td> {ocorrencia.abertura} </td>
                          <td>
                            <a
                             href="/"
                             onClick={(e) => {
                               this.openOcorrencia(e, ocorrencia.numero)
                             }}
                            >
                              {ocorrencia.assunto}
                            </a>
                          </td>
                          <td> {ocorrencia.aberta_por} </td>
                          <td> {ocorrencia.encaminhada_para} </td>
                          <td>
                            <Link to={{
                              pathname: "/cadastro/" + ocorrencia.codigo_cliente}}>{ocorrencia.cliente}</Link>
                          </td>
                          <td> {ocorrencia.CPF} </td>
                          <td> {ocorrencia.status} </td>
                          <td> {ocorrencia.encerrada} </td>
                          <td> {ocorrencia.CNPJ_Loja} </td>
                          <td> {ocorrencia.ultima_interacao} </td>
                          <td> {ocorrencia.qtde_de_dias} dias</td>
                        </tr>
                      ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  ocorrencias: state.ocorrencias
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(OcorrenciasActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ocorrencias);
