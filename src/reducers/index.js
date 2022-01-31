import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";

import estadisticasCovid from "../domain/COVID19/reducers/reducers";

export default combineReducers({
  form: reduxFormReducer,
  estadisticasCovid,
});
