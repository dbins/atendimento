/**
 * Types & Creators
 */

export const Types = {
  OCORRENCIAS_REQUEST: "ocorrencias/OCORRENCIAS_REQUEST",
  OCORRENCIAS_SUCCESS: "ocorrencias/OCORRENCIAS_SUCCESS",
  OCORRENCIAS_FAILURE: "ocorrencias/OCORRENCIAS_FAILURE",
  OCORRENCIAS_ASSUNTO_REQUEST: "ocorrencias/OCORRENCIAS_ASSUNTO_REQUEST",
  OCORRENCIAS_ASSUNTO_SUCCESS: "ocorrencias/OCORRENCIAS_ASSUNTO_SUCCESS",
  OCORRENCIAS_ASSUNTO_FAILURE: "ocorrencias/OCORRENCIAS_ASSUNTO_FAILURE",
  OCORRENCIAS_STATUS_REQUEST: "ocorrencias/OCORRENCIAS_STATUS_REQUEST",
  OCORRENCIAS_STATUS_SUCCESS: "ocorrencias/OCORRENCIAS_STATUS_SUCCESS",
  OCORRENCIAS_STATUS_FAILURE: "ocorrencias/OCORRENCIAS_STATUS_FAILURE",
  OCORRENCIAS_ENCAMINHADA_REQUEST:
    "ocorrencias/OCORRENCIAS_ENCAMINHADA_REQUEST",
  OCORRENCIAS_ENCAMINHADA_SUCCESS:
    "ocorrencias/OCORRENCIAS_ENCAMINHADA_SUCCESS",
  OCORRENCIAS_ENCAMINHADA_FAILURE:
    "ocorrencias/OCORRENCIAS_ENCAMINHADA_FAILURE",
  OCORRENCIAS_TIPO_REQUEST: "ocorrencias/OCORRENCIAS_TIPO_REQUEST",
  OCORRENCIAS_TIPO_SUCCESS: "ocorrencias/OCORRENCIAS_TIPO_SUCCESS",
  OCORRENCIAS_TIPO_FAILURE: "ocorrencias/OCORRENCIAS_TIPO_FAILURE",
  OCORRENCIAS_TOTAL_REQUEST: "ocorrencias/OCORRENCIAS_TOTAL_REQUEST",
  OCORRENCIAS_TOTAL_SUCCESS: "ocorrencias/OCORRENCIAS_TOTAL_SUCCESS",
  OCORRENCIAS_TOTAL_FAILURE: "ocorrencias/OCORRENCIAS_TOTAL_FAILURE",
  OCORRENCIAS_DETALHE_REQUEST: "ocorrencias/OCORRENCIAS_DETALHE_REQUEST",
  OCORRENCIAS_DETALHE_SUCCESS: "ocorrencias/OCORRENCIAS_DETALHE_SUCCESS",
  OCORRENCIAS_DETALHE_FAILURE: "ocorrencias/OCORRENCIAS_DETALHE_FAILURE",
  OCORRENCIAS_ADICIONAR_REQUEST: "ocorrencias/OCORRENCIAS_ADICIONAR_REQUEST",
  OCORRENCIAS_ADICIONAR_SUCCESS: "ocorrencias/OCORRENCIAS_ADICIONAR_SUCCESS",
  OCORRENCIAS_ADICIONAR_FAILURE: "ocorrencias/OCORRENCIAS_ADICIONAR_FAILURE",
  OCORRENCIAS_ATUALIZAR_REQUEST: "ocorrencias/OCORRENCIAS_ATUALIZAR_REQUEST",
  OCORRENCIAS_ATUALIZAR_SUCCESS: "ocorrencias/OCORRENCIAS_ATUALIZAR_SUCCESS",
  OCORRENCIAS_ATUALIZAR_FAILURE: "ocorrencias/OCORRENCIAS_ATUALIZAR_FAILURE"
};

/**
 * Initial State
 */
