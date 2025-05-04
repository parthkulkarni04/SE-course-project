import React from 'react'
import { Link } from 'react-router-dom'
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'

const ratio = {
  color: "#a18b2a",
  title: "Total Ratio",
  number: "3.5",
  dataKey: "ratio",
  percentage: 15,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 400 },
  ]
}

function TotalRatio() {
  return (
    <div className='chartBox flex h-[100%]'>
      <div className=' p-2 boxInfo text-white flex flex-[2] flex-col justify-between mr-4'>
        <div className="title font-bold text-xl flex center gap-2 items-center">
          <span >Total<br></br> Ratio</span>
        </div>
        <h1 className='font-bold text-2xl'>{ratio.number}</h1>
        <Link to="/" className='text-[#a18b2a] hover:underline'>View all</Link>
      </div>

      <div className='chartInfo flex-[3] flex flex-col justify-between'>
        <div className="chart h-[70%] w-[100%]">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={ratio.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: 'none' }}
                position={{ x: 30, y: 50 }}
              />
              <Line type="monotone" dataKey={ratio.dataKey} stroke={ratio.color} strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        

        <div className="texts flex flex-col text-right">
          <span className="percentag font-bold text-2xl" style={{ color: ratio.percentage > 0 ? "limegreen" : "red" }}>{ratio.percentage}%</span>
          <span className="text-white duration">this month</span>
        </div>
      </div>
    </div>
  )
}

export default TotalRatio