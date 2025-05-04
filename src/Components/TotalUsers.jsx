import React from 'react'
import { Link } from 'react-router-dom'
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'

const users = {
  color: "#8884d8",
  title: "Total Users",
  number: "15.812",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 400 },
  ]
}

function TotalUsers() {
  return (
    <div className='chartBox flex h-[100%]'>
      <div className=' p-2 boxInfo text-white flex flex-[2] flex-col justify-between mr-4'>
        <div className="title font-bold text-xl flex center gap-2 items-center">
          <span >Total<br></br>Users</span>
        </div>
        <h1 className='font-bold text-2xl'>{users.number}</h1>
        <Link to="/" className='text-[#8884d8] hover:underline'>View all</Link>
      </div>

      <div className='chartInfo flex-[3] flex flex-col justify-between'>
        <div className="chart h-[70%] w-[100%]">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={users.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: 'none' }}
                position={{ x: 30, y: 50 }}
              />
              <Line type="monotone" dataKey={users.dataKey} stroke={users.color} strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>


        <div className="texts flex flex-col text-right">
          <span className="percentag font-bold text-2xl" style={{ color: users.percentage > 0 ? "limegreen" : "red" }}>{users.percentage}%</span>
          <span className="text-white duration">this month</span>
        </div>
      </div>
    </div>
  )
}

export default TotalUsers