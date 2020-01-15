import { call, put } from "redux-saga/effects";
import api from "../../api";
import history from "../../routes/history";

import { Creators as PontuacoesActions } from "../ducks/pontuacoes";

export function* contas(data) {
  // const { usuario } = data.payload;
  try {
    const resultado = yield call(api.get, "contas");
    if (resultado.status === 200) {
      yield put(PontuacoesActions.contasSuccess(resultado.data));
    } else {
      yield put(PontuacoesActions.contasFailure({}));
    }
  } catch (err) {
    yield put(PontuacoesActions.contasFailure(err));
  }
}

export function* cartoes(data) {
  // const { usuario } = data.payload;
  try {
    const resultado = yield call(api.get, "cartoes");
    if (resultado.status === 200) {
      yield put(PontuacoesActions.cartoesSuccess(resultado.data));
    } else {
      yield put(PontuacoesActions.cartoesFailure({}));
    }
  } catch (err) {
    yield put(PontuacoesActions.cartoesFailure(err));
  }
}

export function* saldo(data) {
  // const { usuario } = data.payload;
  try {
    const resultado = yield call(api.get, "saldo");
    if (resultado.status === 200) {
      yield put(PontuacoesActions.saldoSuccess(resultado.data));
    } else {
      yield put(PontuacoesActions.saldoFailure({}));
    }
  } catch (err) {
    yield put(PontuacoesActions.saldoFailure(err));
  }
}

export function* pontos(data) {
  // const { usuario } = data.payload;
  try {
    const resultado = yield call(api.get, "pontos");
    if (resultado.status === 200) {
      yield put(PontuacoesActions.pontosSuccess(resultado.data));
    } else {
      yield put(PontuacoesActions.pontosFailure({}));
    }
  } catch (err) {
    yield put(PontuacoesActions.pontosFailure(err));
  }
}

export function* bonus(data) {
  // const { usuario } = data.payload;
  try {
    const resultado = yield call(api.get, "bonus");
    if (resultado.status === 200) {
      yield put(PontuacoesActions.bonusSuccess(resultado.data));
    } else {
      yield put(PontuacoesActions.bonusFailure({}));
    }
  } catch (err) {
    yield put(PontuacoesActions.bonusFailure(err));
  }
}

export function* adicionar_transacao(data) {
  yield put(PontuacoesActions.transacaoSuccess(data));
}
