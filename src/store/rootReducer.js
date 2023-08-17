import { combineReducers } from "redux";
import { reportsReducer } from "./reports/reportsReducer";
import { renderedReportsReducer } from "./renderedReports/renderedReportsReducer";

export const rootReducer = combineReducers({
  reports: reportsReducer,
  renderedReports: renderedReportsReducer,
});