export const INITIAL_STATE = {
  data: [],
  assunto: [],
  status: [],
  total: {},
  encaminhada: [],
  tipo: [],
  ocorrencia: {
    numero: "",
    tipo: "",
    cliente: "",
    codigo_cliente: "",
    CPF: "",
    telefone: "",
    assunto: "",
    status: "",
    encaminhar: "",
    data: "",
    usuario: "",
    codigo_usuario: "",
    historico: []
  },
  error: false,
  error_adicionar: false,
  error_historico: false,
  loading: false
};

export default function ocorrencias(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.OCORRENCIAS_REQUEST:
      return {
        ...state
      };
    case Types.OCORRENCIAS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        error: false,
        loading: false
      };
    case Types.OCORRENCIAS_FAILURE:
      return {
        ...state,
        data: [],
        error: true,
        loading: false
      };
    case Types.OCORRENCIAS_ASSUNTO_REQUEST:
      return {
        ...state
      };
    case Types.OCORRENCIAS_ASSUNTO_SUCCESS:
      return {
        ...state,
        assunto: action.payload.data,
        error: false,
        loading: false
      };
    case Types.OCORRENCIAS_ASSUNTO_FAILURE:
      return {
        ...state,
        assunto: [],
        error: true,
        loading: false
      };
    case Types.OCORRENCIAS_STATUS_REQUEST:
      return {
        ...state
      };
    case Types.OCORRENCIAS_STATUS_SUCCESS:
      return {
        ...state,
        status: action.payload.data,
        error: false,
        loading: false
      };
    case Types.OCORRENCIAS_STATUS_FAILURE:
      return {
        ...state,
        status: [],
        error: true,
        loading: false
      };
    case Types.OCORRENCIAS_ENCAMINHADA_REQUEST:
      return {
        ...state
      };
    case Types.OCORRENCIAS_ENCAMINHADA_SUCCESS:
      return {
        ...state,
        encaminhada: action.payload.data,
        error: false,
        loading: false
      };
    case Types.OCORRENCIAS_ENCAMINHADA_FAILURE:
      return {
        ...state,
        encaminhada: [],
        error: true,
        loading: false
      };
    case Types.OCORRENCIAS_TIPO_REQUEST:
      return {
        ...state
      };
    case Types.OCORRENCIAS_TIPO_SUCCESS:
      return {
        ...state,
        tipo: action.payload.data,
        error: false,
        loading: false
      };
    case Types.OCORRENCIAS_TIPO_FAILURE:
      return {
        ...state,
        tipo: [],
        error: true,
        loading: false
      };
    case Types.OCORRENCIAS_TOTAL_REQUEST:
      return {
        ...state
      };
    case Types.OCORRENCIAS_TOTAL_SUCCESS:
      return {
        ...state,
        total: action.payload.data,
        error: false,
        loading: false
      };
    case Types.OCORRENCIAS_TOTAL_FAILURE:
      return {
        ...state,
        total: {},
        error: true,
        loading: false
      };
    case Types.OCORRENCIAS_DETALHE_REQUEST:
      return {
        ...state
      };
    case Types.OCORRENCIAS_DETALHE_SUCCESS:
      return {
        ...state,
        ocorrencia: action.payload.data,
        error: false,
        loading: false
      };
    case Types.OCORRENCIAS_DETALHE_FAILURE:
      return {
        ...state,
        ocorrencia: {},
        error: true,
        loading: false
      };
    case Types.OCORRENCIAS_ADICIONAR_REQUEST:
      return {
        ...state
      };
    case Types.OCORRENCIAS_ADICIONAR_SUCCESS:
      return {
        ...state
      };
    case Types.OCORRENCIAS_ADICIONAR_FAILURE:
      return {
        ...state,
        error_adicionar: true
      };
    case Types.OCORRENCIAS_ATUALIZAR_REQUEST:
      return {
        ...state
      };
    case Types.OCORRENCIAS_ATUALIZAR_SUCCESS:
      return {
        ...state
      };
    case Types.OCORRENCIAS_ATUALIZAR_FAILURE:
      return {
        ...state,
        error_adicionar: true
      };
    default:
      return state;
  }
}

