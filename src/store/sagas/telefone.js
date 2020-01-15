import { call, put } from "redux-saga/effects";
import api from "../../api";
import history from "../../routes/history";

import { Creators as TelefoneActions } from "../ducks/telefone";

export function* telefone(data) {
  const { usuario } = data.payload;
  try {
    const resultado = yield call(api.get, "telefone");
    if (resultado.status === 200) {
      yield put(TelefoneActions.telefoneSuccess(resultado.data));
    } else {
      yield put(TelefoneActions.telefoneFailure({}));
    }
  } catch (err) {
    yield put(TelefoneActions.telefoneFailure(err));
  }
}

export function* telefone_adicionar(data) {
  yield put(TelefoneActions.telefoneAdicionarSuccess(data));
}

export function* telefone_tipo() {
  try {
    const resultado = yield call(api.get, "telefone_tipo");
    if (resultado.status === 200) {
      yield put(TelefoneActions.telefoneTipoSuccess(resultado.data));
    } else {
      yield put(TelefoneActions.telefoneTipoFailure({}));
    }
  } catch (err) {
    yield put(TelefoneActions.telefoneTipoFailure(err));
  }
}
