import { call, put } from "redux-saga/effects";
import api from "../../api";
import history from "../../routes/history";

import { Creators as OcorrenciasActions } from "../ducks/ocorrencias";

export function* ocorrencias(data) {
  //const { usuario } = data.payload;
  try {
    const resultado = yield call(api.get, "ocorrencias");
    if (resultado.status === 200) {
      yield put(OcorrenciasActions.ocorrenciasSuccess(resultado.data));
    } else {
      yield put(OcorrenciasActions.ocorrenciasFailure({}));
    }
  } catch (err) {
    yield put(OcorrenciasActions.ocorrenciasFailure(err));
  }
}

export function* ocorrenciasAssunto(data) {
  //const { usuario } = data.payload;
  try {
    const resultado = yield call(api.get, "ocorrencias_assunto");
    if (resultado.status === 200) {
      yield put(OcorrenciasActions.ocorrenciasAssuntoSuccess(resultado.data));
    } else {
      yield put(OcorrenciasActions.ocorrenciasAssuntoFailure({}));
    }
  } catch (err) {
    yield put(OcorrenciasActions.ocorrenciasAssuntoFailure(err));
  }
}

export function* ocorrenciasStatus(data) {
  //const { usuario } = data.payload;
  try {
    const resultado = yield call(api.get, "ocorrencias_status");
    if (resultado.status === 200) {
      yield put(OcorrenciasActions.ocorrenciasStatusSuccess(resultado.data));
    } else {
      yield put(OcorrenciasActions.ocorrenciasStatusFailure({}));
    }
  } catch (err) {
    yield put(OcorrenciasActions.ocorrenciasStatusFailure(err));
  }
}

export function* ocorrenciasEncaminhada(data) {
  //const { usuario } = data.payload;
  try {
    const resultado = yield call(api.get, "ocorrenciasEncaminhada");
    if (resultado.status === 200) {
      yield put(
        OcorrenciasActions.ocorrenciasEncaminhadaSuccess(resultado.data)
      );
    } else {
      yield put(OcorrenciasActions.ocorrenciasEncaminhadaFailure({}));
    }
  } catch (err) {
    yield put(OcorrenciasActions.ocorrenciasEncaminhadaFailure(err));
  }
}

export function* ocorrenciasTipo(data) {
  //const { usuario } = data.payload;

  try {
    const resultado = yield call(api.get, "ocorrencias_tipo");
    if (resultado.status === 200) {
      yield put(OcorrenciasActions.ocorrenciasTipoSuccess(resultado.data));
    } else {
      yield put(OcorrenciasActions.ocorrenciasTipoFailure({}));
    }
  } catch (err) {
    yield put(OcorrenciasActions.ocorrenciasTipoFailure(err));
  }
}

export function* ocorrenciasTotal(data) {
  //const { usuario } = data.payload;
  try {
    const resultado = yield call(api.get, "ocorrencias_total");
    if (resultado.status === 200) {
      yield put(OcorrenciasActions.ocorrenciasTotalSuccess(resultado.data));
    } else {
      yield put(OcorrenciasActions.ocorrenciasTotalFailure({}));
    }
  } catch (err) {
    yield put(OcorrenciasActions.ocorrenciasTotalFailure(err));
  }
}

export function* ocorrencia(data) {
  //const { usuario } = data.payload;
  try {
    const resultado = yield call(api.get, "ocorrencia");
    if (resultado.status === 200) {
      yield put(OcorrenciasActions.ocorrenciasDetalheSuccess(resultado.data));
    } else {
      yield put(OcorrenciasActions.ocorrenciasDetalheFailure({}));
    }
  } catch (err) {
    yield put(OcorrenciasActions.ocorrenciasDetalheFailure(err));
  }
}

export function* ocorrencia_adicionar(data) {
  yield put(OcorrenciasActions.ocorrenciasAdicionarSuccess(data));
}

export function* ocorrencia_atualizar(data) {
  yield put(OcorrenciasActions.ocorrenciasAtualizarSuccess(data));
}
