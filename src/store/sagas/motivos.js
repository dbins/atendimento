import { call, put } from "redux-saga/effects";
import api from "../../api";
import history from "../../routes/history";

import { Creators as MotivosActions } from "../ducks/motivos";

export function* motivos(data) {
  const usuario = data.payload;
  try {
    const resultado = yield call(api.get, "motivos");
    if (resultado.status === 200) {
      yield put(MotivosActions.motivosSuccess(resultado.data));
    } else {
      yield put(MotivosActions.motivosFailure({}));
    }
  } catch (err) {
    yield put(MotivosActions.motivosFailure(err));
  }
}

export function* motivos_adicionar(data) {
  yield put(MotivosActions.motivosAdicionarSuccess(data));
}
