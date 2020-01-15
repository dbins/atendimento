/**
 * Types & Creators
 */

export const Types = {
  CARRINHO_REQUEST: "carrinho/CARRINHO_REQUEST",
  CARRINHO_SUCCESS: "carrinho/CARRINHO_SUCCESS",
  CARRINHO_FAILURE: "carrinho/CARRINHO_FAILURE",
  CARRINHO_ENDERECO_REQUEST: "carrinho/CARRINHO_ENDERECO_REQUEST",
  CARRINHO_ENDERECO_SUCCESS: "carrinho/CARRINHO_ENDERECO_SUCCESS",
  CARRINHO_ENDERECO_FAILURE: "carrinho/CARRINHO_ENDERECO_FAILURE"
};

/**
 * Initial State
 */
export const INITIAL_STATE = {
  data: [],
  endereco: {},
  error: false,
  loading: false
};

export default function carrinho(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CARRINHO_REQUEST:
      return {
        ...state
      };
    case Types.CARRINHO_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        error: false,
        loading: false
      };
    case Types.CARRINHO_FAILURE:
      return {
        ...state,
        data: [],
        error: true,
        loading: false
      };
    case Types.CARRINHO_ENDERECO_REQUEST:
      return {
        ...state
      };
    case Types.CARRINHO_ENDERECO_SUCCESS:
      return {
        ...state,
        endereco: action.payload.data,
        error: false,
        loading: false
      };
    case Types.CARRINHO_ENDERECO_FAILURE:
      return {
        ...state,
        endereco: {},
        error: true,
        loading: false
      };
    default:
      return state;
  }
}

export const Creators = {
  carrinhoRequest: usuario => ({
    type: Types.CARRINHO_REQUEST,
    payload: usuario
  }),
  carrinhoSuccess: data => ({
    type: Types.CARRINHO_SUCCESS,
    payload: { data }
  }),
  carrinhoFailure: data => ({
    type: Types.CARRINHO_FAILURE,
    payload: { data }
  }),
  carrinhoEnderecoRequest: usuario => ({
    type: Types.CARRINHO_ENDERECO_REQUEST,
    payload: usuario
  }),
  carrinhoEnderecoSuccess: data => ({
    type: Types.CARRINHO_ENDERECO_SUCCESS,
    payload: { data }
  }),
  carrinhoEnderecoFailure: data => ({
    type: Types.CARRINHO_ENDERECO_FAILURE,
    payload: { data }
  })
};
