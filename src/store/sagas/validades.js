import { call, put } from "redux-saga/effects";
import api from "../../api";
import { Creators as ValidadesActions } from "../ducks/validades";

export function* validades(data) {
  //const usuario = data.payload;
  try {
    const resultado = yield call(api.get, "historico");
    if (resultado.status === 200) {
      yield put(ValidadesActions.validadesSuccess(resultado.data));
    } else {
      yield put(ValidadesActions.validadesFailure({}));
    }
  } catch (err) {
    yield put(ValidadesActions.validadesFailure(err));
  }
}
