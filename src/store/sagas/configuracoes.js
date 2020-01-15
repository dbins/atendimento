import { call, put } from "redux-saga/effects";
import api from "../../api";
import history from "../../routes/history";

import { Creators as ConfiguracoesActions } from "../ducks/configuracoes";

export function* acoes_config(data) {
  //const { usuario } = data.payload;
  try {
    const resultado = yield call(api.get, "acoes_config");
    if (resultado.status === 200) {
      yield put(ConfiguracoesActions.configuracoesAcoesSuccess(resultado.data));
    } else {
      yield put(ConfiguracoesActions.configuracoesAcoesFailure({}));
    }
  } catch (err) {
    yield put(ConfiguracoesActions.configuracoesAcoesFailure(err));
  }
}

export function* pontuacoes(data) {
  //const { usuario } = data.payload;
  try {
    const resultado = yield call(api.get, "pontuacoes");
    if (resultado.status === 200) {
      yield put(
        ConfiguracoesActions.configuracoesPontuacoesSuccess(resultado.data)
      );
    } else {
      yield put(ConfiguracoesActions.configuracoesPontuacoesFailure({}));
    }
  } catch (err) {
    yield put(ConfiguracoesActions.configuracoesPontuacoesFailure(err));
  }
}

export function* cadastros_gerais(data) {
  //const { usuario } = data.payload;
  try {
    const resultado = yield call(api.get, "cadastros_gerais");
    if (resultado.status === 200) {
      yield put(
        ConfiguracoesActions.configuracoesCadastrosGeraisSuccess(resultado.data)
      );
    } else {
      yield put(ConfiguracoesActions.configuracoesCadastrosGeraisFailure({}));
    }
  } catch (err) {
    yield put(ConfiguracoesActions.configuracoesCadastrosGeraisFailure(err));
  }
}

export function* combos(data) {
  //const tipo = data.payload;
  try {
    const resultado = yield call(api.get, "combos");
    if (resultado.status === 200) {
      yield put(
        ConfiguracoesActions.configuracoesCadastrosGeraisCombosSuccess(
          resultado.data
        )
      );
    } else {
      yield put(
        ConfiguracoesActions.configuracoesCadastrosGeraisCombosFailure({})
      );
    }
  } catch (err) {
    yield put(
      ConfiguracoesActions.configuracoesCadastrosGeraisCombosFailure(err)
    );
  }
}

export function* perguntas(data) {
  //const acao = data.payload;
  try {
    const resultado = yield call(api.get, "perguntas");
    if (resultado.status === 200) {
      yield put(
        ConfiguracoesActions.configuracoesAcoesPerguntasSuccess(resultado.data)
      );
    } else {
      yield put(ConfiguracoesActions.configuracoesAcoesPerguntasFailure({}));
    }
  } catch (err) {
    yield put(ConfiguracoesActions.configuracoesAcoesPerguntasFailure(err));
  }
}

export function* opcoes(data) {
  //const pergunta = data.payload;
  try {
    const resultado = yield call(api.get, "opcoes");
    if (resultado.status === 200) {
      yield put(
        ConfiguracoesActions.configuracoesAcoesOpcoesSuccess(resultado.data)
      );
    } else {
      yield put(ConfiguracoesActions.configuracoesAcoesOpcoesFailure({}));
    }
  } catch (err) {
    yield put(ConfiguracoesActions.configuracoesAcoesOpcoesFailure(err));
  }
}

export function* acoes_adicionar(data) {
  yield put(ConfiguracoesActions.configuracoesAcoesAdicionarSuccess(data));
}

export function* perguntas_adicionar(data) {
  yield put(
    ConfiguracoesActions.configuracoesAcoesPerguntasAdicionarSuccess(data)
  );
}

export function* opcoes_adicionar(data) {
  yield put(
    ConfiguracoesActions.configuracoesAcoesOpcoesAdicionarSuccess(data)
  );
}

export function* cadastrosgerais_adicionar(data) {
  yield put(ConfiguracoesActions.configuracoesCadastrosGeraisSuccess(data));
}
