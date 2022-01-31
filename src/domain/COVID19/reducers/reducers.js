import {
  GET_SUMMARY_COVID19,
  GET_SUMMARY_COVID19_EXITO,
  GET_SUMMARY_COVID19_ERROR,
  GET_SUMMARY_COVID19_BY_COUNTRY,
  GET_SUMMARY_COVID19_BY_COUNTRY_EXITO,
  GET_SUMMARY_COVID19_BY_COUNTRY_ERROR,
  SHOW_LOADING,
  HIDE_LOADING,
  SET_NAME_COUNTRY,
  SET_CODE_COUNTRY,
} from "../types";

const initialState = {
  summary: [],
  summaryCountry: [],
  loading: false,
  nameCountry: "",
  codeCountry: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SUMMARY_COVID19:
      return {
        ...state,
        error: false,
      };
    case GET_SUMMARY_COVID19_EXITO:
      return {
        ...state,
        summary: action.payload,
        error: false,
      };
    case GET_SUMMARY_COVID19_ERROR:
      return {
        ...state,
        summary: [],
        error: true,
      };
    case GET_SUMMARY_COVID19_BY_COUNTRY:
      return {
        ...state,
        error: false,
      };
    case GET_SUMMARY_COVID19_BY_COUNTRY_EXITO:
      return {
        ...state,
        summaryCountry: action.payload,
        error: false,
      };
    case GET_SUMMARY_COVID19_BY_COUNTRY_ERROR:
      return {
        ...state,
        summaryCountry: [],
        error: true,
      };
    case GET_SUMMARY_COVID19_BY_COUNTRY_EXITO:
      return {
        ...state,
        summaryCountry: action.payload,
        error: false,
      };
    case SHOW_LOADING:
      return {
        ...state,
        loading: true,
      };
    case HIDE_LOADING:
      return {
        ...state,
        loading: false,
      };
    case SET_CODE_COUNTRY:
      return {
        ...state,
        codeCountry: action.payload,
      };

    case SET_NAME_COUNTRY:
      return {
        ...state,
        nameCountry: action.payload,
      };

    default:
      return state;
  }
}
