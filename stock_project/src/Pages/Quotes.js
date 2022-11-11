import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LiveChart from "../components/LiveChart";
import { useGlobalContext } from "../context";
import moment from "moment";
import { useRef } from "react";

const Quotes = () => {
  const { id } = useParams();
  const { parsedData, setChartData, chartData } = useGlobalContext();

  const [loading, setLoading] = useState(true);

  const [index, setIndex] = useState(0);

  const componentsArray = [];

  let res;
  if (id) {
    res = parsedData.find((item) => {
      return item.keyID === id;
    });
  }

  //  ! Fetching Data using Name

  const apiData = async (data) => {
    setLoading(true);
    try {
      let url = `https://prototype.sbulltech.com/api/v2/quotes/${data}`;

      const response = await fetch(url);
      const result = await response.json();

      setChartData(result);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  if (!loading) {
    componentsArray.push(chartData.payload[res.Symbol][0]);
  }

  console.log(chartData);

  useEffect(() => {
    apiData(res.Symbol);
  }, []);

  useEffect(() => {
    if (!loading && index > 0) {
      console.log("value of " + index);
      componentsArray.push(chartData.payload[res.Symbol][index]);
    }
  }, [index]);

  if (loading) {
    return <h2 className="text-center font-bold">Loading....</h2>;
  }

  console.log(componentsArray);

  return (
    <section className=" max-w-screen-xl h-screen  mx-auto ">
      <div className=" max-w-6xl mx-auto h-full flex items-center ">
        <div className="h-auto w-full bg-gray-900  mb-20 text-white p-6 mx-4">
          <h1 className="text-center text-2xl ">{res.Name}</h1>
          <div className="mb-10">
            {componentsArray.map((item, i) => {
              return (
                <StockDataList
                  key={i}
                  setIndex={setIndex}
                  {...item}
                ></StockDataList>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const StockDataList = ({ price, time, valid_till, setIndex }) => {
  const [timeState, setTimeState] = useState("");

  const intervalID = useRef(0);

  const [idx, setIdx] = useState(0);

  var startTime = moment(time).format("HH:mm:ss");

  var currentTime = new Date();

  var index = startTime.indexOf(":");

  var hrs = startTime.substring(0, index);
  var min = startTime.substring(index + 1, index + 3);
  var sec = startTime.substring(index + 4, index + 6);

  currentTime.setHours(hrs);
  currentTime.setMinutes(min);
  currentTime.setSeconds(sec);

  // useEffect(() => {
  //   console.log("Run First time " + idx.current);
  //   setIndex(idx.current);
  // }, []);

  useEffect(() => {
    intervalID.current = setInterval(() => {
      currentTime.setSeconds(currentTime.getSeconds() + 1);

      return setTimeState(JSON.stringify(currentTime.toLocaleString()));
    }, 1000);

    return () => clearInterval(intervalID.current);
  }, []);

  const d = new Date(timeState);
  const lowerTime = moment(d).format("MMMM Do YYYY, h:mm:ss A");
  const upperTime = moment(valid_till).format("MMMM Do YYYY, h:mm:ss A");

  //  ! Checking differnece

  const sTime = moment(d);
  const eTime = moment(valid_till);

  var duration = eTime.diff(sTime, "seconds");

  console.log(duration);

  const stopTime = () => {
    return clearInterval(intervalID.current);
  };

  if (duration === 0) {
    stopTime();
  }

  if (duration === 0) {
    setIndex((old) => old + 1);
  }

  return (
    <div className="flex justify-between items-center h-10 bg-green-500 text-white m-6 p-4">
      <h1> Price : {price.toFixed(2)} </h1>
      <h2> Time : {lowerTime}</h2>
      <h1> Valid Till {upperTime}</h1>
    </div>
  );
};

export default Quotes;
