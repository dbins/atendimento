import { call, put } from "redux-saga/effects";
import api from "../../api";

import { Creators as SMSActions } from "../ducks/sms";

export function* sms(data) {
  //const usuario = data.payload;
  try {
    const resultado = yield call(api.get, "sms");
    if (resultado.status === 200) {
      yield put(SMSActions.smsSuccess(resultado.data));
    } else {
      yield put(SMSActions.smsFailure({}));
    }
  } catch (err) {
    yield put(SMSActions.smsFailure(err));
  }
}
