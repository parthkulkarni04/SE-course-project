import React from 'react'
import { Link } from 'react-router-dom'
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'

const revenue = {
  color: " #00FFFF",
  title: "Total Revenue",
  number: "$67.98",
  dataKey: "revenue",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 400 },
  ]
}

function TotalRevenue() {
  return (
    <div className='chartBox flex h-[100%]'>
      <div className=' p-2 boxInfo text-white flex flex-[2] flex-col justify-between mr-4'>
        <div className="title font-bold text-xl flex center gap-2 items-center">
          <span >Total Revenue</span>
        </div>
        <h1 className='font-bold text-2xl'>{revenue.number}</h1>
        <Link to="/" className='text-[#00FFFF] hover:underline'>View all</Link>
      </div>

      <div className='chartInfo flex-[3] flex flex-col justify-between'>
        <div className="chart h-[70%] w-[100%]">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={revenue.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: 'none' }}
                position={{ x: 30, y: 50 }}
              />
              <Line type="monotone" dataKey={revenue.dataKey} stroke={revenue.color} strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        

        <div className="texts flex flex-col text-right">
          <span className="percentag font-bold text-2xl" style={{ color: revenue.percentage > 0 ? "limegreen" : "red" }}>{revenue.percentage}%</span>
          <span className="text-white duration">this month</span>
        </div>
      </div>
    </div>
  )
}

export default TotalRevenue