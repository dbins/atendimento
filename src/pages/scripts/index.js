import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ScriptsActions } from "../../store/ducks/scripts";

//import "../../css/bootstrap.css";
//import "../../css/style.css";
//import "../../css/swiper.css";
//import "../../css/dark.css";
//import "../../css/font-icons.css";
//import "../../css/animate.css";
//import "../../css/magnific-popup.css";
//import "../../css/responsive.css";

class Scripts extends Component {

  static propTypes = {
    scriptsRequest: PropTypes.func.isRequired,
    scripts: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          codigo: PropTypes.number,
          nome: PropTypes.string,
          conteudo: PropTypes.string,
        })
      )
    }),
  };

  componentDidMount() {
    document.title = "Scripts";
    const { scriptsRequest } = this.props;
    scriptsRequest();
  }

  render() {
    const { scripts } = this.props;
    return (
      <section id="content">
        <div className="container clearfix">
          <h3>Scripts de Atendimento</h3>
          <table
            id="datatable1"
            className="table table-striped table-bordered"
            cellSpacing={0}
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table>
                    <tbody>
                      {scripts.data.map(script => (
                        <tr key={script.codigo}>
                          <td>{script.nome}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </td>
                <td>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam vehicula sollicitudin libero vitae scelerisque. Fusce
                    aliquet ut massa ut egestas. Curabitur ullamcorper nulla a
                    faucibus venenatis. Praesent ut volutpat libero. Cras
                    suscipit mattis efficitur. Suspendisse auctor justo sit amet
                    volutpat egestas. Vestibulum ante ipsum primis in faucibus
                    orci luctus et ultrices posuere cubilia Curae; Aenean
                    ultricies fermentum est vitae finibus. Donec vel metus et
                    massa pellentesque condimentum. Quisque tempus gravida risus
                    eu molestie. Vivamus felis elit, rhoncus eget felis et,
                    sodales pulvinar lacus.
                  </p>
                  <p>
                    Donec lobortis quis urna sit amet vehicula. Duis in nulla
                    rutrum, venenatis ligula at, sodales erat. Morbi at semper
                    est, eu egestas velit. Vivamus mollis augue nisl, sed
                    molestie lorem bibendum quis. Donec ac pretium massa, sed
                    ultricies metus. In porttitor venenatis convallis. Phasellus
                    euismod sed odio eu maximus.
                  </p>
                  <p>
                    Mauris a varius sapien. Duis id velit non elit tincidunt
                    cursus. Nulla a quam efficitur eros lobortis consectetur.
                    Sed tincidunt erat enim, et sagittis nulla ullamcorper eget.
                    In rutrum neque ligula, eu malesuada felis tincidunt ac.
                    Proin facilisis, enim ac venenatis interdum, ipsum lacus
                    scelerisque mi, ac interdum leo risus id neque. Maecenas
                    sagittis consequat ante, id blandit turpis faucibus et.
                    Donec vitae felis fringilla, rutrum nisi eu, tempus purus.
                    Vestibulum varius interdum velit, ut rutrum mauris
                    condimentum eget. Sed purus lorem, facilisis quis tincidunt
                    at, venenatis at urna. Etiam eget enim eget tortor venenatis
                    consequat id porta erat. Aliquam erat volutpat. Vivamus
                    condimentum dapibus vulputate. Aenean pellentesque elementum
                    tortor sed ullamcorper. Ut cursus nibh sit amet metus
                    scelerisque vestibulum. Praesent non dui in diam egestas
                    tristique id in orci.
                  </p>
                  <p>
                    Nulla ullamcorper lorem a ex dictum, sit amet fermentum
                    lectus tempus. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Ut fermentum enim id velit semper porta.
                    Pellentesque magna ipsum, mattis ut augue sed, laoreet
                    sodales elit. Curabitur fringilla velit tellus, vitae
                    tincidunt felis scelerisque id. Morbi rhoncus at enim et
                    euismod. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Quisque sed erat ipsum. Vivamus vehicula lacus quis
                    mauris eleifend tristique.
                  </p>
                  <p>
                    Vestibulum maximus lectus nec lectus placerat, quis
                    tincidunt quam faucibus. Sed eu tortor sed leo tincidunt
                    malesuada a eget orci. Curabitur vitae ante orci. Praesent
                    velit augue, facilisis quis tempus vel, consectetur et
                    risus. Aliquam erat volutpat. Maecenas vehicula, ante vitae
                    condimentum dictum, augue elit iaculis libero, ut porta
                    felis augue quis diam. Suspendisse eget dui mauris. Duis
                    aliquet, risus sed molestie aliquam, enim augue blandit est,
                    quis porta leo velit ut libero. Vivamus eget elementum nunc.
                    Morbi non pretium felis.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  scripts: state.scripts
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ScriptsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Scripts);
