import { call, put } from "redux-saga/effects";
import api from "../../api";
import history from "../../routes/history";

import { Creators as CarrinhoActions } from "../ducks/carrinho";

export function* carrinho(data) {
  const usuario = data.payload;
  try {
    const resultado = yield call(api.get, "carrinho?usuario=" + usuario);
    if (resultado.status === 200) {
      yield put(CarrinhoActions.carrinhoSuccess(resultado.data));
    } else {
      yield put(CarrinhoActions.carrinhoFailure({}));
    }
  } catch (err) {
    yield put(CarrinhoActions.carrinhoFailure(err));
  }
}

export function* carrinho_endereco(data) {
  const usuario = data.payload;
  try {
    const resultado = yield call(
      api.get,
      "carrinho_endereco?usuario=" + usuario
    );
    if (resultado.status === 200) {
      yield put(CarrinhoActions.carrinhoEnderecoSuccess(resultado.data));
    } else {
      yield put(CarrinhoActions.carrinhoEnderecoFailure({}));
    }
  } catch (err) {
    yield put(CarrinhoActions.carrinhoEnderecoFailure(err));
  }
}
