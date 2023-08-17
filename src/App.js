import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import skeleton from "./assets/477.gif";

import "./App.css";
import ReportList from "./components/ReportList";
import { addReports } from "./store/reports/reportsActions";
import {
  prevRenderedReports,
  nextRenderedReports,
  showRenderedReports,
} from "./store/renderedReports/renderedReportsActions";
import CustomButton from "./components/CustomButton";
import ErrorPage from "./components/ErrorPage";

function App() {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const allReports = useSelector((state) => state.reports);
  const startIndex = useSelector((state) => state.renderedReports.startIndex);

  const dispatch = useDispatch();
  useEffect(() => {
    setIsLoading(true);
    fetch("https://cloud.iexapis.com/stable/tops?token=MY_TOKEN").then((res) =>
      res
        .json()
        .then((data) => {
          setIsError(false);
          const updatedData = data.map((item, index) => {
            return { ...item, id: index + 1 };
          });
          dispatch(addReports(updatedData));
        })
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false))
    );
  }, []);

  useEffect(() => {
    dispatch(showRenderedReports(allReports));
  }, [allReports]);

  return (
    <div className="App">
      {isError ? (
        <ErrorPage />
      ) : (
        <>
          {isLoading ? <img src={skeleton} /> : <ReportList />}
          <div>
            <CustomButton
              disabled={startIndex === 0 ? true : false}
              variant="dark"
              onClick={() => {
                dispatch(prevRenderedReports(allReports));
              }}
            >
              Prev
            </CustomButton>
            <CustomButton
              variant="dark"
              onClick={() => {
                dispatch(nextRenderedReports(allReports));
              }}
            >
              Next
            </CustomButton>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
