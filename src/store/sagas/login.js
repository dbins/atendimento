import { call, put } from "redux-saga/effects";
import api from "../../api";
import history from "../../routes/history";

import { Creators as LoginActions } from "../ducks/login";

export function* login(data) {
  const { login, password } = data.payload;
  localStorage.setItem("@SAO:token", "TESTE DO BINS");
  yield put(LoginActions.loginSuccess({user:{nome: "teste", email: "teste"},token: "123456"}));
  yield call(history.push, "/home");

  //try {
  //  const resultado = yield call(api.post, "sessions", {
  //    email,
  //    password,
  //    origin: "WEB"
  //  });

  //  if (resultado.status === 200) {
  //    const data = resultado.data;
  //    if (data.user.type === "ADMIN") {
  //      localStorage.setItem("@SAO:token", data.token.token);
  //      yield put(LoginActions.loginSuccess(data));
  //      yield call(history.push, "/home");
  //    } else {
  //      yield put(LoginActions.loginFailure({}));
  //    }
  //  } else {
  //    yield put(LoginActions.loginFailure({}));
  //  }
  //} catch (err) {
  //  yield put(LoginActions.loginFailure(err));
  // }
}

export function* logout() {
  localStorage.removeItem("@SAO:token");
  localStorage.removeItem("@SAO:isAdmin");

  yield call(history.push, "/");
}