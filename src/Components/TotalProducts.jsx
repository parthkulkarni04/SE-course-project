import React from 'react'
import { Link } from 'react-router-dom'
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'

const products = {
  color: "#454196",
  title: "Total Products",
  number: "320",
  dataKey: "products",
  percentage: 30,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 400 },
  ]
}

function TotalProducts() {
  return (
    <div className='chartBox flex h-[100%]'>
      <div className=' p-2 boxInfo text-white flex flex-[2] flex-col justify-between mr-4'>
        <div className="title font-bold text-xl flex center gap-2 items-center">
          <span >Total Products</span>
        </div>
        <h1 className='font-bold text-2xl'>{products.number}</h1>
        <Link to="/" className='text-[#454196] hover:underline'>View all</Link>
      </div>

      <div className='chartInfo flex-[3] flex flex-col justify-between'>
        <div className="chart h-[70%] w-[100%]">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={products.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: 'none' }}
                position={{ x: 30, y: 50 }}
              />
              <Line type="monotone" dataKey={products.dataKey} stroke={products.color} strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        

        <div className="texts flex flex-col text-right">
          <span className="percentage font-bold text-2xl" style={{ color: products.percentage > 0 ? "limegreen" : "red" }}>{products.percentage}%</span>
          <span className="text-white duration">this month</span>
        </div>
      </div>
    </div>
  )
}

export default TotalProducts