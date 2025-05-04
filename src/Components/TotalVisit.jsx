import React from "react";

import {
    Card,
    CardBody,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";

const chartConfig = {
    type: "bar",
    height: 350,

    series: [
        {
            name: "Total Visit",
            data: [300, 150, 200, 500, 450, 200],

        },
    ],
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
        stroke: {
            lineCap: "round",
            curve: "smooth",
        },
        markers: {
            size: 0,
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
                    colors: "#bdbcb7",
                    fontSize: "12px",
                    fontFamily: "inherit",
                    fontWeight: 400,
                },
            },
            categories: [
                "Oct",
                "Nov",
                "Dec",
                "Jan",
                "Feb",
                "Mar",
            ],
        },
        yaxis: {
            labels: {
                style: {
                    colors: "#bdbcb7",
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


export default function TotalVisit() {
    return (
        <>
            
            <Card className="rounded-lg">

                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="flex flex-col gap-4 md:flex-row md:items-center  rounded-lg"
                >

                </CardHeader>

                <CardBody className=" rounded-lg bg-gray-900">
                    <div >
                        <blockquote class="text-4xl font-semibold text-gray-100 dark:text-white p-4">
                            <p className=" font-semibold text-gray-300 py-6">Total Visits</p>
                        </blockquote>
                    </div>
                    <Chart {...chartConfig} />
                </CardBody>

            </Card>
        </>
    );
}