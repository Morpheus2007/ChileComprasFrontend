import {
  GET_SUMMARY_COVID19,
  GET_SUMMARY_COVID19_EXITO,
  GET_SUMMARY_COVID19_ERROR,
  GET_SUMMARY_COVID19_BY_COUNTRY,
  GET_SUMMARY_COVID19_BY_COUNTRY_EXITO,
  GET_SUMMARY_COVID19_BY_COUNTRY_ERROR,
  HIDE_LOADING,
  SHOW_LOADING,
  SET_CODE_COUNTRY,
  SET_NAME_COUNTRY,
} from "../types/index";
import ApiConfig from "../../../config/api";

export function getSummaryCovid19Action() {
  return async (dispatch) => {
    dispatch(getSummary());
    dispatch(showLoading(true));
    dispatch(getSummaryByCountryExito([]));
    await ApiConfig.iAxios
      .get(`${ApiConfig.gatewayChileCompraApi}`)
      .then((response) => {
        if (response.status == 200) {
          dispatch(getSummaryExito(response.data));
        } else {
          dispatch(getSummaryByCountryExito([]));
        }
      })
      .catch((errorSummary) => {
        dispatch(getSummaryError(errorSummary));
      });
    dispatch(hideLoading(false));
  };
}

const getSummary = () => ({
  type: GET_SUMMARY_COVID19,
  payload: true,
});

const getSummaryExito = (summary) => ({
  type: GET_SUMMARY_COVID19_EXITO,
  payload: summary,
});

const getSummaryError = () => ({
  type: GET_SUMMARY_COVID19_ERROR,
  payload: true,
});

export function getSummaryCovid19ByCountryAction(countryName) {
  return async (dispatch) => {
    dispatch(showLoading(true));
    dispatch(getSummaryByCountry());
    dispatch(getSummaryByCountryExito([]));
    dispatch(setCodeCountry(""));
    dispatch(setNameCountry(""));
    await ApiConfig.iAxios
      .get(`${ApiConfig.gatewayChileCompraApi}/${countryName}`)
      .then((response) => {
        if (response.status == 200) {
          dispatch(getSummaryByCountryExito(response.data));
          dispatch(setCodeCountry(response.data[0].CountryCode));
          dispatch(setNameCountry(countryName));
        } else {
          dispatch(getSummaryByCountryExito([]));
          dispatch(setCodeCountry(""));
          dispatch(setNameCountry(""));
        }
      })
      .catch((errorSummary) => {
        dispatch(getSummaryByCountryError(errorSummary));
      });
    dispatch(hideLoading(false));
  };
}

const getSummaryByCountry = () => ({
  type: GET_SUMMARY_COVID19_BY_COUNTRY,
  payload: true,
});

const getSummaryByCountryExito = (summaryCountry) => ({
  type: GET_SUMMARY_COVID19_BY_COUNTRY_EXITO,
  payload: summaryCountry,
});

const getSummaryByCountryError = () => ({
  type: GET_SUMMARY_COVID19_BY_COUNTRY_ERROR,
  payload: true,
});

const showLoading = (loading) => ({
  type: SHOW_LOADING,
  payload: loading,
});

const hideLoading = (loading) => ({
  type: HIDE_LOADING,
  payload: loading,
});

const setNameCountry = (nameCountry) => ({
  type: SET_NAME_COUNTRY,
  payload: nameCountry,
});

const setCodeCountry = (codeCountry) => ({
  type: SET_CODE_COUNTRY,
  payload: codeCountry,
});
