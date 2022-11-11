// STEP 1 - Include Dependencies

// Include react
import React from "react";
import ReactDOM from "react-dom";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Widgets from "fusioncharts/fusioncharts.widgets";
// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);

const LiveChart = ({ data, symbol }) => {
  const chartConfigs = {
    id: "stockRealTimeChart",
    type: "realtimeline", // The chart type
    width: "700", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      chart: {
        theme: "fusion",
        caption: "Real-time stock price monitor",
        subCaption: "Harry's SuperMart",
        xAxisName: "Time",
        yAxisName: "Stock Price",
        numberPrefix: "$",
        refreshinterval: "1",
        yaxisminvalue: "35",
        yaxismaxvalue: "36",
        numdisplaysets: "10",
        labeldisplay: "rotate",
        showRealTimeValue: "0",
      },
      categories: [
        {
          category: [
            {
              label: "Day Start",
            },
          ],
        },
      ],
      dataset: [
        {
          data: [
            {
              value: "25",
            },
          ],
        },
      ],
    },
    events: {
      initialized: function (e) {
        // function addLeadingZero(num) {
        //   return num <= 9 ? "0" + num : num;
        // }

        // function updateData() {
        //   var chartRef = FusionCharts("stockRealTimeChart"),
        //     currDate = new Date(),
        //     label =
        //       addLeadingZero(currDate.getHours()) +
        //       ":" +
        //       addLeadingZero(currDate.getMinutes()) +
        //       ":" +
        //       addLeadingZero(currDate.getSeconds()),
        //     randomValue = Math.floor(Math.random() * 50) / 100 + 45.15,
        //     strData = "&label=" + label + "&value=" + randomValue;

        //   chartRef.feedData(strData);
        // }

        // var chartRef = FusionCharts("stockRealTimeChart");

        // if (data.payload) {
        //   console.log(data.payload[symbol], symbol);

        //   data.payload[symbol].forEach((item, i) => {
        //     const { price, time } = item;
        //     setTimeout(() => {
        //       console.log(price, time);
        //       let strData = "&label=" + time + "&value=" + price;
        //       chartRef.feedData(strData);
        //     }, i * 2000);
        //   });
        // }

        //  chartRef = FusionCharts("stockRealTimeChart"),

        var myVar = setInterval(function () {}, 1000);
      },
    },
  };

  return <ReactFC {...chartConfigs}></ReactFC>;
};

export default LiveChart;
