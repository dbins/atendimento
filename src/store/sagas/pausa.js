import { call, put } from "redux-saga/effects";
import api from "../../api";

import { Creators as PausaActions } from "../ducks/pausa";

export function* pausa(data) {
  try {
    // const usuario = data.payload;
    const resultado = yield call(api.get, "pausa");
    if (resultado.status === 200) {
      yield put(PausaActions.pausaSuccess(resultado.data));
    } else {
      yield put(PausaActions.pausaFailure({}));
    }
  } catch (err) {
    yield put(PausaActions.pausaFailure(err));
  }
}

export function* pausa_tipo(data) {
  // const usuario = data.payload;
  try {
    const resultado = yield call(api.get, "pausa_tipo");
    if (resultado.status === 200) {
      yield put(PausaActions.pausaTipoSuccess(resultado.data));
    } else {
      yield put(PausaActions.pausaTipoFailure({}));
    }
  } catch (err) {
    yield put(PausaActions.pausaTipoFailure(err));
  }
}

export function* pausa_adicionar(data) {
  yield put(PausaActions.pausaAdicionarSuccess(data));
}
