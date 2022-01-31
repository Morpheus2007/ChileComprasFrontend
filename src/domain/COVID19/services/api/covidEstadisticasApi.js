import ApiConfig from "../../../../config/api";

export const getSummaryCovid19 = async () => {
  try {
    const resultado = await ApiConfig.iAxios.get(
      ApiConfig.gatewayChileCompraApi + `/summary`
    );
    return resultado.data;
  } catch (error) {
    console.error("Error", Error);
  }
};
