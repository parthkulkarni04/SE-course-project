import React from "react";
import { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
//Bar Graph showing available stocks of each category every month
const chartConfig = { 
  type: "bar", 
  height: 400, 
  options: { 
    chart: { 
      toolbar: { 
        show: false, 
      }, 
    }, 
    title: { 
      show: "", 
    }, 
    dataLabels: { 
      enabled: false, 
    }, 
    colors: ["#854d0e"], 
    plotOptions: { 
      bar: { 
        columnWidth: "40%", 
        borderRadius: 2, 
      }, 
    }, 
    xaxis: { 
      axisTicks: { 
        show: false, 
      }, 
      axisBorder: { 
        show: false, 
      }, 
      labels: { 
        style: { 
          colors: "#616161", 
          fontSize: "12px", 
          fontFamily: "inherit", 
          fontWeight: 400, 
        }, 
      }, 
    }, 
    yaxis: { 
      labels: { 
        style: { 
          colors: "#616161", 
          fontSize: "12px", 
          fontFamily: "inherit", 
          fontWeight: 400, 
        }, 
      }, 
    }, 
    grid: { 
      show: true, 
      borderColor: "#dddddd", 
      strokeDashArray: 5, 
      xaxis: { 
         lines: { 
          show: false, 
        },
      }, 
        yaxis: { 
          lines: { 
            show: false, 
          }, 
      }, 
      padding: { 
        top: 5, 
        right: 20, 
      }, 
    }, 
    fill: { 
      opacity: 0.8, 
    }, 
    tooltip: { 
      theme: "dark", 
    }, 
  }, 
};

export default function ProductGraph() {
  const [selectedMonth, setSelectedMonth] = useState("Jan"); 
 
  const handleChange = (e) => { 
    setSelectedMonth(e.target.value); 
  }; 
 
  const getDataForMonth = (month) => { 
    switch (month) { 
      case "Jan": 
        return [350, 200, 300, 320, 500, 350]; 
      case "Feb": 
        return [60, 50, 310, 330, 520, 360]; 
      case "Mar": 
        return [55, 45, 305, 325, 505, 355]; 
      case "Apr": 
        return [70, 55, 320, 340, 530, 370]; 
      case "May": 
        return [65, 52, 315, 335, 525, 365]; 
      case "Jun": 
        return [75, 60, 325, 345, 535, 375]; 
      case "Jul": 
        return [80, 65, 330, 350, 540, 380]; 
      case "Aug": 
        return [85, 70, 335, 355, 545, 385]; 
      case "Sep": 
        return [90, 75, 340, 360, 550, 390]; 
      case "Oct": 
        return [95, 80, 345, 365, 555, 395]; 
      case "Nov": 
        return [100, 85, 350, 370, 560, 400]; 
      case "Dec": 
        return [105, 90, 355, 375, 565, 405]; 
      default: 
        return []; 
    } 
  }; 
 
  const updatedChartConfig = { 
    ...chartConfig, 
    series: [ 
      { 
        name: "Sales", 
        data: getDataForMonth(selectedMonth), 
      }, 
    ], 
    options: { 
      ...chartConfig.options, 
      xaxis: { 
        ...chartConfig.options.xaxis, 
        categories: [ 
          "FASHION",
       "FURNITURE",
       "APPLIANCES",
       "ELECTRONICS",
       "STATIONARY",
       "SHOES",
        ], 
      }, 
    }, 
  };
  return (
    <>
      <blockquote class="text-5xl font-semibold text-gray-900 dark:text-white p-4">
        <p className=" font-semibold text-gray-700 py-6">Available Stocks</p>
      </blockquote>
      <Card className="rounded-lg">

        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="flex flex-col gap-4 md:flex-row md:items-center rounded-lg"
        >

        </CardHeader>

        <CardBody className=" rounded-lg bg-gray-800">
          <div >
            <select onChange={handleChange}
              value={selectedMonth}
              class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 cursor-pointer"
              required

            >

              <option value="Jan">January</option>
              <option value="Feb">February</option>
              <option value="Mar">March</option>
              <option value="Apr">April</option>
              <option value="May">May</option>
              <option value="Jun">June</option>
              <option value="Jul">July</option>
              <option value="Aug">August</option>
              <option value="Sep">September</option>
              <option value="Oct">October</option>
              <option value="Nov">November</option>
              <option value="Dec">December</option>
            </select>
          </div>
          <Chart {...updatedChartConfig} />
        </CardBody>

      </Card>
    </>
  );
}