export const Creators = {
  ocorrenciasRequest: usuario => ({
    type: Types.OCORRENCIAS_REQUEST,
    payload: usuario
  }),
  ocorrenciasSuccess: data => ({
    type: Types.OCORRENCIAS_SUCCESS,
    payload: { data }
  }),
  ocorrenciasFailure: data => ({
    type: Types.OCORRENCIAS_FAILURE,
    payload: { data }
  }),
  ocorrenciasAssuntoRequest: (email, password) => ({
    type: Types.OCORRENCIAS_ASSUNTO_REQUEST,
    payload: { email, password }
  }),
  ocorrenciasAssuntoSuccess: data => ({
    type: Types.OCORRENCIAS_ASSUNTO_SUCCESS,
    payload: { data }
  }),
  ocorrenciasAssuntoFailure: data => ({
    type: Types.OCORRENCIAS_ASSUNTO_FAILURE,
    payload: { data }
  }),
  ocorrenciasStatusRequest: (email, password) => ({
    type: Types.OCORRENCIAS_STATUS_REQUEST,
    payload: { email, password }
  }),
  ocorrenciasStatusSuccess: data => ({
    type: Types.OCORRENCIAS_STATUS_SUCCESS,
    payload: { data }
  }),
  ocorrenciasStatusFailure: data => ({
    type: Types.OCORRENCIAS_STATUS_FAILURE,
    payload: { data }
  }),
  ocorrenciasEncaminhadaRequest: (email, password) => ({
    type: Types.OCORRENCIAS_ENCAMINHADA_REQUEST,
    payload: { email, password }
  }),
  ocorrenciasEncaminhadaSuccess: data => ({
    type: Types.OCORRENCIAS_ENCAMINHADA_SUCCESS,
    payload: { data }
  }),
  ocorrenciasEncaminhadaFailure: data => ({
    type: Types.OCORRENCIAS_ENCAMINHADA_FAILURE,
    payload: { data }
  }),
  ocorrenciasTipoRequest: (email, password) => ({
    type: Types.OCORRENCIAS_TIPO_REQUEST,
    payload: { email, password }
  }),
  ocorrenciasTipoSuccess: data => ({
    type: Types.OCORRENCIAS_TIPO_SUCCESS,
    payload: { data }
  }),
  ocorrenciasTipoFailure: data => ({
    type: Types.OCORRENCIAS_TIPO_FAILURE,
    payload: { data }
  }),
  ocorrenciasTotalRequest: (email, password) => ({
    type: Types.OCORRENCIAS_TOTAL_REQUEST,
    payload: { email, password }
  }),
  ocorrenciasTotalSuccess: data => ({
    type: Types.OCORRENCIAS_TOTAL_SUCCESS,
    payload: { data }
  }),
  ocorrenciasTotalFailure: data => ({
    type: Types.OCORRENCIAS_TOTAL_FAILURE,
    payload: { data }
  }),
  ocorrenciasDetalheRequest: (email, password) => ({
    type: Types.OCORRENCIAS_DETALHE_REQUEST,
    payload: { email, password }
  }),
  ocorrenciasDetalheSuccess: data => ({
    type: Types.OCORRENCIAS_DETALHE_SUCCESS,
    payload: { data }
  }),
  ocorrenciasDetalheFailure: data => ({
    type: Types.OCORRENCIAS_DETALHE_FAILURE,
    payload: { data }
  }),
  ocorrenciasAdicionarRequest: data => ({
    type: Types.OCORRENCIAS_ADICIONAR_REQUEST,
    payload: { data }
  }),
  ocorrenciasAdicionarSuccess: data => ({
    type: Types.OCORRENCIAS_ADICIONAR_SUCCESS,
    payload: { data }
  }),
  ocorrenciasAdicionarFailure: data => ({
    type: Types.OCORRENCIAS_ADICIONAR_FAILURE,
    payload: { data }
  }),
  ocorrenciasAtualizarRequest: data => ({
    type: Types.OCORRENCIAS_ATUALIZAR_REQUEST,
    payload: { data }
  }),
  ocorrenciasAtualizarSuccess: data => ({
    type: Types.OCORRENCIAS_ATUALIZAR_SUCCESS,
    payload: { data }
  }),
  ocorrenciasAtualizarFailure: data => ({
    type: Types.OCORRENCIAS_ATUALIZAR_FAILURE,
    payload: { data }
  })
};
