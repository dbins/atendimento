import { call, put } from "redux-saga/effects";
import api from "../../api";
import history from "../../routes/history";

import { Creators as CatalogoActions } from "../ducks/catalogo";

export function* catalogo(data) {
  //const { usuario } = data.payload;
  try {
    const resultado = yield call(api.get, "catalogo");
    if (resultado.status === 200) {
      yield put(CatalogoActions.catalogoSuccess(resultado.data));
    } else {
      yield put(CatalogoActions.catalogoFailure({}));
    }
  } catch (err) {
    yield put(CatalogoActions.catalogoFailure(err));
  }
}

export function* produto(data) {
  //const { usuario } = data.payload;
  try {
    const resultado = yield call(api.get, "produto");
    if (resultado.status === 200) {
      yield put(CatalogoActions.catalogoProdutoSuccess(resultado.data));
    } else {
      yield put(CatalogoActions.catalogoProdutoFailure({}));
    }
  } catch (err) {
    yield put(CatalogoActions.catalogoProdutoFailure(err));
  }
}

export function* categorias(data) {
  //const { usuario } = data.payload;
  try {
    const resultado = yield call(api.get, "categorias");
    if (resultado.status === 200) {
      yield put(CatalogoActions.catalogoCategoriasSuccess(resultado.data));
    } else {
      yield put(CatalogoActions.catalogoCategoriasFailure({}));
    }
  } catch (err) {
    yield put(CatalogoActions.catalogoCategoriasFailure(err));
  }
}

export function* catalogo_pesquisa(data) {
  //const { usuario } = data.payload;
  try {
    const resultado = yield call(api.get, "catalogo");
    if (resultado.status === 200) {
      yield put(CatalogoActions.catalogoPesquisaSuccess(resultado.data));
      yield call(history.push, "/catalogo");
    } else {
      yield put(CatalogoActions.catalogoPesquisaFailure({}));
    }
  } catch (err) {
    yield put(CatalogoActions.catalogoPesquisaFailure(err));
  }
}
