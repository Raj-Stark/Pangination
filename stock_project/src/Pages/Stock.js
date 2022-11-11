import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { useGlobalContext } from "../context";

const Stock = () => {
  const { parsedData, query, queryResult } = useGlobalContext();

  let toMapData;

  if (query) {
    toMapData = queryResult;
  } else {
    toMapData = parsedData;
  }

  return (
    <section className=" max-w-screen-2xl mx-auto h-screen ">
      <div className="flex-col justify-center items-center h-full mt-40 px-8  ">
        <SearchBar></SearchBar>
        <div className=" ">
          <div className=" p-6 border-2 border-white bg-gray-900 m-4">
            <div className="flex  justify-between text-green-500 font-bold ">
              <p>Symbol</p>
              <h2>Name</h2>
              <p>Sector</p>
            </div>
          </div>
          <div className="w-full mt-12 h-full ">
            {toMapData.length > 0 ? (
              toMapData.map((item, index) => {
                // const id = new Date().getTime().toString();

                return (
                  <Link key={item.keyID} to={`/quotes/${item.keyID}`}>
                    {<StockItem {...item}></StockItem>}
                  </Link>
                );
              })
            ) : (
              <h2 className="text-center"> No Data Found</h2>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const StockItem = ({ Symbol, Name, Sector }) => {
  return (
    <div className="p-6 border-2 border-white bg-gray-900 m-4">
      <ul className="flex justify-between text-white text-center">
        <li>{Symbol}</li>
        <li>{Name}</li>
        <li>{Sector}</li>
      </ul>
    </div>
  );
};

export default Stock;
