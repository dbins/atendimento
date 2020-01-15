import { call, put } from "redux-saga/effects";
import api from "../../api";

import { Creators as HistoricoActions } from "../ducks/historico";

export function* historico(data) {
  //const usuario = data.payload;
  try {
    const resultado = yield call(api.get, "historico");
    if (resultado.status === 200) {
      yield put(HistoricoActions.historicoSuccess(resultado.data));
    } else {
      yield put(HistoricoActions.historicoFailure({}));
    }
  } catch (err) {
    yield put(HistoricoActions.historicoFailure(err));
  }
}

export function* historico_adicionar(data) {
  yield put(HistoricoActions.historicoAdicionarSuccess(data));
}
