import { call, put } from "redux-saga/effects";
import api from "../../api";
import history from "../../routes/history";

import { Creators as EnderecoActions } from "../ducks/endereco";

export function* endereco(data) {
  //const usuario = data.payload;
  try {
    const resultado = yield call(api.get, "endereco");
    if (resultado.status === 200) {
        yield put(EnderecoActions.enderecoSuccess(resultado.data));
     } else {
      yield put(EnderecoActions.enderecoFailure({}));
    }
  } catch (err) {
    yield put(EnderecoActions.enderecoFailure(err));
  }
}

export function* endereco_adicionar(data) {
  yield put(EnderecoActions.enderecoAdicionarSuccess(data));
}

export function* endereco_tipo() {
  try {
    const resultado = yield call(api.get, "endereco_tipo");
    if (resultado.status === 200) {
      yield put(EnderecoActions.enderecoTipoSuccess(resultado.data));
     } else {
      yield put(EnderecoActions.enderecoTipoFailure({}));
    }
  } catch (err) {
    yield put(EnderecoActions.enderecoTipoFailure(err));
  }
}
