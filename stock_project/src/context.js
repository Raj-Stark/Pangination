import React, { useEffect, useState } from "react";
import csvFile from "./stock.csv";
import Papa from "papaparse";

import { stockData } from "./data";
import { data } from "autoprefixer";

const StockContext = React.createContext();

const StockProvider = ({ children }) => {
  const [parsedData, setParsedData] = useState([]);
  const [query, setQuery] = useState("");
  const [queryResult, setQueryResult] = useState([]);
  const [chartData, setChartData] = useState([]);

  //  ! Modify Data

  const modifyExisitingData = (data) => {
    const newData = data.map((item) => {
      const uuid = require("uuid");

      const uniqueId = uuid.v4();

      return { keyID: uniqueId, ...item };
    });

    setParsedData(newData);
  };

  const parseCSV = (file) => {
    Papa.parse(file, {
      header: true,
      download: true,
      skipEmptyLines: true,

      // step: function (results, parser) {
      //   console.log("Row data:", results.data);
      //   parser.abort();
      // },
      complete: function (results) {
        if (results.data) {
          modifyExisitingData(results.data);
        }
      },
    });
  };

  //  ! Search Function
  const keys = ["Symbol", "Name"];

  const searchData = (data) => {
    const res = data.filter((item) => {
      return keys.some((key) => item[key].toLowerCase().includes(query));
    });

    setQueryResult(res);
  };

  //  ! Use Effetcs

  useEffect(() => {
    parseCSV(csvFile);
  }, []);

  useEffect(() => {
    searchData(parsedData);
  }, [query]);

  return (
    <StockContext.Provider
      value={{
        parsedData,
        query,
        setQuery,
        queryResult,
        chartData,
        setChartData,
      }}
    >
      {children}
    </StockContext.Provider>
  );
};

const useGlobalContext = () => {
  return React.useContext(StockContext);
};

export { useGlobalContext, StockContext, StockProvider };
